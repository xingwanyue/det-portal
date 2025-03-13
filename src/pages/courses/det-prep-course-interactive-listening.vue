<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { domain } from '@/utils';
import my_video from '@/components/prepCompoment/video.vue';
import select_change from '@/components/prepCompoment/select_change.vue';

const video_data = computed(() => {
  return {
    video_title: 'det-prep-course-interactive-listening',
    video_url: 'https://www.youtube.com/embed/ptt8E7DNyFw?start=15&feature=oembed',
  };
});
useSeoMeta({
  title: t('det_prep_course_interactive_listening.seometa.title'),
  description: t('det_prep_course_interactive_listening.seometa.description'),
});
const localePath = useLocalePath();
useHead({
  meta: [
    { name: 'DC.title', content: t('det_prep_course_interactive_listening.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('det_prep_course_interactive_listening.seometa.title') },
    { property: 'og:description', content: t('tos.seometa.description') },
    {
      property: 'og:url',
      content: `https://www.${domain}${localePath('/courses/det-prep-course-interactive-listening')}`,
    },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: t('det_prep_course_interactive_listening.seometa.title') },
    {
      name: 'twitter:description',
      content: t('det_prep_course_interactive_listening.seometa.description'),
    },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
});
</script>
<template>
  <div class="common_prep_wrapper det-prep-course-interactive-listening">
    <div class="top">
      <nuxt-link :to="localePath('/')" class="hoverGiveBorder">Home</nuxt-link>
      >

      <nuxt-link :to="localePath('/courses')" class="hoverGiveBorder">Courses</nuxt-link>
      > {{ t('courses.four_change_right_data.data2.video2data.title') }} {{ t('courses.prepCourse') }}
    </div>
    <div class="common_prep_out">
      <div class="common_prep_left">
        <h1>{{ t('det_prep_course_interactive_listening.h1_1') }}</h1>
        <h2>{{ t('det_prep_course_interactive_listening.h2_1') }}</h2>
        <p>{{ t('det_prep_course_interactive_listening.p_1') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_2') }}</p>
        <div class="video_out">
          <my_video :title="video_data.video_title" :video_url="video_data.video_url" />
        </div>
        <h2>{{ t('det_prep_course_interactive_listening.h2_2') }}</h2>
        <ol class="toc_ol">
          <li>
            <a :href="`#prep_1`">{{ t('det_prep_course_interactive_listening.ol_1.li_1') }}</a>
          </li>
          <li>
            <a :href="`#prep_2`">{{ t('det_prep_course_interactive_listening.ol_1.li_2') }}</a>
          </li>
          <li>
            <a :href="`#prep_3`">{{ t('det_prep_course_interactive_listening.ol_1.li_3') }}</a>
          </li>
          <li>
            <a :href="`#prep_4`">{{ t('det_prep_course_interactive_listening.ol_1.li_4') }}</a>
          </li>
          <li>
            <a :href="`#prep_5`">{{ t('det_prep_course_interactive_listening.ol_1.li_5') }} </a>
          </li>
          <li>
            <a :href="`#prep_6`">{{ t('det_prep_course_interactive_listening.ol_1.li_6') }}</a>
          </li>
          <li>
            <a :href="`#prep_7`">{{ t('det_prep_course_interactive_listening.ol_1.li_7') }}</a>
          </li>
        </ol>
        <h2 id="prep_1">{{ t('det_prep_course_interactive_listening.h2_3') }}</h2>
        <p>{{ t('det_prep_course_interactive_listening.p_3') }}</p>
        <h2 id="prep_2">{{ t('det_prep_course_interactive_listening.h2_4') }}</h2>
        <p>{{ t('det_prep_course_interactive_listening.p_4') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_5') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_6') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_7') }}</p>
        <h2 id="prep_3">{{ t('det_prep_course_interactive_listening.h2_5') }}</h2>
        <p>{{ t('det_prep_course_interactive_listening.p_8') }}</p>
        <img
          src="/img/det-prep-course-interactive-listening/interactive-listening-category.png"
          alt="A diagram shows the categories of DET interactive listening questions."
        />
        <p class="gray">{{ t('det_prep_course_interactive_listening.gray1') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_9') }}</p>
        <h2 id="prep_4">{{ t('det_prep_course_interactive_listening.h2_6') }}</h2>
        <div class="html_wrapper" v-html="t('det_prep_course_interactive_listening.p_10')"></div>
        <p>{{ t('det_prep_course_interactive_listening.p_11') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_12') }}</p>
        <img
          src="/img/det-prep-course-interactive-listening/scenario1.png"
          alt="A screenshot of DET interactive listening scenario."
        />
        <p class="gray">{{ t('det_prep_course_interactive_listening.gray2') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_13') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_14') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_15') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_16') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_17') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_18') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_19') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_20') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_21') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_22') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_23') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_24') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_25') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_26') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_27') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_28') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_29') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_30') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_31') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_32') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_33') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_34') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_35') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_36') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_37') }}</p>
        <h2 id="prep_5">{{ t('det_prep_course_interactive_listening.h2_7') }}</h2>
        <p>{{ t('det_prep_course_interactive_listening.p_38') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_39') }}</p>
        <h2 id="prep_6">{{ t('det_prep_course_interactive_listening.h2_8') }}</h2>
        <p>{{ t('det_prep_course_interactive_listening.p_40') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_41') }}</p>
        <p>
          <span class="blue">The conversation is about</span> + the topic of conversation.
          <span class="blue">I am a student who has</span> <span class="red">[a problem/a question/a concern]</span>
          <span class="blue">about</span> + specific issue content. <span class="blue">I talked to</span>
          <span class="red">[another student/a professor/a college staff]</span> <span class="blue">who is</span>
          <span class="red">[my friend/my classmate/my teacher]</span> <span class="blue">and asked for their</span>
          <span class="red">[advice/help]</span>. <span class="blue">They suggested that I should</span> + specific
          suggestion or solution. <span class="blue">I think their idea is</span>
          <span class="red">[good/feasible/practical]</span>
          <span class="blue">and I decided to follow it. The result is that I</span> + outcome of the conversation (if
          any).
        </p>
        <p>{{ t('det_prep_course_interactive_listening.p_42') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_43') }}</p>
        <p>
          <span class="blue">The conversation revolves around</span> + the topic of conversation.
          <span class="blue">I am a student who has</span> <span class="red">[a problem/a question/a concern]</span>
          <span class="blue">regarding</span> + specific issue content. <span class="blue">I sought</span>
          <span class="red">[another student/a professor/a college staff]</span> <span class="blue">who is</span>
          <span class="red">[my friend/my classmate/my teacher]</span> <span class="blue">and solicited their</span>
          <span class="red">[advice/assistance]</span>. <span class="blue">They proposed that I ought to</span>
          <span class="red">[the suggestion/ solution]</span>. <span class="blue">I evaluated their idea as</span>
          <span class="red">[good/feasible/practical]</span>
          <span class="blue">and I opted to follow it. The outcome is that I</span> + result of the conversation (if
          any).
        </p>
        <p>{{ t('det_prep_course_interactive_listening.p_44') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_45') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_46') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_47') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_48') }}</p>
        <h2 id="prep_7">{{ t('det_prep_course_interactive_listening.h2_9') }}</h2>
        <p>{{ t('det_prep_course_interactive_listening.p_49') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_50') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_interactive_listening.p_51')"></div>
        <p>{{ t('det_prep_course_interactive_listening.p_52') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_interactive_listening.p_53')"></div>
        <div class="html_wrapper" v-html="t('det_prep_course_interactive_listening.p_54')"></div>
        <p>{{ t('det_prep_course_interactive_listening.p_55') }}</p>
        <img
          src="/img/det-prep-course-interactive-listening/scenario2.png"
          alt="A screenshot of DET interactive listening scenario 2."
        />
        <p class="gray">{{ t('det_prep_course_interactive_listening.gray3') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_56') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_57') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_58') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_59') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_60') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_61') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_62') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_63') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_64') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_65') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_66') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_67') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_68') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_interactive_listening.p_69')"></div>
        <p>{{ t('det_prep_course_interactive_listening.p_70') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_interactive_listening.p_71')"></div>
        <p>{{ t('det_prep_course_interactive_listening.p_72') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_interactive_listening.p_73')"></div>
        <p>{{ t('det_prep_course_interactive_listening.p_74') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_75') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_76') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_interactive_listening.p_77')"></div>
        <p>{{ t('det_prep_course_interactive_listening.p_78') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_79') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_interactive_listening.p_80')"></div>
        <p>{{ t('det_prep_course_interactive_listening.p_81') }}</p>
        <h2>{{ t('det_prep_course_interactive_listening.h2_10') }}</h2>
        <p>{{ t('det_prep_course_interactive_listening.p_82') }}</p>
        <ol class="wp-block-list">
          <li>
            {{ t('det_prep_course_interactive_listening.ol_2.li_1') }}
          </li>
          <li>
            {{ t('det_prep_course_interactive_listening.ol_2.li_2') }}
          </li>
          <li>
            {{ t('det_prep_course_interactive_listening.ol_2.li_3') }}
          </li>
          <li>
            {{ t('det_prep_course_interactive_listening.ol_2.li_4') }}
          </li>
          <li>
            {{ t('det_prep_course_interactive_listening.ol_2.li_5') }}
          </li>
        </ol>
        <p>{{ t('det_prep_course_interactive_listening.p_83') }}</p>
        <p>{{ t('det_prep_course_interactive_listening.p_84') }}</p>
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
@import '@/assets/prep.scss';
</style>
<style lang="scss">
.det-prep-course-interactive-listening {
  .title {
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
  }
  ul {
    list-style-type: none;
    padding-left: 0;
    li {
      margin-bottom: 15px;
    }
    .header {
      background-color: yellow;
      font-weight: bold;
      display: inline-block;
      padding: 2px 5px;
    }
    .blue {
      color: blue;
    }
    .indent {
      margin-left: 20px;
    }
    .red {
      color: red;
    }
    .sub-indent {
      margin-left: 40px;
    }
    .purple {
      color: purple;
      text-decoration: underline;
    }
  }
  p {
    .blue {
      color: blue;
    }
    .red {
      color: red;
    }
  }
}
</style>
