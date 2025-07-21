<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
import { api } from '@/utils';
import LearnDetail from '@/components/articleDetail.vue';

const route = useRoute();
const localePath = useLocalePath();

definePageMeta({
  layout: 'empty',
});
const { data: article, error } = (await useFetch(`${api}/common/article?path=${route.params.path}`, {
  key: 'path_article',
  server: true,
  // lazy: true,
  headers: { locale: locale.value },
})) as any;
if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  });
}
const isLearn = article.value?.type === '2' || article.value?.type === '1';

useSeoMeta({
  title: () => article.value?.title || t('path.seometa.title'),
  description: () => article.value?.description || t('path.seometa.description'),
  keywords: () => article.value?.keywords,
});

useHead({
  meta: [
    { name: 'DC.title', content: article.value?.title || t('path.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: article.value?.title || t('path.seometa.title') },
    { property: 'og:description', content: article.value?.description || t('path.seometa.description') },
    { property: 'og:url', content: `https://www.${domain}${localePath(route.path)}` },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: article.value?.title || t('path.seometa.title') },
    {
      name: 'twitter:description',
      content: article.value?.description || t('path.seometa.description'),
    },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
});
</script>
<template>
  <NuxtLayout name="default" :type="article?.type">
    <div v-if="article?.categoryId">
      <LearnDetail
        :allData="article"
        :id="article?.id"
        :categoryId="article?.categoryId"
        :type="article?.type"
        :article="article"
      />
    </div>
  </NuxtLayout>
</template>
<style scoped lang="scss">
.article_detail {
  .detail_hader {
    text-align: center;

    background: #fff4f1;
    .detail_hader_content {
      // max-width: 1200px;
      margin: 0 auto;
      padding: 120px 30px;
      background: url('/img/aboutus/banner-aboutus.svg') center no-repeat;
      background-size: cover;
      @media (max-width: 650px) {
        padding: 60px 0;
      }
      h1 {
        font-weight: 600;
        font-size: 56px;
        color: #201515;
        margin: 0;
        @media (max-width: 650px) {
          font-size: 36px;
        }
      }
    }
  }

  .article {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 30px;
    .articleContent {
      max-width: 1200px;
      width: 100%;
    }
  }
}
</style>
