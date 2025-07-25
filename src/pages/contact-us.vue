<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { reactive } from 'vue';
import { ref } from 'vue';
import type { FormInstance } from 'element-plus';
import { ElMessage } from 'element-plus';
import { portalContact, domain } from '@/utils';
import subscribe from '../components/subscribe.vue';

const ruleFormRef = ref<FormInstance>();
const state = reactive({
  loading: false,
  formData: {} as any,
});
const checkEmail = (rules: any, value: string, callback: any) => {
  const pan = /\w+[@][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)+/;
  if (!pan.test(value)) {
    callback(t('contactUs.checkEmail'));
  } else {
    callback();
  }
};
const rules = reactive({
  name: [{ required: true, message: t('contactUs.enterName'), trigger: 'blur' }],
  email: [
    { required: true, message: t('contactUs.enterEmail'), trigger: 'blur' },
    { validator: checkEmail, trigger: 'blur' },
  ],
  message: [{ required: true, message: t('contactUs.entermessage'), trigger: 'blur' }],
});

const submit = async () => {
  if (state.loading) {
    return;
  }
  const formNode1 = ruleFormRef.value as any;
  formNode1.validate(async (valid: any) => {
    state.loading = true;
    if (valid) {
      // Verification passed
      const { err } = (await useFetch(`${portalContact}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(state.formData),
      })) as any;
      if (!err) {
        ElMessage({ type: 'success', message: t('contactUs.subsuccess') });
        state.formData = {};
      }
    }
    state.loading = false;
  });
};
useSeoMeta({
  title: t('contactUs.seometa.title'),
  description: t('contactUs.seometa.description'),
  keywords: t('contactUs.seometa.keywords'),
});
const localePath = useLocalePath();

useHead({
  meta: [
    { name: 'DC.title', content: t('contactUs.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('contactUs.seometa.title') },
    { property: 'og:description', content: t('contactUs.seometa.description') },
    { property: 'og:url', content: `https://www.${domain}${localePath('/contact-us')}` },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: t('contactUs.seometa.title') },
    {
      name: 'twitter:description',
      content: t('contactUs.seometa.description'),
    },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
});
</script>
<template>
  <div class="contactus">
    <div class="learn_hader" :style="`background-image: url(/img/aboutus/banner-aboutus.svg);`">
      <div class="learn_hader_content">
        <h1 class="title">{{ $t('contactUs.Contact_Us') }}</h1>
        <div class="title2">{{ $t('contactUs.Questions') }}</div>
      </div>
    </div>
    <div class="content">
      <div class="left">
        <!-- <div class="title">{{ $t('contactUs.fill_in') }}</div> -->

        <div class="info">
          <a rel="nofollow" :href="`mailto:support@detpractice.com`">
            <el-image src="/img/aboutus/email.svg" class="email-img" :alt="$t('contactUs.email')"></el-image>
          </a>

          <div class="info-right">
            <div class="name">{{ $t('contactUs.email') }}</div>
            <div class="address">support@detpractice.com</div>
          </div>
          <a rel="nofollow" :href="`mailto:support@detpractice.com`" class="send_btn">{{ $t('contactUs.send') }}</a>
        </div>
        <div class="desc">
          {{ $t('contactUs.thank') }}
        </div>
      </div>
    </div>
    <subscribe />
  </div>
</template>
<style lang="scss">
.contactus {
  .el-input__inner {
    height: 50px;
  }
  .el-loading-spinner .path {
    stroke: #f66442;
  }
}
</style>
<style lang="scss" scoped>
.contactus {
  .learn_hader {
    text-align: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    .learn_hader_content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 88px 0 88px;
      .title {
        font-weight: 600;
        font-size: 56px;
        color: #201515;
        line-height: 72px;
        margin: 0px;
      }
      .title2 {
        font-weight: 400;
        font-size: 24px;
        color: #201515;
        line-height: 32px;
        margin: 0px;
        margin-top: 24px;
      }
    }
  }
  .content {
    max-width: 1260px;
    margin: auto;
    padding: 100px 30px;
    box-sizing: border-box;
    background: #fff;
  }
  .left {
    .title {
      font-weight: 500;
      font-size: 32px;
      color: #201515;
    }
    .desc {
      font-size: 20px;
      color: #403f3e;
      line-height: 28px;
      margin-top: 40px;
    }
    .info {
      display: flex;
      align-items: center;
      .email-img {
        width: 56px;
        height: 56px;
        display: block;
      }
      .info-right {
        margin-left: 16px;
        .name {
          font-weight: 600;
          font-size: 20px;
          color: #201515;
          line-height: 32px;
        }
        .address {
          font-size: 16px;
          color: #403f3e;

          line-height: 20px;
          margin-top: 4px;
        }
      }
      .send_btn {
        height: fit-content;
        padding: 9px 24px;
        border-radius: 8px;
        border: 1px solid #201515;
        font-weight: 400;
        font-size: 16px;
        color: #201515;
        margin-left: auto;
      }
    }
  }
}
@media (max-width: 800px) {
  .contactus {
    .learn_hader {
      .learn_hader_content {
        max-width: 100%;
        margin: 0 auto;
        padding: 22px 15px 22px;
        .title {
          font-size: 24px;
          line-height: 30px;
        }
        .title2 {
          font-size: 14px;
          line-height: 22px;
          margin-top: 12px;
        }
      }
    }
    .content {
      max-width: 100%;
      padding: 50px 15px;
      display: block;
    }
    .left {
      width: 100%;
      .title {
        font-size: 22px;
      }
      .desc {
        font-size: 14px;
        line-height: 18px;
        margin-top: 20px;
      }
      .info {
        margin-top: 24px;
        .email-img {
          width: 44px;
          height: 44px;
        }
        .info-right {
          margin-left: 8px;
        }
        .name {
          font-size: 16px;
          line-height: 22px;
        }
        .address {
          font-size: 14px;
          line-height: 16px;
          margin-top: 4px;
        }
      }
    }
  }
}
</style>
