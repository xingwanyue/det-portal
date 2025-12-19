import db from '../../utils/db'

/**
 * 删除权限
 * Params:
 * - id: string，权限 ID
 *
 * Response:
 * {
 *   ok: true
 * }
 */
export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: '权限 ID 不能为空' })
  }

  const deleted = await db('permission').where({ id }).del()
  if (!deleted) {
    throw createError({ statusCode: 404, statusMessage: '权限不存在' })
  }

  return { ok: true }
})
