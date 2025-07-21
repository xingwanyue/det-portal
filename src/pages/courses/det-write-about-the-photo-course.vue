<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { domain } from '@/utils';
import my_video from '@/components/prepCompoment/video.vue';
import select_change from '@/components/prepCompoment/select_change.vue';

useSeoMeta({
  title: t('det_write_about_the_photo_course.seometa.title'),
  description: t('det_write_about_the_photo_course.seometa.description'),
});

const localePath = useLocalePath();
useHead({
  meta: [
    { name: 'DC.title', content: t('det_write_about_the_photo_course.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('det_write_about_the_photo_course.seometa.title') },
    { property: 'og:description', content: t('tos.seometa.description') },
    { property: 'og:url', content: `https://www.${domain}${localePath('/courses/det-write-about-the-photo-course')}` },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: t('det_write_about_the_photo_course.seometa.title') },
    {
      name: 'twitter:description',
      content: t('det_write_about_the_photo_course.seometa.description'),
    },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
});

const video_data = computed(() => {
  return {
    video_title: 'det-write-about-the-photo-course',
    video_url: 'https://www.youtube.com/embed/hJpe-FvLH9I?si=uJJXoxWMXuZjEJHp',
  };
});
</script>
<template>
  <div class="common_prep_wrapper det-write-about-the-photo-course">
    <div class="top">
      <nuxt-link :to="localePath('/')" class="hoverGiveBorder">Home</nuxt-link>
      >

      <nuxt-link :to="localePath('/courses')" class="hoverGiveBorder">Courses</nuxt-link>
      > {{ t('courses.four_change_right_data.data4.video1data.title') }} {{ t('courses.prepCourse') }}
    </div>
    <div class="common_prep_out">
      <div class="common_prep_left">
        <h1>{{ t('det_write_about_the_photo_course.h11') }}</h1>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.p1')"></div>
        <p>{{ t('det_write_about_the_photo_course.p2') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p3') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul1')"></div>
        <p>{{ t('det_write_about_the_photo_course.p4') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.p5')"></div>
        <div class="video_out">
          <my_video :title="video_data.video_title" :video_url="video_data.video_url" />
        </div>
        <h2>{{ t('det_write_about_the_photo_course.h21') }}</h2>

        <ol class="html_wrapper">
          <li>
            <a :href="`#prep_1`">{{ t('det_write_about_the_photo_course.newol1') }}</a>
          </li>
          <li>
            <a :href="`#prep_2`">{{ t('det_write_about_the_photo_course.newol2') }}</a>
          </li>
          <li>
            <a :href="`#prep_3`">{{ t('det_write_about_the_photo_course.newol3') }}</a>
          </li>
          <li>
            <a :href="`#prep_4`">{{ t('det_write_about_the_photo_course.newol4') }}</a>
          </li>
          <li>
            <a :href="`#prep_5`">{{ t('det_write_about_the_photo_course.newol5') }}</a>
            <ul>
              <li>{{ t('det_write_about_the_photo_course.newol5_1') }}</li>
              <li>{{ t('det_write_about_the_photo_course.newol5_2') }}</li>
              <li>{{ t('det_write_about_the_photo_course.newol5_3') }}</li>
            </ul>
          </li>
          <li>
            <a :href="`#prep_6`">{{ t('det_write_about_the_photo_course.newol6') }}</a>
            <ul>
              <li>{{ t('det_write_about_the_photo_course.newol6_1') }}</li>
              <li>{{ t('det_write_about_the_photo_course.newol6_2') }}</li>
              <li>{{ t('det_write_about_the_photo_course.newol6_3') }}</li>
            </ul>
          </li>
          <li>
            <a :href="`#prep_7`">{{ t('det_write_about_the_photo_course.newol7') }}</a>
            <ul>
              <li>{{ t('det_write_about_the_photo_course.newol7_1') }}</li>
              <li>{{ t('det_write_about_the_photo_course.newol7_2') }}</li>
              <li>{{ t('det_write_about_the_photo_course.newol7_3') }}</li>
            </ul>
          </li>
          <li>
            <a :href="`#prep_8`">{{ t('det_write_about_the_photo_course.newol8') }}</a>
            <ul>
              <li>{{ t('det_write_about_the_photo_course.newol8_1') }}</li>
              <li>{{ t('det_write_about_the_photo_course.newol8_2') }}</li>
            </ul>
          </li>
          <li>
            <a :href="`#prep_9`">{{ t('det_write_about_the_photo_course.newol9') }}</a>
          </li>
        </ol>
        <h2 id="prep_1">{{ t('det_write_about_the_photo_course.h22') }}</h2>
        <p>{{ t('det_write_about_the_photo_course.p6') }}</p>
        <h2 id="prep_2">{{ t('det_write_about_the_photo_course.h23') }}</h2>
        <p>{{ t('det_write_about_the_photo_course.p7') }}</p>

        <img
          src="/img/det_write_about_the_photo_course/scoring-criteria-1.jpg"
          alt="A screenshot of Det writing scoring criteria."
        />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption1') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p8') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p9') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p10') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p11') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p12') }}</p>
        <h2 id="prep_3">{{ t('det_write_about_the_photo_course.h24') }}</h2>
        <p>{{ t('det_write_about_the_photo_course.p13') }}</p>
        <img
          src="/img/det_write_about_the_photo_course/Screenshot-2.jpg"
          alt="Intro and tips of DET write about the photo questions."
        />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption2') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p14') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p15') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p16') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p17') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p18') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p19') }}</p>
        <h2 id="prep_4">{{ t('det_write_about_the_photo_course.h25') }}</h2>
        <p>{{ t('det_write_about_the_photo_course.p20') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p21') }}</p>
        <img
          src="/img/det_write_about_the_photo_course/category-3.png"
          alt="Categories of the DET Write about the Photo questions."
        />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption3') }}</figcaption>
        </figure>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.p22')"></div>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.p23')"></div>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.p24')"></div>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.p25')"></div>
        <p>{{ t('det_write_about_the_photo_course.p26') }}</p>
        <h2 id="prep_5">{{ t('det_write_about_the_photo_course.h26') }}</h2>
        <p>{{ t('det_write_about_the_photo_course.p27') }}</p>
        <img
          src="/img/det_write_about_the_photo_course/people-4.jpg"
          alt="DET Write about the Photo Images: People sample pictures."
        />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption4') }}</figcaption>
        </figure>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.p28')"></div>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.p29')"></div>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.p30')"></div>
        <p>{{ t('det_write_about_the_photo_course.p31') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p32') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p33') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p34') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p35') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p36') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul6')"></div>
        <p>{{ t('det_write_about_the_photo_course.p37') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p38') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p39') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p40') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p41') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p42') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p43') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p44') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p45') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p46') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p47') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p48') }}</p>
        <img
          src="/img/det_write_about_the_photo_course/v1-5.jpg"
          alt="DET useful descriptive vocabulary for writing people."
        />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption5') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p49') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p50') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p51') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p52') }}</p>
        <img
          src="/img/det_write_about_the_photo_course/v2-6.png"
          alt="A table list many descriptive words of emotions."
        />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption6') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p53') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p54') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p55') }}</p>
        <img src="/img/det_write_about_the_photo_course/v3-7.png" alt="A wordlist of clothing and accessories." />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption7') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p56') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p57') }}</p>
        <img src="/img/det_write_about_the_photo_course/v4-8.png" alt="A wordlist to describe enviornments." />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption8') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p58') }}</p>
        <img
          src="/img/det_write_about_the_photo_course/s1t1-9.jpg"
          alt="Sample Question 1 of Write about the Photo, with Template 1"
        />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption9') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p59') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p60') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p61') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p62') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul7')"></div>
        <p>{{ t('det_write_about_the_photo_course.p63') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p64') }}</p>
        <img
          src="/img/det_write_about_the_photo_course/s1t2-10.jpg"
          alt="Sample Question 1 of Write about the Photo, with Template 2"
        />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption10') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p65') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p66') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p67') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul8')"></div>
        <p>{{ t('det_write_about_the_photo_course.p68') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p69') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p70') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p71') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul9')"></div>
        <p>{{ t('det_write_about_the_photo_course.p72') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul10')"></div>
        <p>{{ t('det_write_about_the_photo_course.p73') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p74') }}</p>
        <img
          src="/img/det_write_about_the_photo_course/s2t1-11.jpg"
          alt="Sample Question 2 of Write about the Photo, with Template 1"
        />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption11') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p75') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p76') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul11')"></div>
        <p>{{ t('det_write_about_the_photo_course.p77') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul12')"></div>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul13')"></div>
        <p>{{ t('det_write_about_the_photo_course.p78') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul14')"></div>
        <p>{{ t('det_write_about_the_photo_course.p79') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p80') }}</p>
        <img
          src="/img/det_write_about_the_photo_course/s2t2-12.jpg"
          alt="Sample Question 2 of Write about the Photo, with Template 2"
        />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption12') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p81') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p82') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul15')"></div>
        <p>{{ t('det_write_about_the_photo_course.p83') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul16')"></div>
        <p>{{ t('det_write_about_the_photo_course.p84') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul17')"></div>
        <p>{{ t('det_write_about_the_photo_course.p85') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p86') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p87') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul18')"></div>
        <p>{{ t('det_write_about_the_photo_course.p88') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p89') }}</p>
        <img
          src="/img/det_write_about_the_photo_course/s3t1-13.jpg"
          alt="Sample Question 3 of Write about the Photo, with Template 1"
        />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption13') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p90') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p91') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul19')"></div>
        <p>{{ t('det_write_about_the_photo_course.p92') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul20')"></div>
        <p>{{ t('det_write_about_the_photo_course.p93') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p94') }}</p>
        <img
          src="/img/det_write_about_the_photo_course/s3t2-14.jpg"
          alt="Sample Question 3 of Write about the Photo, with Template 2"
        />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption14') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p95') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p96') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p97') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul21')"></div>
        <p>{{ t('det_write_about_the_photo_course.p98') }}</p>
        <h2 id="prep_6">{{ t('det_write_about_the_photo_course.h27') }}</h2>
        <img
          src="/img/det_write_about_the_photo_course/animals-15.jpg"
          alt="Some demo pics of DET Write about the Photo questions: Animals"
        />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption15') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p99') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.p100')"></div>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul22')"></div>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.p101')"></div>
        <p>{{ t('det_write_about_the_photo_course.p102') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul23')"></div>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.p103')"></div>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul24')"></div>
        <p>{{ t('det_write_about_the_photo_course.p104') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p105') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul25')"></div>
        <p>{{ t('det_write_about_the_photo_course.p106') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p107') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p108') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p109') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p110') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul26')"></div>
        <p>{{ t('det_write_about_the_photo_course.p111') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p112') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p113') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p114') }}</p>
        <img
          src="/img/det_write_about_the_photo_course/s4t1-16.jpg"
          alt="Sample Question 4 of Write about the Photo, with Template 1"
        />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption16') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p115') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p116') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p117') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p118') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p119') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p120') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p121') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p122') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p123') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p124') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p125') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p126') }}</p>
        <img
          src="/img/det_write_about_the_photo_course/s4t2-17.jpg"
          alt="Sample Question 5 of Write about the Photo, with Template 2"
        />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption17') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p127') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p128') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p129') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p130') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p131') }}</p>
        <img
          src="/img/det_write_about_the_photo_course/s4t3-18.jpg"
          alt="Sample Question 6 of Write about the Photo, with Template 3"
        />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption18') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p132') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p133') }}</p>
        <h2 id="prep_7">{{ t('det_write_about_the_photo_course.h28') }}</h2>
        <p>{{ t('det_write_about_the_photo_course.p134') }}</p>
        <img src="/img/det_write_about_the_photo_course/views-19.jpg" alt="Demo of DET Scenery Type Questions" />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption19') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p135') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p136') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p137') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p138') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p139') }}</p>
        <img
          src="/img/det_write_about_the_photo_course/v5-20.png"
          alt="Vocabulary supplement for describing scenery."
        />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption20') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p140') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p141') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p142') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul27')"></div>
        <p>{{ t('det_write_about_the_photo_course.p143') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p144') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p145') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p146') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p147') }}</p>
        <img
          src="/img/det_write_about_the_photo_course/s5t1-21.jpg"
          alt="Sample Question 7 of Write about the Photo, with Template 1"
        />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption21') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p148') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p149') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p150') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p151') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p152') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p153') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p154') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p155') }}</p>
        <img
          src="/img/det_write_about_the_photo_course/s5t2-22.jpg"
          alt="Sample Question 8 of Write about the Photo, with Template 2"
        />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption22') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p156') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p157') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p158') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p159') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p160') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p161') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p162') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p163') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p164') }}</p>
        <img
          src="/img/det_write_about_the_photo_course/s5t3-23.jpg"
          alt="Sample Question 9 of Write about the Photo, with Template 3"
        />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption23') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p165') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p166') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p167') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p168') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p169') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p170') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p171') }}</p>
        <h2 id="prep_8">{{ t('det_write_about_the_photo_course.h29') }}</h2>
        <p>{{ t('det_write_about_the_photo_course.p172') }}</p>
        <img
          src="/img/det_write_about_the_photo_course/objects-24.jpg"
          alt="Demo pictures of DET write about photo questions, objects."
        />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption24') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p173') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p174') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p175') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p176') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p177') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p178') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p179') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p180') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p181') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p182') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul28')"></div>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul29')"></div>
        <p>{{ t('det_write_about_the_photo_course.p183') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p184') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p185') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p186') }}</p>
        <img
          src="/img/det_write_about_the_photo_course/s6t1-25.jpg"
          alt="Sample Question 10 of Write about the Photo, with Template 1"
        />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption25') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p187') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p188') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p189') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p190') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p191') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p192') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p193') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p194') }}</p>
        <img
          src="/img/det_write_about_the_photo_course/s6t2-26.jpg"
          alt="Sample Question 11 of Write about the Photo, with Template 2"
        />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption26') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p195') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p196') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p197') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p198') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p199') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p200') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p201') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p202') }}</p>
        <img
          src="/img/det_write_about_the_photo_course/s6t3-27.jpg"
          alt="Sample Question 12 of Write about the Photo, with Template 3"
        />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption27') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p203') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p204') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p205') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p206') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p207') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p208') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p209') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p210') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p211') }}</p>
        <h2 id="prep_9">{{ t('det_write_about_the_photo_course.h210') }}</h2>
        <p>{{ t('det_write_about_the_photo_course.p212') }}</p>
        <img src="/img/det_write_about_the_photo_course/exercise-28.jpg" alt="A screenshot of DET writing exercise question." />

        <figure>
          <figcaption>{{ t('det_write_about_the_photo_course.figcaption28') }}</figcaption>
        </figure>
        <p>{{ t('det_write_about_the_photo_course.p213') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p214') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p215') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p216') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p217') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p218') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p219') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p220') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul30')"></div>
        <p>{{ t('det_write_about_the_photo_course.p221') }}</p>
        <p>{{ t('det_write_about_the_photo_course.p222') }}</p>
        <h3>{{ t('det_write_about_the_photo_course.h31') }}</h3>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ol2')"></div>
        <p>{{ t('det_write_about_the_photo_course.p223') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.ul31')"></div>
        <p>{{ t('det_write_about_the_photo_course.p224') }}</p>
        <div class="html_wrapper" v-html="t('det_write_about_the_photo_course.p225')"></div>
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
.det-write-about-the-photo-course {
  .sub-item {
    margin-left: 20px;
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
