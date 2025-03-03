<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { urlGet, domain, cdn } from '@/utils';
import { useStore } from '@/store';
import { platformData } from '@/api';
import vEmbark from '../components/embark.vue';
import vCommonFaqList from '../components/commonFaqList.vue';

const localePath = useLocalePath();
const store = useStore();
const user = computed(() => store.user);
useSeoMeta({
  title: t('practice.seometa.title'),
  description: t('practice.seometa.description'),
});

useHead({
  meta: [
    { name: 'DC.title', content: t('practice.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('practice.seometa.title') },
    { property: 'og:description', content: t('practice.seometa.description') },
    { property: 'og:url', content: `https://www.${domain}${localePath('/practice')}` },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: t('practice.seometa.title') },
    {
      name: 'twitter:description',
      content: t('practice.seometa.description'),
    },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
});
// 将数字格式化 306281变为306k 3062811变为3061k
// const toThousands = (num) => {
//   if (!num) {
//     return 0;
//   }
//   let result = "";
//   const numStr = num.toString();
//   for (let i = 0; i < numStr.length; i++) {
//     if (i % 3 === 0 && i !== 0) {
//       result = ``;
//     }
//     result = numStr[numStr.length - i - 1] + result;
//   }
//   return result;
// };
const isLoad = ref(false);
const onLoad = () => {
  isLoad.value = true;
};
const isLoad1 = ref(false);
const onLoad1 = () => {
  isLoad1.value = true;
};
const isLoad2 = ref(false);
const onLoad2 = () => {
  isLoad2.value = true;
};
const isLoad3 = ref(false);
const onLoad3 = () => {
  isLoad3.value = true;
};
const isLoad4 = ref(false);
const onLoad4 = () => {
  isLoad4.value = true;
};
const aqtitle = computed(() => {
  return t('practice.aqtitle');
});
const aqlist = computed(() => [
  {
    name: t('practice.aqlistfont[0].q'),
    content: t('practice.aqlistfont[0].a'),
    open: false,
  },
  {
    name: t('practice.aqlistfont[1].q'),
    content: t('practice.aqlistfont[1].a'),
    open: false,
  },
  {
    name: t('practice.aqlistfont[2].q'),
    content: t('practice.aqlistfont[2].a'),
    open: false,
  },
  {
    name: t('practice.aqlistfont[3].q'),
    content: t('practice.aqlistfont[3].a'),
    open: false,
  },
  {
    name: t('practice.aqlistfont[4].q'),
    content: t('practice.aqlistfont[4].a'),
    open: false,
  },
  {
    name: t('practice.aqlistfont[5].q'),
    content: t('practice.aqlistfont[5].a'),
    open: false,
  },
]);
const embarkfont = computed(() => {
  return {
    title: t('practice.embarkfont.title'),
    btnText: t('practice.embarkfont.btnText'),
  };
});
// 引入cdn图片
const bank_banner = `${cdn}/store/portal/products/bank_banner.png`;
const bank_picture1 = `${cdn}/store/portal/products/bank_picture1.png`;
const bank_picture2 = `${cdn}/store/portal/products/bank_picture2.png`;
const bank_picture3 = `${cdn}/store/portal/products/bank_picture3.png`;
const bank_picture4 = `${cdn}/store/portal/products/bank_picture4.png`;
</script>
<template>
  <div class="bankW100 bank_out">
    <div class="bank_wrapper">
      <div class="bank">
        <div class="banner_wrapper">
          <div class="banner">
            <div class="banner_left">
              <div class="big_title">
                <h1>{{ $t('practice.h1') }}</h1>
              </div>
              <h2 class="desc_new">
                {{ $t('practice.descnew') }}
              </h2>
              <div class="desc">
                {{ $t('practice.desc') }}
              </div>
              <div class="people_num">
                <div class="icon_continer">
                  <div class="one_icon left0">
                    <img src="/img/products/bank_user_icon1.png" :alt="$t('practice.bank_user_icon')" />
                  </div>
                  <div class="one_icon left24">
                    <img src="/img/products/bank_user_icon2.png" :alt="$t('practice.bank_user_icon')" />
                  </div>
                  <div class="one_icon left48">
                    <img src="/img/products/bank_user_icon3.png" :alt="$t('practice.bank_user_icon')" />
                  </div>
                  <div class="one_icon left72">
                    <img src="/img/products/bank_user_icon4.png" :alt="$t('practice.bank_user_icon')" />
                  </div>
                  <div class="one_icon left96">
                    <img src="/img/products/bank_user_icon5.png" :alt="$t('practice.bank_user_icon')" />
                  </div>
                </div>
                <div v-if="platformData" class="font">
                  {{
                    $t('practice.learners_have', {
                      number: platformData.userTotal,
                    })
                  }}
                </div>
              </div>
              <NuxtLink v-if="user.id" class="btn common_btn_hover_bgColor" :to="urlGet('/questions')">
                <div class="font">{{ $t('practice.spn') }}</div>
                <div class="icon">
                  <img src="/img/products/white_arrow_right.svg" :alt="$t('practice.white_arrow_right')" />
                </div>
              </NuxtLink>
              <NuxtLink
                v-else
                class="btn common_btn_hover_bgColor"
                :to="localePath(`/login?url=${encodeURIComponent(urlGet('/questions'))}`)"
                rel="nofollow"
              >
                <div class="font">{{ $t('practice.spn') }}</div>
                <div class="icon">
                  <img src="/img/products/white_arrow_right.svg" :alt="$t('practice.white_arrow_right')" />
                </div>
              </NuxtLink>
            </div>
            <div class="banner_right">
              <!-- <img src="/img/products/bank_banner.png" /> -->
              <el-image v-show="isLoad" :src="bank_banner" :alt="$t('practice.altbanner')" @load="onLoad" />
              <el-skeleton v-show="!isLoad" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
          </div>
        </div>
        <div v-if="false" class="video_prod_out_common">
          <div class="video_title">
            {{ t('practice.video.title') }}
          </div>
          <div class="video_desc">
            {{ t('practice.video.desc') }}
          </div>
          <div class="video_content">
            <video
              width="100%"
              height="100%"
              muted
              autoplay
              loop
              controlslist="nodownload"
              webkit-playsinline="true"
              playsinline="true"
              x5-video-player-fullscreen="true"
              x5-video-orientation="portraint"
              x5-video-player-type="h5"
              src="/video/video_practice.mp4"
            ></video>
          </div>
        </div>
        <div class="content">
          <div class="one_card img_left">
            <div class="one_card_left">
              <el-image v-show="isLoad1" :src="bank_picture1" :alt="$t('practice.article1.h2')" @load="onLoad1" />
              <el-skeleton v-show="!isLoad1" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">{{ $t('practice.article1.h2') }}</h2>
                <div class="right_desc">
                  <span v-html="$t('practice.article1.right_desc')"></span>
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/questions')">
                  <div class="font">{{ $t('practice.article1.btn') }}</div>
                  <div class="arrow">
                    <img src="/img/products/blue_arrow_right.svg" :alt="$t('practice.blue_arrow_right')" />
                  </div>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="right_click"
                  :to="localePath(`/login?url=${encodeURIComponent(urlGet('/questions'))}`)"
                  rel="nofollow"
                >
                  <div class="font">{{ $t('practice.article1.btn') }}</div>
                  <div class="arrow">
                    <img src="/img/products/blue_arrow_right.svg" :alt="$t('practice.blue_arrow_right')" />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="one_card img_right" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <el-image v-show="isLoad2" :src="bank_picture2" :alt="$t('practice.article2.h2')" @load="onLoad2" />
              <el-skeleton v-show="!isLoad2" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">{{ $t('practice.article2.h2') }}</h2>
                <div class="right_desc">
                  <span v-html="$t('practice.article2.right_desc')"></span>
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/questions')">
                  <div class="font">{{ $t('practice.article2.btn') }}</div>
                  <div class="arrow">
                    <img src="/img/products/blue_arrow_right.svg" :alt="$t('practice.blue_arrow_right')" />
                  </div>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="right_click"
                  :to="localePath(`/login?url=${encodeURIComponent(urlGet('/questions'))}`)"
                  rel="nofollow"
                >
                  <div class="font">{{ $t('practice.article2.btn') }}</div>
                  <div class="arrow">
                    <img src="/img/products/blue_arrow_right.svg" :alt="$t('practice.blue_arrow_right')" />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="one_card img_left" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <el-image v-show="isLoad3" :src="bank_picture3" :alt="$t('practice.article3.h2')" @load="onLoad3" />
              <el-skeleton v-show="!isLoad3" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">{{ $t('practice.article3.h2') }}</h2>
                <div class="right_desc">
                  <span v-html="$t('practice.article3.right_desc')"></span>
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/questions')">
                  <div class="font">{{ $t('practice.article3.btn') }}</div>
                  <div class="arrow">
                    <img src="/img/products/blue_arrow_right.svg" :alt="$t('practice.blue_arrow_right')" />
                  </div>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="right_click"
                  :to="localePath(`/login?url=${encodeURIComponent(urlGet('/questions'))}`)"
                  rel="nofollow"
                >
                  <div class="font">{{ $t('practice.article3.btn') }}</div>
                  <div class="arrow">
                    <img src="/img/products/blue_arrow_right.svg" :alt="$t('practice.blue_arrow_right')" />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="one_card img_right" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <el-image v-show="isLoad4" :src="bank_picture4" :alt="$t('practice.article4.h2')" @load="onLoad4" />
              <el-skeleton v-show="!isLoad4" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">{{ $t('practice.article4.h2') }}</h2>
                <div class="right_desc">
                  {{ $t('practice.article4.right_desc') }}
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/questions')">
                  <div class="font">{{ $t('practice.article4.btn') }}</div>
                  <div class="arrow">
                    <img src="/img/products/blue_arrow_right.svg" :alt="$t('practice.blue_arrow_right')" />
                  </div>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="right_click"
                  :to="localePath(`/login?url=${encodeURIComponent(urlGet('/questions'))}`)"
                  rel="nofollow"
                >
                  <div class="font">{{ $t('practice.article4.btn') }}</div>
                  <div class="arrow">
                    <img src="/img/products/blue_arrow_right.svg" :alt="$t('practice.blue_arrow_right')" />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-common-faq-list :aqlist="aqlist" :aqtitle="aqtitle" />
    <v-embark :title="embarkfont.title" :btnText="embarkfont.btnText" />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/prod.scss';
</style>
