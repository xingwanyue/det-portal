<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { reactive } from 'vue';
import { domain } from '@/utils';
const state = reactive({});
useSeoMeta({
  title: t('cookie.seometa.title'),
});

const localePath = useLocalePath();
useHead({
  meta: [
    { name: 'DC.title', content: t('cookie.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('cookie.seometa.title') },
    // { property: 'og:description', content: t('contactUs.seometa.description') },
    { property: 'og:url', content: `https://www.${domain}${localePath('/cookie')}` },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: t('cookie.seometa.title') },
    // {
    //   name: 'twitter:description',
    //   content: t('contactUs.seometa.description'),
    // },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
});
</script>
<template>
  <div class="privacyPolicy">
    <div class="learn_hader" :style="`background-image: url(/img/aboutus/banner-aboutus.svg);`">
      <div class="learn_hader_content">
        <h1 class="title">{{ $t('cookie.Cookie_Policy') }}</h1>
      </div>
    </div>
    <div class="bg">
      <div class="content margin-top0" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">
          {{ $t('cookie.Last_updated') }}<span style="color: #f66442">{{ $t('cookie.Last_updated_time') }}</span>
        </div>
        <div class="content1">
          {{ $t('cookie.cookie_ex') }}
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">{{ $t('cookie.q1.title') }}</div>
        <div class="content1">
          {{ $t('cookie.q1.a1') }}
          <div class="line-break"></div>
          {{ $t('cookie.q1.a2') }}
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">{{ $t('cookie.q2.title') }}</div>
        <div class="content1">
          {{ $t('cookie.q2.a1') }}
          <div class="line-break"></div>
          {{ $t('cookie.q2.a2') }}
          <div class="line-break"></div>
          {{ $t('cookie.q2.a3') }}
          <div class="line-break"></div>
          {{ $t('cookie.q2.a4') }}
          <div class="line-break"></div>
          {{ $t('cookie.q2.a5') }}
          <div class="line-break"></div>
          {{ $t('cookie.q2.a6') }}
          {{ $t('cookie.q2.a7') }}
          <div class="line-break"></div>
          {{ $t('cookie.q2.a8') }}
          <div class="line-break"></div>
          {{ $t('cookie.q2.a9') }}
          <div class="line-break"></div>
          {{ $t('cookie.q2.a10') }}
          <div class="line-break"></div>
          {{ $t('cookie.q2.a11') }}
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">{{ $t('cookie.q3.title') }}</div>
        <div class="content1">
          {{ $t('cookie.q3.a1') }}
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">{{ $t('cookie.q4.title') }}</div>
        <div class="content1">
          {{ $t('cookie.q4.a1') }}
          <div class="line-break"></div>
          {{ $t('cookie.q4.a2') }}<span class="website">support@detpractice.com</span>
          <div class="line-break"></div>
          {{ $t('cookie.q4.a3') }}

          <nuxt-link to="https://www.detpractice.com/contact-us/" target="_blank" class="website">
            https://www.detpractice.com/contact-us/
          </nuxt-link>
        </div>
      </div>
      <div class="content" data-aos="fade-up" data-aos-duration="1000">
        <div class="title">{{ $t('cookie.q5.title') }}</div>
        <div class="content1">
          {{ $t('cookie.q5.a1') }}
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.privacyPolicy {
  .learn_hader {
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .learn_hader_content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 120px 0px;
      .title {
        font-weight: 600;
        font-size: 56px;
        color: #201515;
        line-height: 72px;
        margin: 0px;
      }
    }
  }
  .bg {
    background: linear-gradient(180deg, #ffffff 0%, #fff4f1 100%);
    background-size: 100% 50%;
    background-repeat: no-repeat;
    background-position: 0 100%;
    padding-bottom: 120px;
    padding-top: 120px;
  }
  .margin-top0 {
    margin-top: 0 !important;
  }
  .content {
    max-width: 1260px;
    margin: auto;
    margin-top: 30px;
    padding: 0px 30px;
    box-sizing: border-box;
    .title {
      font-weight: 500;
      font-size: 20px;
      color: #201515;
    }
    .content1 {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.8);
      line-height: 20px;
      margin-top: 12px;
      .line-break {
        margin-top: 8px;
      }
      .website {
        color: #f66442;
      }
    }
  }
}
@media (max-width: 800px) {
  .privacyPolicy {
    .learn_hader {
      .learn_hader_content {
        max-width: 100%;
        margin: 0 auto;
        padding: 30px 15px;
        .title {
          font-size: 24px;
          line-height: 30px;
        }
      }
    }
    .bg {
      padding-bottom: 40px;
      padding-top: 40px;
    }
    .content {
      max-width: 100%;
      margin-top: 15px;
      padding: 0px 15px;
    }
  }
}
</style>
