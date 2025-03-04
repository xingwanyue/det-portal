<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { reactive } from 'vue';
import { domain } from '@/utils';
import desc_img_tips from '@/components/prepCompoment/desc_img_tips.vue';
import ui_li from '@/components/prepCompoment/ui_li.vue';
import a_list from '@/components/prepCompoment/a_list.vue';
import Summary from '@/components/prepCompoment/summary.vue';
import my_video from '@/components/prepCompoment/video.vue';
import table_of_con from '@/components/prepCompoment/table_of_con.vue';

const state = reactive({});
useSeoMeta({
  title: t('det_fill_in_the_blanks.seometa.title'),
  description: t('det_fill_in_the_blanks.seometa.description'),
});

const localePath = useLocalePath();
useHead({
  meta: [
    { name: 'DC.title', content: t('det_read_and_select_course.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('det_read_and_select_course.seometa.title') },
    { property: 'og:description', content: t('tos.seometa.description') },
    { property: 'og:url', content: `https://www.${domain}${localePath('/det-fill-in-the-blanks')}` },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: t('det_fill_in_the_blanks.seometa.title') },
    {
      name: 'twitter:description',
      content: t('det_fill_in_the_blanks.seometa.description'),
    },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
});
const summary_data = computed(() => {
  return {
    title: t('det_fill_in_the_blanks.summary.title'),
    desc: t('det_fill_in_the_blanks.summary.desc'),
    video_title: t('det_fill_in_the_blanks.summary.video_title'),
  };
});
const video_data = computed(() => {
  return {
    video_url: 'https://www.youtube.com/embed/YpDzyBUeOUk?si=XiTZSK_zPrr4q-u-',
    video_title: t('det_fill_in_the_blanks.video.video_title'),
  };
});

const ui_li_list = computed(() => {
  return [
    t('det_read_and_select_course.ui_li.li1'),
    t('det_read_and_select_course.ui_li.li2'),
    t('det_read_and_select_course.ui_li.li3'),
    t('det_read_and_select_course.ui_li.li4'),
    t('det_read_and_select_course.ui_li.li5'),
    t('det_read_and_select_course.ui_li.li6'),
    t('det_read_and_select_course.ui_li.li7'),
    t('det_read_and_select_course.ui_li.li8'),
  ];
});
const table_of_con_data = computed(() => {
  return {
    title: t('det_fill_in_the_blanks.table_of_con.title'),
    list: [
      { name: t('det_fill_in_the_blanks.table_of_con.li1'), children: [] },
      { name: t('det_fill_in_the_blanks.table_of_con.li2'), children: [] },
      {
        name: t('det_fill_in_the_blanks.table_of_con.li3'),
        children: [
          { name: t('det_fill_in_the_blanks.table_of_con.li3_1') },
          { name: t('det_fill_in_the_blanks.table_of_con.li3_2') },
          { name: t('det_fill_in_the_blanks.table_of_con.li3_3') },
          { name: t('det_fill_in_the_blanks.table_of_con.li3_4') },
          { name: t('det_fill_in_the_blanks.table_of_con.li3_5') },
        ],
      },
      { name: t('det_fill_in_the_blanks.table_of_con.li4'), children: [] },
    ],
  };
});
const desc_img_tipsArr = computed(() => {
  return [
    {
      h2: t('det_read_and_select_course.articelContent.a1_h2'),
      descArr: [t('det_read_and_select_course.articelContent.a1')],
      imgArr: ['/img/det-read-and-select-course/read-select-ui.png'],
      imgTipArr: [t('det_read_and_select_course.articelContent.t1')],
    },
    {
      descArr: [t('det_read_and_select_course.articelContent.a2')],
      imgArr: ['/img/det-read-and-select-course/read-select-intro-tips.jpg'],
      imgTipArr: [t('det_read_and_select_course.articelContent.t2')],
    },
    {
      descArr: [
        t('det_read_and_select_course.articelContent.a3'),
        t('det_read_and_select_course.articelContent.a3_1'),
        t('det_read_and_select_course.articelContent.a3_2'),
      ],
      imgArr: [],
      imgTipArr: [],
    },
    {
      h2: t('det_read_and_select_course.articelContent.a4_h2'),
      descArr: [t('det_read_and_select_course.articelContent.a4'), t('det_read_and_select_course.articelContent.a4_1')],
      imgArr: ['/img/det-read-and-select-course/roots-affixes-difference.jpg'],
      imgTipArr: [t('det_read_and_select_course.articelContent.t4')],
    },
    {
      h2: '',
      descArr: [
        t('det_read_and_select_course.articelContent.a5'),
        t('det_read_and_select_course.articelContent.a5_1'),
        t('det_read_and_select_course.articelContent.a5_2'),
        t('det_read_and_select_course.articelContent.a5_3'),
      ],
      imgArr: [],
      imgTipArr: [],
    },
    {
      h2: t('det_read_and_select_course.articelContent.a6_h2'),
      descArr: [t('det_read_and_select_course.articelContent.a6')],
      imgArr: ['/img/det-read-and-select-course/slush.png'],
      imgTipArr: [t('det_read_and_select_course.articelContent.t6')],
    },
    {
      h2: '',
      descArr: [t('det_read_and_select_course.articelContent.a7')],
      imgArr: ['/img/det-read-and-select-course/carriage.png'],
      imgTipArr: [t('det_read_and_select_course.articelContent.t7')],
    },
    {
      h2: '',
      descArr: [t('det_read_and_select_course.articelContent.a8')],
      imgArr: ['/img/det-read-and-select-course/bunny.png'],
      imgTipArr: [t('det_read_and_select_course.articelContent.t8')],
    },
    {
      h2: '',
      descArr: [t('det_read_and_select_course.articelContent.a9')],
      imgArr: ['/img/det-read-and-select-course/man-1.png'],
      imgTipArr: [t('det_read_and_select_course.articelContent.t9')],
    },
    {
      h2: '',
      descArr: [t('det_read_and_select_course.articelContent.a10')],
      imgArr: ['/img/det-read-and-select-course/guide.png'],
      imgTipArr: [t('det_read_and_select_course.articelContent.t10')],
    },
    {
      h2: '',
      descArr: [t('det_read_and_select_course.articelContent.a11')],
      imgArr: ['/img/det-read-and-select-course/intend.png'],
      imgTipArr: [t('det_read_and_select_course.articelContent.t11')],
    },
    {
      h2: '',
      descArr: [
        t('det_read_and_select_course.articelContent.a12'),
        t('det_read_and_select_course.articelContent.a12_1'),
      ],
      imgArr: ['/img/det-read-and-select-course/informal.png'],
      imgTipArr: [t('det_read_and_select_course.articelContent.t12')],
    },
    {
      h2: '',
      descArr: [t('det_read_and_select_course.articelContent.a13')],
      imgArr: ['/img/det-read-and-select-course/warning.png'],
      imgTipArr: [t('det_read_and_select_course.articelContent.t13')],
    },
    {
      h2: '',
      descArr: [t('det_read_and_select_course.articelContent.a14')],
      imgArr: ['/img/det-read-and-select-course/south-out.png'],
      imgTipArr: [t('det_read_and_select_course.articelContent.t14')],
    },
    {
      h2: '',
      descArr: [t('det_read_and_select_course.articelContent.a15')],
      imgArr: ['/img/det-read-and-select-course/pop-again.png'],
      imgTipArr: [t('det_read_and_select_course.articelContent.t15')],
    },
    {
      h2: '',
      descArr: [t('det_read_and_select_course.articelContent.a16')],
      imgArr: ['/img/det-read-and-select-course/grape-man.png'],
      imgTipArr: [t('det_read_and_select_course.articelContent.t16')],
    },
    {
      h2: '',
      descArr: [t('det_read_and_select_course.articelContent.a17')],
      imgArr: [],
      imgTipArr: [],
    },
    {
      h2: t('det_read_and_select_course.articelContent.a18_h2'),
      descArr: [
        t('det_read_and_select_course.articelContent.a18'),
        t('det_read_and_select_course.articelContent.a18_1'),
        t('det_read_and_select_course.articelContent.a18_2'),
      ],
      imgArr: [],
      imgTipArr: [],
    },
    {
      h2: t('det_read_and_select_course.articelContent.a19_h2'),
      descArr: [
        t('det_read_and_select_course.articelContent.a19'),
        t('det_read_and_select_course.articelContent.a19_1'),
        t('det_read_and_select_course.articelContent.a19_2'),
      ],
      imgArr: [],
      imgTipArr: [],
    },
    {
      h2: t('det_read_and_select_course.articelContent.a20_h2'),
      descArr: [t('det_read_and_select_course.articelContent.a20')],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const desc_img_tipsArr2 = computed(() => {
  return [
    {
      h2: null,
      descArr: [t('det_read_and_select_course.articelContent2.a1')],
      imgArr: [],
      imgTipArr: [],
    },
    {
      h2: null,
      descArr: [t('det_read_and_select_course.articelContent2.a2')],
      imgArr: [],
      imgTipArr: [],
    },
    {
      h2: null,
      descArr: [t('det_read_and_select_course.articelContent2.a3')],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const a_list_data = computed(() => {
  return [
    {
      name: t('det_read_and_select_course.a_list.a1name'),
      url: 'https://prep.detpractice.com/tag/duolingo-english-test/',
    },
    {
      name: t('det_read_and_select_course.a_list.a2name'),
      url: 'https://prep.detpractice.com/tag/duolingo-english-test-reading/',
    },
    {
      name: t('det_read_and_select_course.a_list.a3name'),
      url: 'https://prep.detpractice.com/tag/read-and-select/',
    },
  ];
});
</script>
<template>
  <div class="det_read_and_select_course_wrapper">
    <div class="det_read_and_select_course">
      <div class="det_read_and_select_course_left">
        <div class="banner_img">
          <img src="/img/det-fill-in-the-blanks/fill-in-the-blanks-lesson.jpg" alt="" />
        </div>
        <h1 class="h1 p_h1">{{ t('det_fill_in_the_blanks.h1') }}</h1>
        <Summary :title="summary_data.title" :desc="summary_data.desc" :video_title="summary_data.video_title" />

        <my_video :video_url="video_data.video_url" :video_title="video_data.video_title"></my_video>
        <table_of_con :title="table_of_con_data.title" :list="table_of_con_data.list" />
        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr" :key="index">
          <desc_img_tips :h2="item.h2" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
        </div>

        <p>{{ t('det_read_and_select_course.hit') }}</p>
        <h3>{{ t('det_read_and_select_course.recap') }}</h3>
        <ui_li :list="ui_li_list" />
        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr2" :key="index">
          <desc_img_tips :h2="item.h2" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
        </div>
        <a_list :list="a_list_data" />
      </div>
      <div class="det_read_and_select_course_right"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.det_read_and_select_course_wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 10vh;
  overflow: hidden;
  .det_read_and_select_course {
    display: grid;
    grid-template-columns: 1fr 340px;

    grid-gap: 28px;
    .det_read_and_select_course_left {
      flex-grow: 0;
      .banner_img {
        border-radius: 26px;
        overflow: hidden;
        margin-bottom: 2vh;
        img {
          width: 100%;
          height: auto;
        }
      }
      .h1 {
      }
      .Summary {
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;
      }
      .summayr_content {
      }
      .video_font {
      }
      .video_out {
        border: 1px red solid;
      }
    }
    .det_read_and_select_course_right {
      border: 1px blue solid;
      flex-shrink: 0;
    }
  }
}
</style>
<style lang="scss">
.p_h1 {
  font-size: 56px;
  font-weight: 600;
  line-height: 64px;
}
.p_h2 {
  font-size: 40px;
  font-weight: 500;
  margin: 0;
  padding: 0;
}
.p_text_center {
  text-align: center;
}
.p_mgt_20 {
  margin-top: 20px;
}
.p_mgb_20 {
  margin-bottom: 20px;
}
</style>
