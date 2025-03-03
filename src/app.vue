<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
const localePath = useLocalePath();
const currentPathWithoutLocale = route.path.replace(new RegExp(`^/${locale.value}`), '') || '/';

watch(
  () => route.path,
  (val) => {
    if (val && process.client) {
      fetch(
        `https://www.duolingopractice.com/weapp/api/common/logPath?path=${encodeURIComponent(
          window.location.pathname,
        )}&locale=${locale.value}`,
      );
    }
  },
  { immediate: true },
);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
