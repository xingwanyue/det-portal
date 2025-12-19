import db from '../../utils/db'

/**
 * 用户详情
 * Params:
 * - id: string，用户 ID
 *
 * Response:
 * {
 *   ok: true,
 *   data: User | null
 * }
 */
export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: '用户 ID 不能为空' })
  }

  const data = await db('user')
    .select([
      'id',
      'username',
      'nickname',
      'avatar',
      'status',
      'type',
      'ip',
      'activeTime',
      'createTime',
      'updateTime'
    ])
    .where({ id })
    .first()

  return { ok: true, data: data || null }
})
