import { randomUUID } from 'node:crypto'
import db from '../utils/db'

/**
 * 新建权限
 * Body:
 * - name: string，权限名称（必填）
 * - code: string，权限编码（必填，唯一）
 * - type: string，权限类型（1/2/3，默认 1）
 * - resource?: string，资源路径
 * - method?: string，HTTP 方法
 * - description?: string
 * - parentId?: string
 * - status?: string（默认 1）
 * - sort?: number（默认 0）
 *
 * Response:
 * {
 *   ok: true,
 *   id: string
 * }
 */
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const name = typeof body.name === 'string' ? body.name.trim() : ''
  const code = typeof body.code === 'string' ? body.code.trim() : ''

  if (!name || !code) {
    throw createError({ statusCode: 400, statusMessage: '权限名称和编码不能为空' })
  }

  const exists = await db('permission').select('id').where({ code }).first()
  if (exists) {
    throw createError({ statusCode: 409, statusMessage: '权限编码已存在' })
  }

  const id = randomUUID().replace(/-/g, '')

  await db('permission').insert({
    id,
    name,
    code,
    type: body.type || '1',
    resource: body.resource || null,
    method: body.method || null,
    description: body.description || null,
    parentId: body.parentId || null,
    status: body.status || '1',
    sort: Number.isFinite(body.sort) ? Number(body.sort) : 0
  })

  return { ok: true, id }
})
