<script setup lang="ts">
onMounted(() => {
  fetch(`https://www.duolingopractice.com/weapp/api/common/logPath/${encodeURIComponent('/prep')}`);
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
