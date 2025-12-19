import { randomUUID } from 'node:crypto'
import db from '../utils/db'

/**
 * 新建角色
 * Body:
 * - name: string，角色名称（必填）
 * - code: string，角色编码（必填，唯一）
 * - description?: string
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
    throw createError({ statusCode: 400, statusMessage: '角色名称和编码不能为空' })
  }

  const exists = await db('role').select('id').where({ code }).first()
  if (exists) {
    throw createError({ statusCode: 409, statusMessage: '角色编码已存在' })
  }

  const id = randomUUID().replace(/-/g, '')

  await db('role').insert({
    id,
    name,
    code,
    description: body.description || null,
    status: body.status || '1',
    sort: Number.isFinite(body.sort) ? Number(body.sort) : 0
  })

  return { ok: true, id }
})
