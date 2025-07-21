<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { reactive } from 'vue';
import { domain, getAnchorId } from '@/utils';
const state = reactive({});
const props = defineProps({
  descArr: Array,
  imgArr: Array,
  imgTipArr: Array,
  h2: String,
  h3: String,
}) as any;
const localePath = useLocalePath();
</script>
<template>
  <div class="desc_img_tips">
    <h2 class="p_h2 p_mgt_20" v-if="props.h2" :id="`perp_${getAnchorId(props.h2)}`">
      {{ props.h2 }}
    </h2>
    <h3 class="p_h3 p_mgt_20" v-if="props.h3">{{ props.h3 }}</h3>
    <div class="desc" v-for="item in props.descArr" :key="item">{{ item }}</div>
    <div class="desc_img" v-for="item in props.imgArr" :key="item">
      <img :src="`${item.url}`" :alt="`${item.alt}`" />
    </div>
    <div class="img_tips" v-for="item in props.imgTipArr" :key="item">{{ item }}</div>
  </div>
</template>
<style lang="scss" scoped>
.desc_img_tips {
  [id^='perp_'] {
    scroll-margin-top: 80px; // 根据您的导航栏高度调整这个值
  }
  .desc {
    margin-top: 20px;
  }
  .desc_img {
    margin-top: 20px;
    border-radius: 10px;
    img {
      width: 100%;
      height: auto;
    }
  }
  .img_tips {
    margin-top: 20px;
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
    color: rgb(99, 99, 99);
  }
}
</style>
