<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { reactive } from 'vue';

const state = reactive({});
const props = defineProps({
  title: String,
  desc: String,
  video_title: String,
}) as any;
const localePath = useLocalePath();
</script>
<template>
  <div class="common_summary_out">
    <h2 class="common_summary_title">{{ props.title }}</h2>
    <p class="common_summary_desc">{{ props.desc }}</p>
    <p class="common_summary_video_title">{{ props.video_title }}</p>
  </div>
</template>
<style lang="scss" scoped>
.common_summary_out {
  margin-top: 20px;
  .common_summary_title {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
  }
  .common_summary_desc {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
  .common_summary_video_title {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
}
</style>
