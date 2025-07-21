<script setup lang="ts">
// 按钮是否显示
const isShow = ref(false);

// 监听页面滚动
onMounted(() => {
  window.addEventListener('scroll', () => {
    isShow.value = window.scrollY > 1200;
  });
});
// 去除监听
onUnmounted(() => {
  window.removeEventListener('scroll', () => {});
});
// 点击页面滚动到顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>
<template>
  <div v-if="isShow" class="common_scroll_to_top_btn" @click="scrollToTop">
    <img src="/img/blog/backtop.svg" alt="scrolltotop" />
  </div>
</template>

<style lang="scss" scoped>
.common_scroll_to_top_btn {
  position: fixed;
  bottom: 120px;
  right: 26px;
  width: 61px;
  height: 61px;
  //   background-color: #c26a44;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;
  box-shadow: rgba(2, 6, 16, 0.2) 0px 2px 16px;
  transition: all 0.1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.05);
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
