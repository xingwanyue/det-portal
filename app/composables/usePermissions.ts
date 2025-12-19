export interface PermissionItem {
  id: string
  name?: string
  code?: string
  type?: string
  resource?: string
  method?: string
  parentId?: string | null
  status?: string
  sort?: number
}

export const usePermissions = () => {
  const permissions = useState<PermissionItem[]>('permissions', () => [])
  const loaded = useState<boolean>('permissionsLoaded', () => false)
  const { $authFetch } = useNuxtApp()

  const load = async () => {
    if (!process.client) return
    const token = localStorage.getItem('token')
    if (!token) {
      permissions.value = []
      loaded.value = false
      return
    }
    try {
      const response = await $authFetch('/api/me/permissions')
      permissions.value = Array.isArray(response?.data) ? response.data : []
      loaded.value = true
    } catch (error) {
      permissions.value = []
      loaded.value = false
    }
  }

  return {
    permissions,
    loaded,
    load
  }
}
