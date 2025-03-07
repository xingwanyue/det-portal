<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { reactive } from 'vue';

const state = reactive({});
const props = defineProps({
  list: Array,
}) as any;
const localePath = useLocalePath();
</script>
<template>
  <div class="common_a_li_out">
    <a v-for="(item, index) in props.list" :key="index" :href="item.url">{{ item.name }}</a>
  </div>
</template>
<style lang="scss" scoped>
.common_a_li_out {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  a {
    color: #000;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-decoration: none;
    &:hover {
      color: #000;
      text-decoration: underline;
    }
  }
}
</style>
