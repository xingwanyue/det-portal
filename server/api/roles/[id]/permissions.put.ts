import { randomUUID } from 'node:crypto'
import db from '../../../utils/db'

/**
 * 设置角色权限（全量覆盖）
 * Params:
 * - id: string，角色 ID
 * Body:
 * - permissionIds: string[]，权限 ID 列表
 *
 * Response:
 * {
 *   ok: true
 * }
 */
export default defineEventHandler(async (event) => {
  const roleId = event.context.params?.id
  if (!roleId) {
    throw createError({ statusCode: 400, statusMessage: '角色 ID 不能为空' })
  }

  const body = await readBody(event)
  const permissionIds = Array.isArray(body.permissionIds) ? body.permissionIds.filter(Boolean) : []

  await db.transaction(async (trx) => {
    await trx('role_permission').where({ roleId }).del()
    if (permissionIds.length) {
      const rows = permissionIds.map((permissionId: string) => ({
        id: randomUUID().replace(/-/g, ''),
        roleId,
        permissionId
      }))
      await trx('role_permission').insert(rows)
    }
  })

  return { ok: true }
})
