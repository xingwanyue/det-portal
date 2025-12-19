import { randomUUID } from 'node:crypto'
import db from '../utils/db'
import { generatePw, generateSalt } from '../utils'

/**
 * 新建用户
 * Body:
 * - email: string，登录邮箱（必填）
 * - password: string，明文密码（必填）
 * - nickname?: string，昵称
 * - avatar?: string，头像 URL
 * - status?: string，状态（默认 1）
 * - type?: string，类型（默认 1）
 *
 * Response:
 * {
 *   ok: true,
 *   id: string
 * }
 */
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const email = typeof body.email === 'string' ? body.email.trim() : ''
  const password = typeof body.password === 'string' ? body.password.trim() : ''

  if (!email || !password) {
    throw createError({ statusCode: 400, statusMessage: '邮箱和密码不能为空' })
  }

  const exists = await db('user').select('id').where({ email }).first()
  if (exists) {
    throw createError({ statusCode: 409, statusMessage: '邮箱已存在' })
  }

  const salt = generateSalt()
  const encrypted = generatePw(password, salt)
  const id = randomUUID().replace(/-/g, '')

  await db('user').insert({
    id,
    email,
    password: encrypted,
    salt,
    nickname: body.nickname || null,
    avatar: body.avatar || null,
    status: body.status || '1',
    type: body.type || '1'
  })

  return { ok: true, id }
})
