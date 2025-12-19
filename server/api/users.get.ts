import db from '../utils/db'

/**
 * 用户列表
 * Query:
 * - page: number，页码，默认 1
 * - pageSize: number，每页数量，默认 20
 * - keyword: string，模糊搜索（email / nickname）
 * - status: string，状态（1/0/2）
 * - type: string，类型（1/2）
 *
 * Response:
 * {
 *   ok: true,
 *   data: Array<User>,
 *   total: number,
 *   page: number,
 *   pageSize: number
 * }
 */
export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const page = Math.max(1, Number(query.page || 1))
  const pageSize = Math.max(1, Number(query.pageSize || 20))
  const keyword = typeof query.keyword === 'string' ? query.keyword.trim() : ''
  const status = typeof query.status === 'string' ? query.status : ''
  const type = typeof query.type === 'string' ? query.type : ''

  const baseQuery = db('user')
    .select([
      'id',
      'email',
      'nickname',
      'avatar',
      'status',
      'type',
      'ip',
      'activeTime',
      'createTime',
      'updateTime'
    ])

  if (keyword) {
    baseQuery.where((builder) => {
      builder.where('email', 'like', `%${keyword}%`).orWhere('nickname', 'like', `%${keyword}%`)
    })
  }
  if (status) baseQuery.andWhere('status', status)
  if (type) baseQuery.andWhere('type', type)

  const [{ count }] = await db('user')
    .count<{ count: string }[]>({ count: '*' })
    .modify((builder) => {
      if (keyword) {
        builder.where((inner) => {
          inner.where('email', 'like', `%${keyword}%`).orWhere('nickname', 'like', `%${keyword}%`)
        })
      }
      if (status) builder.andWhere('status', status)
      if (type) builder.andWhere('type', type)
    })

  const data = await baseQuery
    .orderBy('createTime', 'desc')
    .limit(pageSize)
    .offset((page - 1) * pageSize)

  return {
    ok: true,
    data,
    total: Number(count || 0),
    page,
    pageSize
  }
})
