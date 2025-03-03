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
  title: t('speakingaicorrection.seometa.title'),
  description: t('speakingaicorrection.seometa.description'),
});
useHead({
  meta: [
    { name: 'DC.title', content: t('speakingaicorrection.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('speakingaicorrection.seometa.title') },
    { property: 'og:description', content: t('speakingaicorrection.seometa.description') },
    { property: 'og:url', content: `https://www.${domain}${localePath('/speaking-ai-correction')}` },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: t('speakingaicorrection.seometa.title') },
    {
      name: 'twitter:description',
      content: t('speakingaicorrection.seometa.description'),
    },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
});
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
const aqtitle = computed(() => {
  return t('speakingaicorrection.aqtitle');
});
const aqlist = computed(() => [
  {
    name: t('speakingaicorrection.aqlistfont[0].q'),
    content: t('speakingaicorrection.aqlistfont[0].a'),
    open: false,
  },
  {
    name: t('speakingaicorrection.aqlistfont[1].q'),
    content: t('speakingaicorrection.aqlistfont[1].a'),
    open: false,
  },
  {
    name: t('speakingaicorrection.aqlistfont[2].q'),
    content: t('speakingaicorrection.aqlistfont[2].a'),
    open: false,
  },
  {
    name: t('speakingaicorrection.aqlistfont[3].q'),
    content: t('speakingaicorrection.aqlistfont[3].a'),
    open: false,
  },
  {
    name: t('speakingaicorrection.aqlistfont[4].q'),
    content: t('speakingaicorrection.aqlistfont[4].a'),
    open: false,
  },
  {
    name: t('speakingaicorrection.aqlistfont[5].q'),
    content: t('speakingaicorrection.aqlistfont[5].a'),
    open: false,
  },
]);
const embarkfont = computed(() => {
  return {
    title: t('speakingaicorrection.embarkfont.title'),
    btnText: t('speakingaicorrection.embarkfont.btnText'),
  };
});

// 引入cdn图片
const bank_banner = `${cdn}/store/portal/products/speaking_banner.png`;
const bank_picture1 = `${cdn}/store/portal/products/speaking_picture1.png`;
const bank_picture2 = `${cdn}/store/portal/products/speaking_picture2.png`;
const bank_picture3 = `${cdn}/store/portal/products/speaking_picture3.png`;
</script>
<template>
  <div class="bankW100 speaking_out">
    <div class="bank_wrapper">
      <div class="bank">
        <div class="banner_wrapper">
          <div class="banner">
            <div class="banner_left">
              <div class="big_title">
                <h1>{{ $t('speakingaicorrection.h1') }}</h1>
              </div>
              <h2 class="desc_new">
                {{ $t('speakingaicorrection.descnew') }}
              </h2>
              <div class="desc">
                {{ $t('speakingaicorrection.desc') }}
              </div>
              <div class="people_num">
                <div class="icon_continer">
                  <div class="one_icon left0">
                    <img src="/img/products/speaking_user_icon4.png" :alt="$t('speakingaicorrection.bank_user_icon')" />
                  </div>
                  <div class="one_icon left24">
                    <img src="/img/products/speaking_user_icon5.png" :alt="$t('speakingaicorrection.bank_user_icon')" />
                  </div>
                  <div class="one_icon left48">
                    <img src="/img/products/speaking_user_icon3.png" :alt="$t('speakingaicorrection.bank_user_icon')" />
                  </div>
                  <div class="one_icon left72">
                    <img src="/img/products/speaking_user_icon2.png" :alt="$t('speakingaicorrection.bank_user_icon')" />
                  </div>
                  <div class="one_icon left96">
                    <img src="/img/products/speaking_user_icon1.png" :alt="$t('speakingaicorrection.bank_user_icon')" />
                  </div>
                </div>
                <div v-if="platformData" class="font">
                  {{
                    $t('speakingaicorrection.learners_have', {
                      number: platformData.speakingTotal,
                    })
                  }}
                </div>
              </div>
              <NuxtLink v-if="user.id" class="btn common_btn_hover_bgColor" :to="urlGet('/correct')">
                <div class="font">{{ $t('speakingaicorrection.spn') }}</div>
                <div class="icon">
                  <img src="/img/products/white_arrow_right.svg" :alt="$t('speakingaicorrection.white_arrow_right')" />
                </div>
              </NuxtLink>
              <NuxtLink
                v-else
                class="btn common_btn_hover_bgColor"
                :to="localePath(`/login?url=${encodeURIComponent(urlGet('/correct'))}`)"
                rel="nofollow"
              >
                <div class="font">{{ $t('speakingaicorrection.spn') }}</div>
                <div class="icon">
                  <img src="/img/products/white_arrow_right.svg" :alt="$t('speakingaicorrection.white_arrow_right')" />
                </div>
              </NuxtLink>
            </div>
            <div class="banner_right">
              <!-- <img src="/img/products/bank_banner.png" /> -->
              <el-image v-show="isLoad" :src="bank_banner" :alt="$t('speakingaicorrection.altbanner')" @load="onLoad" />
              <el-skeleton v-show="!isLoad" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="one_card img_left">
            <div class="one_card_left">
              <el-image
                v-show="isLoad1"
                :src="bank_picture1"
                :alt="$t('speakingaicorrection.article1.h2')"
                @load="onLoad1"
              />
              <el-skeleton v-show="!isLoad1" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">{{ $t('speakingaicorrection.article1.h2') }}</h2>
                <div class="right_desc">
                  <span v-html="$t('speakingaicorrection.article1.right_desc')"></span>
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/correct')">
                  <div class="font">{{ $t('speakingaicorrection.article1.btn') }}</div>
                  <div class="arrow">
                    <img
                      src="/img/products/purple_arrow_right.svg"
                      :alt="$t('speakingaicorrection.purple_arrow_right')"
                    />
                  </div>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="right_click"
                  :to="localePath(`/login?url=${encodeURIComponent(urlGet('/correct'))}`)"
                  rel="nofollow"
                >
                  <div class="font">{{ $t('speakingaicorrection.article1.btn') }}</div>
                  <div class="arrow">
                    <img
                      src="/img/products/purple_arrow_right.svg"
                      :alt="$t('speakingaicorrection.purple_arrow_right')"
                    />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="one_card img_right" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <el-image
                v-show="isLoad2"
                :src="bank_picture2"
                :alt="$t('speakingaicorrection.article2.h2')"
                @load="onLoad2"
              />
              <el-skeleton v-show="!isLoad2" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">{{ $t('speakingaicorrection.article2.h2') }}</h2>
                <div class="right_desc">
                  <span v-html="$t('speakingaicorrection.article2.right_desc')"></span>
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/correct')">
                  <div class="font">{{ $t('speakingaicorrection.article2.btn') }}</div>
                  <div class="arrow">
                    <img
                      src="/img/products/purple_arrow_right.svg"
                      :alt="$t('speakingaicorrection.purple_arrow_right')"
                    />
                  </div>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="right_click"
                  :to="localePath(`/login?url=${encodeURIComponent(urlGet('/correct'))}`)"
                  rel="nofollow"
                >
                  <div class="font">{{ $t('speakingaicorrection.article2.btn') }}</div>
                  <div class="arrow">
                    <img
                      src="/img/products/purple_arrow_right.svg"
                      :alt="$t('speakingaicorrection.purple_arrow_right')"
                    />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="one_card img_left" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_card_left">
              <el-image
                v-show="isLoad3"
                :src="bank_picture3"
                :alt="$t('speakingaicorrection.article3.h2')"
                @load="onLoad3"
              />
              <el-skeleton v-show="!isLoad3" style="width: 100%; height: 385px" animated>
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
                </template>
              </el-skeleton>
            </div>
            <div class="one_card_right">
              <div class="one_card_right_forMid">
                <h2 class="right_title">{{ $t('speakingaicorrection.article3.h2') }}</h2>
                <div class="right_desc">
                  <span v-html="$t('speakingaicorrection.article3.right_desc')"></span>
                </div>
                <NuxtLink v-if="user.id" class="right_click" :to="urlGet('/correct')">
                  <div class="font">{{ $t('speakingaicorrection.article3.btn') }}</div>
                  <div class="arrow">
                    <img
                      src="/img/products/purple_arrow_right.svg"
                      :alt="$t('speakingaicorrection.purple_arrow_right')"
                    />
                  </div>
                </NuxtLink>
                <NuxtLink
                  v-else
                  class="right_click"
                  :to="localePath(`/login?url=${encodeURIComponent(urlGet('/correct'))}`)"
                  rel="nofollow"
                >
                  <div class="font">{{ $t('speakingaicorrection.article3.btn') }}</div>
                  <div class="arrow">
                    <img
                      src="/img/products/purple_arrow_right.svg"
                      :alt="$t('speakingaicorrection.purple_arrow_right')"
                    />
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <v-common-faq-list :aqlist="aqlist" :aqtitle="aqtitle" />
    <v-embark :title="embarkfont.title" :btnText="embarkfont.btnText" :gourl="'/correct'" />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/prod.scss';
</style>
