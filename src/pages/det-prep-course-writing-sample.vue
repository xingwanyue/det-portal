<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import my_video from '@/components/prepCompoment/video.vue';

const video_data = computed(() => {
  return {
    video_title: 'det-prep-course-writing-sample',
    video_url: 'https://www.youtube.com/embed/BgQ5dxC72WY?si=dM4AAU6ZeWNnt4xa',
  };
});
</script>
<template>
  <div class="common_prep_wrapper det-prep-course-writing-sample">
    <div class="common_prep_out">
      <div class="common_prep_left">
        <img
          src="/img/det_prep_course_writing_sample/writing-sample-lesson-cover-1.jpg"
          alt="writing sample lesson cover"
        />
        <h1>{{ t('det_prep_course_writing_sample.h11') }}</h1>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p1')"></div>
        <h2>{{ t('det_prep_course_writing_sample.h21') }}</h2>

        <ol>
          <li>{{ t('det_prep_course_writing_sample.ol1.li1') }}</li>
          <li>{{ t('det_prep_course_writing_sample.ol1.li2') }}</li>
          <li>{{ t('det_prep_course_writing_sample.ol1.li3') }}</li>
          <li>
            {{ t('det_prep_course_writing_sample.ol1.li4') }}
            <ul>
              <li>{{ t('det_prep_course_writing_sample.ol1.li4_1') }}</li>
              <li>{{ t('det_prep_course_writing_sample.ol1.li4_2') }}</li>
              <li>{{ t('det_prep_course_writing_sample.ol1.li4_3') }}</li>
            </ul>
          </li>
          <li>
            {{ t('det_prep_course_writing_sample.ol1.li5') }}
            <ul>
              <li>{{ t('det_prep_course_writing_sample.ol1.li5_1') }}</li>
              <li>{{ t('det_prep_course_writing_sample.ol1.li5_2') }}</li>
              <li>{{ t('det_prep_course_writing_sample.ol1.li5_3') }}</li>
            </ul>
          </li>
          <li>
            {{ t('det_prep_course_writing_sample.ol1.li6') }}
            <ul>
              <li>{{ t('det_prep_course_writing_sample.ol1.li6_1') }}</li>
              <li>{{ t('det_prep_course_writing_sample.ol1.li6_2') }}</li>
              <li>{{ t('det_prep_course_writing_sample.ol1.li6_3') }}</li>
              <li>{{ t('det_prep_course_writing_sample.ol1.li6_4') }}</li>
            </ul>
          </li>
          <li>{{ t('det_prep_course_writing_sample.ol1.li7') }}</li>
          <li>{{ t('det_prep_course_writing_sample.ol1.li8') }}</li>
          <li>{{ t('det_prep_course_writing_sample.ol1.li9') }}</li>
        </ol>
        <p>{{ t('det_prep_course_writing_sample.p3') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p4') }}</p>
        <h2>{{ t('det_prep_course_writing_sample.h22') }}</h2>
        <p>{{ t('det_prep_course_writing_sample.p5') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p6')"></div>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p7')"></div>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p8')"></div>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p9')"></div>
        <p>{{ t('det_prep_course_writing_sample.p10') }}</p>
        <h2>{{ t('det_prep_course_writing_sample.h23') }}</h2>
        <p>{{ t('det_prep_course_writing_sample.p11') }}</p>
        <img src="/img/det_prep_course_writing_sample/DET-Writing-Sample-UI-2.png" alt="DET-Writing-Sample-UI" />
        <figcaption>{{ t('det_prep_course_writing_sample.figcaption1') }}</figcaption>
        <p>{{ t('det_prep_course_writing_sample.p12') }}</p>
        <h2>{{ t('det_prep_course_writing_sample.h24') }}</h2>
        <p>{{ t('det_prep_course_writing_sample.p13') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p14')"></div>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p15')"></div>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p16')"></div>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p17')"></div>
        <p>{{ t('det_prep_course_writing_sample.p18') }}</p>
        <h2>{{ t('det_prep_course_writing_sample.h25') }}</h2>
        <p>{{ t('det_prep_course_writing_sample.p19') }}</p>
        <img src="/img/det_prep_course_writing_sample/writing-sample-category-3.png" alt="writing-sample-category" />
        <figcaption>{{ t('det_prep_course_writing_sample.figcaption2') }}</figcaption>
        <h2>{{ t('det_prep_course_writing_sample.h26') }}</h2>
        <p>{{ t('det_prep_course_writing_sample.p20') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p21')"></div>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.ul4')"></div>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p22')"></div>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.ul5')"></div>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p23')"></div>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.ul6')"></div>
        <p>{{ t('det_prep_course_writing_sample.p24') }}</p>
        <h3>{{ t('det_prep_course_writing_sample.h31') }}</h3>
        <p>{{ t('det_prep_course_writing_sample.p25') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p26')"></div>
        <p>{{ t('det_prep_course_writing_sample.p27') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p28')"></div>
        <p>{{ t('det_prep_course_writing_sample.p29') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p30') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p31')"></div>
        <p>{{ t('det_prep_course_writing_sample.p32') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p33')"></div>
        <p>{{ t('det_prep_course_writing_sample.p34') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p35') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p36') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p37')"></div>
        <p>{{ t('det_prep_course_writing_sample.p38') }}</p>
        <h3>{{ t('det_prep_course_writing_sample.h32') }}</h3>
        <p>{{ t('det_prep_course_writing_sample.p39') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p40') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p41')"></div>
        <p>{{ t('det_prep_course_writing_sample.p42') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p43')"></div>
        <p>{{ t('det_prep_course_writing_sample.p44') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p45') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p46') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p47')"></div>
        <p>{{ t('det_prep_course_writing_sample.p48') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p49') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p50')"></div>
        <p>{{ t('det_prep_course_writing_sample.p51') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p52') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p53') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p54')"></div>
        <h3>{{ t('det_prep_course_writing_sample.h33') }}</h3>
        <p>{{ t('det_prep_course_writing_sample.p55') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p56') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p57')"></div>
        <p>{{ t('det_prep_course_writing_sample.p58') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p59')"></div>
        <p>{{ t('det_prep_course_writing_sample.p60') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p61') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p62') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p63') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p64') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p65') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p66')"></div>
        <p>{{ t('det_prep_course_writing_sample.p67') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p68')"></div>
        <p>{{ t('det_prep_course_writing_sample.p69') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p70')"></div>
        <p>{{ t('det_prep_course_writing_sample.p71') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p72') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p73') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p74') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p75') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p76') }}</p>
        <h2>{{ t('det_prep_course_writing_sample.h27') }}</h2>
        <p>{{ t('det_prep_course_writing_sample.p77') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p78') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p79') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.ul7')"></div>
        <p>{{ t('det_prep_course_writing_sample.p80') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p81') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.ul8')"></div>
        <p>{{ t('det_prep_course_writing_sample.p82') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p83') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.ul9')"></div>
        <p>{{ t('det_prep_course_writing_sample.p84') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p85') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.ul10')"></div>
        <p>{{ t('det_prep_course_writing_sample.p86') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p87') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p88') }}</p>
        <h3>{{ t('det_prep_course_writing_sample.h34') }}</h3>
        <p>{{ t('det_prep_course_writing_sample.p89') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p90')"></div>
        <p>{{ t('det_prep_course_writing_sample.p91') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p92')"></div>
        <p>{{ t('det_prep_course_writing_sample.p93') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p94') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p95') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p96') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p97') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p98') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p99')"></div>
        <p>{{ t('det_prep_course_writing_sample.p100') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p101')"></div>
        <p>{{ t('det_prep_course_writing_sample.p102') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p103') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p104')"></div>
        <p>{{ t('det_prep_course_writing_sample.p105') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p106') }}</p>
        <h3>{{ t('det_prep_course_writing_sample.h35') }}</h3>
        <p>{{ t('det_prep_course_writing_sample.p107') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p108') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p109')"></div>
        <p>{{ t('det_prep_course_writing_sample.p110') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p111')"></div>
        <p>{{ t('det_prep_course_writing_sample.p112') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p113') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p114') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p115') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p116') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p117') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p118')"></div>
        <p>{{ t('det_prep_course_writing_sample.p119') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p120')"></div>
        <p>{{ t('det_prep_course_writing_sample.p121') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p122') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p123')"></div>
        <p>{{ t('det_prep_course_writing_sample.p124') }}</p>
        <h3>{{ t('det_prep_course_writing_sample.h36') }}</h3>
        <p>{{ t('det_prep_course_writing_sample.p125') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p126')"></div>
        <p>{{ t('det_prep_course_writing_sample.p127') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p128')"></div>
        <p>{{ t('det_prep_course_writing_sample.p129') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p130') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p131') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p132') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p133') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p134') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p135') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p136')"></div>
        <p>{{ t('det_prep_course_writing_sample.p137') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p138')"></div>
        <p>{{ t('det_prep_course_writing_sample.p139') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p140') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p141') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p142') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p143') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p144') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p145') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p146') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p147')"></div>
        <p>{{ t('det_prep_course_writing_sample.p148') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p149') }}</p>
        <h3>{{ t('det_prep_course_writing_sample.h37') }}</h3>
        <p>{{ t('det_prep_course_writing_sample.p150') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p151') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p152')"></div>
        <p>{{ t('det_prep_course_writing_sample.p153') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p154')"></div>
        <p>{{ t('det_prep_course_writing_sample.p155') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p156') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p157') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p158') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p159') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p160') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p161') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p162') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p163') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p164') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p165') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p166') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p167')"></div>
        <p>{{ t('det_prep_course_writing_sample.p168') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p169')"></div>
        <p>{{ t('det_prep_course_writing_sample.p170') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p171') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p172') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p173') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p174') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p175') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p176')"></div>
        <p>{{ t('det_prep_course_writing_sample.p177') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p178') }}</p>
        <h2>{{ t('det_prep_course_writing_sample.h28') }}</h2>
        <p>{{ t('det_prep_course_writing_sample.p179') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p180') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p181') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.ul11')"></div>
        <p>{{ t('det_prep_course_writing_sample.p182') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.ul12')"></div>
        <p>{{ t('det_prep_course_writing_sample.p183') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.ul13')"></div>
        <p>{{ t('det_prep_course_writing_sample.p184') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.ul14')"></div>
        <p>{{ t('det_prep_course_writing_sample.p185') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p186') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p187')"></div>
        <p>{{ t('det_prep_course_writing_sample.p188') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p189')"></div>
        <p>{{ t('det_prep_course_writing_sample.p190') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p191') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p192') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p193')"></div>
        <p>{{ t('det_prep_course_writing_sample.p194') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p195')"></div>
        <p>{{ t('det_prep_course_writing_sample.p196') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p197') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p198') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p199') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p200') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p201')"></div>
        <p>{{ t('det_prep_course_writing_sample.p202') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p203') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p204') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p205') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p206')"></div>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p207')"></div>
        <p>{{ t('det_prep_course_writing_sample.p208') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p209')"></div>
        <p>{{ t('det_prep_course_writing_sample.p210') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p211')"></div>
        <p>{{ t('det_prep_course_writing_sample.p212') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.ul15')"></div>
        <p>{{ t('det_prep_course_writing_sample.p213') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.ul16')"></div>
        <p>{{ t('det_prep_course_writing_sample.p214') }}</p>
        ***img**
      </div>
      <div class="common_prep_right"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/prep.scss';
</style>
<style lang="scss">
.det-prep-course-writing-sample {
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
