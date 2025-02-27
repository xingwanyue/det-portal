<script setup lang="ts">
onMounted(() => {
  fetch(`https://www.duolingopractice.com/weapp/api/common/logPath/${encodeURIComponent(window.location.pathname)}`);
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
