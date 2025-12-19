export default defineNuxtPlugin(() => {
  const authFetch = $fetch.create({
    onRequest({ options }) {
      if (!process.client) return
      const token = localStorage.getItem('token')
      if (!token) return
      const headers = new Headers(options.headers || {})
      headers.set('authorization', `Bearer ${token}`)
      options.headers = headers
    }
  })

  return {
    provide: {
      authFetch
    }
  }
})
