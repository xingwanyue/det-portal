<script lang="ts" setup>
const props = defineProps({
  list: Array,
}) as any;
</script>
<template>
  <div v-for="(item, index) in props.list" :key="index" class="complete_the_sen">
    <div class="complete_the_sen_title">{{ item.title }}</div>
    <div class="complete_the_sen_test" v-html="item.test"></div>
  </div>
</template>
<style lang="scss" scoped>
.complete_the_sen {
  margin-top: 30px;
  margin-bottom: 30px;
  .complete_the_sen_title {
    color: #1a365d;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .complete_the_sen_test {
    font-size: 18px;
    margin-top: 30px;
    ::v-deep .word_box {
      width: 30px;
      height: 30px;
      border: 1px solid #000;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      margin-right: 2px;
      font-weight: bold;
    }
  }
}
</style>
