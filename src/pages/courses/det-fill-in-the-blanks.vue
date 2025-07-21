<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { reactive } from 'vue';
import { domain } from '@/utils';
import desc_img_tips from '@/components/prepCompoment/desc_img_tips.vue';
import ui_li from '@/components/prepCompoment/ui_li.vue';
// import a_list from '@/components/prepCompoment/a_list.vue';
import Summary from '@/components/prepCompoment/summary.vue';
import my_video from '@/components/prepCompoment/video.vue';
import table_of_con from '@/components/prepCompoment/table_of_con.vue';
import complete_the_sen from '@/components/prepCompoment/complete_the_sen.vue';
import select_change from '@/components/prepCompoment/select_change.vue';

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
    { property: 'og:url', content: `https://www.${domain}${localePath('/courses/det-fill-in-the-blanks')}` },
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
    t('det_fill_in_the_blanks.ui_li.li1'),
    t('det_fill_in_the_blanks.ui_li.li2'),
    t('det_fill_in_the_blanks.ui_li.li3'),
    t('det_fill_in_the_blanks.ui_li.li4'),
    t('det_fill_in_the_blanks.ui_li.li5'),
    t('det_fill_in_the_blanks.ui_li.li6'),
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
      h2: t('det_fill_in_the_blanks.articelContent.a1_h2'),
      descArr: [t('det_fill_in_the_blanks.articelContent.a1')],
      imgArr: [
        {
          url: '/img/det-fill-in-the-blanks/fill-in-the-blanks.png',
          alt: 'A screenshot of DET fill in the blanks questions.',
        },
      ],
      imgTipArr: [t('det_fill_in_the_blanks.articelContent.t1')],
    },
    {
      descArr: [
        t('det_fill_in_the_blanks.articelContent.a2'),
        t('det_fill_in_the_blanks.articelContent.a2_1'),
        t('det_fill_in_the_blanks.articelContent.a2_2'),
        t('det_fill_in_the_blanks.articelContent.a2_3'),
      ],
      imgArr: [],
      imgTipArr: [],
    },
    {
      h2: t('det_fill_in_the_blanks.articelContent.a3_h2'),
      descArr: [t('det_fill_in_the_blanks.articelContent.a3')],
      imgArr: [
        {
          url: '/img/det-fill-in-the-blanks/intro-page-fill-in-the-blanks.png',
          alt: 'A screenshot of fill in the blanks intro page.',
        },
      ],
      imgTipArr: [t('det_fill_in_the_blanks.articelContent.t3')],
    },
    {
      h2: '',
      descArr: [t('det_fill_in_the_blanks.articelContent.a4')],
      imgArr: [],
      imgTipArr: [],
    },
    {
      h2: t('det_fill_in_the_blanks.articelContent.a5_h2'),
      h3: t('det_fill_in_the_blanks.articelContent.a5_h3'),
      descArr: [t('det_fill_in_the_blanks.articelContent.a5')],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const comp_the_s1 = computed(() => {
  return [
    {
      title: t('det_fill_in_the_blanks.cts.title'),
      test: 'The impact of <span class="word_box">w</span><span class="word_box">i</span><span class="word_box">c</span><span class="word_box">k</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span>  as a force that undermines social cohesion is counteracted by acts of kindness.',
    },
  ];
});
const comp_the_s2 = computed(() => {
  return [
    {
      title: t('det_fill_in_the_blanks.cts.title'),
      test: 'Hey, remember to <span class="word_box">c</span><span class="word_box">i</span><span class="word_box">r</span><span class="word_box">c</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span>  those party invitations to all the guests, we need to spread the word quickly.',
    },
  ];
});
const comp_the_s3 = computed(() => {
  return [
    {
      title: t('det_fill_in_the_blanks.cts.title'),
      test: 'An election winner is determined when the votes for one candidate <span class="word_box">o</span><span class="word_box">u</span><span class="word_box">t</span><span class="word_box">n</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span>  the votes for the other candidates.',
    },
  ];
});
const comp_the_s4 = computed(() => {
  return [
    {
      title: t('det_fill_in_the_blanks.cts.title'),
      test: 'Despite heavy rain, a large <span class="word_box">c</span><span class="word_box">r</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span> turned up to support the local soccer team.',
    },
  ];
});
const comp_the_s5 = computed(() => {
  return [
    {
      title: t('det_fill_in_the_blanks.cts.title'),
      test: 'Having a hearty meal always seems to <span class="word_box">e</span><span class="word_box">n</span><span class="word_box">e</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span> me for the rest of the day.',
    },
  ];
});
const comp_the_s6 = computed(() => {
  return [
    {
      title: t('det_fill_in_the_blanks.cts.title'),
      test: 'I’ve been mulling over ideas about life’s purpose, kind of like a personal <span class="word_box">p</span><span class="word_box">h</span><span class="word_box">i</span><span class="word_box">l</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span> me for the rest of the day.',
    },
  ];
});
const comp_the_s7 = computed(() => {
  return [
    {
      title: t('det_fill_in_the_blanks.cts.title'),
      test: 'Smiling at her finished painting, she was <span class="word_box">p</span><span class="word_box">l</span><span class="word_box">e</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span> to see her emotions coming to life on the canvas.',
    },
  ];
});
const comp_the_s8 = computed(() => {
  return [
    {
      title: t('det_fill_in_the_blanks.cts.title'),
      test: 'In the film, the storm was used <span class="word_box">s</span><span class="word_box">y</span><span class="word_box">m</span><span class="word_box">b</span><span class="word_box">o</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span><span class="word_box">&nbsp;</span> to indicate the character’s inner turmoil.',
    },
  ];
});
const desc_img_tipsArr2 = computed(() => {
  return [
    {
      h2: '',
      descArr: [t('det_fill_in_the_blanks.articelContent2.a1'), t('det_fill_in_the_blanks.articelContent2.a2')],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const desc_img_tipsArr3 = computed(() => {
  return [
    {
      h2: '',
      descArr: [t('det_fill_in_the_blanks.articelContent3.a1')],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const desc_img_tipsArr4 = computed(() => {
  return [
    {
      h3: t('det_fill_in_the_blanks.articelContent4.h3'),
      descArr: [t('det_fill_in_the_blanks.articelContent4.a1')],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const desc_img_tipsArr5 = computed(() => {
  return [
    {
      h3: '',
      descArr: [t('det_fill_in_the_blanks.articelContent5.a1')],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const desc_img_tipsArr6 = computed(() => {
  return [
    {
      h3: t('det_fill_in_the_blanks.articelContent6.h3'),
      descArr: [t('det_fill_in_the_blanks.articelContent6.a1')],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const desc_img_tipsArr7 = computed(() => {
  return [
    {
      h3: '',
      descArr: [t('det_fill_in_the_blanks.articelContent7.a1'), t('det_fill_in_the_blanks.articelContent7.a2')],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const desc_img_tipsArr8 = computed(() => {
  return [
    {
      h3: '',
      descArr: [t('det_fill_in_the_blanks.articelContent8.a1')],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const desc_img_tipsArr9 = computed(() => {
  return [
    {
      h3: t('det_fill_in_the_blanks.articelContent9.h3'),
      descArr: [t('det_fill_in_the_blanks.articelContent9.a1')],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const desc_img_tipsArr10 = computed(() => {
  return [
    {
      h3: '',
      descArr: [t('det_fill_in_the_blanks.articelContent10.a1')],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const desc_img_tipsArr11 = computed(() => {
  return [
    {
      h3: t('det_fill_in_the_blanks.articelContent11.h3'),
      descArr: [t('det_fill_in_the_blanks.articelContent11.a1')],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const desc_img_tipsArr12 = computed(() => {
  return [
    {
      h3: '',
      descArr: [t('det_fill_in_the_blanks.articelContent12.a1'), t('det_fill_in_the_blanks.articelContent12.a2')],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const desc_img_tipsArr13 = computed(() => {
  return [
    {
      h3: '',
      descArr: [t('det_fill_in_the_blanks.articelContent13.a1')],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const desc_img_tipsArr14 = computed(() => {
  return [
    {
      h2: t('det_fill_in_the_blanks.articelContent14.h2'),
      descArr: [t('det_fill_in_the_blanks.articelContent14.a1')],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const desc_img_tipsArr15 = computed(() => {
  return [
    {
      h2: '',
      descArr: [
        t('det_fill_in_the_blanks.articelContent15.a1'),
        t('det_fill_in_the_blanks.articelContent15.a2'),
        t('det_fill_in_the_blanks.articelContent15.a3'),
      ],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const a_list_data = computed(() => {
  return [
    {
      name: t('det_fill_in_the_blanks.a_list.a1name'),
      url: 'https://prep.detpractice.com/tag/duolingo-english-test/',
    },
    {
      name: t('det_fill_in_the_blanks.a_list.a2name'),
      url: 'https://prep.detpractice.com/tag/duolingo-english-test-course/',
    },
    {
      name: t('det_fill_in_the_blanks.a_list.a3name'),
      url: 'https://prep.detpractice.com/tag/duolingo-english-test-reading/',
    },
  ];
});
</script>
<template>
  <div class="common_prep_wrapper det_read_and_select_course_wrapper">
    <div class="top">
      <nuxt-link :to="localePath('/')" class="hoverGiveBorder">Home</nuxt-link>
      >

      <nuxt-link :to="localePath('/courses')" class="hoverGiveBorder">Courses</nuxt-link>
      > {{ t('courses.four_change_right_data.data1.video2data.title') }} {{ t('courses.prepCourse') }}
    </div>
    <div class="common_prep_out det_read_and_select_course">
      <div class="common_prep_left det_read_and_select_course_left">
        <h1 class="h1 p_h1">{{ t('det_fill_in_the_blanks.h1') }}</h1>
        <Summary :title="summary_data.title" :desc="summary_data.desc" :video_title="summary_data.video_title" />

        <my_video :video_url="video_data.video_url" :video_title="video_data.video_title"></my_video>
        <table_of_con :title="table_of_con_data.title" :list="table_of_con_data.list" />
        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr" :key="index">
          <desc_img_tips
            :h2="item.h2"
            :h3="item.h3"
            :descArr="item.descArr"
            :imgArr="item.imgArr"
            :imgTipArr="item.imgTipArr"
          />
        </div>
        <complete_the_sen :list="comp_the_s1" />
        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr2" :key="index">
          <desc_img_tips
            :h2="item.h2"
            :h3="item.h3"
            :descArr="item.descArr"
            :imgArr="item.imgArr"
            :imgTipArr="item.imgTipArr"
          />
        </div>

        <complete_the_sen :list="comp_the_s2" />
        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr3" :key="index">
          <desc_img_tips :h2="item.h2" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
        </div>
        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr4" :key="index">
          <desc_img_tips :h3="item.h3" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
        </div>
        <complete_the_sen :list="comp_the_s3" />
        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr5" :key="index">
          <desc_img_tips :h3="item.h3" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
        </div>
        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr6" :key="index">
          <desc_img_tips :h3="item.h3" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
        </div>

        <complete_the_sen :list="comp_the_s4" />
        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr7" :key="index">
          <desc_img_tips :h3="item.h3" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
        </div>
        <complete_the_sen :list="comp_the_s5" />
        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr8" :key="index">
          <desc_img_tips :h3="item.h3" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
        </div>
        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr9" :key="index">
          <desc_img_tips :h3="item.h3" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
        </div>
        <complete_the_sen :list="comp_the_s6" />
        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr10" :key="index">
          <desc_img_tips :h3="item.h3" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
        </div>
        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr11" :key="index">
          <desc_img_tips :h3="item.h3" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
        </div>

        <complete_the_sen :list="comp_the_s7" />
        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr12" :key="index">
          <desc_img_tips :h3="item.h3" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
        </div>
        <complete_the_sen :list="comp_the_s8" />
        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr13" :key="index">
          <desc_img_tips :h3="item.h3" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
        </div>
        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr14" :key="index">
          <desc_img_tips :h2="item.h2" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
        </div>

        <ui_li :list="ui_li_list" />
        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr15" :key="index">
          <desc_img_tips :h2="item.h2" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
        </div>
        <!-- <a_list :list="a_list_data" /> -->
      </div>
      <div class="common_prep_right">
        <div class="tree_out">
          <select_change />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
<style lang="scss">
@import '@/assets/prep.scss';
</style>
