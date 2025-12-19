import db from '../../utils/db'

/**
 * 删除用户
 * Params:
 * - id: string，用户 ID
 *
 * Response:
 * {
 *   ok: true
 * }
 */
export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: '用户 ID 不能为空' })
  }

  const deleted = await db('user').where({ id }).del()
  if (!deleted) {
    throw createError({ statusCode: 404, statusMessage: '用户不存在' })
  }

  return { ok: true }
})
