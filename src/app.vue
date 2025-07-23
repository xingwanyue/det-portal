<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const route = useRoute();
const { locale } = useI18n();

watch(
  () => route.path,
  (val) => {
    if (val && process.client) {
      try {
        const currentPathWithoutLocale = route.path.replace(new RegExp(`^/${locale.value}`), '') || '/';
        useFetch(
          `https://www.duolingopractice.com/weapp/api/common/logPath?path=${encodeURIComponent(
            currentPathWithoutLocale,
          )}&locale=${locale.value}`,
        );
      } catch (e) {
        //
      }
    }
  },
  { immediate: true },
);
onMounted(() => {
  requestIdleCallback(() => {
    import('@/utils/append').then(({ appendJs }) => {
      appendJs();
    });
  });
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
