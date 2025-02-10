<script setup lang="ts">
import { loginBycredential } from '@/utils/googleAuth';
import { saveToken, getToken, locales, countries } from '@/utils';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from '@/store';
import { sinupEvent } from '@/utils/gtag';
import { useI18n } from 'vue-i18n';
import vHeader from './header.vue';
import vFooter from './footer.vue';
import vChangeLanguagetk from './changeLanguage_TK.vue';

const props = defineProps({
  errorPage: Boolean,
}) as any;

const router = useRouter();
const route = useRoute();
const { locale } = useI18n();
const localePath = useLocalePath();

console.log(props.errorPage);

const store = useStore();
const layouProps = useAttrs();

const currentPathWithoutLocale = route.path.replace(new RegExp(`^/${locale.value}`), '') || '/';

const alternates = locales.map((l: string) => ({
  rel: 'alternate',
  hreflang: l,
  href: () => `https://www.${domain}${l === 'en' ? '' : `/${l}`}${currentPathWithoutLocale}`,
}));
const country = countries[locales.indexOf(locale.value)];
useHead({
  htmlAttrs: { lang: () => locale.value },
  script: [{ src: 'https://accounts.google.com/gsi/client', async: true }],
  link: props.errorPage
    ? []
    : [
        { rel: 'canonical', href: () => `https://www.${domain}${localePath(currentPathWithoutLocale)}` },
        ...alternates,
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: () => `https://www.${domain}${currentPathWithoutLocale}`,
        },
      ],
  meta: [{ property: 'og:locale', content: () => `${locale.value}_${country}` }],
});
declare global {
  interface Window {
    google: any;
  }
}
const logFbAdd = () => {
  const fbclid = route.query.fbclid as string;
  store.logFbAdd(fbclid);
};
onMounted(async () => {
  logFbAdd();
  const token = await getToken();
  if (token) {
    store.getUserInfo();
    return;
  }
  window.google?.accounts?.id?.initialize({
    client_id: '1044858520955-9ua24gpj8m98avtbp030t6dp624fi689.apps.googleusercontent.com',
    use_fedcm_for_prompt: false,
    callback: async function (response: any) {
      const {
        data: { token, isNew },
        err,
      } = await loginBycredential(response.credential);
      if (!err) {
        if (isNew) {
          sinupEvent();
        }
        await saveToken(token);
        store.getUserInfo();
        router.push('/');
      }
    },
  });
  window.google?.accounts?.id?.prompt();
});
const htmlText = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=3700958203515627&ev=PageView&noscript=1" />`;
</script>

<template>
  <el-container class="wrap">
    <el-header class="header" height="62px"> <v-header :type="layouProps.type as string" /> </el-header>
    <el-main class="main">
      <slot />
    </el-main>
    <el-footer class="footer_wrap">
      <v-footer :errorPage="props.errorPage" />
    </el-footer>
    <v-changeLanguagetk />
  </el-container>
  <noscript v-html="htmlText"> </noscript>
</template>
<style lang="scss" scoped>
.wrap {
  .header {
    position: fixed;
    left: 0;
    top: 0;
    padding: 0;
    z-index: 999;
    width: 100%;
    border-bottom: 0px solid #ebeef5 !important;
  }
  .main {
    padding: 60px 0 0 0;
    // min-height: calc(100vh - 60px);
  }
  .footer_wrap {
    padding: 0 30px;
    @media (max-width: 450px) {
      padding: 0px 15px;
    }
    // border: 1px red solid;
  }
}
</style>
