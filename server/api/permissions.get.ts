import db from '../utils/db'

/**
 * 权限列表
 * Query:
 * - page: number，页码，默认 1
 * - pageSize: number，每页数量，默认 20
 * - keyword: string，模糊搜索（name / code）
 * - type: string，权限类型（1/2/3）
 * - status: string，状态（1/0）
 * - parentId: string，父级权限 ID
 *
 * Response:
 * {
 *   ok: true,
 *   data: Array<Permission>,
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
  const parentId = typeof query.parentId === 'string' ? query.parentId : ''

  const baseQuery = db('permission')
    .select([
      'id',
      'name',
      'code',
      'type',
      'resource',
      'method',
      'description',
      'parentId',
      'status',
      'sort',
      'createTime',
      'updateTime'
    ])

  if (keyword) {
    baseQuery.where((builder) => {
      builder.where('name', 'like', `%${keyword}%`).orWhere('code', 'like', `%${keyword}%`)
    })
  }
  if (status) baseQuery.andWhere('status', status)
  if (type) baseQuery.andWhere('type', type)
  if (parentId) baseQuery.andWhere('parentId', parentId)

  const [{ count }] = await db('permission')
    .count<{ count: string }[]>({ count: '*' })
    .modify((builder) => {
      if (keyword) {
        builder.where((inner) => {
          inner.where('name', 'like', `%${keyword}%`).orWhere('code', 'like', `%${keyword}%`)
        })
      }
      if (status) builder.andWhere('status', status)
      if (type) builder.andWhere('type', type)
      if (parentId) builder.andWhere('parentId', parentId)
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
