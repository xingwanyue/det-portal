<template>
  <div class="min-h-screen bg-slate-50">
    <div class="flex min-h-screen">
      <aside class="hidden w-72 flex-col border-r border-slate-200 bg-white px-6 py-8 lg:flex">
        <div class="flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
            <span class="text-lg font-semibold">OP</span>
          </div>
          <div>
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">运维控制台</p>
            <p class="text-lg font-semibold text-slate-900">平台中枢</p>
          </div>
        </div>

        <div class="mt-8">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">核心</p>
          <nav class="mt-4 space-y-1">
            <NuxtLink
              v-for="item in primaryNav"
              :key="item.name"
              :to="item.to"
              class="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                <component :is="item.icon" class="h-4 w-4" />
              </span>
              {{ item.name }}
              <span
                v-if="item.badge"
                class="ml-auto rounded-full bg-slate-900 px-2 py-0.5 text-xs font-semibold text-white"
              >
                {{ item.badge }}
              </span>
            </NuxtLink>
          </nav>
        </div>

        <div class="mt-8">
          <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">管理</p>
          <nav class="mt-4 space-y-1">
            <NuxtLink
              v-for="item in manageNav"
              :key="item.name"
              :to="item.to"
              class="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                <component :is="item.icon" class="h-4 w-4" />
              </span>
              {{ item.name }}
            </NuxtLink>
          </nav>
        </div>

        <div class="mt-auto rounded-2xl bg-slate-900 px-4 py-5 text-white">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-300">权限</p>
          <p class="mt-2 text-lg font-semibold">超级管理员</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="permission in permissions"
              :key="permission"
              class="rounded-full border border-white/30 px-3 py-1 text-xs font-medium"
            >
              {{ permission }}
            </span>
          </div>
        </div>
      </aside>

      <div class="flex flex-1 flex-col">
        <header class="sticky top-0 z-10 border-b border-slate-200 bg-white/80 px-6 py-4 backdrop-blur">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p class="text-xs uppercase tracking-[0.2em] text-slate-400">控制台</p>
              <h1 class="text-2xl font-semibold text-slate-900">运营控制中心</h1>
            </div>
            <div class="flex items-center gap-3">
              <button
                class="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
              >
                导出
              </button>
              <div class="flex items-center gap-3 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white">
                <span class="hidden sm:inline">陈亚历</span>
                <span class="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">AC</span>
              </div>
            </div>
          </div>
        </header>

        <main class="flex-1 px-6 py-8">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const primaryNav = [
  {
    name: '总览',
    to: '/console',
    badge: '实时',
    icon: {
      template:
        '<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h3A1.5 1.5 0 0 1 8 3.5v3A1.5 1.5 0 0 1 6.5 8h-3A1.5 1.5 0 0 1 2 6.5v-3zM12 3.5A1.5 1.5 0 0 1 13.5 2h3A1.5 1.5 0 0 1 18 3.5v3A1.5 1.5 0 0 1 16.5 8h-3A1.5 1.5 0 0 1 12 6.5v-3zM2 13.5A1.5 1.5 0 0 1 3.5 12h3A1.5 1.5 0 0 1 8 13.5v3A1.5 1.5 0 0 1 6.5 18h-3A1.5 1.5 0 0 1 2 16.5v-3zM12 13.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-3z"/></svg>'
    }
  },
  {
    name: '审批中心',
    to: '/console#approvals',
    badge: '12',
    icon: {
      template:
        '<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 2a1 1 0 0 1 .894.553l2.382 4.764 5.263.765a1 1 0 0 1 .554 1.705l-3.807 3.71.899 5.243a1 1 0 0 1-1.451 1.054L10 16.347l-4.734 2.487a1 1 0 0 1-1.45-1.054l.898-5.243-3.807-3.71A1 1 0 0 1 1.46 8.082l5.263-.765 2.383-4.764A1 1 0 0 1 10 2z" clip-rule="evenodd"/></svg>'
    }
  },
  {
    name: '流程编排',
    to: '/console#workflows',
    icon: {
      template:
        '<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M4 4a2 2 0 0 1 2-2h2.5a2 2 0 0 1 0 4H6a2 2 0 0 1-2-2zM4 16a2 2 0 0 1 2-2h8a2 2 0 1 1 0 4H6a2 2 0 0 1-2-2zM12.5 6a2 2 0 1 1 0-4H14a2 2 0 1 1 0 4h-1.5zM4 10a2 2 0 0 1 2-2h8a2 2 0 1 1 0 4H6a2 2 0 0 1-2-2z"/></svg>'
    }
  }
]

const manageNav = [
  {
    name: '用户管理',
    to: '/console#users',
    icon: {
      template:
        '<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 10a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm-7 8a7 7 0 0 1 14 0z"/></svg>'
    }
  },
  {
    name: '审计日志',
    to: '/console#logs',
    icon: {
      template:
        '<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4zm3 2h4a1 1 0 1 0 0-2H8a1 1 0 0 0 0 2zm0 4h4a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2zm0 4h2a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2z"/></svg>'
    }
  },
  {
    name: '系统设置',
    to: '/console#settings',
    icon: {
      template:
        '<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M11.983 1.996a1 1 0 0 0-1.966 0l-.111.671a6.987 6.987 0 0 0-1.676.69l-.571-.343a1 1 0 0 0-1.367.366L4.63 4.827a1 1 0 0 0 .365 1.366l.57.343a7.067 7.067 0 0 0 0 1.38l-.57.343a1 1 0 0 0-.366 1.366l.66 1.146a1 1 0 0 0 1.367.366l.57-.343a6.987 6.987 0 0 0 1.677.69l.11.671a1 1 0 0 0 1.966 0l.11-.671a6.987 6.987 0 0 0 1.677-.69l.57.343a1 1 0 0 0 1.367-.366l.66-1.146a1 1 0 0 0-.366-1.366l-.57-.343a7.067 7.067 0 0 0 0-1.38l.57-.343a1 1 0 0 0 .366-1.366l-.66-1.146a1 1 0 0 0-1.367-.366l-.57.343a6.987 6.987 0 0 0-1.677-.69l-.11-.671zM10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>'
    }
  }
]

const permissions = ['全量权限', '财务', '基础设施', '人事']
</script>
