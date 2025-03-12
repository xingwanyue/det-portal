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

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 宽高比 (9/16 = 0.5625) */
  height: 0;
  border-radius: 16px;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
  }
}
</style>
