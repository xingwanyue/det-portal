<script setup lang="ts">
import { loginBycredential } from '@/utils/googleAuth';
import { saveToken, getToken, locales, countries, getStorage, saveStorage } from '@/utils';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from '@/store';
import { sinupEvent } from '@/utils/gtag';
import schemas from '@/schemas';
import { useI18n } from 'vue-i18n';
import vHeader from './header.vue';
import vFooter from './footer.vue';
import ScrollToTop from '@/components/scrolltotop.vue';

const props = defineProps({
  errorPage: Boolean,
}) as any;

const router = useRouter();
const route = useRoute();
const url = useRequestURL();
const { locale } = useI18n();
const localePath = useLocalePath();

const store = useStore();
const layouProps = useAttrs();

const showNotice = ref(false);
const currentPathWithoutLocale = route.path.replace(new RegExp(`^/${locale.value}`), '') || '/';
const sameLanguagePages = [
  '/courses/det-prep-course-interactive-listening',
  '/courses/det-prep-course-listen-and-type-questions',
  '/courses/det-read-and-complete-prep-course',
  '/courses/det-fill-in-the-blanks',
  '/courses/det-interactive-reading-course',
  '/courses/det-read-and-select-course',
  '/courses/det-prep-course-read-aloud',
  '/courses/det-course-read-listen-then-speak',
  '/courses/det-course-speak-about-the-photo',
  '/courses/det-course-speaking-sample',
  '/courses/boost-det-vocabulary-7-adv-photo-desc-tech',
  '/courses/det-listening-words',
  '/courses/det-prep-course-writing-sample',
  '/courses/det-interactive-writing',
  '/courses/det-write-about-the-photo-course',
];
const alternates = locales.map((l: string) => ({
  rel: 'alternate',
  hreflang: sameLanguagePages.includes(currentPathWithoutLocale) ? '' : l,
  href: () =>
    sameLanguagePages.includes(currentPathWithoutLocale)
      ? `https://www.${domain}${currentPathWithoutLocale}`
      : `https://www.${domain}${l === 'en' ? '' : `/${l}`}${currentPathWithoutLocale}`,
}));

const country = countries[locales.indexOf(locale.value)];
const meta = [{ property: 'og:locale', content: () => `${locale.value}_${country}` }] as any;
if (url.host !== 'www.detpractice.com') {
  meta.push({ name: 'robots', content: 'noindex' });
}

const schema = schemas[route.path] || schemas[currentPathWithoutLocale] || [];

useHead({
  htmlAttrs: { lang: () => locale.value },
  script: [
    ...schema.map((s: any) => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify(s),
    })),
  ],
  link: props.errorPage
    ? []
    : [
        // 如果当前路径是sameLanguagePages中的一个，则不添加canonical链接
        {
          rel: 'canonical',
          href: () =>
            sameLanguagePages.includes(currentPathWithoutLocale)
              ? `https://www.${domain}${currentPathWithoutLocale}`
              : `https://www.${domain}${localePath(currentPathWithoutLocale)}`,
        },
        ...alternates,
        {
          rel: 'alternate',
          hreflang: 'x-default',
          href: () => `https://www.${domain}${currentPathWithoutLocale}`,
        },
      ],
  meta,
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
const setNotice = () => {
  const closed = getStorage('updateNoticeClosed');
  if (!closed) {
    showNotice.value = true;
  }
};
const closeNotice = () => {
  showNotice.value = false;
  saveStorage('updateNoticeClosed', '1');
};
onMounted(async () => {
  setNotice();
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
  <el-container :class="`wrap ${showNotice ? 'showNotice' : ''}`">
    <div class="updateNotice">
      <div class="noticeText">
        The latest mock tests are now available! Accurately simulate the official exam with results delivered in 1-5 minutes.
        <a class="red" href="https://www.detpractice.com/app/#/exam">Try it now</a>
      </div>
      <div class="closeBtn" @click="closeNotice">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-x h-5 w-5 text-gray-400 hover:text-gray-200"
          aria-hidden="true"
        >
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      </div>
    </div>
    <el-header class="header" height="80px"> <v-header :type="layouProps.type as string" /> </el-header>
    <el-main class="main">
      <slot />
    </el-main>
    <el-footer class="footer_wrap">
      <v-footer :errorPage="props.errorPage" />
    </el-footer>
    <ScrollToTop />
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
    padding: 80px 0 0 0;
    // min-height: calc(100vh - 60px);
    overflow-x: hidden;
  }
  .updateNotice {
    display: none;
  }
  .footer_wrap {
    padding: 0 30px;
    @media (max-width: 450px) {
      padding: 0px 15px;
    }
    // border: 1px red solid;
  }
  &.showNotice {
    padding-top: 48px;
    .updateNotice {
      width: calc(100% - 28px);
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: rgb(28, 28, 28);
      height: 24px;
      padding: 12px 14px;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      color: oklch(92.8% 0.006 264.531);
      .noticeText {
        text-align: center;
        width: 100%;
        .red {
          color: #f66442;
        }
        @media (max-width: 720px) {
          padding-right: 24px;
        }
      }
      .closeBtn {
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 48px;
        width: 48px;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
      @media (max-width: 900px) {
        display: none;
      }
    }
    .header {
      top: 48px;
      @media (max-width: 900px) {
        top: 0;
      }
    }
    @media (max-width: 900px) {
      padding-top: 0;
    }
  }
}
</style>
