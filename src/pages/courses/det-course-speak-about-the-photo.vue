<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { domain } from '@/utils';
import my_video from '@/components/prepCompoment/video.vue';
import select_change from '@/components/prepCompoment/select_change.vue';

useSeoMeta({
  title: t('det_course_speak_about_the_photo.seometa.title'),
  description: t('det_course_speak_about_the_photo.seometa.description'),
});

const localePath = useLocalePath();
useHead({
  meta: [
    { name: 'DC.title', content: t('det_course_speak_about_the_photo.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('det_course_speak_about_the_photo.seometa.title') },
    { property: 'og:description', content: t('tos.seometa.description') },
    { property: 'og:url', content: `https://www.${domain}${localePath('/courses/det-course-speak-about-the-photo')}` },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: t('det_course_speak_about_the_photo.seometa.title') },
    {
      name: 'twitter:description',
      content: t('det_course_speak_about_the_photo.seometa.description'),
    },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
});

const video_data = computed(() => {
  return {
    video_title: 'det-course-speak-about-the-photo',
    video_url: 'https://www.youtube.com/embed/oTyjWsblbYk?si=yRk3ncyXzVkxVDqo',
  };
});
</script>
<template>
  <div class="common_prep_wrapper det-course-speak-about-the-photo">
    <div class="top">
      <nuxt-link :to="localePath('/')" class="hoverGiveBorder">Home</nuxt-link>
      >

      <nuxt-link :to="localePath('/courses')" class="hoverGiveBorder">Courses</nuxt-link>
      > {{ t('courses.four_change_right_data.data3.video1data.title') }} {{ t('courses.prepCourse') }}
    </div>
    <div class="common_prep_out">
      <div class="common_prep_left">
        <h1>{{ t('det_course_speak_about_the_photo.h11') }}</h1>
        <p v-html="t('det_course_speak_about_the_photo.p1')"></p>
        <p v-html="t('det_course_speak_about_the_photo.p2')"></p>

        <p v-html="t('det_course_speak_about_the_photo.p3')"></p>

        <my_video :video_url="video_data.video_url" :title="video_data.video_title" />
        <h2>{{ t('det_course_speak_about_the_photo.h21') }}</h2>
        <ul class="toc_ol">
          <li>
            <a :href="`#prep_1`">{{ t('det_course_speak_about_the_photo.ul.li1') }}</a>
          </li>
          <li>
            <a :href="`#prep_2`">{{ t('det_course_speak_about_the_photo.ul.li2') }}</a>
          </li>
          <li>
            <a :href="`#prep_3`">{{ t('det_course_speak_about_the_photo.ul.li3') }}</a>
            <ul class="sub-item">
              <li>{{ t('det_course_speak_about_the_photo.ul.li3_1') }}</li>
              <li>{{ t('det_course_speak_about_the_photo.ul.li3_2') }}</li>
              <li>{{ t('det_course_speak_about_the_photo.ul.li3_3') }}</li>
            </ul>
          </li>
          <li>
            <a :href="`#prep_4`">{{ t('det_course_speak_about_the_photo.ul.li4') }}</a>
            <ul class="sub-item">
              <li>{{ t('det_course_speak_about_the_photo.ul.li4_1') }}</li>
              <li>{{ t('det_course_speak_about_the_photo.ul.li4_2') }}</li>
            </ul>
          </li>
          <li>
            <a :href="`#prep_5`">{{ t('det_course_speak_about_the_photo.ul.li5') }}</a>
            <ul class="sub-item">
              <li>{{ t('det_course_speak_about_the_photo.ul.li5_1') }}</li>
              <li>{{ t('det_course_speak_about_the_photo.ul.li5_2') }}</li>
            </ul>
          </li>
          <li>
            <a :href="`#prep_6`">{{ t('det_course_speak_about_the_photo.ul.li6') }}</a>
          </li>
        </ul>
        <h2 id="prep_1">{{ t('det_course_speak_about_the_photo.h22') }}</h2>
        <p>{{ t('det_course_speak_about_the_photo.p5') }}</p>
        <img src="/img/det-course-speak-about-the-photo/speak-about-the-photo-UI.png" alt="speak-about-the-photo-UI" />
        <figure>
          <figcaption>{{ t('det_course_speak_about_the_photo.figcaption1') }}</figcaption>
        </figure>
        <h2 id="prep_2">{{ t('det_course_speak_about_the_photo.h23') }}</h2>
        <p>{{ t('det_course_speak_about_the_photo.p6') }}</p>
        <img
          src="/img/det-course-speak-about-the-photo/speak-about-the-photo-demo-questions.jpg"
          alt="speak-about-the-photo-demo-questions"
        />
        <figure>
          <figcaption>{{ t('det_course_speak_about_the_photo.figcaption2') }}</figcaption>
        </figure>
        <p>{{ t('det_course_speak_about_the_photo.p7') }}</p>
        <img
          src="/img/det-course-speak-about-the-photo/categories-of-speak-about-the-photo-questions.png"
          alt="categories-of-speak-about-the-photo-questions"
        />
        <figure>
          <figcaption>{{ t('det_course_speak_about_the_photo.figcaption3') }}</figcaption>
        </figure>
        <p>{{ t('det_course_speak_about_the_photo.p8') }}</p>
        <h2 id="prep_3">{{ t('det_course_speak_about_the_photo.h24') }}</h2>
        <p>{{ t('det_course_speak_about_the_photo.p9') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p10') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p11') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p12') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p13') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p14') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p15') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p16') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p17') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p18') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p19') }}</p>
        <img src="/img/det-course-speak-about-the-photo/common-topics.jpg" alt="common-topics" />
        <figure>
          <figcaption>{{ t('det_course_speak_about_the_photo.figcaption4') }}</figcaption>
        </figure>

        <p>{{ t('det_course_speak_about_the_photo.p20') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p21') }}</p>
        <img src="/img/det-course-speak-about-the-photo/sample-question-1.jpg" alt="sample-question-1" />
        <figure>
          <figcaption>{{ t('det_course_speak_about_the_photo.figcaption5') }}</figcaption>
        </figure>
        <p>{{ t('det_course_speak_about_the_photo.p22') }}</p>
        <!-- <ul>
          {{
            t('det_course_speak_about_the_photo.ul5')
          }}
        </ul> -->
        <ul class="wp-block-list">
          <li>{{ t('det_course_speak_about_the_photo.ul5.li1') }}</li>
          <li>{{ t('det_course_speak_about_the_photo.ul5.li2') }}</li>
          <li>{{ t('det_course_speak_about_the_photo.ul5.li3') }}</li>
          <li>{{ t('det_course_speak_about_the_photo.ul5.li4') }}</li>
          <li>{{ t('det_course_speak_about_the_photo.ul5.li5') }}</li>
          <li>{{ t('det_course_speak_about_the_photo.ul5.li6') }}</li>
          <li>{{ t('det_course_speak_about_the_photo.ul5.li7') }}</li>
          <li>{{ t('det_course_speak_about_the_photo.ul5.li8') }}</li>
        </ul>

        <p>{{ t('det_course_speak_about_the_photo.p23') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p24') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p25') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p26') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p27') }}</p>
        <img src="/img/det-course-speak-about-the-photo/Summary-of-answer-steps.png" alt="Summary-of-answer-steps" />
        <figure>
          <figcaption>{{ t('det_course_speak_about_the_photo.figcaption6') }}</figcaption>
        </figure>

        <p>{{ t('det_course_speak_about_the_photo.p28') }}</p>
        <h3>{{ t('det_course_speak_about_the_photo.h31') }}</h3>
        <div class="html_wrapper" v-html="t('det_course_speak_about_the_photo.p29')"></div>
        <div class="html_wrapper" v-html="t('det_course_speak_about_the_photo.p30')"></div>
        <div class="html_wrapper" v-html="t('det_course_speak_about_the_photo.p31')"></div>
        <p>{{ t('det_course_speak_about_the_photo.p32') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speak_about_the_photo.p33')"></div>
        <p>{{ t('det_course_speak_about_the_photo.p34') }}</p>
        <h3>{{ t('det_course_speak_about_the_photo.h32') }}</h3>

        <div class="html_wrapper" v-html="t('det_course_speak_about_the_photo.p35')"></div>
        <p>{{ t('det_course_speak_about_the_photo.p36') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speak_about_the_photo.p37')"></div>
        <p>{{ t('det_course_speak_about_the_photo.p38') }}</p>
        <img src="/img/det-course-speak-about-the-photo/sample-2.jpg" alt="sample-2" />
        <figure>
          <figcaption>{{ t('det_course_speak_about_the_photo.figcaption7') }}</figcaption>
        </figure>

        <p>{{ t('det_course_speak_about_the_photo.p39') }}</p>
        <h3>{{ t('det_course_speak_about_the_photo.h33') }}</h3>
        <div class="html_wrapper" v-html="t('det_course_speak_about_the_photo.p40')"></div>
        <p>{{ t('det_course_speak_about_the_photo.p41') }}</p>

        <div class="html_wrapper" v-html="t('det_course_speak_about_the_photo.p42')"></div>

        <p>{{ t('det_course_speak_about_the_photo.p43') }}</p>
        <h3>{{ t('det_course_speak_about_the_photo.h34') }}</h3>
        <div class="html_wrapper" v-html="t('det_course_speak_about_the_photo.p44')"></div>
        <p>{{ t('det_course_speak_about_the_photo.p45') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speak_about_the_photo.p46')"></div>
        <p>{{ t('det_course_speak_about_the_photo.p47') }}</p>
        <h2 id="prep_4">{{ t('det_course_speak_about_the_photo.h25') }}</h2>

        <p>{{ t('det_course_speak_about_the_photo.p48') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p49') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p50') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p51') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p52') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p53') }}</p>

        <p>{{ t('det_course_speak_about_the_photo.p54') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p55') }}</p>
        <h3>{{ t('det_course_speak_about_the_photo.h35') }}</h3>
        <div class="html_wrapper" v-html="t('det_course_speak_about_the_photo.p56')"></div>
        <p>{{ t('det_course_speak_about_the_photo.p57') }}</p>
        <img src="/img/det-course-speak-about-the-photo/sample-3.jpg" alt="sample-3" />
        <figure>
          <figcaption>{{ t('det_course_speak_about_the_photo.figcaption8') }}</figcaption>
        </figure>
        <p>{{ t('det_course_speak_about_the_photo.p58') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speak_about_the_photo.p59')"></div>
        <p>{{ t('det_course_speak_about_the_photo.p60') }}</p>
        <h3>{{ t('det_course_speak_about_the_photo.h36') }}</h3>
        <div class="html_wrapper" v-html="t('det_course_speak_about_the_photo.p61')"></div>
        <p>{{ t('det_course_speak_about_the_photo.p62') }}</p>

        <div class="html_wrapper" v-html="t('det_course_speak_about_the_photo.p63')"></div>
        <p>{{ t('det_course_speak_about_the_photo.p64') }}</p>
        <img src="/img/det-course-speak-about-the-photo/sample-4.jpg" alt="sample-4" />
        <figure>
          <figcaption>{{ t('det_course_speak_about_the_photo.figcaption9') }}</figcaption>
        </figure>

        <p>{{ t('det_course_speak_about_the_photo.p65') }}</p>

        <div class="html_wrapper" v-html="t('det_course_speak_about_the_photo.p66')"></div>

        <p>{{ t('det_course_speak_about_the_photo.p67') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speak_about_the_photo.p68')"></div>
        <p>{{ t('det_course_speak_about_the_photo.p69') }}</p>
        <h2 id="prep_5">{{ t('det_course_speak_about_the_photo.h26') }}</h2>
        <p>{{ t('det_course_speak_about_the_photo.p70') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p71') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p72') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p73') }}</p>

        <p>{{ t('det_course_speak_about_the_photo.p74') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p75') }}</p>

        <p>{{ t('det_course_speak_about_the_photo.p76') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p77') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p78') }}</p>
        <h3>{{ t('det_course_speak_about_the_photo.h37') }}</h3>

        <div class="html_wrapper" v-html="t('det_course_speak_about_the_photo.p79')"></div>
        <p>{{ t('det_course_speak_about_the_photo.p80') }}</p>
        <img src="/img/det-course-speak-about-the-photo/sample-5.jpg" alt="sample-5" />
        <figure>
          <figcaption>{{ t('det_course_speak_about_the_photo.figcaption10') }}</figcaption>
        </figure>
        <p>{{ t('det_course_speak_about_the_photo.p81') }}</p>

        <div class="html_wrapper" v-html="t('det_course_speak_about_the_photo.p82')"></div>

        <p>{{ t('det_course_speak_about_the_photo.p83') }}</p>
        <h3>{{ t('det_course_speak_about_the_photo.h39') }}</h3>
        <div class="html_wrapper" v-html="t('det_course_speak_about_the_photo.p84')"></div>
        <p>{{ t('det_course_speak_about_the_photo.p85') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speak_about_the_photo.p86')"></div>

        <p>{{ t('det_course_speak_about_the_photo.p87') }}</p>
        <h3>{{ t('det_course_speak_about_the_photo.h310') }}</h3>

        <div class="html_wrapper" v-html="t('det_course_speak_about_the_photo.p88')"></div>

        <p>{{ t('det_course_speak_about_the_photo.p89') }}</p>
        <img src="/img/det-course-speak-about-the-photo/sample-6.png" alt="sample-6" />
        <figure>
          <figcaption>{{ t('det_course_speak_about_the_photo.figcaption11') }}</figcaption>
        </figure>

        <p>{{ t('det_course_speak_about_the_photo.p90') }}</p>
        <p>{{ t('det_course_speak_about_the_photo.p91') }}</p>

        <div class="html_wrapper" v-html="t('det_course_speak_about_the_photo.p92')"></div>

        <p>{{ t('det_course_speak_about_the_photo.p93') }}</p>

        <h2>{{ t('det_course_speak_about_the_photo.h266') }}</h2>

        <div class="html_wrapper" v-html="t('det_course_speak_about_the_photo.p94')"></div>
        <p>{{ t('det_course_speak_about_the_photo.p95') }}</p>

        <div class="html_wrapper" v-html="t('det_course_speak_about_the_photo.p96')"></div>
        <p>{{ t('det_course_speak_about_the_photo.p97') }}</p>
        <h2 id="prep_6">{{ t('det_course_speak_about_the_photo.h27') }}</h2>
        <p>{{ t('det_course_speak_about_the_photo.p98') }}</p>

        <ul class="wp-block-list">
          <li>{{ t('det_course_speak_about_the_photo.ui100.li1') }}</li>
          <li>{{ t('det_course_speak_about_the_photo.ui100.li2') }}</li>
          <li>{{ t('det_course_speak_about_the_photo.ui100.li3') }}</li>
          <li>{{ t('det_course_speak_about_the_photo.ui100.li4') }}</li>
          <li>{{ t('det_course_speak_about_the_photo.ui100.li5') }}</li>
        </ul>
        <p>{{ t('det_course_speak_about_the_photo.p99') }}</p>
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
.det-course-speak-about-the-photo {
  .sub-item {
    margin-left: 20px;
  }
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
  .html_wrapper {
    .red-text {
      color: #ff3300;
    }
    .blue-text {
      color: #3366cc;
    }
  }
  .wp-block-list {
    margin-left: 20px;
  }
}
</style>
