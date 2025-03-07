<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { reactive } from 'vue';
import { domain } from '@/utils';
const state = reactive({});
const props = defineProps({
  list: Array,
}) as any;
const localePath = useLocalePath();
</script>
<template>
  <div class="common_ui_li_out">
    <ul>
      <li v-for="(item, index) in props.list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.common_ui_li_out {
}
</style>
