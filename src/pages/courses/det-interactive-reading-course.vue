<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { reactive } from 'vue';
import { domain } from '@/utils';
import desc_img_tips from '@/components/prepCompoment/desc_img_tips.vue';
// import a_list from '@/components/prepCompoment/a_list.vue';
import Summary from '@/components/prepCompoment/summary.vue';
import my_video from '@/components/prepCompoment/video.vue';
import table_of_con from '@/components/prepCompoment/table_of_con.vue';
import test_one from '@/components/prepCompoment/interactive_reading/test_one.vue';
import test_two from '@/components/prepCompoment/interactive_reading/test_two.vue';
import test_three from '@/components/prepCompoment/interactive_reading/test_three.vue';
import select_change from '@/components/prepCompoment/select_change.vue';

const state = reactive({});
useSeoMeta({
  title: t('det_interactive_reading_course.seometa.title'),
  description: t('det_interactive_reading_course.seometa.description'),
});

const localePath = useLocalePath();
useHead({
  meta: [
    { name: 'DC.title', content: t('det_interactive_reading_course.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('det_interactive_reading_course.seometa.title') },
    { property: 'og:description', content: t('det_interactive_reading_course.seometa.description') },
    { property: 'og:url', content: `https://www.${domain}${localePath('/courses/det-interactive-reading-course')}` },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: t('det_interactive_reading_course.seometa.title') },
    {
      name: 'twitter:description',
      content: t('det_interactive_reading_course.seometa.description'),
    },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
});
const summary_data = computed(() => {
  return {
    title: t('det_interactive_reading_course.summary.title'),
    desc: t('det_interactive_reading_course.summary.desc'),
    video_title: t('det_interactive_reading_course.summary.video_title'),
  };
});
const video_data = computed(() => {
  return {
    video_url: 'https://www.youtube.com/embed/k7kIedxU9og?si=RnYYLSU6z9Hc73ID',
    video_title: t('det_interactive_reading_course.video.video_title'),
  };
});

const table_of_con_data = computed(() => {
  return {
    title: t('det_interactive_reading_course.table_of_con.title'),
    list: [
      { name: t('det_interactive_reading_course.table_of_con.li1'), children: [] },
      { name: t('det_interactive_reading_course.table_of_con.li2'), children: [] },
      { name: t('det_interactive_reading_course.table_of_con.li3'), children: [] },
      { name: t('det_interactive_reading_course.table_of_con.li4'), children: [] },
      { name: t('det_interactive_reading_course.table_of_con.li5'), children: [] },
      { name: t('det_interactive_reading_course.table_of_con.li6'), children: [] },
      { name: t('det_interactive_reading_course.table_of_con.li7'), children: [] },
    ],
  };
});
const desc_img_tipsArr = computed(() => {
  return [
    {
      h2: '',
      descArr: [t('det_interactive_reading_course.articelContent.a1')],
      imgArr: [],
      imgTipArr: [],
    },
    {
      h2: t('det_interactive_reading_course.articelContent.a2_h2'),
      descArr: [t('det_interactive_reading_course.articelContent.a2')],
      imgArr: [
        {
          url: '/img/det-interactive-reading-course/interactive-reading.png',
          alt: 'The first screen of Interactive Reading questions from Duolingo English Test.',
        },
      ],
      imgTipArr: [t('det_interactive_reading_course.articelContent.t2')],
    },
    {
      h2: '',
      descArr: [
        t('det_interactive_reading_course.articelContent.a3'),
        t('det_interactive_reading_course.articelContent.a3_1'),
      ],
      imgArr: [],
      imgTipArr: [],
    },
    {
      h2: t('det_interactive_reading_course.articelContent.a4_h2'),
      descArr: [t('det_interactive_reading_course.articelContent.a4')],
      imgArr: [
        {
          url: '/img/det-interactive-reading-course/complete-the-sentence.png',
          alt: 'A screenshot of DET Interactive Reading: Complete the Sentence.',
        },
      ],
      imgTipArr: [t('det_interactive_reading_course.articelContent.t4')],
    },
    {
      h2: '',
      descArr: [
        t('det_interactive_reading_course.articelContent.a5'),
        t('det_interactive_reading_course.articelContent.a5_1'),
        t('det_interactive_reading_course.articelContent.a5_2'),
        t('det_interactive_reading_course.articelContent.a5_3'),
        t('det_interactive_reading_course.articelContent.a5_4'),
      ],
      imgArr: [
        {
          url: '/img/det-interactive-reading-course/interactive-reading-sample-question.jpg',
          alt: 'Sample question 1 of DET interactive reading questions.',
        },
      ],
      imgTipArr: [t('det_interactive_reading_course.articelContent.t5')],
    },
    {
      h2: '',
      descArr: [
        t('det_interactive_reading_course.articelContent.a6'),
        t('det_interactive_reading_course.articelContent.a6_1'),
        t('det_interactive_reading_course.articelContent.a6_2'),
      ],
      imgArr: [],
      imgTipArr: [],
    },
    {
      h3: t('det_interactive_reading_course.articelContent.a7_h3'),
      descArr: [],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});

const desc_img_tipsArr2 = computed(() => {
  return [
    {
      h2: '',
      descArr: [
        t('det_interactive_reading_course.articelContent2.a1'),
        t('det_interactive_reading_course.articelContent2.a1_1'),
        t('det_interactive_reading_course.articelContent2.a1_2'),
        t('det_interactive_reading_course.articelContent2.a1_3'),
        t('det_interactive_reading_course.articelContent2.a1_4'),
        t('det_interactive_reading_course.articelContent2.a1_5'),
        t('det_interactive_reading_course.articelContent2.a1_6'),
        t('det_interactive_reading_course.articelContent2.a1_7'),
      ],
      imgArr: [],
      imgTipArr: [],
    },
    {
      h2: t('det_interactive_reading_course.articelContent2.a2_h2'),
      descArr: [
        t('det_interactive_reading_course.articelContent2.a2'),
        t('det_interactive_reading_course.articelContent2.a2_1'),
      ],
      imgArr: [
        {
          url: '/img/det-interactive-reading-course/complete-the-passage.png',
          alt: 'A screenshot of DET Interactive Reading: Complete the Passage.',
        },
      ],
      imgTipArr: [t('det_interactive_reading_course.articelContent2.t2')],
    },
    {
      h2: '',
      descArr: [
        t('det_interactive_reading_course.articelContent2.a3'),
        t('det_interactive_reading_course.articelContent2.a3_1'),
        t('det_interactive_reading_course.articelContent2.a3_2'),
        t('det_interactive_reading_course.articelContent2.a3_3'),
        t('det_interactive_reading_course.articelContent2.a3_4'),
        t('det_interactive_reading_course.articelContent2.a3_5'),
        t('det_interactive_reading_course.articelContent2.a3_6'),
        t('det_interactive_reading_course.articelContent2.a3_7'),
        t('det_interactive_reading_course.articelContent2.a3_8'),
      ],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const desc_img_tipsArr3 = computed(() => {
  return [
    {
      h2: '',
      descArr: [
        t('det_interactive_reading_course.articelContent3.a1'),
        t('det_interactive_reading_course.articelContent3.a1_1'),
        t('det_interactive_reading_course.articelContent3.a1_2'),
        t('det_interactive_reading_course.articelContent3.a1_3'),
        t('det_interactive_reading_course.articelContent3.a1_4'),
        t('det_interactive_reading_course.articelContent3.a1_5'),
      ],
      imgArr: [],
      imgTipArr: [],
    },
    {
      h2: t('det_interactive_reading_course.articelContent3.a2_h2'),
      descArr: [t('det_interactive_reading_course.articelContent3.a2')],
      imgArr: [
        {
          url: '/img/det-interactive-reading-course/highlight-the-answer.png',
          alt: 'A screenshot of DET Interactive Reading: Highlight the Answer.',
        },
      ],
      imgTipArr: [t('det_interactive_reading_course.articelContent3.t2')],
    },
    {
      h2: '',
      descArr: [
        t('det_interactive_reading_course.articelContent3.a3'),
        t('det_interactive_reading_course.articelContent3.a3_1'),
        t('det_interactive_reading_course.articelContent3.a3_2'),
        t('det_interactive_reading_course.articelContent3.a3_3'),
        t('det_interactive_reading_course.articelContent3.a3_4'),
        t('det_interactive_reading_course.articelContent3.a3_5'),
        t('det_interactive_reading_course.articelContent3.a3_6'),
      ],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const desc_img_tipsArr4 = computed(() => {
  return [
    {
      h3: '',
      descArr: [
        t('det_interactive_reading_course.articelContent4.a1'),
        t('det_interactive_reading_course.articelContent4.a1_1'),
        t('det_interactive_reading_course.articelContent4.a1_2'),
      ],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const desc_img_tipsArr5 = computed(() => {
  return [
    {
      h3: '',
      descArr: [t('det_interactive_reading_course.articelContent5.a1')],
      imgArr: [],
      imgTipArr: [],
    },
    {
      h2: t('det_interactive_reading_course.articelContent5.a2_h2'),
      descArr: [t('det_interactive_reading_course.articelContent5.a2')],
      imgArr: [
        {
          url: '/img/det-interactive-reading-course/identify-the-idea.png',
          alt: 'A screenshot of DET Interactive Reading: Identify the Idea.',
        },
      ],
      imgTipArr: [t('det_interactive_reading_course.articelContent5.t2')],
    },
    {
      h2: '',
      descArr: [
        t('det_interactive_reading_course.articelContent5.a3'),
        t('det_interactive_reading_course.articelContent5.a3_1'),
        t('det_interactive_reading_course.articelContent5.a3_2'),
        t('det_interactive_reading_course.articelContent5.a3_3'),
        t('det_interactive_reading_course.articelContent5.a3_4'),
        t('det_interactive_reading_course.articelContent5.a3_5'),
        t('det_interactive_reading_course.articelContent5.a3_6'),
      ],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const desc_img_tipsArr6 = computed(() => {
  return [
    {
      h3: '',
      descArr: [
        t('det_interactive_reading_course.articelContent6.a1'),
        t('det_interactive_reading_course.articelContent6.a1_1'),
        t('det_interactive_reading_course.articelContent6.a1_2'),
      ],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const desc_img_tipsArr7 = computed(() => {
  return [
    {
      h2: t('det_interactive_reading_course.articelContent7.a1_h2'),
      descArr: [t('det_interactive_reading_course.articelContent7.a1')],
      imgArr: [
        {
          url: '/img/det-interactive-reading-course/title-the-passage.png',
          alt: 'A screenshot of DET Interactive Reading: Title the Passage.',
        },
      ],
      imgTipArr: [t('det_interactive_reading_course.articelContent7.t1')],
    },
  ];
});
const desc_img_tipsArr8 = computed(() => {
  return [
    {
      h3: '',
      descArr: [
        t('det_interactive_reading_course.articelContent8.a1'),
        t('det_interactive_reading_course.articelContent8.a1_1'),
        t('det_interactive_reading_course.articelContent8.a1_2'),
        t('det_interactive_reading_course.articelContent8.a1_3'),
        t('det_interactive_reading_course.articelContent8.a1_4'),
        t('det_interactive_reading_course.articelContent8.a1_5'),
        t('det_interactive_reading_course.articelContent8.a1_6'),
      ],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const desc_img_tipsArr9 = computed(() => {
  return [
    {
      h3: '',
      descArr: [t('det_interactive_reading_course.articelContent9.a1')],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const desc_img_tipsArr10 = computed(() => {
  return [
    {
      h2: t('det_interactive_reading_course.articelContent10.h2'),
      descArr: [
        t('det_interactive_reading_course.articelContent10.a1'),
        t('det_interactive_reading_course.articelContent10.a1_1'),
        t('det_interactive_reading_course.articelContent10.a1_2'),
        t('det_interactive_reading_course.articelContent10.a1_3'),
        t('det_interactive_reading_course.articelContent10.a1_4'),
        t('det_interactive_reading_course.articelContent10.a1_5'),
      ],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const desc_img_tipsArr11 = computed(() => {
  return [
    {
      h3: '',
      descArr: [t('det_interactive_reading_course.articelContent11.a1')],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});
const desc_img_tipsArr12 = computed(() => {
  return [
    {
      h3: '',
      descArr: [t('det_interactive_reading_course.articelContent12.a1')],
      imgArr: [],
      imgTipArr: [],
    },
  ];
});

const a_list_data = computed(() => {
  return [
    {
      name: t('det_interactive_reading_course.a_list.a1name'),
      url: 'https://prep.detpractice.com/tag/duolingo-english-test/',
    },
    {
      name: t('det_interactive_reading_course.a_list.a2name'),
      url: 'https://prep.detpractice.com/tag/duolingo-english-test-course/',
    },
    {
      name: t('det_interactive_reading_course.a_list.a3name'),
      url: 'https://prep.detpractice.com/tag/duolingo-english-test-reading/',
    },
    {
      name: t('det_interactive_reading_course.a_list.a4name'),
      url: 'https://prep.detpractice.com/tag/interactive-reading/',
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
      > {{ t('courses.four_change_right_data.data1.video3data.title') }} {{ t('courses.prepCourse') }}
    </div>
    <div class="common_prep_out det_read_and_select_course">
      <div class="common_prep_left det_read_and_select_course_left">
        <h1 class="h1 p_h1">{{ t('det_interactive_reading_course.h1') }}</h1>
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
        <div class="one_test_out">
          <test_one />
        </div>

        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr2" :key="index">
          <desc_img_tips
            :h2="item.h2"
            :h3="item.h3"
            :descArr="item.descArr"
            :imgArr="item.imgArr"
            :imgTipArr="item.imgTipArr"
          />
        </div>
        <test_two
          question=" Above all, Lenore wanted to be an important part of her company’s contract management team. The problem was that they didn’t think she was capable of carrying out the job. Often when she requested a larger role on the team, they turned her down. Perhaps that was because even though Lenore worked hard and got all her assignments done on time, she always seemed stressed out. One day, one of the managers approached her and asked her what was wrong. Lenore said that she wanted to do more, but the company wasn’t giving her a chance. The manager asked her if she thought the company should consider giving her a bigger role on the team, and she said she would be thrilled if they did."
          :showSpace="true"
          h4="Select the best sentence to fill in the blank in the passage."
          :answer="[
            { isanswer: false, answer: 'She was so certain of this idea that she didn’t hesitate to offer it to him.' },
            { isanswer: false, answer: 'The company told her that she could start her job whenever she wanted.' },
            {
              isanswer: false,
              answer: 'With the company going out of business, Lenore was no longer needed as part of the team.',
            },
            { isanswer: true, answer: 'He told her not to worry and that he would speak to the rest of the team.' },
          ]"
        />
        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr3" :key="index">
          <desc_img_tips :h2="item.h2" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
        </div>

        <test_three
          question="What was Lenore’s goal at her company?"
          answer="Lenore wanted to be an important part of her company's contract management team."
        />
        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr4" :key="index">
          <desc_img_tips :h3="item.h3" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
        </div>
        <test_three
          question="How did Lenore respond when her manager asked her if she wanted an expanded role?"
          answer="She said she would be thrilled if they did."
        />

        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr5" :key="index">
          <desc_img_tips
            :h2="item.h2"
            :h3="item.h3"
            :descArr="item.descArr"
            :imgArr="item.imgArr"
            :imgTipArr="item.imgTipArr"
          />
        </div>
        <test_two
          question=" Above all, Lenore wanted to be an important part of her company’s contract management team. The problem was that they didn’t think she was capable of carrying out the job. Often when she requested a larger role on the team, they turned her down. Perhaps that was because even though Lenore worked hard and got all her assignments done on time, she always seemed stressed out. One day, one of the managers approached her and asked her what was wrong. Lenore said that she wanted to do more, but the company wasn’t giving her a chance. The manager asked her if she thought the company should consider giving her a bigger role on the team, and she said she would be thrilled if they did. He told her not to worry and that he would speak to the rest of the team. "
          :showSpace="false"
          h4="Select the idea that is expressed in the passage."
          :answer="[
            {
              isanswer: false,
              answer:
                ' Lenore wanted to get a new job because she wasn’t being given enough responsibility at her current one. ',
            },
            {
              isanswer: false,
              answer:
                ' Lenore’s new team was very different from the one she had been on before, but Lenore did her best to learn from them. ',
            },
            {
              isanswer: false,
              answer:
                ' Lenore delegated most of her tasks for the reception to her assistant, who was very organized and responsive. ',
            },
            {
              isanswer: true,
              answer:
                ' Lenore was turned down most of the time when she requested a larger role, and she always seemed stressed out. ',
            },
          ]"
        />
        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr6" :key="index">
          <desc_img_tips :h3="item.h3" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
        </div>

        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr7" :key="index">
          <desc_img_tips :h2="item.h2" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
        </div>

        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr8" :key="index">
          <desc_img_tips :h3="item.h3" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
        </div>
        <test_two
          question=" Above all, Lenore wanted to be an important part of her company’s contract management team. The problem was that they didn’t think she was capable of carrying out the job. Often when she requested a larger role on the team, they turned her down. Perhaps that was because even though Lenore worked hard and got all her assignments done on time, she always seemed stressed out. One day, one of the managers approached her and asked her what was wrong. Lenore said that she wanted to do more, but the company wasn’t giving her a chance. The manager asked her if she thought the company should consider giving her a bigger role on the team, and she said she would be thrilled if they did. He told her not to worry and that he would speak to the rest of the team. Lenore was overjoyed."
          :showSpace="false"
          h4="Select the best title for the passage."
          :answer="[
            {
              isanswer: false,
              answer: 'Lenore’s New Job ',
            },
            {
              isanswer: false,
              answer: 'The Challenging Contract ',
            },
            {
              isanswer: false,
              answer: 'The Client’s Complaint ',
            },
            {
              isanswer: true,
              answer: 'Lenore’s Big Chance ',
            },
          ]"
        />
        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr9" :key="index">
          <desc_img_tips :h3="item.h3" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
        </div>

        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr10" :key="index">
          <desc_img_tips :h2="item.h2" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
        </div>
        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr11" :key="index">
          <desc_img_tips :h3="item.h3" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
        </div>

        <div class="desc_img_tips_out" v-for="(item, index) in desc_img_tipsArr12" :key="index">
          <desc_img_tips :h3="item.h3" :descArr="item.descArr" :imgArr="item.imgArr" :imgTipArr="item.imgTipArr" />
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

.p_h1 {
  font-size: 56px;
  font-weight: 600;
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
