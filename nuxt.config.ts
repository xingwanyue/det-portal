// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: ['@pinia/nuxt', '@element-plus/nuxt', '@nuxtjs/i18n', 'vue3-carousel-nuxt'],
  css: ['@/assets/iconfont/iconfont.css'],
  pages: true,
  sourcemap: false,
  i18n: {
    locales: ['en', 'id', 'ja', 'ko', 'pt', 'ru', 'tr', 'de', 'es', 'fr', 'it', 'th', 'zh'].map((locale) => ({
      code: locale,
      file: `${locale}.json`,
    })),
    lazy: true,
    defaultLocale: 'en',
    langDir: 'locales',
    compilation: {
      strictMessage: false,
    },
    detectBrowserLanguage: false,
  },
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
  plugins: [
    { src: '@/assets/iconfont/iconfont.js', mode: 'client' },
    { src: '@/plugins/tidio.js', mode: 'client' },
  ],

  features: {
    inlineStyles: false,
  },

  experimental: {
    writeEarlyHints: true,
  },

  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: '/css/main.css' },
        // {
        //   rel: 'stylesheet',
        //   href: '/font/index.css',
        // },
      ],
      htmlAttrs: {
        lang: 'en',
      },
      script: [
       
      ],
      noscript: [
        {
          innerHTML: `<img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=1314035249495524&ev=PageView&noscript=1">`,
        },
      ],
      title: 'DET Practice - Ace the Duolingo English Test',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
        },
        { name: 'msvalidate.01', content: 'AB8D0671C60241C25BF7B5B9E68F5683' },
      ],
    },
  },

  compatibilityDate: '2024-10-25',
});
