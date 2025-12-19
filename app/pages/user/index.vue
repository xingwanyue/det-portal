<template>
  <div class="space-y-8">
    <section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">
            用户管理
          </p>
          <h2 class="mt-2 text-xl font-semibold text-slate-900">用户列表</h2>
        </div>
        <div class="flex flex-wrap items-center gap-3">
            <input
              v-model.trim="filters.keyword"
              type="text"
              placeholder="搜索用户名或昵称"
            class="w-56 rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          />
          <select
            v-model="filters.status"
            class="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          >
            <option value="">全部状态</option>
            <option value="1">启用</option>
            <option value="0">禁用</option>
            <option value="2">锁定</option>
          </select>
          <select
            v-model="filters.type"
            class="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          >
            <option value="">全部类型</option>
            <option value="1">普通用户</option>
            <option value="2">管理员</option>
          </select>
          <button
            class="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
          >
            查询
          </button>
        </div>
      </div>

      <div class="mt-6 overflow-hidden rounded-2xl border border-slate-200">
        <table class="w-full text-left text-sm">
          <thead
            class="bg-slate-100 text-xs uppercase tracking-[0.2em] text-slate-500"
          >
            <tr>
              <th class="px-4 py-3">用户名</th>
              <th class="px-4 py-3">昵称</th>
              <th class="px-4 py-3">类型</th>
              <th class="px-4 py-3">状态</th>
              <th class="px-4 py-3">最近活跃</th>
              <th class="px-4 py-3">创建时间</th>
              <th class="px-4 py-3 text-right">操作</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200">
            <tr v-for="user in users" :key="user.id" class="bg-white">
              <td class="px-4 py-4">
                <p class="font-medium text-slate-900">{{ user.username }}</p>
                <p class="mt-1 text-xs text-slate-500">ID: {{ user.id }}</p>
              </td>
              <td class="px-4 py-4 text-slate-700">
                {{ user.nickname || "-" }}
              </td>
              <td class="px-4 py-4">
                <span
                  class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                >
                  {{ user.type === "2" ? "管理员" : "普通用户" }}
                </span>
              </td>
              <td class="px-4 py-4">
                <span
                  class="rounded-full px-3 py-1 text-xs font-semibold"
                  :class="statusClass(user.status)"
                >
                  {{ statusText(user.status) }}
                </span>
              </td>
              <td class="px-4 py-4 text-slate-600">
                {{ user.activeTime || "-" }}
              </td>
              <td class="px-4 py-4 text-slate-600">{{ user.createTime }}</td>
              <td class="px-4 py-4 text-right">
                <button
                  class="text-sm font-medium text-slate-700 hover:text-slate-900"
                  @click="openRoleEditor(user)"
                >
                  编辑角色
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="mt-4 flex items-center justify-between text-sm text-slate-600"
      >
        <span>共 {{ users.length }} 条</span>
        <div class="flex items-center gap-2">
          <button class="rounded-lg border border-slate-200 px-3 py-1">
            上一页
          </button>
          <button class="rounded-lg border border-slate-200 px-3 py-1">
            下一页
          </button>
        </div>
      </div>
    </section>

    <section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">
            新建用户
          </p>
          <h2 class="mt-2 text-xl font-semibold text-slate-900">添加账户</h2>
        </div>
        <span
          class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
          >表单</span
        >
      </div>

      <form class="mt-6 grid gap-4 lg:grid-cols-2">
        <label class="block text-sm font-medium text-slate-700">
          用户名
          <input
            type="text"
            placeholder="请输入用户名"
            class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          />
        </label>
        <label class="block text-sm font-medium text-slate-700">
          密码
          <input
            type="password"
            placeholder="至少 8 位"
            class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          />
        </label>
        <label class="block text-sm font-medium text-slate-700">
          昵称
          <input
            type="text"
            placeholder="用户显示名"
            class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          />
        </label>
        <label class="block text-sm font-medium text-slate-700">
          头像 URL
          <input
            type="text"
            placeholder="https://..."
            class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          />
        </label>
        <label class="block text-sm font-medium text-slate-700">
          用户类型
          <select
            class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          >
            <option value="1">普通用户</option>
            <option value="2">管理员</option>
          </select>
        </label>
        <label class="block text-sm font-medium text-slate-700">
          状态
          <select
            class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          >
            <option value="1">启用</option>
            <option value="0">禁用</option>
            <option value="2">锁定</option>
          </select>
        </label>
        <label class="block text-sm font-medium text-slate-700 lg:col-span-2">
          备注
          <textarea
            rows="3"
            placeholder="可选：添加用户说明"
            class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          ></textarea>
        </label>
        <div class="lg:col-span-2 flex justify-end">
          <button
            type="button"
            class="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            创建用户
          </button>
        </div>
      </form>
    </section>
    <div
      v-if="roleEditor.open"
      class="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/40 px-4"
    >
      <div class="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-xl">
        <div class="flex items-start justify-between">
          <div>
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">
              用户角色
            </p>
            <h3 class="mt-2 text-xl font-semibold text-slate-900">
              编辑角色绑定
            </h3>
            <p class="mt-2 text-sm text-slate-500">
              当前用户：{{ roleEditor.user?.username || "-" }}
            </p>
          </div>
          <button
            class="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500"
            @click="closeRoleEditor"
          >
            关闭
          </button>
        </div>

        <div class="mt-6">
          <p class="text-sm font-medium text-slate-700">选择角色</p>
          <div
            class="mt-3 grid max-h-60 grid-cols-1 gap-3 overflow-y-auto rounded-2xl border border-slate-200 p-4 sm:grid-cols-2"
          >
            <label
              v-for="role in roles"
              :key="role.id"
              class="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-700"
            >
              <input
                v-model="roleEditor.roleIds"
                type="checkbox"
                :value="role.id"
                class="h-4 w-4 rounded border-slate-300 text-slate-900"
              />
              <div>
                <p class="font-medium text-slate-900">{{ role.name }}</p>
                <p class="text-xs text-slate-500">{{ role.code }}</p>
              </div>
            </label>
          </div>
        </div>

        <p v-if="roleEditor.error" class="mt-4 text-sm text-rose-600">
          {{ roleEditor.error }}
        </p>

        <div class="mt-6 flex justify-end gap-3">
          <button
            class="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
            @click="closeRoleEditor"
          >
            取消
          </button>
          <button
            class="rounded-xl bg-slate-900 px-6 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
            :disabled="roleEditor.loading"
            @click="saveRoleEditor"
          >
            {{ roleEditor.loading ? "保存中..." : "保存角色" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "console" });

