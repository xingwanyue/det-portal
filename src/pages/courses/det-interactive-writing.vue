<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { domain } from '@/utils';
import my_video from '@/components/prepCompoment/video.vue';
import select_change from '@/components/prepCompoment/select_change.vue';

useSeoMeta({
  title: t('det_interactive_writing.seometa.title'),
  description: t('det_interactive_writing.seometa.description'),
});

const localePath = useLocalePath();
useHead({
  meta: [
    { name: 'DC.title', content: t('det_interactive_writing.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('det_interactive_writing.seometa.title') },
    { property: 'og:description', content: t('tos.seometa.description') },
    { property: 'og:url', content: `https://www.${domain}${localePath('/courses/det-interactive-writing')}` },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: t('det_interactive_writing.seometa.title') },
    {
      name: 'twitter:description',
      content: t('det_interactive_writing.seometa.description'),
    },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
});

const video_data = computed(() => {
  return {
    video_title: 'det-interactive-writing',
    video_url: 'https://www.youtube.com/embed/BgQ5dxC72WY?si=dM4AAU6ZeWNnt4xa',
  };
});
</script>
<template>
  <div class="common_prep_wrapper det-interactive-writing">
    <div class="top">
      <nuxt-link :to="localePath('/')" class="hoverGiveBorder">Home</nuxt-link>
      >

      <nuxt-link :to="localePath('/courses')" class="hoverGiveBorder">Courses</nuxt-link>
      > {{ t('courses.four_change_right_data.data4.video2data.title') }} {{ t('courses.prepCourse') }}
    </div>
    <div class="common_prep_out">
      <div class="common_prep_left">
        <h1>{{ t('det_interactive_writing.h11') }}</h1>
        <h2>{{ t('det_interactive_writing.h21') }}</h2>
        <p>{{ t('det_interactive_writing.p1') }}</p>
        <h2>{{ t('det_interactive_writing.h22') }}</h2>

        <!-- <div class="html_wrapper" v-html="t('det_interactive_writing.ul1')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.ul2')"></div> -->
        <ul class="html_wrapper">
          <li>
            <a :href="`#prep_1`">{{ t('det_interactive_writing.ui1.li1') }}</a>
          </li>
          <li>
            <a :href="`#prep_2`">{{ t('det_interactive_writing.ui1.li2') }}</a>
          </li>
          <li>
            <a :href="`#prep_3`">{{ t('det_interactive_writing.ui1.li3') }}</a>
          </li>
          <li>
            <a :href="`#prep_4`">{{ t('det_interactive_writing.ui1.li4') }}</a>
            <ul>
              <li>{{ t('det_interactive_writing.ui1.li4_1') }}</li>
              <li>{{ t('det_interactive_writing.ui1.li4_2') }}</li>
              <li>{{ t('det_interactive_writing.ui1.li4_3') }}</li>
            </ul>
          </li>
          <li>
            <a :href="`#prep_5`">{{ t('det_interactive_writing.ui1.li5') }}</a>
          </li>
        </ul>
        <p>{{ t('det_interactive_writing.p2') }}</p>
        <div class="video_out">
          <my_video :title="video_data.video_title" :video_url="video_data.video_url" />
        </div>
        <p id="prep_1">{{ t('det_interactive_writing.p3') }}</p>
        <h2 id="prep_2">{{ t('det_interactive_writing.h23') }}</h2>
        <p>{{ t('det_interactive_writing.p4') }}</p>

        <p>{{ t('det_interactive_writing.p5') }}</p>
        <img src="/img/det_interactive_writing/question-intro-2.png" alt="question-intro" />
        <figure>
          <figcaption>{{ t('det_interactive_writing.figcaption1') }}</figcaption>
        </figure>
        <p>{{ t('det_interactive_writing.p6') }}</p>
        <h2 id="prep_3">{{ t('det_interactive_writing.h24') }}</h2>
        <p>{{ t('det_interactive_writing.p7') }}</p>
        <p>{{ t('det_interactive_writing.p8') }}</p>
        <p>{{ t('det_interactive_writing.p9') }}</p>
        <p>{{ t('det_interactive_writing.p10') }}</p>
        <p>{{ t('det_interactive_writing.p11') }}</p>
        <h2 id="prep_4">{{ t('det_interactive_writing.h25') }}</h2>
        <p>{{ t('det_interactive_writing.p12') }}</p>
        <img
          src="/img/det_interactive_writing/Interactive-Writing-Categories-3.png"
          alt="Interactive-Writing-Categories"
        />
        <figure>
          <figcaption>{{ t('det_interactive_writing.figcaption2') }}</figcaption>
        </figure>
        <p>{{ t('det_interactive_writing.p13') }}</p>
        <h2>{{ t('det_interactive_writing.h26') }}</h2>
        <p>{{ t('det_interactive_writing.p14') }}</p>
        <p class="bg_yellow">{{ t('det_interactive_writing.p15') }}</p>
        <p>{{ t('det_interactive_writing.p16') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p17')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p18')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p19')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p20')"></div>
        <p>{{ t('det_interactive_writing.p21') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p22')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p23')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p24')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p25')"></div>
        <p>{{ t('det_interactive_writing.p26') }}</p>
        <p>{{ t('det_interactive_writing.p27') }}</p>
        <p>{{ t('det_interactive_writing.p28') }}</p>
        <p>{{ t('det_interactive_writing.p29') }}</p>
        <p>{{ t('det_interactive_writing.p30') }}</p>
        <p>{{ t('det_interactive_writing.p31') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p32')"></div>
        <p>{{ t('det_interactive_writing.p33') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p34')"></div>
        <p>{{ t('det_interactive_writing.p35') }}</p>
        <p>{{ t('det_interactive_writing.p36') }}</p>
        <p>{{ t('det_interactive_writing.p37') }}</p>
        <p>{{ t('det_interactive_writing.p38') }}</p>
        <p>{{ t('det_interactive_writing.p39') }}</p>
        <p>{{ t('det_interactive_writing.p40') }}</p>
        <p>{{ t('det_interactive_writing.p41') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p42')"></div>
        <p>{{ t('det_interactive_writing.p43') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p44')"></div>
        <p>{{ t('det_interactive_writing.p45') }}</p>
        <p>{{ t('det_interactive_writing.p46') }}</p>
        <p>{{ t('det_interactive_writing.p47') }}</p>
        <p>{{ t('det_interactive_writing.p48') }}</p>
        <p>{{ t('det_interactive_writing.p49') }}</p>
        <p>{{ t('det_interactive_writing.p50') }}</p>
        <p>{{ t('det_interactive_writing.p51') }}</p>
        <p>{{ t('det_interactive_writing.p52') }}</p>
        <div class="html_wrapper bg_yellow" v-html="t('det_interactive_writing.p53')"></div>
        <p>{{ t('det_interactive_writing.p54') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p55')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p56')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p57')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p58')"></div>
        <p>{{ t('det_interactive_writing.p59') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p60')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p61')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p62')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p63')"></div>
        <p>{{ t('det_interactive_writing.p64') }}</p>
        <p>{{ t('det_interactive_writing.p65') }}</p>
        <p>{{ t('det_interactive_writing.p66') }}</p>
        <p>{{ t('det_interactive_writing.p67') }}</p>
        <p>{{ t('det_interactive_writing.p68') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p69')"></div>
        <p>{{ t('det_interactive_writing.p70') }}</p>
        <p>{{ t('det_interactive_writing.p71') }}</p>
        <p>{{ t('det_interactive_writing.p72') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p73')"></div>
        <p>{{ t('det_interactive_writing.p74') }}</p>
        <p>{{ t('det_interactive_writing.p75') }}</p>
        <p>{{ t('det_interactive_writing.p76') }}</p>
        <h2>{{ t('det_interactive_writing.h27') }}</h2>
        <p>{{ t('det_interactive_writing.p77') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p78')"></div>
        <p>{{ t('det_interactive_writing.p79') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p80')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p81')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p82')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p83')"></div>
        <p>{{ t('det_interactive_writing.p84') }}</p>
        <p>{{ t('det_interactive_writing.p85') }}</p>
        <p>{{ t('det_interactive_writing.p86') }}</p>
        <p>{{ t('det_interactive_writing.p87') }}</p>
        <p>{{ t('det_interactive_writing.p88') }}</p>
        <p>{{ t('det_interactive_writing.p89') }}</p>
        <p>{{ t('det_interactive_writing.p90') }}</p>
        <p>{{ t('det_interactive_writing.p91') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p92')"></div>
        <p>{{ t('det_interactive_writing.p93') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p94')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p95')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p96')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p97')"></div>
        <p>{{ t('det_interactive_writing.p98') }}</p>
        <p>{{ t('det_interactive_writing.p99') }}</p>
        <p>{{ t('det_interactive_writing.p100') }}</p>
        <p>{{ t('det_interactive_writing.p101') }}</p>
        <p>{{ t('det_interactive_writing.p102') }}</p>
        <p>{{ t('det_interactive_writing.p103') }}</p>
        <p>{{ t('det_interactive_writing.p104') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p105')"></div>
        <p>{{ t('det_interactive_writing.p106') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p107')"></div>
        <p>{{ t('det_interactive_writing.p108') }}</p>
        <p>{{ t('det_interactive_writing.p109') }}</p>
        <p>{{ t('det_interactive_writing.p110') }}</p>
        <p>{{ t('det_interactive_writing.p111') }}</p>
        <p>{{ t('det_interactive_writing.p112') }}</p>
        <p>{{ t('det_interactive_writing.p113') }}</p>
        <p>{{ t('det_interactive_writing.p114') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p115')"></div>
        <p>{{ t('det_interactive_writing.p116') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p117')"></div>
        <p>{{ t('det_interactive_writing.p118') }}</p>
        <p>{{ t('det_interactive_writing.p119') }}</p>
        <p>{{ t('det_interactive_writing.p120') }}</p>
        <p>{{ t('det_interactive_writing.p121') }}</p>
        <p>{{ t('det_interactive_writing.p122') }}</p>
        <p>{{ t('det_interactive_writing.p123') }}</p>
        <p>{{ t('det_interactive_writing.p124') }}</p>
        <p>{{ t('det_interactive_writing.p125') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p126')"></div>
        <p>{{ t('det_interactive_writing.p127') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p128')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p129')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p130')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p131')"></div>
        <p>{{ t('det_interactive_writing.p132') }}</p>
        <p>{{ t('det_interactive_writing.p133') }}</p>
        <p>{{ t('det_interactive_writing.p134') }}</p>
        <p>{{ t('det_interactive_writing.p135') }}</p>
        <p>{{ t('det_interactive_writing.p136') }}</p>
        <p>{{ t('det_interactive_writing.p137') }}</p>
        <p>{{ t('det_interactive_writing.p138') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p139')"></div>
        <p>{{ t('det_interactive_writing.p140') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p141')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p142')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p143')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p144')"></div>
        <p>{{ t('det_interactive_writing.p145') }}</p>
        <p>{{ t('det_interactive_writing.p146') }}</p>
        <p>{{ t('det_interactive_writing.p147') }}</p>
        <p>{{ t('det_interactive_writing.p148') }}</p>
        <p>{{ t('det_interactive_writing.p149') }}</p>
        <p>{{ t('det_interactive_writing.p150') }}</p>
        <p>{{ t('det_interactive_writing.p151') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p152')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p153')"></div>
        <p>{{ t('det_interactive_writing.p154') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p155')"></div>
        <p>{{ t('det_interactive_writing.p156') }}</p>
        <p>{{ t('det_interactive_writing.p157') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p158')"></div>
        <p>{{ t('det_interactive_writing.p159') }}</p>
        <p>{{ t('det_interactive_writing.p160') }}</p>
        <p>{{ t('det_interactive_writing.p161') }}</p>
        <h2>{{ t('det_interactive_writing.h28') }}</h2>
        <p>{{ t('det_interactive_writing.p162') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p163')"></div>
        <p>{{ t('det_interactive_writing.p164') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p165')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p166')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p167')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p168')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p169')"></div>
        <p>{{ t('det_interactive_writing.p170') }}</p>
        <p>{{ t('det_interactive_writing.p171') }}</p>
        <p>{{ t('det_interactive_writing.p172') }}</p>
        <p>{{ t('det_interactive_writing.p173') }}</p>
        <p>{{ t('det_interactive_writing.p174') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p175')"></div>
        <p>{{ t('det_interactive_writing.p176') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p177')"></div>
        <p>{{ t('det_interactive_writing.p178') }}</p>
        <p>{{ t('det_interactive_writing.p179') }}</p>
        <p>{{ t('det_interactive_writing.p180') }}</p>
        <p>{{ t('det_interactive_writing.p181') }}</p>
        <p>{{ t('det_interactive_writing.p182') }}</p>
        <p>{{ t('det_interactive_writing.p183') }}</p>
        <p>{{ t('det_interactive_writing.p184') }}</p>
        <p>{{ t('det_interactive_writing.p185') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p186')"></div>
        <p>{{ t('det_interactive_writing.p187') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p188')"></div>
        <p>{{ t('det_interactive_writing.p189') }}</p>
        <p>{{ t('det_interactive_writing.p190') }}</p>
        <p>{{ t('det_interactive_writing.p191') }}</p>
        <p>{{ t('det_interactive_writing.p192') }}</p>
        <p>{{ t('det_interactive_writing.p193') }}</p>
        <p>{{ t('det_interactive_writing.p194') }}</p>
        <p>{{ t('det_interactive_writing.p195') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p196')"></div>
        <p>{{ t('det_interactive_writing.p197') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p198')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p199')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p200')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p201')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p202')"></div>
        <p>{{ t('det_interactive_writing.p203') }}</p>
        <p>{{ t('det_interactive_writing.p204') }}</p>
        <p>{{ t('det_interactive_writing.p205') }}</p>
        <p>{{ t('det_interactive_writing.p206') }}</p>
        <p>{{ t('det_interactive_writing.p207') }}</p>
        <p>{{ t('det_interactive_writing.p208') }}</p>
        <p>{{ t('det_interactive_writing.p209') }}</p>
        <p>{{ t('det_interactive_writing.p210') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p211')"></div>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p212')"></div>
        <p>{{ t('det_interactive_writing.p213') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p214')"></div>
        <p>{{ t('det_interactive_writing.p215') }}</p>
        <p>{{ t('det_interactive_writing.p216') }}</p>
        <p>{{ t('det_interactive_writing.p217') }}</p>
        <p>{{ t('det_interactive_writing.p218') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.p219')"></div>
        <p>{{ t('det_interactive_writing.p220') }}</p>
        <p>{{ t('det_interactive_writing.p221') }}</p>
        <p>{{ t('det_interactive_writing.p222') }}</p>
        <p>{{ t('det_interactive_writing.p223') }}</p>
        <h2 id="prep_5">{{ t('det_interactive_writing.h29') }}</h2>
        <p>{{ t('det_interactive_writing.p224') }}</p>
        <div class="html_wrapper" v-html="t('det_interactive_writing.ol1')"></div>
        <p>{{ t('det_interactive_writing.p225') }}</p>
        <p>{{ t('det_interactive_writing.p226') }}</p>
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
.det-interactive-writing {
  .sub-item {
    margin-left: 20px;
  }
  .orange {
    color: orange;
  }
  .bg_yellow {
    background-color: yellow;
    width: fit-content;
  }
  .title {
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
  }
  li {
    .highlight {
      background-color: yellow;
    }
  }
  ul {
    list-style-type: none;
    padding-left: 16px;
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
