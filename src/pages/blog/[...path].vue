<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();
import { domain } from '@/utils';
import dayjs from 'dayjs';

import vEmbark from '../../components/embark.vue';
const localePath = useLocalePath();

useSeoMeta({
  title: t('blog.seometa.title'),
  description: t('blog.seometa.description'),
});
useHead({
  meta: [
    { name: 'DC.title', content: t('blog.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('blog.seometa.title') },
    { property: 'og:description', content: t('blog.seometa.description') },
    { property: 'og:url', content: `https://www.${domain}${localePath('/blog')}` },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: t('blog.seometa.title') },
    {
      name: 'twitter:description',
      content: t('blog.seometa.description'),
    },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
});
const route = useRoute();
const total = ref(0);
const allPageNum = ref(0);
const pageSize = ref(10);
const currentPage = ref(1);
let blogs = ref([]) as any;
let leftList = ref([]) as any;
let categoryPath = ref();

const { data: category } = (await useFetch(`${api}/common/article/category`, {
  key: 'blog_article_category',
  server: true,
  // lazy: true,
  query: {},
  headers: { locale: locale.value },
})) as any;
leftList.value = category?.value;

if (route?.params?.path[0]) {
  categoryPath.value = route.params.path[0];
} else {
  categoryPath.value = category?.value?.[0]?.path || '';
}

const currentPageFromRoute = route?.params?.path[1];
currentPage.value = currentPageFromRoute ? Number(currentPageFromRoute) : 1;

const { data: blogsjk } = (await useFetch(`${api}/common/article`, {
  key: 'blog_article',
  server: true,
  // lazy: true,
  query: {
    page: currentPage.value,
    pageSize: 10,
    categoryPath: route?.query?.categoryPath || categoryPath.value || '',
  },
  headers: { locale: locale.value },
  transform: (data: any) => {
    if (!data) return { data: [], total: 0 };
    data.data = data.data.map((item: any) => {
      item.category = (category.value.find((cate: any) => cate.id === item.categoryId) || {}).name;
      return item;
    });
    return { data: data.data, total: data.total };
  },
})) as any;

blogs.value = blogsjk.value?.data || [];
total.value = blogsjk.value?.total || 0;
allPageNum.value = Math.ceil(total.value / 10);

const handleCurrentChange = async (val: number) => {
  currentPage.value = val;
  try {
    const { data: blogsjkk, error } = (await useFetch(`${api}/common/article`, {
      key: 'blog_article_change',
      server: true,
      // lazy: true,
      query: {
        page: val,
        pageSize: 10,
        categoryPath: route.query.categoryPath || categoryPath.value,
      },
      headers: { locale: locale.value },
      onResponseError: (error) => {
        console.error('分页请求失败:', error);
        return { data: [], total: 0 };
      },
    })) as any;

    blogs.value = blogsjkk?.value?.data || [];
  } catch (err) {
    console.error('处理分页时发生错误:', err);
    blogs.value = [];
  }
};
// const findCategory = (id: Number) => {
//   console.log(id);
//   console.log();
//   const finditem = category.value.find((item: any) => item.id === id);
//   console.log(finditem);
// };
</script>
<template>
  <div class="blogs">
    <div class="bolgs_hader">
      <div class="bolgs_hader_content">
        <h1>{{ $t('blog.h1') }}</h1>
      </div>
    </div>
    <div class="bolgs_content_wrapper" style="">
      <div class="blog_left_list">
        <div class="title">All Articles</div>
        <NuxtLink
          v-for="item in leftList"
          :key="item.id"
          :class="categoryPath === item?.path ? 'one_pdom one_pdom_active' : 'one_pdom'"
          :to="localePath(`/blog/${item?.path}`)"
        >
          {{ item?.name }}
        </NuxtLink>
      </div>
      <div class="blog_right_list">
        <div v-if="blogs && blogs.length" class="bolgs_content">
          <NuxtLink
            v-for="(item, index) in blogs"
            :key="index"
            :class="index === 0 ? 'one_blog border_top' : 'one_blog'"
            data-aos="fade-up"
            data-aos-duration="1000"
            :to="localePath(`/${item?.path}`)"
          >
            <h2 class="title">{{ item?.name }}</h2>
            <div class="content">
              {{ item?.content }}
            </div>
            <div class="bottom">
              <div class="date">
                {{ dayjs(item?.createTime).format('YYYY-MM-DD') }}&nbsp;|&nbsp;{{ item?.category }}
              </div>
            </div>
          </NuxtLink>
        </div>
        <div class="pagination_out">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            :page-size="pageSize"
            :current-page="currentPage"
            @current-change="handleCurrentChange"
            class="mt-4"
          />
        </div>
      </div>

      <div v-if="allPageNum">
        <NuxtLink v-for="item in allPageNum" :to="localePath(`/blog/${categoryPath}/${item}`)"> </NuxtLink>
      </div>
    </div>
    <v-embark />
  </div>
</template>
<style scoped lang="scss">
.blogs {
  .bolgs_hader {
    text-align: center;

    background: #fff4f1;
    .bolgs_hader_content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 120px 0;
      background: url('/img/blog/blog.svg') center no-repeat;
      background-size: cover;
      @media (max-width: 650px) {
        padding: 60px 0;
      }
      h1 {
        font-weight: 600;
        font-size: 56px;
        color: #201515;
        margin: 0;
        @media (max-width: 450px) {
          font-size: 24px;
        }
      }
    }
  }
  .bolgs_content_wrapper {
    margin: 0 auto;
    padding: 0px 30px;
    margin-top: 100px;
    max-width: 1200px;
    margin-bottom: 100px;
    @media screen and (max-width: 768px) {
      margin-bottom: 50px;
    }

    @media (max-width: 450px) {
      padding: 0px 15px;
    }
    @media screen and (max-width: 1270px) {
      margin-top: 50px;
    }
    overflow: hidden;
    display: grid;
    grid-template-columns: 0.32fr 1fr;
    grid-template-areas: 'left_list right_list';

    grid-column-gap: 48px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-row-gap: 48px;
      grid-template-areas:
        'right_list'
        'left_list';
    }
    .blog_left_list {
      grid-area: left_list;
      background: #ffffff;
      border-radius: 8px;
      border: 1px solid #e9e9e9;
      padding: 18px 0px;
      box-sizing: border-box;
      .title {
        font-weight: 500;
        font-size: 20px;
        color: #201515;
        padding: 0px 24px;
        margin-bottom: 8px;
      }
      .one_pdom {
        padding: 12px 24px;
        font-weight: 400;
        font-size: 18px;
        color: #403f3e;
        line-height: 25px;
        display: block;
      }
      .one_pdom_active {
        background: #fff4f1;
        font-weight: 500;
        font-size: 18px;
        color: #f66442;
      }
    }
    .blog_right_list {
      grid-area: right_list;
      // border: 1px red solid;
      padding-bottom: 156px;
      position: relative;
      .bolgs_content {
        display: grid;
        grid-template-columns: 1fr;
        // grid-gap: 40px;
        .one_blog {
          padding: 40px;
          padding-left: 0px;
          border-bottom: 1px solid #e9e9e9;
          cursor: pointer;
          display: block;
          &:hover {
            .title {
              color: #f66442;
            }
          }
          .title {
            font-weight: 600;
            font-size: 28px;
            color: #201515;
            @media (max-width: 450px) {
              font-size: 20px;
            }
          }
          .content {
            font-weight: 400;
            font-size: 20px;
            color: #201515;
            margin-top: 24px;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            line-height: 28px;
            @media (max-width: 450px) {
              font-size: 16px;
            }
          }
          .bottom {
            margin-top: 24px;
          }
        }
        .border_top {
          border-top: 1px solid #e9e9e9;
        }
      }
      .pagination_out {
        margin: 0 auto;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        margin-top: 56px;
        // margin-bottom: 100px;
        :deep(.el-pagination.is-background .el-pager li.is-active) {
          background-color: #201515 !important;
        }
        :deep(.el-pager li:hover) {
          color: white !important;
          background-color: #f66442 !important;
          border: 1px solid #f66442 !important;
        }
        :deep(.el-pagination button:hover) {
          color: white !important;
          background-color: #f66442 !important;
        }
        :deep(.el-pagination.is-background .el-pager li) {
          background-color: white;
          border: 1px solid rgba(64, 63, 62, 0.6);
        }
      }
    }

    .seohack {
      position: fixed;
      left: -99999px;
    }
  }
}
</style>
<style></style>
