import db from '../../../utils/db'

/**
 * 获取用户角色
 * Params:
 * - id: string，用户 ID
 *
 * Response:
 * {
 *   ok: true,
 *   data: Array<Role>
 * }
 */
export default defineEventHandler(async (event) => {
  const userId = event.context.params?.id
  if (!userId) {
    throw createError({ statusCode: 400, statusMessage: '用户 ID 不能为空' })
  }

  const data = await db('role as r')
    .select(['r.id', 'r.name', 'r.code', 'r.description', 'r.status', 'r.sort'])
    .join('user_role as ur', 'ur.roleId', 'r.id')
    .where('ur.userId', userId)

  return { ok: true, data }
})
