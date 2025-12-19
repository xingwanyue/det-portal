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
                >
                  编辑
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
  </div>
</template>

<script setup lang="ts">
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
  query: queryParams,
});

watch(queryParams, () => {
  refresh();
});

const users = computed(() => data.value?.data || []);

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
