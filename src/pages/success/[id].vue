<script setup lang="ts">
import { useStore } from '@/store';

const route = useRoute();
const store = useStore();
const dots = ref('...');
definePageMeta({
  layout: 'noheaderfooter',
});
useHead({
  meta: [{ name: 'robots', content: 'noindex' }],
});
onMounted(() => {
  const { id } = route.params;
  store.checkPayStatus(id as string);
  setInterval(() => {
    if (dots.value.length >= 3) {
      dots.value = '.';
    } else {
      dots.value += '.';
    }
  }, 500);
});
</script>

<template>
  <div class="paySuccess">
    <img width="200" height="200" src="/img/circle.png" alt="circle" class="circleImg" />
    <div class="title">
      Payment in Progress, Please Wait<span class="dot">{{ dots }}</span>
    </div>
    <div class="desc">Your payment has been successfully submitted, and we are processing it.</div>
  </div>
</template>

<style scoped lang="scss">
.paySuccess {
  width: calc(100vw - 30px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 15px 0;
  .title {
    font-weight: 500;
    font-size: 18px;
    color: #333333;
    line-height: 23px;
    text-align: right;
    font-style: normal;
    text-align: center;
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .dot {
      width: 30px;
      text-align: left;
      padding-left: 4px;
    }
  }
  .desc {
    font-weight: 400;
    font-size: 14px;
    color: #666666;
    line-height: 20px;
    text-align: right;
    font-style: normal;
    text-align: center;
    margin-top: 12px;
  }
}
</style>
