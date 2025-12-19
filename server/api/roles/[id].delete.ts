import db from '../../utils/db'

/**
 * 删除角色
 * Params:
 * - id: string，角色 ID
 *
 * Response:
 * {
 *   ok: true
 * }
 */
export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: '角色 ID 不能为空' })
  }

  const deleted = await db('role').where({ id }).del()
  if (!deleted) {
    throw createError({ statusCode: 404, statusMessage: '角色不存在' })
  }

  return { ok: true }
})
