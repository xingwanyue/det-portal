<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-700 text-white">
    <div class="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-slate-400/20 blur-3xl" />
    <div class="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-slate-200/10 blur-3xl animate-soft-pulse" />
    <div class="mx-auto flex min-h-screen max-w-6xl flex-col lg:flex-row">
      <section class="flex flex-1 flex-col justify-center px-6 py-16 lg:px-12 animate-fade-up">
        <p class="text-xs uppercase tracking-[0.3em] text-slate-300">平台运维</p>
        <h1 class="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
          一站式掌控关键运营
        </h1>
        <p class="mt-6 max-w-lg text-base text-slate-200">
          统一审批、风险与流程编排，让各业务线在同一安全控制台协作。
        </p>
        <div class="mt-10 grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-lg font-semibold">98.2%</p>
            <p class="mt-1 text-xs uppercase tracking-[0.2em] text-slate-300">策略覆盖率</p>
          </div>
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-lg font-semibold">24/7</p>
            <p class="mt-1 text-xs uppercase tracking-[0.2em] text-slate-300">监控在线</p>
          </div>
        </div>
      </section>

      <section class="flex flex-1 items-center justify-center bg-white px-6 py-16 text-slate-900 lg:rounded-l-[48px] animate-fade-up" style="animation-delay: 120ms;">
        <div class="w-full max-w-md">
          <div class="mb-8">
            <p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">登录</p>
            <h2 class="mt-3 text-3xl font-semibold">欢迎回来</h2>
            <p class="mt-2 text-sm text-slate-500">使用 SSO 或管理员账号继续。</p>
          </div>

          <form class="space-y-5" @submit.prevent>
            <label class="block text-sm font-medium text-slate-700">
              工作邮箱
              <input
                type="email"
                placeholder="you@company.com"
                class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
              />
            </label>
            <label class="block text-sm font-medium text-slate-700">
              密码
              <input
                type="password"
                placeholder="••••••••"
                class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
              />
            </label>
            <div class="flex items-center justify-between text-sm">
              <label class="flex items-center gap-2 text-slate-600">
                <input type="checkbox" class="h-4 w-4 rounded border-slate-300 text-slate-900" checked />
                记住设备
              </label>
              <button type="button" class="font-medium text-slate-700 hover:text-slate-900">重置</button>
            </div>
            <NuxtLink
              to="/console"
              class="flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              进入控制台
            </NuxtLink>
          </form>

          <div class="mt-6 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-600">
            需要权限？请联系平台负责人申请角色。
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
