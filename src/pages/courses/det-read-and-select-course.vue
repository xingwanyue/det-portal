<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { reactive } from 'vue';
import { domain } from '@/utils';
import desc_img_tips from '@/components/prepCompoment/desc_img_tips.vue';
import Summary from '@/components/prepCompoment/summary.vue';
import my_video from '@/components/prepCompoment/video.vue';
import table_of_con from '@/components/prepCompoment/table_of_con.vue';
import select_change from '@/components/prepCompoment/select_change.vue';

const state = reactive({});
useSeoMeta({
  title: t('det_read_and_select_course.seometa.title'),
  description: t('det_read_and_select_course.seometa.description'),
});

const localePath = useLocalePath();
useHead({
  meta: [
    { name: 'DC.title', content: t('det_read_and_select_course.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('det_read_and_select_course.seometa.title') },
    { property: 'og:description', content: t('tos.seometa.description') },
    { property: 'og:url', content: `https://www.${domain}${localePath('/courses/det-read-and-select-course')}` },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: t('det_read_and_select_course.seometa.title') },
    {
      name: 'twitter:description',
      content: t('det_read_and_select_course.seometa.description'),
    },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
});
const summary_data = computed(() => {
  return {
    title: t('det_read_and_select_course.summary.title'),
    desc: t('det_read_and_select_course.summary.desc'),
    video_title: t('det_read_and_select_course.summary.video_title'),
  };
});
const video_data = computed(() => {
  return {
    video_url: 'https://www.youtube.com/embed/J7ymVabfTJk?si=f0UJjprrSbKXba49',
    video_title: t('det_read_and_select_course.video.video_title'),
  };
});
const table_of_con_data = computed(() => {
  return {
    title: t('det_read_and_select_course.table_of_con.title'),
    list: [
      { name: t('det_read_and_select_course.table_of_con.li1'), children: [] },
      {
        name: t('det_read_and_select_course.table_of_con.li2'),
        children: [
          { name: t('det_read_and_select_course.table_of_con.li2_1') },
          { name: t('det_read_and_select_course.table_of_con.li2_2') },
          { name: t('det_read_and_select_course.table_of_con.li2_3') },
        ],
      },
      {
        name: t('det_read_and_select_course.table_of_con.li3'),
        children: [
          { name: t('det_read_and_select_course.table_of_con.li3_1') },
          { name: t('det_read_and_select_course.table_of_con.li3_2') },
          { name: t('det_read_and_select_course.table_of_con.li3_3') },
        ],
      },
      { name: t('det_read_and_select_course.table_of_con.li4'), children: [] },
      { name: t('det_read_and_select_course.table_of_con.li5'), children: [] },
      { name: t('det_read_and_select_course.table_of_con.li6'), children: [] },
    ],
  };
});
const table_of_con_data2 = computed(() => {
  return {
    title: t('det_read_and_select_course.table_of_con2.title'),
    list: [
      { name: t('det_read_and_select_course.table_of_con2.li1'), children: [] },
      { name: t('det_read_and_select_course.table_of_con2.li2'), children: [] },
      { name: t('det_read_and_select_course.table_of_con2.li3'), children: [] },
      { name: t('det_read_and_select_course.table_of_con2.li4'), children: [] },
      { name: t('det_read_and_select_course.table_of_con2.li5'), children: [] },
      { name: t('det_read_and_select_course.table_of_con2.li6'), children: [] },
      { name: t('det_read_and_select_course.table_of_con2.li7'), children: [] },
      { name: t('det_read_and_select_course.table_of_con2.li8'), children: [] },
    ],
  };
});
const desc_img_tipsArr = computed(() => {
  return [
    {
      h2: t('det_read_and_select_course.articelContent.a1_h2'),
      descArr: [t('det_read_and_select_course.articelContent.a1')],
      imgArr: [
        {
          url: '/img/det-read-and-select-course/read-select-ui.png',
          alt: 'The UI of Duolingo English Test "Read and Select" Questions.',
        },
      ],
      imgTipArr: [t('det_read_and_select_course.articelContent.t1')],
    },
    {
      descArr: [t('det_read_and_select_course.articelContent.a2')],
      imgArr: [
        {
          url: '/img/det-read-and-select-course/read-select-intro-tips.jpg',
          alt: 'Tips and introduction to DET read and select questions.',
        },
      ],
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
      imgArr: [
        {
          url: '/img/det-read-and-select-course/roots-affixes-difference.jpg',
          alt: 'The differences between word roots and affixes, with examples and illustrations.',
        },
      ],
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
      imgArr: [
        {
          url: '/img/det-read-and-select-course/slush.png',
          alt: 'An example of common patterns of frequently misspelled words: snush',
        },
      ],
      imgTipArr: [t('det_read_and_select_course.articelContent.t6')],
    },
    {
      h2: '',
      descArr: [t('det_read_and_select_course.articelContent.a7')],
      imgArr: [
        {
          url: '/img/det-read-and-select-course/carriage.png',
          alt: 'An example of common patterns of frequently misspelled words: carriage.',
        },
      ],
      imgTipArr: [t('det_read_and_select_course.articelContent.t7')],
    },
    {
      h2: '',
      descArr: [t('det_read_and_select_course.articelContent.a8')],
      imgArr: [
        {
          url: '/img/det-read-and-select-course/bunny.png',
          alt: 'An example of common patterns of frequently misspelled words: bunny',
        },
      ],
      imgTipArr: [t('det_read_and_select_course.articelContent.t8')],
    },
    {
      h2: '',
      descArr: [t('det_read_and_select_course.articelContent.a9')],
      imgArr: [
        {
          url: '/img/det-read-and-select-course/man-1.png',
          alt: 'An example of common patterns of frequently misspelled words: man',
        },
      ],
      imgTipArr: [t('det_read_and_select_course.articelContent.t9')],
    },
    {
      h2: '',
      descArr: [t('det_read_and_select_course.articelContent.a10')],
      imgArr: [
        {
          url: '/img/det-read-and-select-course/guide.png',
          alt: 'An example of common patterns of frequently misspelled words: guide',
        },
      ],
      imgTipArr: [t('det_read_and_select_course.articelContent.t10')],
    },
    {
      h2: '',
      descArr: [t('det_read_and_select_course.articelContent.a11')],
      imgArr: [
        {
          url: '/img/det-read-and-select-course/intend.png',
          alt: 'An example of common patterns of frequently misspelled words: intend',
        },
      ],
      imgTipArr: [t('det_read_and_select_course.articelContent.t11')],
    },
    {
      h2: '',
      descArr: [
        t('det_read_and_select_course.articelContent.a12'),
        t('det_read_and_select_course.articelContent.a12_1'),
      ],
      imgArr: [
        {
          url: '/img/det-read-and-select-course/informal.png',
          alt: 'An example of common patterns of frequently misspelled words: informal',
        },
      ],
      imgTipArr: [t('det_read_and_select_course.articelContent.t12')],
    },
    {
      h2: '',
      descArr: [t('det_read_and_select_course.articelContent.a13')],
      imgArr: [
        {
          url: '/img/det-read-and-select-course/warning.png',
          alt: 'An example of common patterns of frequently misspelled words: warning',
        },
      ],
      imgTipArr: [t('det_read_and_select_course.articelContent.t13')],
    },
    {
      h2: '',
      descArr: [t('det_read_and_select_course.articelContent.a14')],
      imgArr: [
        {
          url: '/img/det-read-and-select-course/south-out.png',
          alt: 'An example of common patterns of frequently misspelled words: south + out',
        },
      ],
      imgTipArr: [t('det_read_and_select_course.articelContent.t14')],
    },
    {
      h2: '',
      descArr: [t('det_read_and_select_course.articelContent.a15')],
      imgArr: [
        {
          url: '/img/det-read-and-select-course/pop-again.png',
          alt: 'An example of common patterns of frequently misspelled words: pop + again',
        },
      ],
      imgTipArr: [t('det_read_and_select_course.articelContent.t15')],
    },
    {
      h2: '',
      descArr: [t('det_read_and_select_course.articelContent.a16')],
      imgArr: [
        {
          url: '/img/det-read-and-select-course/grape-man.png',
          alt: 'An example of common patterns of frequently misspelled words: grape + man',
        },
      ],
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
        t('det_read_and_select_course.articelContent.a19_3'),
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
  <div class="common_prep_wrapper det_read_and_select_course_wrapper">
    <div class="top">
      <nuxt-link :to="localePath('/')" class="hoverGiveBorder">Home</nuxt-link>
      >

      <nuxt-link :to="localePath('/courses')" class="hoverGiveBorder">Courses</nuxt-link>
      > {{ t('courses.four_change_right_data.data1.video1data.title') }} {{ t('courses.prepCourse') }}
    </div>
    <div class="common_prep_out det_read_and_select_course">
      <div class="common_prep_left det_read_and_select_course_left">
        <h1 class="h1 p_h1">{{ t('det_read_and_select_course.h1') }}</h1>
        <Summary :title="summary_data.title" :desc="summary_data.desc" :video_title="summary_data.video_title" />
        <my_video :title="video_data.video_title" :video_url="video_data.video_url" />
        <table_of_con :title="table_of_con_data.title" :list="table_of_con_data.list" />
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
        <div class="prep_button" @click="openShowWrongWord = !openShowWrongWord">Show Answer</div>
        <p>{{ t('det_read_and_select_course.hit') }}</p>
        <table_of_con :nohref="true" :title="table_of_con_data2.title" :list="table_of_con_data2.list" />
        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr2" :key="index">
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
<style lang="scss" scoped>
.det_read_and_select_course_wrapper {
  .det_read_and_select_course {
    .det_read_and_select_course_left {
      flex-grow: 0;

      .Summary {
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;
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
    }
  }
}
</style>
<style>
@import '@/assets/prep.scss';
</style>
