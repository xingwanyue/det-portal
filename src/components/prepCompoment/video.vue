<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const props = defineProps({
  video_url: String,
  video_title: String,
}) as any;
</script>
<template>
  <div class="common_video_out">
    <iframe
      width="100%"
      :src="props.video_url"
      :title="props.video_title"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
      loading="lazy"
    ></iframe>
  </div>
</template>
<style lang="scss" scoped>
.common_video_out {
  margin-top: 20px;
  border: 1px orange solid;
  iframe {
    width: 100%;
    height: 500px;
  }
}
</style>
