import db from '../../../utils/db'

/**
 * 获取角色权限
 * Params:
 * - id: string，角色 ID
 *
 * Response:
 * {
 *   ok: true,
 *   data: Array<Permission>
 * }
 */
export default defineEventHandler(async (event) => {
  const roleId = event.context.params?.id
  if (!roleId) {
    throw createError({ statusCode: 400, statusMessage: '角色 ID 不能为空' })
  }

  const data = await db('permission as p')
    .select([
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
    .where('rp.roleId', roleId)

  return { ok: true, data }
})
