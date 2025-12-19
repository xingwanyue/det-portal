import db from '../../utils/db'
import { generatePw, generateSalt } from '../../utils'

/**
 * 更新用户
 * Params:
 * - id: string，用户 ID
 * Body:
 * - email?: string，邮箱
 * - password?: string，明文密码（如传入会重新生成 salt）
 * - nickname?: string
 * - avatar?: string
 * - status?: string
 * - type?: string
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

  const body = await readBody(event)
  const payload: Record<string, unknown> = {}

  if (typeof body.email === 'string' && body.email.trim()) {
    payload.email = body.email.trim()
  }
  if (typeof body.nickname === 'string') payload.nickname = body.nickname.trim()
  if (typeof body.avatar === 'string') payload.avatar = body.avatar.trim()
  if (typeof body.status === 'string') payload.status = body.status
  if (typeof body.type === 'string') payload.type = body.type

  if (typeof body.password === 'string' && body.password.trim()) {
    const salt = generateSalt()
    payload.salt = salt
    payload.password = generatePw(body.password.trim(), salt)
  }

  if (Object.keys(payload).length === 0) {
    throw createError({ statusCode: 400, statusMessage: '没有可更新的字段' })
  }

  const updated = await db('user').where({ id }).update(payload)
  if (!updated) {
    throw createError({ statusCode: 404, statusMessage: '用户不存在' })
  }

  return { ok: true }
})
