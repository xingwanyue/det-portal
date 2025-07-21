<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { domain } from '@/utils';
import my_video from '@/components/prepCompoment/video.vue';
import select_change from '@/components/prepCompoment/select_change.vue';

useSeoMeta({
  title: t('det-prep-course-read-aloud.seometa.title'),
  description: t('det-prep-course-read-aloud.seometa.description'),
});

const localePath = useLocalePath();
useHead({
  meta: [
    { name: 'DC.title', content: t('det-prep-course-read-aloud.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('det-prep-course-read-aloud.seometa.title') },
    { property: 'og:description', content: t('tos.seometa.description') },
    { property: 'og:url', content: `https://www.${domain}${localePath('/courses/det-prep-course-read-aloud')}` },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: t('det-prep-course-read-aloud.seometa.title') },
    {
      name: 'twitter:description',
      content: t('det-prep-course-read-aloud.seometa.description'),
    },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
});

const showAnswer = ref(false);
const video_data = computed(() => {
  return {
    video_title: 'det-prep-course-read-aloud',
    video_url: 'https://www.youtube.com/embed/sf8FN3GAuHI?feature=oembed',
  };
});
const video_data2 = computed(() => {
  return {
    video_title: 'det-prep-course-read-aloud',
    video_url: 'https://www.youtube.com/embed/BUg-5MbTbA4?feature=oembed',
  };
});
</script>
<template>
  <div class="common_prep_wrapper det-prep-course-read-aloud">
    <div class="top">
      <nuxt-link :to="localePath('/')" class="hoverGiveBorder">Home</nuxt-link>
      >

      <nuxt-link :to="localePath('/courses')" class="hoverGiveBorder">Courses</nuxt-link>
      > {{ t('courses.four_change_right_data.data3.video3data.title') }} {{ t('courses.prepCourse') }}
    </div>
    <div class="common_prep_out">
      <div class="common_prep_left">
        <h1>{{ t('det-prep-course-read-aloud.h11') }}</h1>
        <p v-html="t('det-prep-course-read-aloud.p1')"></p>
        <p>{{ t('det-prep-course-read-aloud.p2') }}</p>

        <div class="video_out">
          <my_video :title="video_data.video_title" :video_url="video_data.video_url" />
        </div>
        <h2>{{ t('det-prep-course-read-aloud.h21') }}</h2>
        <p>
          <a :href="`#prep_1`">{{ t('det-prep-course-read-aloud.p3') }}</a>
        </p>
        <ul v-html="t('det-prep-course-read-aloud.ul1')"></ul>
        <p>
          <a :href="`#prep_2`">{{ t('det-prep-course-read-aloud.p4') }}</a>
        </p>
        <ul v-html="t('det-prep-course-read-aloud.ul2')"></ul>
        <p>
          <a :href="`#prep_3`">{{ t('det-prep-course-read-aloud.p5') }}</a>
        </p>
        <ul v-html="t('det-prep-course-read-aloud.ul3')"></ul>
        <p>
          <a :href="`#prep_4`">{{ t('det-prep-course-read-aloud.p6') }}</a>
        </p>
        <ul v-html="t('det-prep-course-read-aloud.ul4')"></ul>
        <p>
          <a :href="`#prep_5`">{{ t('det-prep-course-read-aloud.p7') }}</a>
        </p>
        <ul v-html="t('det-prep-course-read-aloud.ul5')"></ul>
        <p>
          <a :href="`#prep_6`">{{ t('det-prep-course-read-aloud.p8') }}</a>
        </p>
        <ul v-html="t('det-prep-course-read-aloud.ul6')"></ul>
        <p>
          <a :href="`#prep_7`">{{ t('det-prep-course-read-aloud.p9') }}</a>
        </p>
        <h2 id="prep_1">{{ t('det-prep-course-read-aloud.h22') }}</h2>
        <p>{{ t('det-prep-course-read-aloud.p10') }}</p>
        <p>{{ t('det-prep-course-read-aloud.p11') }}</p>
        <p>{{ t('det-prep-course-read-aloud.p12') }}</p>
        <p>{{ t('det-prep-course-read-aloud.p13') }}</p>
        <p>{{ t('det-prep-course-read-aloud.p14') }}</p>
        <p>{{ t('det-prep-course-read-aloud.p15') }}</p>
        <h2 id="prep_2">{{ t('det-prep-course-read-aloud.h23') }}</h2>
        <p>{{ t('det-prep-course-read-aloud.p16') }}</p>
        <img src="/img/det-prep-course-read-aloud/Screenshot.jpg" :alt="t('det-prep-course-read-aloud.img2')" />
        <p>{{ t('det-prep-course-read-aloud.p17') }}</p>
        <p>{{ t('det-prep-course-read-aloud.p18') }}</p>
        <p>{{ t('det-prep-course-read-aloud.p19') }}</p>
        <p>{{ t('det-prep-course-read-aloud.p20') }}</p>
        <p>{{ t('det-prep-course-read-aloud.p21') }}</p>
        <p>{{ t('det-prep-course-read-aloud.p22') }}</p>
        <p>{{ t('det-prep-course-read-aloud.p23') }}</p>
        <p>{{ t('det-prep-course-read-aloud.p24') }}</p>
        <h2 id="prep_3">{{ t('det-prep-course-read-aloud.h24') }}</h2>
        <p>{{ t('det-prep-course-read-aloud.p25') }}</p>
        <p>{{ t('det-prep-course-read-aloud.p26') }}</p>
        <p>{{ t('det-prep-course-read-aloud.p27') }}</p>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p28')"></div>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p29')"></div>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p30')"></div>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p31')"></div>
        <p>{{ t('det-prep-course-read-aloud.p32') }}</p>
        <p>{{ t('det-prep-course-read-aloud.p33') }}</p>
        <div
          style="
            background-color: #4267b2;
            border-radius: 25px;
            padding: 20px;
            display: flex;
            flex-wrap: wrap;
            text-align: center;
            margin: 20px 0;
          "
        >
          <span style="margin: 5px; color: white; font-size: 16px">important</span>
          <span style="margin: 5px; color: white; font-size: 16px">participate</span>
          <span style="margin: 5px; color: white; font-size: 16px">events</span>
          <span style="margin: 5px; color: white; font-size: 16px">especially</span>
          <span style="margin: 5px; color: white; font-size: 16px">showcase</span>
          <span style="margin: 5px; color: white; font-size: 16px">welcoming</span>
          <span style="margin: 5px; color: white; font-size: 16px">provide</span>
          <span style="margin: 5px; color: white; font-size: 16px">universities</span>
          <span style="margin: 5px; color: white; font-size: 16px">opportunities</span>
          <span style="margin: 5px; color: white; font-size: 16px">attend</span>
          <span style="margin: 5px; color: white; font-size: 16px">organizing</span>
          <span style="margin: 5px; color: white; font-size: 16px">activities</span>
          <span style="margin: 5px; color: white; font-size: 16px">involved</span>
          <span style="margin: 5px; color: white; font-size: 16px">communities</span>
          <span style="margin: 5px; color: white; font-size: 16px">recognized</span>
        </div>
        <p>{{ t('det-prep-course-read-aloud.p34') }}</p>
        <div
          id="word-cloud"
          style="
            background-color: #4267b2;
            border-radius: 25px;
            padding: 20px;
            max-width: 100%;
            text-align: center;
            margin: 20px 0;
            cursor: pointer;
          "
        >
          <div id="click-message" @click="showAnswer = !showAnswer" style="color: white; font-size: 18px">
            Click here to show the answer.
          </div>
          <div id="words" v-if="showAnswer">
            <span style="display: inline-block; margin: 5px; color: white; font-size: 16px">im’portant</span>
            <span style="display: inline-block; margin: 5px; color: white; font-size: 16px">par’ticipate</span>
            <span style="display: inline-block; margin: 5px; color: white; font-size: 16px">e’vents</span>
            <span style="display: inline-block; margin: 5px; color: white; font-size: 16px">e’specially</span>
            <span style="display: inline-block; margin: 5px; color: white; font-size: 16px">‘showcase</span>
            <span style="display: inline-block; margin: 5px; color: white; font-size: 16px">‘welcoming</span>
            <span style="display: inline-block; margin: 5px; color: white; font-size: 16px">pro’vide</span>
            <span style="display: inline-block; margin: 5px; color: white; font-size: 16px">uni’versities</span>
            <span style="display: inline-block; margin: 5px; color: white; font-size: 16px">oppor’tunities</span>
            <span style="display: inline-block; margin: 5px; color: white; font-size: 16px">a’ttend</span>
            <span style="display: inline-block; margin: 5px; color: white; font-size: 16px">‘organizing</span>
            <span style="display: inline-block; margin: 5px; color: white; font-size: 16px">ac’tivities</span>
            <span style="display: inline-block; margin: 5px; color: white; font-size: 16px">in’volved</span>
            <span style="display: inline-block; margin: 5px; color: white; font-size: 16px">co’mmunities</span>
            <span style="display: inline-block; margin: 5px; color: white; font-size: 16px">‘recognized</span>
          </div>
        </div>
        <p>{{ t('det-prep-course-read-aloud.p35') }}</p>
        <p>{{ t('det-prep-course-read-aloud.p36') }}</p>

        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p37')"></div>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p38')"></div>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p39')"></div>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p40')"></div>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p41')"></div>
        <p>{{ t('det-prep-course-read-aloud.p42') }}</p>
        <div class="audio-player">
          <audio id="audio-3" preload="none" controls>
            <source src="/audio/5-sentence-recording.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <p>{{ t('det-prep-course-read-aloud.p43') }}</p>
        <h2 id="prep_4">{{ t('det-prep-course-read-aloud.h25') }}</h2>
        <p>{{ t('det-prep-course-read-aloud.p44') }}</p>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p45')"></div>

        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p46')"></div>
        <p>{{ t('det-prep-course-read-aloud.p47') }}</p>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p48')"></div>
        <p>{{ t('det-prep-course-read-aloud.p49') }}</p>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p50')"></div>
        <p>{{ t('det-prep-course-read-aloud.p51') }}</p>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p52')"></div>
        <p>{{ t('det-prep-course-read-aloud.p53') }}</p>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p54')"></div>
        <p>{{ t('det-prep-course-read-aloud.p55') }}</p>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p56')"></div>
        <h2 id="prep_5">{{ t('det-prep-course-read-aloud.h26') }}</h2>
        <h3>{{ t('det-prep-course-read-aloud.h31') }}</h3>
        <p>{{ t('det-prep-course-read-aloud.p57') }}</p>
        <img src="/img/det-prep-course-read-aloud/Screenshot2.png" :alt="t('det-prep-course-read-aloud.img3')" />
        <p>{{ t('det-prep-course-read-aloud.p58') }}</p>
        <h3>{{ t('det-prep-course-read-aloud.h32') }}</h3>
        <p>{{ t('det-prep-course-read-aloud.p59') }}</p>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p60')"></div>
        <p>{{ t('det-prep-course-read-aloud.p61') }}</p>
        <p>{{ t('det-prep-course-read-aloud.p62') }}</p>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p63')"></div>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p64')"></div>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p65')"></div>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p66')"></div>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p67')"></div>
        <h3>{{ t('det-prep-course-read-aloud.h33') }}</h3>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p68')"></div>
        <h3>{{ t('det-prep-course-read-aloud.h34') }}</h3>
        <p>{{ t('det-prep-course-read-aloud.p69') }}</p>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p70')"></div>
        <p>{{ t('det-prep-course-read-aloud.p71') }}</p>
        <h2 id="prep_6">{{ t('det-prep-course-read-aloud.h27') }}</h2>
        <p>{{ t('det-prep-course-read-aloud.p72') }}</p>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p73')"></div>

        <p>{{ t('det-prep-course-read-aloud.p74') }}</p>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p75')"></div>
        <p>{{ t('det-prep-course-read-aloud.p76') }}</p>
        <p>{{ t('det-prep-course-read-aloud.p77') }}</p>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p78')"></div>

        <p>{{ t('det-prep-course-read-aloud.p79') }}</p>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p80')"></div>
        <p>{{ t('det-prep-course-read-aloud.p81') }}</p>
        <h2 id="prep_7">{{ t('det-prep-course-read-aloud.h28') }}</h2>
        <p>{{ t('det-prep-course-read-aloud.p82') }}</p>
        <ol v-html="t('det-prep-course-read-aloud.ol1')"></ol>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p83')"></div>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p84')"></div>
        <div class="html_wrapper" v-html="t('det-prep-course-read-aloud.p85')"></div>
        <div class="video_out">
          <my_video :title="video_data2.video_title" :video_url="video_data2.video_url" />
        </div>
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
