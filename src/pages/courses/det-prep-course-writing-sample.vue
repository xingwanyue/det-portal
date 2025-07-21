<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { domain } from '@/utils';
import my_video from '@/components/prepCompoment/video.vue';
import select_change from '@/components/prepCompoment/select_change.vue';

useSeoMeta({
  title: t('det_prep_course_writing_sample.seometa.title'),
  description: t('det_prep_course_writing_sample.seometa.description'),
});

const localePath = useLocalePath();
useHead({
  meta: [
    { name: 'DC.title', content: t('det_prep_course_writing_sample.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('det_prep_course_writing_sample.seometa.title') },
    { property: 'og:description', content: t('tos.seometa.description') },
    { property: 'og:url', content: `https://www.${domain}${localePath('/courses/det-prep-course-writing-sample')}` },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: t('det_prep_course_writing_sample.seometa.title') },
    {
      name: 'twitter:description',
      content: t('det_prep_course_writing_sample.seometa.description'),
    },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
});

const video_data = computed(() => {
  return {
    video_title: 'det-prep-course-writing-sample',
    video_url: 'https://www.youtube.com/embed/4FMRfkIKsvQ?si=eaVIa3b7vbRNGvam',
  };
});
const showAnswer1 = ref(false);
const showAnswer2 = ref(false);
const showAnswer3 = ref(false);
const showAnswer4 = ref(false);
const showAnswer5 = ref(false);
const showAnswer6 = ref(false);
const showAnswer7 = ref(false);
const showAnswer8 = ref(false);
const showAnswer9 = ref(false);
const showAnswer10 = ref(false);
const showAnswer11 = ref(false);
const showAnswer12 = ref(false);
const showAnswer13 = ref(false);
const showAnswer14 = ref(false);
const showAnswer15 = ref(false);
const showAnswer16 = ref(false);
</script>
<template>
  <div class="common_prep_wrapper det-prep-course-writing-sample">
    <div class="top">
      <nuxt-link :to="localePath('/')" class="hoverGiveBorder">Home</nuxt-link>
      >

      <nuxt-link :to="localePath('/courses')" class="hoverGiveBorder">Courses</nuxt-link>
      > {{ t('courses.four_change_right_data.data4.video3data.title') }} {{ t('courses.prepCourse') }}
    </div>
    <div class="common_prep_out">
      <div class="common_prep_left">
        <h1>{{ t('det_prep_course_writing_sample.h11') }}</h1>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p1')"></div>
        <h2>{{ t('det_prep_course_writing_sample.h21') }}</h2>

        <ol>
          <li>
            <a :href="`#prep_1`">{{ t('det_prep_course_writing_sample.ol1.li1') }}</a>
          </li>
          <li>
            <a :href="`#prep_2`">{{ t('det_prep_course_writing_sample.ol1.li2') }}</a>
          </li>
          <li>
            <a :href="`#prep_3`">{{ t('det_prep_course_writing_sample.ol1.li3') }}</a>
          </li>
          <li>
            <a :href="`#prep_4`">{{ t('det_prep_course_writing_sample.ol1.li4') }}</a>
            <ul>
              <li>{{ t('det_prep_course_writing_sample.ol1.li4_1') }}</li>
              <li>{{ t('det_prep_course_writing_sample.ol1.li4_2') }}</li>
              <li>{{ t('det_prep_course_writing_sample.ol1.li4_3') }}</li>
            </ul>
          </li>
          <li>
            <a :href="`#prep_5`">{{ t('det_prep_course_writing_sample.ol1.li5') }}</a>
            <ul>
              <li>{{ t('det_prep_course_writing_sample.ol1.li5_1') }}</li>
              <li>{{ t('det_prep_course_writing_sample.ol1.li5_2') }}</li>
              <li>{{ t('det_prep_course_writing_sample.ol1.li5_3') }}</li>
            </ul>
          </li>
          <li>
            <a :href="`#prep_6`">{{ t('det_prep_course_writing_sample.ol1.li6') }}</a>
            <ul>
              <li>{{ t('det_prep_course_writing_sample.ol1.li6_1') }}</li>
              <li>{{ t('det_prep_course_writing_sample.ol1.li6_2') }}</li>
              <li>{{ t('det_prep_course_writing_sample.ol1.li6_3') }}</li>
              <li>{{ t('det_prep_course_writing_sample.ol1.li6_4') }}</li>
            </ul>
          </li>
          <li>
            <a :href="`#prep_7`">{{ t('det_prep_course_writing_sample.ol1.li7') }}</a>
          </li>
        </ol>
        <p>{{ t('det_prep_course_writing_sample.p3') }}</p>
        <my_video :video_url="video_data.video_url" :title="video_data.video_title" />
        <p>{{ t('det_prep_course_writing_sample.p4') }}</p>
        <h2 id="prep_1">{{ t('det_prep_course_writing_sample.h22') }}</h2>
        <p>{{ t('det_prep_course_writing_sample.p5') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p6')"></div>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p7')"></div>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p8')"></div>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p9')"></div>
        <p>{{ t('det_prep_course_writing_sample.p10') }}</p>
        <h2 id="prep_2">{{ t('det_prep_course_writing_sample.h23') }}</h2>
        <p>{{ t('det_prep_course_writing_sample.p11') }}</p>
        <img src="/img/det_prep_course_writing_sample/DET-Writing-Sample-UI-2.png" alt="DET-Writing-Sample-UI" />
        <figure>
          <figcaption>{{ t('det_prep_course_writing_sample.figcaption1') }}</figcaption>
        </figure>
        <p>{{ t('det_prep_course_writing_sample.p12') }}</p>
        <h2 id="prep_3">{{ t('det_prep_course_writing_sample.h24') }}</h2>
        <p>{{ t('det_prep_course_writing_sample.p13') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p14')"></div>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p15')"></div>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p16')"></div>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p17')"></div>
        <p>{{ t('det_prep_course_writing_sample.p18') }}</p>
        <h2 id="prep_4">{{ t('det_prep_course_writing_sample.h25') }}</h2>
        <p>{{ t('det_prep_course_writing_sample.p19') }}</p>
        <img src="/img/det_prep_course_writing_sample/writing-sample-category-3.png" alt="writing-sample-category" />
        <figure>
          <figcaption>{{ t('det_prep_course_writing_sample.figcaption2') }}</figcaption>
        </figure>
        <h2 id="prep_5">{{ t('det_prep_course_writing_sample.h26') }}</h2>
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
        <div class="prep_button" @click="showAnswer1 = !showAnswer1">
          {{ t('det_prep_course_writing_sample.clickhere') }}
        </div>
        <div v-if="showAnswer1" class="answer_out">
          <div id="sampleAnswer">
            <p>
              <span style="color: blue">When reflecting on</span> the most unusual food that I have ever eaten,
              <span style="color: blue">I’m instantly reminded of</span> the time I tried fried scorpions at a Chinese
              restaurant. <span style="color: blue">This experience stands out to me because</span> it challenged my
              taste buds and my courage. <span style="color: blue">I can vividly recall</span> how I hesitated before
              picking up a skewer of crunchy black arachnids, while my friend encouraged me to give it a try.
              <span style="color: blue"
                >The emotions and thoughts associated with this experience have shaped my perspective on</span
              >
              food and culture, <span style="color: blue">leaving a lasting impression on me.</span> I learned that I
              can be more adventurous and open-minded when it comes to trying new things and that sometimes the most
              bizarre foods can be surprisingly delicious.
            </p>
          </div>
        </div>
        <!-- <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p33')"></div> -->
        <p>{{ t('det_prep_course_writing_sample.p34') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p35') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p36') }}</p>
        <div class="prep_button" @click="showAnswer2 = !showAnswer2">
          {{ t('det_prep_course_writing_sample.clickhere') }}
        </div>
        <div v-if="showAnswer2" class="answer_out">
          <div id="sampleAnswer2">
            <p
              style="
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: black;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
              "
            >
              <span style="color: blue">When contemplating</span> the most unusual food that I have ever eaten,
              <span style="color: blue">I’m immediately transported</span> to the time I visited a night market.
              <span style="color: blue">This experience resonates with me because</span> it exposed me to a different
              culinary culture and challenged my comfort zone. <span style="color: blue">I can vividly</span> recollect
              how I nervously grabbed a stick of fried scorpions, while my friend cheered me on to taste it.
              <span style="color: blue"
                >The sentiments and cognitions associated with this experience have molded my outlook on</span
              >
              food and culture, <span style="color: blue">leaving an indelible impression on me.</span> I realized that
              I can be more adventurous and open-minded when it comes to trying new things and that sometimes the most
              bizarre foods can be surprisingly delicious.
            </p>
          </div>
        </div>

        <!-- <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p37')"></div> -->
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
        <div class="prep_button" @click="showAnswer3 = !showAnswer3">
          {{ t('det_prep_course_writing_sample.clickhere') }}
        </div>
        <div v-if="showAnswer3" class="answer_out">
          <div id="sampleAnswer3">
            <div>
              <p
                style="
                  font-family: Arial, sans-serif;
                  line-height: 1.6;
                  color: black;
                  max-width: 800px;
                  margin: 0 auto;
                  padding: 20px;
                "
              >
                Online shopping and customer reviews are
                <span style="color: blue"
                  >fascinating topics to describe due to their unique characteristics. First, it’s essential to note
                  that</span
                >
                online shopping allows customers to access a wide range of products and services from anywhere in the
                world, <span style="color: blue">which sets it apart because</span> it offers convenience, variety, and
                competitive prices. <span style="color: blue">Additionally,</span> customer reviews
                <span style="color: blue">add complexity to</span> online shopping,
                <span style="color: blue">influencing</span> consumers’ decisions by providing feedback, ratings, and
                recommendations from other buyers.
                <span style="color: blue">Understanding these aspects helps to appreciate the true nature of</span>
                online shopping and customer reviews, <span style="color: blue">revealing its underlying</span> benefits
                and challenges.
              </p>
            </div>
          </div>
        </div>
        <p>{{ t('det_prep_course_writing_sample.p51') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p52') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p53') }}</p>
        <div class="prep_button" @click="showAnswer4 = !showAnswer4">
          {{ t('det_prep_course_writing_sample.clickhere') }}
        </div>
        <div v-if="showAnswer4" class="answer_out">
          <div id="sampleAnswer4">
            <p
              style="
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: black;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
              "
            >
              Online shopping and customer reviews
              <span style="color: blue"
                >are captivating to delineate due to their distinctive characteristics. First, it’s imperative to note
                that</span
              >
              online shopping enables customers to access a vast range of products and services from anywhere in the
              world, <span style="color: blue">which distinguishes it because</span> it offers convenience, variety, and
              competitive prices. <span style="color: blue">Additionally</span>, customer reviews
              <span style="color: blue">add intricacy to</span> online shopping,
              <span style="color: blue">influencing</span> consumers’ decisions by providing feedback, ratings, and
              recommendations from other buyers.
              <span style="color: blue">Comprehending these aspects helps to appreciate</span> the authentic nature of
              online shopping and customer reviews, <span style="color: blue">unveiling its underlying</span> benefits
              and challenges.
            </p>
          </div>
        </div>

        <!-- <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p54')"></div> -->
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
        <div class="prep_button" @click="showAnswer5 = !showAnswer5">
          {{ t('det_prep_course_writing_sample.clickhere') }}
        </div>
        <div v-if="showAnswer5" class="answer_out">
          <div id="sampleAnswer5">
            <p
              style="
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: black;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
              "
            >
              <span style="color: blue">Imagine if</span> I could only buy products made in my country.
              <span style="color: blue">In this scenario, the first thing that would catch my attention is</span> the
              lack of imported food and beverages, <span style="color: blue">mainly due to</span> their impact on
              people’s dietary habits and preferences. <span style="color: blue">I would also be intrigued by</span> the
              reduced availability of foreign technology and entertainment,
              <span style="color: blue">which would affect the situation by</span> limiting people’s access to
              information and culture.
              <span style="color: blue">Reflecting on this hypothetical scenario provides insight into</span> the
              benefits and challenges of globalization,
              <span style="color: blue">challenging conventional thinking and opening new avenues of exploration.</span>
            </p>
          </div>
        </div>

        <!-- <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p68')"></div> -->
        <p>{{ t('det_prep_course_writing_sample.p69') }}</p>
        <div class="prep_button" @click="showAnswer6 = !showAnswer6">
          {{ t('det_prep_course_writing_sample.clickhere') }}
        </div>
        <div v-if="showAnswer6" class="answer_out">
          <div
            id="sampleAnswer6"
            style="
              display: block;
              background-color: rgb(241, 241, 241);
              padding: 20px;
              margin-top: 20px;
              border-radius: 5px;
              width: 100%;
              box-sizing: border-box;
            "
          >
            <p
              style="
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: black;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
              "
            >
              <span style="color: blue">Envision if</span> I could only buy products made in my country.
              <span style="color: blue">In this scenario, the first thing that would pique my interest is</span> the
              scarcity of imported food and beverages, <span style="color: blue">primarily due to</span> their influence
              on people’s dietary habits and preferences.
              <span style="color: blue">I would also be intrigued by</span> the diminished availability of foreign
              technology and entertainment,
              <span style="color: blue">which would affect the situation by</span> restricting people’s access to
              information and culture.
              <span style="color: blue">Reflecting on this hypothetical scenario provides insight into</span> the
              benefits and challenges of globalization,
              <span style="color: blue">challenging conventional thinking and opening new avenues of exploration.</span>
            </p>
          </div>
        </div>

        <!-- <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p70')"></div> -->
        <p>{{ t('det_prep_course_writing_sample.p71') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p72') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p73') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p74') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p75') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p76') }}</p>
        <h2 id="prep_6">{{ t('det_prep_course_writing_sample.h27') }}</h2>
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

        <div class="prep_button" @click="showAnswer7 = !showAnswer7">
          {{ t('det_prep_course_writing_sample.clickhere') }}
        </div>
        <div v-if="showAnswer7" class="answer_out">
          <div id="sampleAnswer7">
            <p
              style="
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: black;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
              "
            >
              <span style="color: blue">Considering the statement of</span> whether telling the truth is always
              important in any relationship, <span style="color: blue">I firmly believe that</span> honesty is the best
              policy, <span style="color: blue">mainly due to</span> its positive effects on trust and respect.
              <span style="color: blue">My viewpoint is further supported by</span> the psychological research that
              shows lying can cause stress and guilt,
              <span style="color: blue">which reinforces my stance by</span> demonstrating the negative impacts of
              dishonesty. <span style="color: blue">Reflecting on this matter helps us understand</span> the moral and
              emotional aspects of communication,
              <span style="color: blue"
                >highlighting the complexity of the issue and encouraging thoughtful analysis.</span
              >
            </p>
          </div>
        </div>

        <!-- <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p101')"></div> -->
        <p>{{ t('det_prep_course_writing_sample.p102') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p103') }}</p>

        <div class="prep_button" @click="showAnswer8 = !showAnswer8">
          {{ t('det_prep_course_writing_sample.clickhere') }}
        </div>
        <div v-if="showAnswer8" class="answer_out">
          <div
            id="sampleAnswer8"
            style="
              display: block;
              background-color: rgb(241, 241, 241);
              padding: 20px;
              margin-top: 20px;
              border-radius: 5px;
              width: 100%;
              box-sizing: border-box;
            "
          >
            <p
              style="
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: black;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
              "
            >
              <span style="color: blue">In light of the statement</span> of whether telling the truth is always
              important in any relationship, <span style="color: blue">I adamantly maintain that</span> honesty is the
              foundation of any healthy relationship, <span style="color: blue">chiefly due to</span> its role in
              building trust and respect. <span style="color: blue">My standpoint is corroborated by</span> the
              sociological theory that argues lying can erode social bonds and undermine cooperation,
              <span style="color: blue">which substantiates my position by</span> illustrating the detrimental effects
              of dishonesty. <span style="color: blue">Contemplating this matter enables us to discern</span> the
              ethical and interpersonal dimensions of communication,
              <span style="color: blue">accentuating the intricacy of the issue and stimulating astute analysis.</span>
            </p>
          </div>
        </div>

        <!-- <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p104')"></div> -->
        <p>{{ t('det_prep_course_writing_sample.p105') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p106') }}</p>
        <h3>{{ t('det_prep_course_writing_sample.h35') }}</h3>
        <p>{{ t('det_prep_course_writing_sample.p107') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p108') }}</p>
        <div class="html_wrapper" style="color: blue" v-html="t('det_prep_course_writing_sample.p109')"></div>
        <p>{{ t('det_prep_course_writing_sample.p110') }}</p>
        <div class="html_wrapper" style="color: blue" v-html="t('det_prep_course_writing_sample.p111')"></div>
        <p>{{ t('det_prep_course_writing_sample.p112') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p113') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p114') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p115') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p116') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p117') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p118')"></div>
        <p>{{ t('det_prep_course_writing_sample.p119') }}</p>
        <div class="prep_button" @click="showAnswer9 = !showAnswer9">
          {{ t('det_prep_course_writing_sample.clickhere') }}
        </div>
        <div v-if="showAnswer9" class="answer_out">
          <div
            id="sampleAnswer9"
            style="
              display: block;
              background-color: rgb(241, 241, 241);
              padding: 20px;
              margin-top: 20px;
              border-radius: 5px;
              width: 100%;
              box-sizing: border-box;
            "
          >
            <p
              style="
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: black;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
              "
            >
              <span style="color: blue">Given the task of</span> explaining constant internet access,
              <span style="color: blue">the first aspect to consider is</span> instant information,
              <span style="color: blue">which is essential because</span> it allows people to easily research and learn.
              <span style="color: blue">Another vital element is</span> entertainment access,
              <span style="color: blue">shaping our understanding by</span> providing abundant options for free time
              activities like streaming shows and scrolling social media, which I often do.
              <span style="color: blue">Analyzing these factors offers insight into</span> modern connectivity,
              <span style="color: blue">promoting deeper comprehension of how the internet impacts daily life.</span>
              One thing that should change is more focus on meaningful connections versus mindless scrolling.
            </p>
          </div>
        </div>

        <!-- <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p120')"></div> -->
        <p>{{ t('det_prep_course_writing_sample.p121') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p122') }}</p>
        <div class="prep_button" @click="showAnswer10 = !showAnswer10">
          {{ t('det_prep_course_writing_sample.clickhere') }}
        </div>
        <div v-if="showAnswer10" class="answer_out">
          <div id="sampleAnswer10">
            <p
              style="
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: black;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
              "
            >
              <span style="color: blue">To elucidate</span> constant internet access,
              <span style="color: blue">the foremost aspect to examine</span> is instant information access,
              <span style="color: blue">which is indispensable because</span> it enables effortless research and
              learning. <span style="color: blue">Another pivotal element</span> is endless entertainment options,
              <span style="color: blue">shaping our perception by</span> providing copious outlets for leisure like
              streaming and social media, which I frequently use.
              <span style="color: blue">Scrutinizing these factors provides insight into</span> modern
              interconnectivity,
              <span style="color: blue">enhancing deeper comprehension of how the internet impacts daily living.</span>
              One thing necessitating change is less focus on hollow engagement and more on meaningful connections.
            </p>
          </div>
        </div>

        <!-- <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p123')"></div> -->
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
        <div class="prep_button" @click="showAnswer11 = !showAnswer11">
          {{ t('det_prep_course_writing_sample.clickhere') }}
        </div>
        <div v-if="showAnswer11" class="answer_out">
          <div id="sampleAnswer11">
            <p
              style="
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: black;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
              "
            >
              <span style="color: blue">Faced with the challenge of</span> choosing between supporting the arts or
              environmental protection, <span style="color: blue">the immediate solution I propose</span> is to
              contribute funds to an organization that promotes environmental protection,
              <span style="color: blue">primarily due to</span> its urgency and impact.
              <span style="color: blue">Additionally, I recommend</span> that the company also engages in green
              practices, such as reducing waste and emissions,
              <span style="color: blue">which would enhance the situation</span> by demonstrating its social
              responsibility and environmental awareness.
              <span style="color: blue">This proposed approach aligns with</span> the concept of sustainable
              development, <span style="color: blue">advocating for responsible action and positive change.</span>
            </p>
          </div>
        </div>

        <!-- <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p138')"></div> -->
        <p>{{ t('det_prep_course_writing_sample.p139') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p140') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p141') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p142') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p143') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p144') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p145') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p146') }}</p>
        <div class="prep_button" @click="showAnswer12 = !showAnswer12">
          {{ t('det_prep_course_writing_sample.clickhere') }}
        </div>
        <div v-if="showAnswer12" class="answer_out">
          <div id="sampleAnswer12">
            <p
              style="
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: black;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
              "
            >
              <span style="color: blue">Confronted with the predicament of</span> choosing between supporting the arts
              or environmental protection, <span style="color: blue">the urgent solution I advocate</span> is to
              contribute funds to an organization that promotes environmental protection,
              <span style="color: blue">primarily due to</span> its urgency and impact.
              <span style="color: blue">Furthermore, I suggest that</span> the company also adopts green practices, such
              as reducing waste and emissions,
              <span style="color: blue">which would ameliorate the situation by</span> demonstrating its social
              responsibility and environmental awareness.
              <span style="color: blue">This proposed approach aligns with</span> the concept of sustainable
              development, <span style="color: blue">endorsing prudent action and positive change.</span>
            </p>
          </div>
        </div>

        <!-- <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p147')"></div> -->
        <p>{{ t('det_prep_course_writing_sample.p148') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p149') }}</p>
        <h3>{{ t('det_prep_course_writing_sample.h37') }}</h3>
        <p>{{ t('det_prep_course_writing_sample.p150') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p151') }}</p>
        <div class="html_wrapper" style="color: blue" v-html="t('det_prep_course_writing_sample.p152')"></div>
        <p>{{ t('det_prep_course_writing_sample.p153') }}</p>
        <div class="html_wrapper" style="color: blue" v-html="t('det_prep_course_writing_sample.p154')"></div>
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
        <div class="prep_button" @click="showAnswer13 = !showAnswer13">
          {{ t('det_prep_course_writing_sample.clickhere') }}
        </div>
        <div v-if="showAnswer13" class="answer_out">
          <div id="sampleAnswer13">
            <p
              style="
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: black;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
              "
            >
              <span style="color: blue">When evaluating</span> the safety of self-driving vehicles,
              <span style="color: blue">the first criterion that comes to mind is</span> their reliance on sensors and
              software, <span style="color: blue">significant for</span> eliminating human error in driving.
              <span style="color: blue">Another factor to weigh is</span> the consistency of their programmed driving,
              <span style="color: blue">influencing the evaluation by</span> minimizing rule violations and negligence.
              <span style="color: blue">This assessment process sheds light on</span> the concepts of automation and
              accountability, <span style="color: blue">fostering critical judgment and perspective.</span>
              <span style="background-color: yellow"
                ><span style="color: blue">In my opinion, I would choose</span> the programmed driving of self-driving
                cars <span style="color: blue">over</span> human drivers <span style="color: blue">due to</span> the
                reduction in unpredictability and impulse-driven mistakes.
                <span style="color: blue">I think that</span> the automated system of self-driving
                <span style="color: blue">cars are superior in terms of</span> accident prevention and adherence to
                traffic laws compared with human drivers.</span
              >
            </p>
          </div>
        </div>

        <!-- <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p169')"></div> -->
        <p>{{ t('det_prep_course_writing_sample.p170') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p171') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p172') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p173') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p174') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p175') }}</p>

        <div class="prep_button" @click="showAnswer14 = !showAnswer14">
          {{ t('det_prep_course_writing_sample.clickhere') }}
        </div>
        <div v-if="showAnswer14" class="answer_out">
          <div id="sampleAnswer14">
            <p
              style="
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: black;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
              "
            >
              <span style="color: blue">In appraising</span> the safety of self-driving vehicles,
              <span style="color: blue">the first criterion that emerges is</span> their reliance on sensors and
              software, noteworthy for eliminating human error in driving.
              <span style="color: blue">Another factor to consider is</span> the consistency of their programmed
              driving, <span style="color: blue">affecting the evaluation by</span> minimizing rule violations and
              negligence. <span style="color: blue">This assessment process reveals</span> the concepts of automation
              and accountability,
              <span style="color: blue"
                >cultivating critical judgment and a balanced perspective. In my opinion, I would choose</span
              >
              the programmed driving of self-driving cars <span style="color: blue">over</span> human drivers
              <span style="color: blue">due to</span> the reduction in unpredictability and impulse-driven mistakes.
              <span style="color: blue">I think that</span> the automated system of self-driving cars
              <span style="color: blue">are superior in terms of</span> accident prevention and adherence to traffic
              laws <span style="color: blue">compared with</span> human drivers.
            </p>
          </div>
        </div>

        <!-- <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p176')"></div> -->
        <p>{{ t('det_prep_course_writing_sample.p177') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p178') }}</p>
        <h2 id="prep_7">{{ t('det_prep_course_writing_sample.h28') }}</h2>
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

        <div class="prep_button" @click="showAnswer15 = !showAnswer15">
          {{ t('det_prep_course_writing_sample.clickhere') }}
        </div>
        <div v-if="showAnswer15" class="answer_out">
          <div id="sampleAnswer15">
            <p
              style="
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: black;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
              "
            >
              <span style="color: blue">In examining the relationship between</span> being idealistic and being
              realistic,
              <span style="color: blue"
                >it is clear that there are both similarities and differences to consider. Firstly,</span
              >
              being idealistic <span style="color: blue">reveals an interesting aspect of</span> ambition,
              <span style="color: blue">characterized by</span> high standards, creativity, and optimism.
              <span style="color: blue">In comparison,</span> being realistic
              <span style="color: blue">displays</span> pragmatism, characterized by practicality, rationality, and
              efficiency. <span style="color: blue">Secondly,</span> both attitudes
              <span style="color: blue">offer further insight into how</span> people cope with challenges<span
                style="color: blue"
              >
                and</span
              >
              opportunities.
              <span style="color: blue">Reflecting on these points provides a comprehensive understanding of the</span>
              mindsets,
              <span style="color: blue">enriching our perspective on their importance. Therefore, I think</span> being
              realistic is better <span style="color: blue">for the reason that</span> it helps me achieve my goals more
              effectively. <span style="color: blue">This choice reflects my values, goals, and experiences.</span>
            </p>
          </div>
        </div>

        <!-- <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p195')"></div> -->
        <p>{{ t('det_prep_course_writing_sample.p196') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p197') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p198') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p199') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p200') }}</p>

        <div class="prep_button" @click="showAnswer16 = !showAnswer16">
          {{ t('det_prep_course_writing_sample.clickhere') }}
        </div>
        <div v-if="showAnswer16" class="answer_out">
          <div id="sampleAnswer16">
            <p
              style="
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: black;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
              "
            >
              <span style="color: blue">To examine the contrast and resemblance between</span> being idealistic and
              being realistic,
              <span style="color: blue">I will analyze them from various angles, mainly because</span> they represent
              different approaches to life and success.
              <span style="color: blue">The first point of comparison lies in</span> ambition, where being idealistic
              <span style="color: blue">excels by</span> inspiring high standards, creativity, and optimism.
              <span style="color: blue"
                >Whereas being realistic manifests the opposite trait, accentuating the complexity of their
                relationship. Furthermore,</span
              >
              pragmatism
              <span style="color: blue"
                >elucidates another dimension of their comparison, unveiling nuances that shape our understanding of
                both</span
              >
              being idealistic <span style="color: blue">and</span> realistic. Being realistic displays pragmatism,
              characterized by practicality, rationality, and efficiency.
              <span style="color: blue"
                >Contemplating these factors enables us to discern the intricate balance between</span
              >
              being idealistic and being realistic,
              <span style="color: blue"
                >stimulating astute analysis and thoughtful reflection. Consequently, I contend</span
              >
              being realistic is better <span style="color: blue">on the grounds that</span> it helps me achieve my
              goals more effectively.
              <span style="color: blue">This decision mirrors my values, goals, and experiences.</span>
            </p>
          </div>
        </div>

        <!-- <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p201')"></div> -->
        <p>{{ t('det_prep_course_writing_sample.p202') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p203') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p204') }}</p>
        <p>{{ t('det_prep_course_writing_sample.p205') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p206')"></div>
        <div class="html_wrapper" style="color: blue" v-html="t('det_prep_course_writing_sample.p207')"></div>
        <p>{{ t('det_prep_course_writing_sample.p208') }}</p>
        <div class="html_wrapper" style="color: blue" v-html="t('det_prep_course_writing_sample.p209')"></div>
        <p>{{ t('det_prep_course_writing_sample.p210') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.p211')"></div>
        <p>{{ t('det_prep_course_writing_sample.p212') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.ul15')"></div>
        <p>{{ t('det_prep_course_writing_sample.p213') }}</p>
        <div class="html_wrapper" v-html="t('det_prep_course_writing_sample.ul16')"></div>
        <p>{{ t('det_prep_course_writing_sample.p214') }}</p>
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
