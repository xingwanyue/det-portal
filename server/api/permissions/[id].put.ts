import db from '../../utils/db'

/**
 * 更新权限
 * Params:
 * - id: string，权限 ID
 * Body:
 * - name?: string
 * - code?: string
 * - type?: string
 * - resource?: string
 * - method?: string
 * - description?: string
 * - parentId?: string
 * - status?: string
 * - sort?: number
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

  const body = await readBody(event)
  const payload: Record<string, unknown> = {}

  if (typeof body.name === 'string' && body.name.trim()) payload.name = body.name.trim()
  if (typeof body.code === 'string' && body.code.trim()) payload.code = body.code.trim()
  if (typeof body.type === 'string') payload.type = body.type
  if (typeof body.resource === 'string') payload.resource = body.resource.trim()
  if (typeof body.method === 'string') payload.method = body.method.trim()
  if (typeof body.description === 'string') payload.description = body.description.trim()
  if (typeof body.parentId === 'string') payload.parentId = body.parentId
  if (typeof body.status === 'string') payload.status = body.status
  if (body.sort !== undefined) payload.sort = Number(body.sort)

  if (Object.keys(payload).length === 0) {
    throw createError({ statusCode: 400, statusMessage: '没有可更新的字段' })
  }

  const updated = await db('permission').where({ id }).update(payload)
  if (!updated) {
    throw createError({ statusCode: 404, statusMessage: '权限不存在' })
  }

  return { ok: true }
})
