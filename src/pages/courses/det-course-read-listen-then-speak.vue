<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { domain } from '@/utils';
const { t } = useI18n();
const showAnswer1 = ref(false);
const showAnswer2 = ref(false);
const showAnswer3 = ref(false);
import select_change from '@/components/prepCompoment/select_change.vue';

useSeoMeta({
  title: t('det-course-read-listen-then-speak.seometa.title'),
  description: t('det-course-read-listen-then-speak.seometa.description'),
});

const localePath = useLocalePath();
useHead({
  meta: [
    { name: 'DC.title', content: t('det-course-read-listen-then-speak.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('det-course-read-listen-then-speak.seometa.title') },
    { property: 'og:description', content: t('tos.seometa.description') },
    { property: 'og:url', content: `https://www.${domain}${localePath('/courses/det-course-read-listen-then-speak')}` },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: t('det-course-read-listen-then-speak.seometa.title') },
    {
      name: 'twitter:description',
      content: t('det-course-read-listen-then-speak.seometa.description'),
    },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
});
</script>
<template>
  <div class="common_prep_wrapper det-course-read-listen-then-speak">
    <div class="top">
      <nuxt-link :to="localePath('/')" class="hoverGiveBorder">Home</nuxt-link>
      >

      <nuxt-link :to="localePath('/courses')" class="hoverGiveBorder">Courses</nuxt-link>
      > {{ t('courses.four_change_right_data.data3.video2data.title') }} {{ t('courses.prepCourse') }}
    </div>
    <div class="common_prep_out">
      <div class="common_prep_left">
        <h1>{{ t('det-course-read-listen-then-speak.h11') }}</h1>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p1')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p2') }}</p>
        <h2>{{ t('det-course-read-listen-then-speak.h21') }}</h2>
        <ol class="toc_ol">
          <li>
            <a :href="`#prep_1`">{{ t('det-course-read-listen-then-speak.ol1.li1') }}</a>
          </li>
          <li>
            <a :href="`#prep_2`">{{ t('det-course-read-listen-then-speak.ol1.li2') }}</a>
          </li>
          <li>
            <a :href="`#prep_3`">{{ t('det-course-read-listen-then-speak.ol1.li3') }}</a>
          </li>
          <li>
            <a :href="`#prep_4`">{{ t('det-course-read-listen-then-speak.ol1.li4') }}</a>
          </li>
          <li>
            <a :href="`#prep_5`">{{ t('det-course-read-listen-then-speak.ol1.li5') }}</a>
          </li>
          <li>
            <a :href="`#prep_6`">{{ t('det-course-read-listen-then-speak.ol1.li6') }}</a>
          </li>
          <li>
            <a :href="`#prep_7`">{{ t('det-course-read-listen-then-speak.ol1.li7') }}</a>
          </li>
          <li>
            <a :href="`#prep_8`">{{ t('det-course-read-listen-then-speak.ol1.li8') }}</a>
          </li>
          <li>
            <a :href="`#prep_9`">{{ t('det-course-read-listen-then-speak.ol1.li9') }}</a>
          </li>
        </ol>

        <p id="prep_1">{{ t('det-course-read-listen-then-speak.p3') }}</p>
        <h2 id="prep_2">{{ t('det-course-read-listen-then-speak.h22') }}</h2>
        <p>{{ t('det-course-read-listen-then-speak.p4') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p5') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p6') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p7') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p8') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p9') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p10') }}</p>
        <h2 id="prep_3">{{ t('det-course-read-listen-then-speak.h23') }}</h2>
        <p>{{ t('det-course-read-listen-then-speak.p11') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p12') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p13') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p14') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p15') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p16') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p17') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p18') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p19') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p20') }}</p>
        <h2 id="prep_4">{{ t('det-course-read-listen-then-speak.h24') }}</h2>
        <p>{{ t('det-course-read-listen-then-speak.p21') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p22') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p23') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p24') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p25') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p26') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p27') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p28') }}</p>
        <h2 id="prep_5">{{ t('det-course-read-listen-then-speak.h25') }}</h2>
        <p>{{ t('det-course-read-listen-then-speak.p29') }}</p>

        <img
          src="/img/det-course-read-listen-then-speak/Question-Categories-of-DET-Speaking-Questions.png"
          alt="Question-Categories-of-DET-Speaking-Questions"
        />
        <figure>
          <figcaption>{{ t('det-course-read-listen-then-speak.figcaption1') }}</figcaption>
        </figure>

        <p>{{ t('det-course-read-listen-then-speak.p30') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p31') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p32') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p33') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p34') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p35') }}</p>
        <h2 id="prep_6">{{ t('det-course-read-listen-then-speak.h26') }}</h2>
        <p>{{ t('det-course-read-listen-then-speak.p36') }}</p>
        <ol class="wp-block-list">
          <li>
            <strong>{{ t('det-course-read-listen-then-speak.ol2') }}</strong>
          </li>
        </ol>

        <p>{{ t('det-course-read-listen-then-speak.p37') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p38') }}</p>
        <!-- <p>{{ t('det-course-read-listen-then-speak.p39') }}</p> -->
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p39')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p40') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p41') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p42') }}</p>
        <!-- <p>{{ t('det-course-read-listen-then-speak.p43') }}</p> -->
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p43')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p44') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p45') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p46') }}</p>
        <!-- <p>{{ t('det-course-read-listen-then-speak.p47') }}</p> -->
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p47')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p48') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p49') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p50') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p51') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p52') }}</p>
        <img
          src="/img/det-course-read-listen-then-speak/structure-of-DET-speaking-questions.png"
          alt="structure-of-DET-speaking-questions"
        />
        <figure>
          <figcaption>{{ t('det-course-read-listen-then-speak.figcaption2') }}</figcaption>
        </figure>

        <p>{{ t('det-course-read-listen-then-speak.p53') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p54') }}</p>
        <strong>{{ t('det-course-read-listen-then-speak.p55') }}</strong>

        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p56')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p57') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p58') }}</p>
        <strong>{{ t('det-course-read-listen-then-speak.p59') }}</strong>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p60')"></div>

        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p61')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p62') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p63') }}</p>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p64')"></div>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p65')"></div>

        <p>{{ t('det-course-read-listen-then-speak.p66') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p67') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p68') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p69') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p70') }}</p>

        <strong>{{ t('det-course-read-listen-then-speak.p71') }}</strong>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p72')"></div>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p73')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p74') }}</p>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p75')"></div>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p76')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p77') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p78') }}</p>
        <div class="audio-player">
          <audio id="audio-3" preload="none" controls>
            <source src="/audio/listen-then-speak-question-1.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <figure>
          <figcaption>{{ t('det-course-read-listen-then-speak.figcaption3') }}</figcaption>
        </figure>

        <p>{{ t('det-course-read-listen-then-speak.p79') }}</p>
        <div class="prep_button" @click="showAnswer1 = !showAnswer1">
          {{ t('det-course-read-listen-then-speak.click') }}
        </div>
        <div v-if="showAnswer1" class="answer_out">
          {{ t('det-course-read-listen-then-speak.answer1') }}
        </div>
        <p>{{ t('det-course-read-listen-then-speak.p80') }}</p>

        <p>{{ t('det-course-read-listen-then-speak.p81') }}</p>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p82')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p83') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p84') }}</p>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p85')"></div>
        <h2 id="prep_7">{{ t('det-course-read-listen-then-speak.h27') }}</h2>

        <p>{{ t('det-course-read-listen-then-speak.p86') }}</p>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.ol3')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p87') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p88') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p89') }}</p>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p90')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p91') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p92') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p93') }}</p>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p94')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p95') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p96') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p97') }}</p>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p98')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p99') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p100') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p101') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p102') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p103') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p104') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p105') }}</p>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p106')"></div>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p107')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p108') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p109') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p110') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p111') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p112') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p113') }}</p>

        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p114')"></div>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p115')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p116') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p117') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p118') }}</p>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p119')"></div>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p120')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p121') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p122') }}</p>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p123')"></div>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p124')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p125') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p126') }}</p>

        <div class="audio-player">
          <audio id="audio-3" preload="none" controls>
            <source src="/audio/listen-then-speak-question-2.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <figure>
          <figcaption>{{ t('det-course-read-listen-then-speak.figcaption4') }}</figcaption>
        </figure>

        <p>{{ t('det-course-read-listen-then-speak.p127') }}</p>
        <!-- <button>Click to show/hide the question.</button> -->
        <div class="prep_button" @click="showAnswer2 = !showAnswer2">
          {{ t('det-course-read-listen-then-speak.click') }}
        </div>
        <div v-if="showAnswer2" class="answer_out">
          {{ t('det-course-read-listen-then-speak.answer2') }}
        </div>
        <p>{{ t('det-course-read-listen-then-speak.p128') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p129') }}</p>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p130')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p131') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p132') }}</p>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p133')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p134') }}</p>
        <h2 id="prep_8">{{ t('det-course-read-listen-then-speak.h28') }}</h2>
        <p>{{ t('det-course-read-listen-then-speak.p135') }}</p>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.ol4')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p136') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p137') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p138') }}</p>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p139')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p140') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p141') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p142') }}</p>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p143')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p144') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p145') }}</p>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p146')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p147') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p148') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p149') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p150') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p151') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p152') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p153') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p154') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p155') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p156') }}</p>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p157')"></div>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p158')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p159') }}</p>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p160')"></div>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p161')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p162') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p163') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p164') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p165') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p166') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p167') }}</p>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p168')"></div>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p169')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p170') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p171') }}</p>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p172')"></div>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p173')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p174') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p175') }}</p>

        <div class="audio-player">
          <audio id="audio-3" preload="none" controls>
            <source
              src="/audio/listen-then-speak-question-3.mp3"
              type="audio/mp3"
            />
            Your browser does not support the audio element.
          </audio>
        </div>
        <figure>
          <figcaption>{{ t('det-course-read-listen-then-speak.figcaption5') }}</figcaption>
        </figure>

        <p>{{ t('det-course-read-listen-then-speak.p176') }}</p>

        <div class="prep_button" @click="showAnswer3 = !showAnswer3">
          {{ t('det-course-read-listen-then-speak.click') }}
        </div>
        <div v-if="showAnswer3" class="answer_out">
          {{ t('det-course-read-listen-then-speak.answer3') }}
        </div>

        <p>{{ t('det-course-read-listen-then-speak.p177') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p178') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p179') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p180') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p181') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p182') }}</p>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p183')"></div>

        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p184')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p185') }}</p>
        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p186')"></div>

        <div class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p187')"></div>

        <div id="prep_9" class="html_wrapper" v-html="t('det-course-read-listen-then-speak.p188')"></div>
        <p>{{ t('det-course-read-listen-then-speak.p189') }}</p>
        <p>{{ t('det-course-read-listen-then-speak.p190') }}</p>
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
.det-course-read-listen-then-speak {
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
    .orange-text {
      color: orange;
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
