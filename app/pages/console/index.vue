<template>
  <div class="space-y-8">
    <section class="grid gap-4 md:grid-cols-3">
      <div
        v-for="(card, index) in statCards"
        :key="card.label"
        class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm animate-fade-up"
        :style="{ animationDelay: `${index * 80}ms` }"
      >
        <p class="text-xs uppercase tracking-[0.2em] text-slate-400">{{ card.label }}</p>
        <div class="mt-3 flex items-end justify-between">
          <p class="text-3xl font-semibold text-slate-900">{{ card.value }}</p>
          <p class="text-sm font-medium" :class="card.deltaClass">{{ card.delta }}</p>
        </div>
        <p class="mt-4 text-sm text-slate-500">{{ card.note }}</p>
      </div>
    </section>

    <section class="grid gap-6 lg:grid-cols-[2fr,3fr]">
      <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm animate-fade-up" style="animation-delay: 200ms;">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">快速提交</p>
            <h2 class="mt-2 text-xl font-semibold text-slate-900">创建审批申请</h2>
          </div>
          <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">表单</span>
        </div>

        <form class="mt-6 space-y-4">
          <label class="block text-sm font-medium text-slate-700">
            流程
            <select
              class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
            >
              <option>权限提升</option>
              <option>基础设施变更</option>
              <option>财务报销</option>
            </select>
          </label>

          <label class="block text-sm font-medium text-slate-700">
            申请标题
            <input
              type="text"
              placeholder="例如：新增 ap-sg 只读副本"
              class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
            />
          </label>

          <label class="block text-sm font-medium text-slate-700">
            风险等级
            <div class="mt-2 grid grid-cols-3 gap-2 text-sm">
              <button
                type="button"
                class="rounded-xl border border-slate-200 px-3 py-2 text-slate-600 transition hover:border-slate-300"
              >
                低
              </button>
              <button
                type="button"
                class="rounded-xl border border-slate-900 bg-slate-900 px-3 py-2 font-semibold text-white"
              >
                中
              </button>
              <button
                type="button"
                class="rounded-xl border border-slate-200 px-3 py-2 text-slate-600 transition hover:border-slate-300"
              >
                高
              </button>
            </div>
          </label>

          <label class="block text-sm font-medium text-slate-700">
            说明
            <textarea
              rows="3"
              placeholder="描述影响范围、上线计划与回滚方案。"
              class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
            ></textarea>
          </label>

          <button
            type="submit"
            class="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            提交审批
          </button>
        </form>
      </div>

      <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm animate-fade-up" style="animation-delay: 260ms;">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-xs uppercase tracking-[0.2em] text-slate-400">实时队列</p>
            <h2 class="mt-2 text-xl font-semibold text-slate-900">待处理审批</h2>
          </div>
          <button class="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600">
            查看全部
          </button>
        </div>

        <div class="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <table class="w-full text-left text-sm">
            <thead class="bg-slate-100 text-xs uppercase tracking-[0.2em] text-slate-500">
              <tr>
                <th class="px-4 py-3">申请</th>
                <th class="px-4 py-3">负责人</th>
                <th class="px-4 py-3">状态</th>
                <th class="px-4 py-3 text-right">预计</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr v-for="row in approvals" :key="row.id" class="bg-white">
                <td class="px-4 py-4">
                  <p class="font-medium text-slate-900">{{ row.title }}</p>
                  <p class="mt-1 text-xs text-slate-500">{{ row.detail }}</p>
                </td>
                <td class="px-4 py-4 text-slate-600">{{ row.owner }}</td>
                <td class="px-4 py-4">
                  <span class="rounded-full px-3 py-1 text-xs font-semibold" :class="row.statusClass">
                    {{ row.status }}
                  </span>
                </td>
                <td class="px-4 py-4 text-right text-slate-600">{{ row.eta }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-6 rounded-2xl border border-dashed border-slate-200 p-5">
          <p class="text-xs uppercase tracking-[0.2em] text-slate-400">提示</p>
          <p class="mt-2 text-sm text-slate-600">
            可配置审批策略，将低风险请求自动分配给值班负责人。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

const statCards = [
  {
    label: '待审批',
    value: '28',
    delta: '周环比 +12%',
    deltaClass: 'text-emerald-500',
    note: '达到最近发布窗口以来最高值。'
  },
  {
    label: '运行中流程',
    value: '64',
    delta: '今日 +4',
    deltaClass: 'text-slate-600',
    note: '覆盖运维、财务、合规队列。'
  },
  {
    label: '风险升级',
    value: '3',
    delta: '周环比 -40%',
    deltaClass: 'text-emerald-500',
    note: '当前无重大事故。'
  }
]

const approvals = [
  {
    id: 1,
    title: '新增工资导出权限',
    detail: '财务 · 2 小时前申请',
    owner: '赵玲',
    status: '审核中',
    statusClass: 'bg-amber-100 text-amber-700',
    eta: '2 小时'
  },
  {
    id: 2,
    title: '扩容 Redis 集群',
    detail: '基础设施 · 5 小时前申请',
    owner: '罗德里戈',
    status: '待处理',
    statusClass: 'bg-slate-100 text-slate-700',
    eta: '6 小时'
  },
  {
    id: 3,
    title: '新增供应商审批',
    detail: '合规 · 1 天前申请',
    owner: '普里娅',
    status: '已升级',
    statusClass: 'bg-rose-100 text-rose-700',
    eta: '4 小时'
  }
]
</script>
