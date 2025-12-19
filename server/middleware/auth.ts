import { verifyJwt } from '../utils'

export default defineEventHandler((event) => {
  const path = event.path || ''
  if (!path.startsWith('/api') || path.startsWith('/api/login')) {
    return
  }

  const authorization = getHeader(event, 'authorization') || ''
  const token = authorization.startsWith('Bearer ')
    ? authorization.slice(7).trim()
    : authorization.trim()

  if (!token) {
    throw createError({ statusCode: 401, statusMessage: '缺少授权信息' })
  }

  const payload = verifyJwt(token)
  if (!payload || typeof payload.userId !== 'string') {
    throw createError({ statusCode: 401, statusMessage: '无效的授权信息' })
  }

  event.context.userId = payload.userId
})
