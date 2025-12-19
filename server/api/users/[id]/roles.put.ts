import { randomUUID } from 'node:crypto'
import db from '../../../utils/db'

/**
 * 设置用户角色（全量覆盖）
 * Params:
 * - id: string，用户 ID
 * Body:
 * - roleIds: string[]，角色 ID 列表
 *
 * Response:
 * {
 *   ok: true
 * }
 */
export default defineEventHandler(async (event) => {
  const userId = event.context.params?.id
  if (!userId) {
    throw createError({ statusCode: 400, statusMessage: '用户 ID 不能为空' })
  }

  const body = await readBody(event)
  const roleIds = Array.isArray(body.roleIds) ? body.roleIds.filter(Boolean) : []

  await db().transaction(async (trx) => {
    await trx('user_role').where({ userId }).del()
    if (roleIds.length) {
      const rows = roleIds.map((roleId: string) => ({
        id: randomUUID().replace(/-/g, ''),
        userId,
        roleId
      }))
      await trx('user_role').insert(rows)
    }
  })

  return { ok: true }
})
