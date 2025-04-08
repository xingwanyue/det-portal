<script setup lang="ts">
import ScrollToTop from '@/components/scrolltotop.vue';
</script>

<template>
  <el-container class="wrap">
    <el-main class="main">
      <slot />
      <ScrollToTop />
    </el-main>
  </el-container>
</template>
<style lang="scss" scoped>
.wrap {
  .main {
    padding: 0;
    min-height: calc(100vh - 60px);
  }
}
</style>
