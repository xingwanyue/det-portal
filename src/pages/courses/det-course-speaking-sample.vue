<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { domain } from '@/utils';
import my_video from '@/components/prepCompoment/video.vue';
import select_change from '@/components/prepCompoment/select_change.vue';

useSeoMeta({
  title: t('det_course_speaking_sample.seometa.title'),
  description: t('det_course_speaking_sample.seometa.description'),
});

const localePath = useLocalePath();
useHead({
  meta: [
    { name: 'DC.title', content: t('det_course_speaking_sample.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('det_course_speaking_sample.seometa.title') },
    { property: 'og:description', content: t('tos.seometa.description') },
    { property: 'og:url', content: `https://www.${domain}${localePath('/courses/det-course-speaking-sample')}` },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: t('det_course_speaking_sample.seometa.title') },
    {
      name: 'twitter:description',
      content: t('det_course_speaking_sample.seometa.description'),
    },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
});

const video_data = computed(() => {
  return {
    video_title: 'det-course-speaking-sample',
    video_url: 'https://www.youtube.com/embed/2bj3ViAPkMY?si=r2LZQ0IDv0zfVY7O',
  };
});
</script>
<template>
  <div class="common_prep_wrapper det-prep-course-read-aloud">
    <div class="top">
      <nuxt-link :to="localePath('/')" class="hoverGiveBorder">Home</nuxt-link>
      >

      <nuxt-link :to="localePath('/courses')" class="hoverGiveBorder">Courses</nuxt-link>
      > {{ t('courses.four_change_right_data.data3.video4data.title') }} {{ t('courses.prepCourse') }}
    </div>
    <div class="common_prep_out">
      <div class="common_prep_left">
        <h1>{{ t('det_course_speaking_sample.h11') }}</h1>
        <p>{{ t('det_course_speaking_sample.p1') }}</p>
        <p>{{ t('det_course_speaking_sample.p2') }}</p>
        <div class="video_out">
          <my_video :video_url="video_data.video_url" :title="video_data.video_title" />
        </div>
        <h2>{{ t('det_course_speaking_sample.h21') }}</h2>
        <div class="html_wrapper">
          <a href="#prep_1">
            <strong>{{ t('det_course_speaking_sample.p3') }}</strong>
          </a>
        </div>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.ul1')"></div>
        <div class="html_wrapper">
          <a href="#prep_2">
            <strong>{{ t('det_course_speaking_sample.p4') }}</strong>
          </a>
        </div>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.ul2')"></div>
        <div class="html_wrapper">
          <a href="#prep_3">
            <strong>{{ t('det_course_speaking_sample.p5') }}</strong>
          </a>
        </div>
        <div class="html_wrapper">
          <a href="#prep_4">
            <strong>{{ t('det_course_speaking_sample.p6') }}</strong>
          </a>
        </div>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.ul3')"></div>
        <div class="html_wrapper">
          <a href="#prep_5">
            <strong>{{ t('det_course_speaking_sample.p7') }}</strong>
          </a>
        </div>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.ul4')"></div>
        <div class="html_wrapper">
          <a href="#prep_6">
            <strong>{{ t('det_course_speaking_sample.p8') }}</strong>
          </a>
        </div>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.ul5')"></div>
        <div class="html_wrapper">
          <a href="#prep_7">
            <strong>{{ t('det_course_speaking_sample.p9') }}</strong>
          </a>
        </div>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.ul6')"></div>
        <div class="html_wrapper">
          <a href="#prep_8">
            <strong>{{ t('det_course_speaking_sample.p10') }}</strong>
          </a>
        </div>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.ul7')"></div>
        <div class="html_wrapper">
          <strong>{{ t('det_course_speaking_sample.p11') }}</strong>
        </div>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.ul8')"></div>
        <div class="html_wrapper">
          <a href="#prep_10">
            <strong>{{ t('det_course_speaking_sample.p12') }}</strong>
          </a>
        </div>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.ul9')"></div>
        <h2 id="prep_1">{{ t('det_course_speaking_sample.h22') }}</h2>
        <p>{{ t('det_course_speaking_sample.p13') }}</p>
        <p>{{ t('det_course_speaking_sample.p14') }}</p>
        <h2 id="prep_2">{{ t('det_course_speaking_sample.h23') }}</h2>
        <p>{{ t('det_course_speaking_sample.p15') }}</p>
        <p>{{ t('det_course_speaking_sample.p16') }}</p>
        <img
          src="/img/det-course-speaking-sample/speaking-sample-quick-tips.jpg"
          alt="Tips and introduction to DET speaking sample questions."
        />
        <figure>
          <figcaption>{{ t('det_course_speaking_sample.figcaption1') }}</figcaption>
        </figure>
        <p>{{ t('det_course_speaking_sample.p17') }}</p>
        <p>{{ t('det_course_speaking_sample.p18') }}</p>
        <p>{{ t('det_course_speaking_sample.p19') }}</p>
        <p>{{ t('det_course_speaking_sample.p20') }}</p>
        <p>{{ t('det_course_speaking_sample.p21') }}</p>
        <img
          src="/img/det-course-speaking-sample/det-scoring-criteria.jpg"
          alt="A screeenshot of DET scoring criteria."
        />
        <figure>
          <figcaption>{{ t('det_course_speaking_sample.figcaption2') }}</figcaption>
        </figure>
        <p>{{ t('det_course_speaking_sample.p22') }}</p>
        <p>{{ t('det_course_speaking_sample.p23') }}</p>
        <p>{{ t('det_course_speaking_sample.p24') }}</p>
        <p>{{ t('det_course_speaking_sample.p25') }}</p>
        <p>{{ t('det_course_speaking_sample.p26') }}</p>
        <p>{{ t('det_course_speaking_sample.p27') }}</p>
        <h2 id="prep_3">{{ t('det_course_speaking_sample.h24') }}</h2>
        <p>{{ t('det_course_speaking_sample.p28') }}</p>
        <img
          src="/img/det-course-speaking-sample/speaking-sample-categories.png"
          alt="Categories  of DET Speaking Sample questions."
        />
        <figure>
          <figcaption>{{ t('det_course_speaking_sample.figcaption3') }}</figcaption>
        </figure>
        <p>{{ t('det_course_speaking_sample.p29') }}</p>
        <p>{{ t('det_course_speaking_sample.p30') }}</p>
        <p>{{ t('det_course_speaking_sample.p31') }}</p>
        <p>{{ t('det_course_speaking_sample.p32') }}</p>
        <h2 id="prep_4">{{ t('det_course_speaking_sample.h25') }}</h2>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p33')"></div>
        <p>{{ t('det_course_speaking_sample.p34') }}</p>
        <p>{{ t('det_course_speaking_sample.p35') }}</p>
        <img
          src="/img/det-course-speaking-sample/response-approach-desc-question.jpg"
          alt="Response approach of DET descriptive questions."
        />
        <figure>
          <figcaption>{{ t('det_course_speaking_sample.figcaption4') }}</figcaption>
        </figure>
        <p>{{ t('det_course_speaking_sample.p36') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p37')"></div>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p38')"></div>
        <p>{{ t('det_course_speaking_sample.p39') }}</p>
        <p>{{ t('det_course_speaking_sample.p40') }}</p>
        <p>{{ t('det_course_speaking_sample.p41') }}</p>
        <p>{{ t('det_course_speaking_sample.p42') }}</p>
        <p>{{ t('det_course_speaking_sample.p43') }}</p>
        <p>{{ t('det_course_speaking_sample.p44') }}</p>
        <p>{{ t('det_course_speaking_sample.p45') }}</p>
        <p>{{ t('det_course_speaking_sample.p46') }}</p>
        <p>{{ t('det_course_speaking_sample.p47') }}</p>
        <p>{{ t('det_course_speaking_sample.p48') }}</p>
        <img
          src="/img/det-course-speaking-sample/speaking-sample-demo-question.png"
          alt="A demo question of DET speaking sample."
        />
        <figure>
          <figcaption>{{ t('det_course_speaking_sample.figcaption5') }}</figcaption>
        </figure>
        <p>{{ t('det_course_speaking_sample.p49') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p50')"></div>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p51')"></div>
        <p>{{ t('det_course_speaking_sample.p52') }}</p>
        <p>{{ t('det_course_speaking_sample.p53') }}</p>
        <p>{{ t('det_course_speaking_sample.p54') }}</p>
        <p>{{ t('det_course_speaking_sample.p55') }}</p>
        <p>{{ t('det_course_speaking_sample.p56') }}</p>
        <p>{{ t('det_course_speaking_sample.p57') }}</p>
        <p>{{ t('det_course_speaking_sample.p58') }}</p>
        <p>{{ t('det_course_speaking_sample.p59') }}</p>
        <p>{{ t('det_course_speaking_sample.p60') }}</p>
        <p>{{ t('det_course_speaking_sample.p61') }}</p>
        <h2 id="prep_5">{{ t('det_course_speaking_sample.h26') }}</h2>
        <p>{{ t('det_course_speaking_sample.p62') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p63')"></div>
        <p>{{ t('det_course_speaking_sample.p64') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p65')"></div>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p66')"></div>
        <p>{{ t('det_course_speaking_sample.p67') }}</p>
        <p>{{ t('det_course_speaking_sample.p68') }}</p>
        <p>{{ t('det_course_speaking_sample.p69') }}</p>
        <p>{{ t('det_course_speaking_sample.p70') }}</p>
        <p>{{ t('det_course_speaking_sample.p71') }}</p>
        <p>{{ t('det_course_speaking_sample.p72') }}</p>
        <p>{{ t('det_course_speaking_sample.p73') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p74')"></div>
        <p>{{ t('det_course_speaking_sample.p75') }}</p>
        <p>{{ t('det_course_speaking_sample.p76') }}</p>
        <p>{{ t('det_course_speaking_sample.p77') }}</p>
        <p>{{ t('det_course_speaking_sample.p78') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p79')"></div>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p80')"></div>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p81')"></div>
        <p>{{ t('det_course_speaking_sample.p82') }}</p>
        <p>{{ t('det_course_speaking_sample.p83') }}</p>
        <p>{{ t('det_course_speaking_sample.p84') }}</p>
        <p>{{ t('det_course_speaking_sample.p85') }}</p>
        <p>{{ t('det_course_speaking_sample.p86') }}</p>
        <p>{{ t('det_course_speaking_sample.p87') }}</p>
        <p>{{ t('det_course_speaking_sample.p88') }}</p>
        <p>{{ t('det_course_speaking_sample.p89') }}</p>
        <h2 id="prep_6">{{ t('det_course_speaking_sample.h27') }}</h2>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p90')"></div>
        <img
          src="/img/det-course-speaking-sample/speaking-sample-question-demos.jpg"
          alt="Comparative questions of DET speaking sample."
        />
        <figure>
          <figcaption>{{ t('det_course_speaking_sample.figcaption6') }}</figcaption>
        </figure>
        <p>{{ t('det_course_speaking_sample.p91') }}</p>
        <p>{{ t('det_course_speaking_sample.p92') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p93')"></div>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p94')"></div>
        <p>{{ t('det_course_speaking_sample.p95') }}</p>
        <p>{{ t('det_course_speaking_sample.p96') }}</p>
        <p>{{ t('det_course_speaking_sample.p97') }}</p>
        <p>{{ t('det_course_speaking_sample.p98') }}</p>
        <p>{{ t('det_course_speaking_sample.p99') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p100')"></div>
        <p>{{ t('det_course_speaking_sample.p101') }}</p>
        <p>{{ t('det_course_speaking_sample.p102') }}</p>
        <p>{{ t('det_course_speaking_sample.p103') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p104')"></div>
        <p>{{ t('det_course_speaking_sample.p105') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p106')"></div>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p107')"></div>
        <p>{{ t('det_course_speaking_sample.p108') }}</p>
        <p>{{ t('det_course_speaking_sample.p109') }}</p>
        <p>{{ t('det_course_speaking_sample.p110') }}</p>
        <p>{{ t('det_course_speaking_sample.p111') }}</p>
        <p>{{ t('det_course_speaking_sample.p112') }}</p>
        <p>{{ t('det_course_speaking_sample.p113') }}</p>
        <p>{{ t('det_course_speaking_sample.p114') }}</p>
        <p>{{ t('det_course_speaking_sample.p115') }}</p>
        <p>{{ t('det_course_speaking_sample.p116') }}</p>
        <p>{{ t('det_course_speaking_sample.p117') }}</p>
        <h2 id="prep_7">{{ t('det_course_speaking_sample.h28') }}</h2>
        <p>{{ t('det_course_speaking_sample.p118') }}</p>
        <img src="/img/det-course-speaking-sample/hypothetical-questions-demos.jpg" alt="Hypothetical question demos of DET speaking sample ." />
        <figure>
          <figcaption>{{ t('det_course_speaking_sample.figcaption7') }}</figcaption>
        </figure>
        <p>{{ t('det_course_speaking_sample.p119') }}</p>
        <h3 id="prep_8">{{ t('det_course_speaking_sample.h31') }}</h3>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p120')"></div>
        <p>{{ t('det_course_speaking_sample.p121') }}</p>
        <p>{{ t('det_course_speaking_sample.p122') }}</p>
        <p>{{ t('det_course_speaking_sample.p123') }}</p>
        <p>{{ t('det_course_speaking_sample.p124') }}</p>
        <p>{{ t('det_course_speaking_sample.p125') }}</p>
        <p>{{ t('det_course_speaking_sample.p126') }}</p>
        <p>{{ t('det_course_speaking_sample.p127') }}</p>
        <p>{{ t('det_course_speaking_sample.p128') }}</p>
        <p>{{ t('det_course_speaking_sample.p129') }}</p>
        <p>{{ t('det_course_speaking_sample.p130') }}</p>
        <p>{{ t('det_course_speaking_sample.p131') }}</p>
        <p>{{ t('det_course_speaking_sample.p132') }}</p>
        <p>{{ t('det_course_speaking_sample.p133') }}</p>
        <p>{{ t('det_course_speaking_sample.p134') }}</p>
        <p>{{ t('det_course_speaking_sample.p135') }}</p>
        <p>{{ t('det_course_speaking_sample.p136') }}</p>
        <p>{{ t('det_course_speaking_sample.p137') }}</p>
        <p>{{ t('det_course_speaking_sample.p138') }}</p>
        <p>{{ t('det_course_speaking_sample.p139') }}</p>
        <p>{{ t('det_course_speaking_sample.p140') }}</p>
        <p>{{ t('det_course_speaking_sample.p141') }}</p>
        <p>{{ t('det_course_speaking_sample.p142') }}</p>
        <p>{{ t('det_course_speaking_sample.p143') }}</p>
        <p>{{ t('det_course_speaking_sample.p144') }}</p>
        <p>{{ t('det_course_speaking_sample.p145') }}</p>
        <p>{{ t('det_course_speaking_sample.p146') }}</p>
        <p>{{ t('det_course_speaking_sample.p147') }}</p>
        <p>{{ t('det_course_speaking_sample.p148') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p149')"></div>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p150')"></div>
        <p>{{ t('det_course_speaking_sample.p151') }}</p>
        <p>{{ t('det_course_speaking_sample.p152') }}</p>
        <p>{{ t('det_course_speaking_sample.p153') }}</p>
        <p>{{ t('det_course_speaking_sample.p154') }}</p>
        <p>{{ t('det_course_speaking_sample.p155') }}</p>
        <p>{{ t('det_course_speaking_sample.p156') }}</p>
        <p>{{ t('det_course_speaking_sample.p157') }}</p>
        <p>{{ t('det_course_speaking_sample.p158') }}</p>
        <p>{{ t('det_course_speaking_sample.p159') }}</p>
        <p>{{ t('det_course_speaking_sample.p160') }}</p>
        <p>{{ t('det_course_speaking_sample.p161') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p162')"></div>
        <p>{{ t('det_course_speaking_sample.p163') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p164')"></div>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p165')"></div>
        <p>{{ t('det_course_speaking_sample.p166') }}</p>
        <p>{{ t('det_course_speaking_sample.p167') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p168')"></div>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p169')"></div>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p170')"></div>
        <p>{{ t('det_course_speaking_sample.p171') }}</p>
        <p>{{ t('det_course_speaking_sample.p172') }}</p>
        <p>{{ t('det_course_speaking_sample.p173') }}</p>
        <p>{{ t('det_course_speaking_sample.p174') }}</p>
        <p>{{ t('det_course_speaking_sample.p175') }}</p>
        <p>{{ t('det_course_speaking_sample.p176') }}</p>
        <p>{{ t('det_course_speaking_sample.p177') }}</p>
        <p>{{ t('det_course_speaking_sample.p178') }}</p>
        <p>{{ t('det_course_speaking_sample.p179') }}</p>
        <p>{{ t('det_course_speaking_sample.p180') }}</p>
        <p>{{ t('det_course_speaking_sample.p181') }}</p>
        <p>{{ t('det_course_speaking_sample.p182') }}</p>
        <p>{{ t('det_course_speaking_sample.p183') }}</p>
        <p>{{ t('det_course_speaking_sample.p184') }}</p>
        <h2 id="prep_10">{{ t('det_course_speaking_sample.h29') }}</h2>
        <p>{{ t('det_course_speaking_sample.p185') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.ul10')"></div>
        <p>{{ t('det_course_speaking_sample.p186') }}</p>
        <p>{{ t('det_course_speaking_sample.p187') }}</p>
        <p>{{ t('det_course_speaking_sample.p188') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.ul11')"></div>
        <p>{{ t('det_course_speaking_sample.p189') }}</p>
        <p>{{ t('det_course_speaking_sample.p190') }}</p>
        <p>{{ t('det_course_speaking_sample.p191') }}</p>
        <p>{{ t('det_course_speaking_sample.p192') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.ul12')"></div>
        <p>{{ t('det_course_speaking_sample.p193') }}</p>
        <p>{{ t('det_course_speaking_sample.p194') }}</p>
        <p>{{ t('det_course_speaking_sample.p195') }}</p>
        <p>{{ t('det_course_speaking_sample.p196') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.ul13')"></div>
        <p>{{ t('det_course_speaking_sample.p197') }}</p>
        <p>{{ t('det_course_speaking_sample.p198') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.ul14')"></div>
        <p>{{ t('det_course_speaking_sample.p199') }}</p>
        <p>{{ t('det_course_speaking_sample.p200') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.ul15')"></div>
        <p>{{ t('det_course_speaking_sample.p201') }}</p>
        <p>{{ t('det_course_speaking_sample.p202') }}</p>
        <p>{{ t('det_course_speaking_sample.p203') }}</p>
        <p>{{ t('det_course_speaking_sample.p204') }}</p>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.p205')"></div>
        <div class="html_wrapper" v-html="t('det_course_speaking_sample.ul16')"></div>
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
.det-prep-course-read-aloud {
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
    .orange-text {
      color: orange;
    }
    .has-accent-3-color {
      color: orange !important;
    }
  }
  .wp-block-list {
    margin-left: 0px;
    padding-left: 20px;
  }
  .answer_out {
    margin-top: 20px;
    padding: 15px;
    background-color: #f1f1f1;
    border-radius: 4px;
    text-align: left;
    font-size: 16px;
    line-height: 26px;

    color: rgb(17, 17, 17);
    background-color: rgb(241, 241, 241);
  }
}
</style>
