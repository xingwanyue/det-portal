<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

watch(
  () => route.path,
  (val) => {
    if (val && process.client) {
      fetch(
        `https://www.duolingopractice.com/weapp/api/common/logPath?path=${encodeURIComponent(
          window.location.pathname,
        )}`,
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
