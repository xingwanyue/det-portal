import db from '../../utils/db'

/**
 * 获取当前登录用户的权限列表
 * Header:
 * - Authorization: Bearer <token>
 *
 * Response:
 * {
 *   ok: true,
 *   data: Array<Permission>
 * }
 */
export default defineEventHandler(async (event) => {
  const userId = event.context.userId
  if (!userId) {
    throw createError({ statusCode: 401, statusMessage: '未登录' })
  }

  const data = await db('permission as p')
    .distinct([
      'p.id',
      'p.name',
      'p.code',
      'p.type',
      'p.resource',
      'p.method',
      'p.parentId',
      'p.status',
      'p.sort'
    ])
    .join('role_permission as rp', 'rp.permissionId', 'p.id')
    .join('user_role as ur', 'ur.roleId', 'rp.roleId')
    .join('user as u', 'u.id', 'ur.userId')
    .where('ur.userId', userId)
    .andWhere('u.status', '1')
    .andWhere('p.status', '1')
    .orderBy('p.sort', 'asc')

  return { ok: true, data }
})
