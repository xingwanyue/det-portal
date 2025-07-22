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
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-BTN96NLD4D',
          async: true,
        },
        {
          src: 'https://accounts.google.com/gsi/client',
          async: true,
        },
      
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': 'LocalBusiness',
            name: 'AITOGETHER LTD',
            url: 'https://www.detpractice.com/',
            logo: 'https://www.detpractice.com/img/footer/small_logo.svg',
            image: 'https://www.detpractice.com/store/portal/products/bank_picture1.png',
            description:
              'DET Practice is the best platform for Duolingo English Test Practice. We have the largest test bank, full-length mock exam, correction service, and DET courses.',
            pricerange: '£',
            telephone: '7518886018',
            email: 'support@detpractice.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '71-75 Shelton Street, Covent Garden',
              addressLocality: 'England',
              addressRegion: 'London',
              postalCode: 'WC2H 9JQ',
              addressCountry: 'UK',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '880',
            },
            review: {
              '@type': 'Review',
              reviewRating: {
                '@type': 'Rating',
                ratingValue: '4.9',
                bestRating: '5',
              },
              author: {
                '@type': 'Person',
                name: 'AITOGETHER LTD',
              },
            },
            sameAs: [
              'https://www.facebook.com/detpractice',
              'https://x.com/det_practice',
              'https://www.instagram.com/detpractice/ ',
              'https://www.detpractice.com/',
            ],
          }),
        },
       
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
