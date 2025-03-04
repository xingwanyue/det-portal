<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { reactive } from 'vue';
import { domain } from '@/utils';
import desc_img_tips from '@/components/prepCompoment/desc_img_tips.vue';
import ui_li from '@/components/prepCompoment/ui_li.vue';
import a_list from '@/components/prepCompoment/a_list.vue';

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
const right_or_wrong_word_out = computed(() => {
  return [
    {
      word: 'correct',
      is_correct: true,
    },
    {
      word: 'incorrect',
      is_correct: false,
    },
    {
      word: 'indispensable',
      is_correct: true,
    },
    {
      word: 'interruption',
      is_correct: false,
    },
    {
      word: 'believe',
      is_correct: true,
    },
    {
      word: 'recieve',
      is_correct: false,
    },
    {
      word: 'accommodate',
      is_correct: true,
    },
    {
      word: 'separate',
      is_correct: false,
    },
    {
      word: 'existence',
      is_correct: true,
    },
    {
      word: 'accross',
      is_correct: false,
    },
    {
      word: 'definitely',
      is_correct: true,
    },
    {
      word: 'ocurrance',
      is_correct: false,
    },
    {
      word: 'achievement',
      is_correct: true,
    },
    {
      word: 'maintenence',
      is_correct: false,
    },
    {
      word: 'privilege',
      is_correct: true,
    },
    {
      word: 'wierd',
      is_correct: false,
    },
    {
      word: 'successful',
      is_correct: true,
    },
    {
      word: 'tommorow',
      is_correct: false,
    },
    {
      word: 'recommend',
      is_correct: true,
    },
    {
      word: 'acknowledgment',
      is_correct: false,
    },
    {
      word: 'embarrass',
      is_correct: true,
    },
    {
      word: 'neccessary',
      is_correct: false,
    },
    {
      word: 'conscientious',
      is_correct: true,
    },
    {
      word: 'harrass',
      is_correct: false,
    },
    {
      word: 'supersede',
      is_correct: true,
    },
    {
      word: 'occurence',
      is_correct: false,
    },
    {
      word: 'irresistible',
      is_correct: true,
    },
    {
      word: 'occured',
      is_correct: false,
    },
    {
      word: 'judgement',
      is_correct: true,
    },
    {
      word: 'license',
      is_correct: false,
    },
    {
      word: 'friend',
      is_correct: true,
    },
    {
      word: 'until',
      is_correct: false,
    },
    {
      word: 'noticeable',
      is_correct: true,
    },
    {
      word: 'accomodate',
      is_correct: false,
    },
    {
      word: 'guarantee',
      is_correct: true,
    },
    {
      word: 'beginning',
      is_correct: false,
    },
    {
      word: 'referred',
      is_correct: true,
    },
    {
      word: 'arguement',
      is_correct: false,
    },
    {
      word: 'necessary',
      is_correct: true,
    },
    {
      word: 'misspell',
      is_correct: true,
    },
    {
      word: 'occasionally',
      is_correct: true,
    },
    {
      word: 'restarant',
      is_correct: false,
    },
    {
      word: 'mischievous',
      is_correct: true,
    },
    {
      word: 'perseverance',
      is_correct: true,
    },
    {
      word: 'occurred',
      is_correct: true,
    },
    {
      word: 'noticeable',
      is_correct: false,
    },
    {
      word: 'rhythm',
      is_correct: true,
    },
    {
      word: 'remember',
      is_correct: false,
    },
    {
      word: 'receipt',
      is_correct: true,
    },
    {
      word: 'definately',
      is_correct: false,
    },
    {
      word: 'discipline',
      is_correct: true,
    },
    {
      word: 'apparent',
      is_correct: true,
    },
    {
      word: 'consensus',
      is_correct: true,
    },
    {
      word: 'publicly',
      is_correct: true,
    },
    {
      word: 'sieze',
      is_correct: false,
    },
    {
      word: 'separate',
      is_correct: true,
    },
    {
      word: 'definite',
      is_correct: true,
    },
    {
      word: 'immediatly',
      is_correct: false,
    },
    {
      word: 'category',
      is_correct: true,
    },
    {
      word: 'independent',
      is_correct: true,
    },
    {
      word: 'truly',
      is_correct: true,
    },
    {
      word: 'acceptible',
      is_correct: false,
    },
    {
      word: 'recommendation',
      is_correct: true,
    },
    {
      word: 'facinating',
      is_correct: false,
    },
    {
      word: 'grateful',
      is_correct: true,
    },
    {
      word: 'until',
      is_correct: false,
    },
    {
      word: 'acknowledge',
      is_correct: true,
    },
    {
      word: 'neccessary',
      is_correct: false,
    },
    {
      word: 'environment',
      is_correct: true,
    },
    {
      word: 'occuring',
      is_correct: false,
    },
    {
      word: 'their',
      is_correct: true,
    },
    {
      word: 'truly',
      is_correct: false,
    },
    {
      word: 'pharaoh',
      is_correct: true,
    },
    {
      word: 'occuring',
      is_correct: false,
    },
    {
      word: 'pronunciation',
      is_correct: true,
    },
    {
      word: 'until',
      is_correct: false,
    },
    {
      word: 'pastime',
      is_correct: true,
    },
    {
      word: 'calender',
      is_correct: false,
    },
    {
      word: 'occurance',
      is_correct: false,
    },
    {
      word: 'accommodate',
      is_correct: true,
    },
    {
      word: 'separate',
      is_correct: true,
    },
    {
      word: 'calendar',
      is_correct: true,
    },
    {
      word: 'believe',
      is_correct: true,
    },
    {
      word: 'recieve',
      is_correct: false,
    },
    {
      word: 'prejudice',
      is_correct: true,
    },
    {
      word: 'immediate',
      is_correct: true,
    },
    {
      word: 'existance',
      is_correct: false,
    },
    {
      word: 'humorous',
      is_correct: true,
    },
    {
      word: 'colleague',
      is_correct: true,
    },
    {
      word: 'refered',
      is_correct: false,
    },
    {
      word: 'knowledge',
      is_correct: true,
    },
    {
      word: 'questionnaire',
      is_correct: true,
    },
    {
      word: 'indispensible',
      is_correct: false,
    },
    {
      word: 'irresistable',
      is_correct: false,
    },
    {
      word: 'millenium',
      is_correct: false,
    },
    {
      word: 'occurence',
      is_correct: false,
    },
    {
      word: 'permanent',
      is_correct: true,
    },
    {
      word: 'occurance',
      is_correct: true,
    },
    {
      word: 'supersede',
      is_correct: true,
    },
    {
      word: 'neccessary',
      is_correct: false,
    },
  ];
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
const openShowWrongWord = ref(false);
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
        <div class="right_or_wrong_word_out">
          <div class="right_or_wrong_word_out_item" v-for="(item, index) in right_or_wrong_word_out" :key="index">
            <template v-if="openShowWrongWord">
              <div
                :class="
                  item.is_correct
                    ? 'right_or_wrong_word_out_item_is_correct'
                    : 'right_or_wrong_word_out_item_is_correct right_or_wrong_word_out_item_is_correct_false'
                "
              ></div>
              <div
                :class="
                  item.is_correct
                    ? 'right_or_wrong_word_out_item_word'
                    : 'right_or_wrong_word_out_item_word right_or_wrong_word_out_item_word_false'
                "
              >
                {{ item.word }}
              </div>
            </template>
            <template v-else>
              <div class="right_or_wrong_word_out_item_is_correct"></div>
              <div class="right_or_wrong_word_out_item_word">{{ item.word }}</div>
            </template>
          </div>
        </div>
        <div class="show_wrong_word_btn" @click="openShowWrongWord = !openShowWrongWord">Show Answer</div>
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
      .right_or_wrong_word_out {
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));

        .right_or_wrong_word_out_item {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          grid-gap: 10px;
          margin-bottom: 10px;
          .right_or_wrong_word_out_item_is_correct {
            background-color: rgb(17, 17, 17);
            width: 4px;
            height: 4px;
            border-radius: 50%;
          }
          .right_or_wrong_word_out_item_is_correct_false {
            background-color: rgb(255, 0, 0);
          }
          .right_or_wrong_word_out_item_word {
            color: rgb(17, 17, 17);
          }
          .right_or_wrong_word_out_item_word_false {
            color: rgb(255, 0, 0);
          }
        }
      }
      .show_wrong_word_btn {
        background: #f66442;
        border-radius: 4px;
        font-weight: 500;
        font-size: 16px;
        color: #ffffff;
        line-height: 22px;
        padding: 11px 16px;
        cursor: pointer;
        width: fit-content;
        margin: 0 auto;
        margin-top: 25px;
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
