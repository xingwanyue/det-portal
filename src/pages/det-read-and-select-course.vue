<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { reactive } from 'vue';
import { domain } from '@/utils';
import desc_img_tips from '@/components/prepCompoment/desc_img_tips.vue';

const state = reactive({});
useSeoMeta({
  title: t('det_read_and_select_course.seometa.title'),
  description: t('tos.seometa.description'),
});

const localePath = useLocalePath();
useHead({
  meta: [
    { name: 'DC.title', content: t('det_read_and_select_course.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('det_read_and_select_course.seometa.title') },
    { property: 'og:description', content: t('tos.seometa.description') },
    { property: 'og:url', content: `https://www.${domain}${localePath('/det-read-and-select-course')}` },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: t('det_read_and_select_course.seometa.title') },
    {
      name: 'twitter:description',
      content: t('tos.seometa.description'),
    },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
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
</script>
<template>
  <div class="det_read_and_select_course_wrapper">
    <div class="det_read_and_select_course">
      <div class="det_read_and_select_course_left">
        <div class="banner_img">
          <img src="/img/det-read-and-select-course/read_select_course.jpg" alt="" />
        </div>
        <h1 class="h1 p_h1">DET Prep Course: Read and Select Questions</h1>
        <div class="Summary p_mgt_20">Summary</div>
        <div class="summayr_content">
          This comprehensive guide focuses on the “Read and Select” question type in the Duolingo English Test. It
          covers the format, importance of word spelling, tips for answering questions, and strategies for preparation.
          The post also delves into word formation, roots, affixes, and common error patterns to help test-takers
          improve their performance.
        </div>
        <div class="video_font p_mgt_20 p_mgb_20">A video version of this course:</div>
        <div class="video_out">video</div>
        <h2 class="p_h2 p_mgt_20">Table of Contents</h2>
        <div class="ul_of_contents">
          <ul>
            <li>1. “Read and Select” Questions Format and Time Constraints</li>
            <li>2. Word Formation: Roots and Affixes</li>
            <ul>
              <li>2.1 Understanding Word Roots</li>
              <li>2.2 Prefixes and Suffixes</li>
              <li>2.3 Differences Between Roots and Affixes</li>
            </ul>
            <li>3. Common Error Patterns</li>
            <ul>
              <li>3.1 Similar Words</li>
              <li>3.2 Letter Substitution, Addition, and Omission</li>
              <li>3.3 Word Form Errors</li>
            </ul>
            <li>4. Tips from the Duolingo English Test Official Guide</li>
            <li>5. Test-Taking and Preparation Suggestions</li>
            <li>6. Practice Questions</li>
          </ul>
        </div>

        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr" :key="index">
          <desc_img_tips :h2="item.h2" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
        </div>
      </div>
      <div class="det_read_and_select_course_right">
        First, let’s introduce this question format. “Read and Select”, also known as “Word Recognition”, primarily
        assesses the test taker’s familiarity with word spelling. The format is straightforward – during the test, you
        will need to determine whether the word displayed on the screen is spelled correctly and click the corresponding
        button to indicate if it is correct or not. This question type appears 15 to 18 times in the actual test. Each
        time, a word will be shown in the center of the screen, and you will have only 5 seconds to make a judgment.
      </div>
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
