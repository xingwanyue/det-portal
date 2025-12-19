import db from '../utils/db'

/**
 * 角色列表
 * Query:
 * - page: number，页码，默认 1
 * - pageSize: number，每页数量，默认 20
 * - keyword: string，模糊搜索（name / code）
 * - status: string，状态（1/0）
 *
 * Response:
 * {
 *   ok: true,
 *   data: Array<Role>,
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

  const baseQuery = db('role')
    .select(['id', 'name', 'code', 'description', 'status', 'sort', 'createTime', 'updateTime'])

  if (keyword) {
    baseQuery.where((builder) => {
      builder.where('name', 'like', `%${keyword}%`).orWhere('code', 'like', `%${keyword}%`)
    })
  }
  if (status) baseQuery.andWhere('status', status)

  const [{ count }] = await db('role')
    .count<{ count: string }[]>({ count: '*' })
    .modify((builder) => {
      if (keyword) {
        builder.where((inner) => {
          inner.where('name', 'like', `%${keyword}%`).orWhere('code', 'like', `%${keyword}%`)
        })
      }
      if (status) builder.andWhere('status', status)
    })

  const data = await baseQuery
    .orderBy('sort', 'asc')
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
