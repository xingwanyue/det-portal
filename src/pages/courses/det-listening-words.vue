<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { domain } from '@/utils';
const { t } = useI18n();
import my_video from '@/components/prepCompoment/video.vue';
import select_change from '@/components/prepCompoment/select_change.vue';

useSeoMeta({
  title: t('det_listening_words.seometa.title'),
  description: t('det_listening_words.seometa.description'),
});

const localePath = useLocalePath();
useHead({
  meta: [
    { name: 'DC.title', content: t('det_listening_words.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('det_listening_words.seometa.title') },
    { property: 'og:description', content: t('tos.seometa.description') },
    { property: 'og:url', content: `https://www.${domain}${localePath('/courses/det-listening-words')}` },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: t('det_listening_words.seometa.title') },
    {
      name: 'twitter:description',
      content: t('det_listening_words.seometa.description'),
    },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
});

const video_data = computed(() => {
  return {
    video_title: 'det-listening-words',
    video_url: 'https://www.youtube.com/embed/AALAtaSQUkc?si=SGrKhGddQvF4eUR-',
  };
});
const show_answer1 = ref(false);
const show_answer2 = ref(false);
const show_answer3 = ref(false);
const show_answer4 = ref(false);
const show_answer5 = ref(false);
</script>
<template>
  <div class="common_prep_wrapper det-listening-words">
    <div class="top">
      <nuxt-link :to="localePath('/')" class="hoverGiveBorder">Home</nuxt-link>
      >

      <nuxt-link :to="localePath('/courses')" class="hoverGiveBorder">Courses</nuxt-link>
      > {{ t('courses.four_change_right_data.data5.video2data.title') }} {{ t('courses.prepCourse') }}
    </div>
    <div class="common_prep_out">
      <div class="common_prep_left">
        <h1>{{ t('det_listening_words.h11') }}</h1>
        <h2>{{ t('det_listening_words.h21') }}</h2>
        <p>{{ t('det_listening_words.p1') }}</p>
        <p>{{ t('det_listening_words.p2') }}</p>
        <p>{{ t('det_listening_words.p3') }}</p>
        <p>{{ t('det_listening_words.p4') }}</p>
        <p>{{ t('det_listening_words.p5') }}</p>
        <p>{{ t('det_listening_words.p6') }}</p>
        <p>{{ t('det_listening_words.p7') }}</p>
        <iframe
          class="lazyload"
          src="https://creators.spotify.com/pod/show/duolingoenglishtest/embed/episodes/Unlocking-DET-Interactive-Listening-with-Scenario-Specific-Vocabulary-e2r14kq/a-abko2cv"
          height="102px"
          max-width="400px"
          frameborder="0"
          scrolling="no"
        ></iframe>
        <h2>{{ t('det_listening_words.h22') }}</h2>
        <p>{{ t('det_listening_words.p9') }}</p>
        <p>{{ t('det_listening_words.p10') }}</p>
        <p>{{ t('det_listening_words.p11') }}</p>
        <h3>{{ t('det_listening_words.h31') }}</h3>
        <p>{{ t('det_listening_words.p12') }}</p>
        <div class="html_wrapper" v-html="t('det_listening_words.p13')"></div>
        <p>{{ t('det_listening_words.p14') }}</p>
        <p>{{ t('det_listening_words.p15') }}</p>
        <p>{{ t('det_listening_words.p16') }}</p>
        <p>{{ t('det_listening_words.p17') }}</p>
        <div class="html_wrapper" v-html="t('det_listening_words.p18')"></div>
        <p>{{ t('det_listening_words.p19') }}</p>
        <p>{{ t('det_listening_words.p20') }}</p>
        <p>{{ t('det_listening_words.p21') }}</p>
        <div class="html_wrapper" v-html="t('det_listening_words.p22')"></div>
        <p>{{ t('det_listening_words.p23') }}</p>
        <p>{{ t('det_listening_words.p24') }}</p>
        <p>{{ t('det_listening_words.p25') }}</p>
        <p>{{ t('det_listening_words.p26') }}</p>
        <p>{{ t('det_listening_words.p27') }}</p>
        <h2>{{ t('det_listening_words.h23') }}</h2>
        <p>{{ t('det_listening_words.p28') }}</p>
        <p>{{ t('det_listening_words.p29') }}</p>
        <p>{{ t('det_listening_words.p30') }}</p>
        <p>{{ t('det_listening_words.p31') }}</p>
        <p>{{ t('det_listening_words.p32') }}</p>
        <p>{{ t('det_listening_words.p33') }}</p>
        <p>{{ t('det_listening_words.p34') }}</p>
        <p>{{ t('det_listening_words.p35') }}</p>
        <p>{{ t('det_listening_words.p36') }}</p>
        <p>{{ t('det_listening_words.p37') }}</p>
        <p>{{ t('det_listening_words.p38') }}</p>
        <p>{{ t('det_listening_words.p39') }}</p>
        <div class="prep_button" @click="show_answer1 = !show_answer1">{{ t('det_listening_words.sta') }}</div>
        <div v-if="show_answer1" class="answer_out">Answers: 1-B, 2-A, 3-D, 4-C</div>
        <p>{{ t('det_listening_words.p40') }}</p>
        <p>{{ t('det_listening_words.p41') }}</p>
        <p>{{ t('det_listening_words.p42') }}</p>
        <p>{{ t('det_listening_words.p43') }}</p>
        <p>{{ t('det_listening_words.p44') }}</p>
        <p>{{ t('det_listening_words.p45') }}</p>
        <p>{{ t('det_listening_words.p46') }}</p>
        <p>{{ t('det_listening_words.p47') }}</p>
        <p>{{ t('det_listening_words.p48') }}</p>
        <p>{{ t('det_listening_words.p49') }}</p>
        <p>{{ t('det_listening_words.p50') }}</p>
        <p>{{ t('det_listening_words.p51') }}</p>
        <p>{{ t('det_listening_words.p52') }}</p>
        <p>{{ t('det_listening_words.p53') }}</p>
        <p>{{ t('det_listening_words.p54') }}</p>
        <p>{{ t('det_listening_words.p55') }}</p>
        <p>{{ t('det_listening_words.p56') }}</p>
        <p>{{ t('det_listening_words.p57') }}</p>
        <h2>{{ t('det_listening_words.h24') }}</h2>
        <p>{{ t('det_listening_words.p58') }}</p>
        <p>{{ t('det_listening_words.p59') }}</p>
        <p>{{ t('det_listening_words.p60') }}</p>
        <p>{{ t('det_listening_words.p61') }}</p>
        <p>{{ t('det_listening_words.p62') }}</p>
        <p>{{ t('det_listening_words.p63') }}</p>
        <p>{{ t('det_listening_words.p64') }}</p>
        <p>{{ t('det_listening_words.p65') }}</p>
        <p>{{ t('det_listening_words.p66') }}</p>
        <p>{{ t('det_listening_words.p67') }}</p>
        <p>{{ t('det_listening_words.p68') }}</p>
        <p>{{ t('det_listening_words.p69') }}</p>
        <p>{{ t('det_listening_words.p70') }}</p>
        <p>{{ t('det_listening_words.p71') }}</p>
        <p>{{ t('det_listening_words.p72') }}</p>
        <p>{{ t('det_listening_words.p73') }}</p>
        <p>{{ t('det_listening_words.p74') }}</p>
        <p>{{ t('det_listening_words.p75') }}</p>
        <p>{{ t('det_listening_words.p76') }}</p>
        <p>{{ t('det_listening_words.p77') }}</p>
        <p>{{ t('det_listening_words.p78') }}</p>
        <p>{{ t('det_listening_words.p79') }}</p>
        <p>{{ t('det_listening_words.p80') }}</p>
        <p>{{ t('det_listening_words.p81') }}</p>
        <p>{{ t('det_listening_words.p82') }}</p>
        <p>{{ t('det_listening_words.p83') }}</p>
        <p>{{ t('det_listening_words.p84') }}</p>
        <p>{{ t('det_listening_words.p85') }}</p>
        <p>{{ t('det_listening_words.p86') }}</p>
        <p>{{ t('det_listening_words.p87') }}</p>
        <p>{{ t('det_listening_words.p88') }}</p>
        <p>{{ t('det_listening_words.p89') }}</p>
        <p>{{ t('det_listening_words.p90') }}</p>
        <p>{{ t('det_listening_words.p91') }}</p>
        <p>{{ t('det_listening_words.p92') }}</p>
        <p>{{ t('det_listening_words.p93') }}</p>
        <p>{{ t('det_listening_words.p94') }}</p>
        <p>{{ t('det_listening_words.p95') }}</p>
        <p>{{ t('det_listening_words.p96') }}</p>
        <p>{{ t('det_listening_words.p97') }}</p>
        <p>{{ t('det_listening_words.p98') }}</p>
        <p>{{ t('det_listening_words.p99') }}</p>
        <p>{{ t('det_listening_words.p100') }}</p>
        <p>{{ t('det_listening_words.p101') }}</p>
        <p>{{ t('det_listening_words.p102') }}</p>
        <div class="prep_button" @click="show_answer2 = !show_answer2">{{ t('det_listening_words.sta') }}</div>
        <div v-if="show_answer2" class="answer_out">Answers: 1-b, 2-b, 3-b, 4-a</div>
        <p>{{ t('det_listening_words.p103') }}</p>
        <p>{{ t('det_listening_words.p104') }}</p>
        <h2>{{ t('det_listening_words.h25') }}</h2>
        <p>{{ t('det_listening_words.p105') }}</p>
        <p>{{ t('det_listening_words.p106') }}</p>
        <p>{{ t('det_listening_words.p107') }}</p>
        <p>{{ t('det_listening_words.p108') }}</p>
        <p>{{ t('det_listening_words.p109') }}</p>
        <p>{{ t('det_listening_words.p110') }}</p>
        <p>{{ t('det_listening_words.p111') }}</p>
        <p>{{ t('det_listening_words.p112') }}</p>
        <p>{{ t('det_listening_words.p113') }}</p>
        <div class="html_wrapper" v-html="t('det_listening_words.p114')"></div>
        <div class="html_wrapper" v-html="t('det_listening_words.p115')"></div>
        <div class="audio-player">
          <audio id="audio-3" preload="none" controls>
            <source src="/audio/interactive-listening-sample-audio-1.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <figure>
          <figcaption>{{ t('det_listening_words.figcaption1') }}</figcaption>
        </figure>
        <div class="prep_button" @click="show_answer3 = !show_answer3">{{ t('det_listening_words.stls') }}</div>
        <div v-if="show_answer3" class="answer_out">
          Student: “Professor Johnson, I’m having trouble understanding the concept of opportunity cost from yesterday’s
          lecture. Could you explain it again?”<br />
          Professor: “Of course. Opportunity cost is the value of the next best alternative that you give up when making
          a choice. For instance, if you choose to study for an exam instead of going to a party, the fun you miss out
          on at the party is your opportunity cost of studying.”
          <br />Student: “I see. So it’s about what we sacrifice when we make a decision?”<br />
          Professor: “Exactly. It’s a fundamental concept in economics that helps us understand the true cost of our
          choices.”<br />
          Student: “Thank you, that makes much more sense now. Would you recommend any additional resources for me to
          review this concept?” <br />Professor: “Certainly. I’d suggest reading Chapter 3 in your textbook and watching
          the video series on opportunity cost that I posted on our class website.” <br />Student: “Great, I’ll do that.
          Thanks again for your help, Professor Johnson.”
        </div>
        <p>{{ t('det_listening_words.p117') }}</p>
        <p>{{ t('det_listening_words.p118') }}</p>
        <p>{{ t('det_listening_words.p119') }}</p>
        <p>{{ t('det_listening_words.p120') }}</p>
        <p>{{ t('det_listening_words.p121') }}</p>
        <p>{{ t('det_listening_words.p122') }}</p>
        <p>{{ t('det_listening_words.p123') }}</p>
        <p>{{ t('det_listening_words.p124') }}</p>
        <p>{{ t('det_listening_words.p125') }}</p>
        <p>{{ t('det_listening_words.p126') }}</p>
        <div class="html_wrapper" v-html="t('det_listening_words.p127')"></div>
        <p>{{ t('det_listening_words.p128') }}</p>
        <div class="audio-player">
          <audio id="audio-3" preload="none" controls>
            <source src="/audio/interactive-listening-sample-conversation-audio-2.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <div class="prep_button" @click="show_answer4 = !show_answer4">{{ t('det_listening_words.stls') }}</div>
        <div v-if="show_answer4" class="answer_out">
          Student A: “Hey Sarah, have you started working on the group presentation for Professor Lee’s class?”<br />
          Student B: “Hi Alex. Yes, I’ve begun researching our topic on renewable energy sources. How about you?”<br />
          Student A: “I’ve gathered some data on solar power, but I’m struggling to find recent statistics on wind
          energy. Do you have any good sources?” <br />Student B: “Actually, I came across a great report from the
          International Energy Agency. I can share the link with you.”<br />
          Student A: “That would be fantastic, thanks! By the way, when do you think we should meet to put everything
          together?”<br />
          Student B: “How about next Tuesday after class? We can use the library’s group study room.” <br />Student A:
          “Sounds good to me. I’ll book the room for us. See you then!”
        </div>

        <p>{{ t('det_listening_words.p130') }}</p>
        <div class="prep_button" @click="show_answer5 = !show_answer5">{{ t('det_listening_words.stsa') }}</div>
        <div v-if="show_answer5" class="answer_out">
          I spoke with Sarah about our group presentation on renewable energy for Professor Lee's class. I've collected
          data on solar power but needed help finding recent wind energy statistics. Sarah has started researching and
          offered to share a helpful report from the International Energy Agency. We decided to meet next Tuesday after
          class in the library's group study room to compile our work. I'll book the room for us. I'm glad we made
          progress on organizing our project. I spoke with Sarah about our group presentation on renewable energy for
          Professor Lee's class. I've collected data on solar power but needed help finding recent wind energy
          statistics. Sarah has started researching and offered to share a helpful report from the International Energy
          Agency. We decided to meet next Tuesday after class in the library's group study room to compile our work.
          I'll book the room for us. I'm glad we made progress on organizing our project.
        </div>

        <p>{{ t('det_listening_words.p131') }}</p>
        <h2>{{ t('det_listening_words.h27') }}</h2>
        <p>{{ t('det_listening_words.p132') }}</p>
        <p>{{ t('det_listening_words.p133') }}</p>
        <p>{{ t('det_listening_words.p134') }}</p>
        <p>{{ t('det_listening_words.p135') }}</p>
        <div class="html_wrapper" v-html="t('det_listening_words.ul1')"></div>
        <!-- <div class="html_wrapper" v-html="t('det_listening_words.ul2')"></div> -->
        <!-- <div class="html_wrapper" v-html="t('det_listening_words.p136')"></div> -->
        <div class="video_out">
          <my_video :title="video_data.video_title" :video_url="video_data.video_url" />
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
.det-listening-words {
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
  img {
    max-width: 400px;
    margin-top: 4px;
  }
}
</style>