const { $authFetch } = useNuxtApp();

const filters = reactive({
  keyword: "",
  status: "",
  type: "",
});

const queryParams = computed(() => ({
  page: 1,
  pageSize: 20,
  keyword: filters.keyword || undefined,
  status: filters.status || undefined,
  type: filters.type || undefined,
}));

const { data, refresh } = await useFetch("/api/users", {
  $fetch: $authFetch,
  query: queryParams,
  server: false,
});

watch(queryParams, () => {
  refresh();
});

const users = computed(() => data.value?.data || []);

const { data: roleData } = await useFetch("/api/roles", {
  $fetch: $authFetch,
  server: false,
});
const roles = computed(() => roleData.value?.data || []);

const roleEditor = reactive({
  open: false,
  loading: false,
  error: "",
  user: null as null | { id: string; username?: string },
  roleIds: [] as string[],
});

const openRoleEditor = async (user: { id: string; username?: string }) => {
  roleEditor.open = true;
  roleEditor.loading = true;
  roleEditor.error = "";
  roleEditor.user = user;
  roleEditor.roleIds = [];
  try {
    const res = await $authFetch(`/api/users/${user.id}/roles`);
    roleEditor.roleIds = res.data?.map((item: { id: string }) => item.id) || [];
  } catch (error: any) {
    roleEditor.error = error?.statusMessage || "获取角色失败，请稍后重试";
  } finally {
    roleEditor.loading = false;
  }
};

const closeRoleEditor = () => {
  roleEditor.open = false;
  roleEditor.error = "";
  roleEditor.user = null;
  roleEditor.roleIds = [];
};

const saveRoleEditor = async () => {
  if (!roleEditor.user?.id) return;
  roleEditor.loading = true;
  roleEditor.error = "";
  try {
    await $authFetch(`/api/users/${roleEditor.user.id}/roles`, {
      method: "PUT",
      body: { roleIds: roleEditor.roleIds },
    });
    closeRoleEditor();
  } catch (error: any) {
    roleEditor.error = error?.statusMessage || "保存失败，请稍后重试";
  } finally {
    roleEditor.loading = false;
  }
};

const statusText = (status: string) => {
  if (status === "1") return "启用";
  if (status === "2") return "锁定";
  return "禁用";
};

const statusClass = (status: string) => {
  if (status === "1") return "bg-emerald-100 text-emerald-700";
  if (status === "2") return "bg-amber-100 text-amber-700";
  return "bg-slate-100 text-slate-700";
};
</script>
