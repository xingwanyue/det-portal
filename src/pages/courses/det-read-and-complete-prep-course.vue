<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { domain } from '@/utils';
const { t } = useI18n();

import my_video from '@/components/prepCompoment/video.vue';
import select_change from '@/components/prepCompoment/select_change.vue';

useSeoMeta({
  title: t('det_read_and_complete_prep_course.seometa.title'),
  description: t('det_read_and_complete_prep_course.seometa.description'),
});
const localePath = useLocalePath();
useHead({
  meta: [
    { name: 'DC.title', content: t('det_read_and_complete_prep_course.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('det_read_and_complete_prep_course.seometa.title') },
    { property: 'og:description', content: t('tos.seometa.description') },
    { property: 'og:url', content: `https://www.${domain}${localePath('/courses/det-read-and-complete-prep-course')}` },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: t('det_read_and_complete_prep_course.seometa.title') },
    {
      name: 'twitter:description',
      content: t('det_read_and_complete_prep_course.seometa.description'),
    },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
});

const video_data = computed(() => {
  return {
    video_title: 'det-read-and-complete-prep-course',
    video_url: 'https://www.youtube.com/embed/8UYh_8Co2vo?si=hKXnkiQ-bUtOZJeg',
  };
});
</script>
<template>
  <div class="common_prep_wrapper det_read_and_complete_prep_course">
    <div class="top">
      <nuxt-link :to="localePath('/')" class="hoverGiveBorder">Home</nuxt-link>
      >

      <nuxt-link :to="localePath('/courses')" class="hoverGiveBorder">Courses</nuxt-link>
      > {{ t('courses.four_change_right_data.data1.video4data.title') }} {{ t('courses.prepCourse') }}
    </div>
    <div class="common_prep_out">
      <div class="common_prep_left">
        <h1>{{ t('det_read_and_complete_prep_course.h1_1') }}</h1>
        <h2>{{ t('det_read_and_complete_prep_course.h2_1') }}</h2>
        <p>{{ t('det_read_and_complete_prep_course.p_1') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_2') }}</p>
        <div class="video_out">
          <my_video :title="video_data.video_title" :video_url="video_data.video_url" />
        </div>
        <h2>{{ t('det_read_and_complete_prep_course.h2_2') }}</h2>
        <ul>
          <li>
            <a :href="`#prep_1`">{{ t('det_read_and_complete_prep_course.li1') }}</a>
          </li>
          <li>
            <a :href="`#prep_2`">{{ t('det_read_and_complete_prep_course.li2') }}</a>
          </li>
          <li>
            <a :href="`#prep_3`">{{ t('det_read_and_complete_prep_course.li3') }}</a>
          </li>
          <li>
            <a :href="`#prep_4`">{{ t('det_read_and_complete_prep_course.li4') }}</a>
          </li>
          <li>
            <a :href="`#prep_5`">{{ t('det_read_and_complete_prep_course.li5') }}</a>
          </li>
          <li>
            <a :href="`#prep_6`">{{ t('det_read_and_complete_prep_course.li6') }}</a>
          </li>
          <li>
            <a :href="`#prep_7`">{{ t('det_read_and_complete_prep_course.li7') }}</a>
          </li>
          <li>
            <a :href="`#prep_8`">{{ t('det_read_and_complete_prep_course.li8') }}</a>
          </li>
        </ul>
        <h2 id="prep_1">{{ t('det_read_and_complete_prep_course.h2_3') }}</h2>
        <p>{{ t('det_read_and_complete_prep_course.p_3') }}</p>
        <h2 id="prep_2">{{ t('det_read_and_complete_prep_course.h2_4') }}</h2>
        <p>{{ t('det_read_and_complete_prep_course.p_4') }}</p>
        <img
          src="/img/det-read-and-complete-prep-course/Screenshot.png"
          :alt="t('det_read_and_complete_prep_course.h2_4')"
        />
        <p>{{ t('det_read_and_complete_prep_course.p_5') }}</p>
        <h2 id="prep_3">{{ t('det_read_and_complete_prep_course.h2_5') }}</h2>
        <p>{{ t('det_read_and_complete_prep_course.p_6') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_7') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_8') }}</p>
        <h2 id="prep_4">{{ t('det_read_and_complete_prep_course.h2_6') }}</h2>
        <p>{{ t('det_read_and_complete_prep_course.p_9') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_10') }}</p>
        <hr />
        <div class="title">{{ t('det_read_and_complete_prep_course.title1') }}</div>
        <div class="html_wrapper" v-html="t('det_read_and_complete_prep_course.p_11')"></div>
        <p>{{ t('det_read_and_complete_prep_course.p_12') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_13') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_14') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_15') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_16') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_17') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_18') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_19') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_20') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_21') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_22') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_23') }}</p>
        <hr />
        <div class="title">{{ t('det_read_and_complete_prep_course.title2') }}</div>
        <div class="html_wrapper" v-html="t('det_read_and_complete_prep_course.p_24')"></div>
        <p>{{ t('det_read_and_complete_prep_course.p_25') }}</p>
        <h2 id="prep_5">{{ t('det_read_and_complete_prep_course.h2_7') }}</h2>
        <p>{{ t('det_read_and_complete_prep_course.p_26') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_27') }}</p>
        <div class="title">{{ t('det_read_and_complete_prep_course.title3') }}</div>
        <hr />
        <div class="html_wrapper" v-html="t('det_read_and_complete_prep_course.p_28')"></div>
        <p>{{ t('det_read_and_complete_prep_course.p_29') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_30') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_31') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_32') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_33') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_34') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_35') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_36') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_37') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_38') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_39') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_40') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_41') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_42') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_43') }}</p>
        <hr />
        <div class="title">{{ t('det_read_and_complete_prep_course.title4') }}</div>
        <div class="html_wrapper" v-html="t('det_read_and_complete_prep_course.p_44')"></div>
        <p>{{ t('det_read_and_complete_prep_course.p_45') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_46') }}</p>
        <h2 id="prep_6">{{ t('det_read_and_complete_prep_course.h2_8') }}</h2>
        <p>{{ t('det_read_and_complete_prep_course.p_47') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_48') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_49') }}</p>
        <table>
          <tbody>
            <tr>
              <th>{{ t('det_read_and_complete_prep_course.table1.table1') }}</th>
              <th>{{ t('det_read_and_complete_prep_course.table1.table2') }}</th>
            </tr>
            <tr>
              <td>{{ t('det_read_and_complete_prep_course.table1.table3') }}</td>
              <td>{{ t('det_read_and_complete_prep_course.table1.table4') }}</td>
            </tr>
            <tr>
              <td>{{ t('det_read_and_complete_prep_course.table1.table5') }}</td>
              <td>{{ t('det_read_and_complete_prep_course.table1.table6') }}</td>
            </tr>
            <tr>
              <td>{{ t('det_read_and_complete_prep_course.table1.table7') }}</td>
              <td>{{ t('det_read_and_complete_prep_course.table1.table8') }}</td>
            </tr>
            <tr>
              <td>{{ t('det_read_and_complete_prep_course.table1.table9') }}</td>
              <td>{{ t('det_read_and_complete_prep_course.table1.table10') }}</td>
            </tr>
            <tr>
              <td>{{ t('det_read_and_complete_prep_course.table1.table11') }}</td>
              <td>{{ t('det_read_and_complete_prep_course.table1.table12') }}</td>
            </tr>
            <tr>
              <td>{{ t('det_read_and_complete_prep_course.table1.table13') }}</td>
              <td>{{ t('det_read_and_complete_prep_course.table1.table14') }}</td>
            </tr>
          </tbody>
        </table>
        <p>{{ t('det_read_and_complete_prep_course.p_50') }}</p>
        <hr />
        <div class="title">{{ t('det_read_and_complete_prep_course.title5') }}</div>
        <div class="html_wrapper" v-html="t('det_read_and_complete_prep_course.p_51')"></div>
        <p>{{ t('det_read_and_complete_prep_course.p_52') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_53') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_54') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_55') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_56') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_57') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_58') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_59') }}</p>
        <hr />
        <div class="title">{{ t('det_read_and_complete_prep_course.title6') }}</div>
        <div class="html_wrapper" v-html="t('det_read_and_complete_prep_course.p_60')"></div>
        <h2 id="prep_7">{{ t('det_read_and_complete_prep_course.h2_9') }}</h2>
        <p>{{ t('det_read_and_complete_prep_course.p_61') }}</p>
        <table>
          <tbody>
            <tr>
              <th>{{ t('det_read_and_complete_prep_course.table2.table1') }}</th>
              <th>{{ t('det_read_and_complete_prep_course.table2.table2') }}</th>
            </tr>
            <tr>
              <td>{{ t('det_read_and_complete_prep_course.table2.table3') }}</td>
              <td>{{ t('det_read_and_complete_prep_course.table2.table4') }}</td>
            </tr>
            <tr>
              <td>{{ t('det_read_and_complete_prep_course.table2.table5') }}</td>
              <td>{{ t('det_read_and_complete_prep_course.table2.table6') }}</td>
            </tr>
            <tr>
              <td>{{ t('det_read_and_complete_prep_course.table2.table7') }}</td>
              <td>{{ t('det_read_and_complete_prep_course.table2.table8') }}</td>
            </tr>
            <tr>
              <td>{{ t('det_read_and_complete_prep_course.table2.table9') }}</td>
              <td>{{ t('det_read_and_complete_prep_course.table2.table10') }}</td>
            </tr>
            <tr>
              <td>{{ t('det_read_and_complete_prep_course.table2.table11') }}</td>
              <td>{{ t('det_read_and_complete_prep_course.table2.table12') }}</td>
            </tr>
            <tr>
              <td>{{ t('det_read_and_complete_prep_course.table2.table13') }}</td>
              <td>{{ t('det_read_and_complete_prep_course.table2.table14') }}</td>
            </tr>
            <tr>
              <td>{{ t('det_read_and_complete_prep_course.table2.table15') }}</td>
              <td>{{ t('det_read_and_complete_prep_course.table2.table16') }}</td>
            </tr>
            <tr>
              <td>{{ t('det_read_and_complete_prep_course.table2.table17') }}</td>
              <td>{{ t('det_read_and_complete_prep_course.table2.table18') }}</td>
            </tr>
            <tr>
              <td>{{ t('det_read_and_complete_prep_course.table2.table19') }}</td>
              <td>{{ t('det_read_and_complete_prep_course.table2.table20') }}</td>
            </tr>
            <tr>
              <td>{{ t('det_read_and_complete_prep_course.table2.table21') }}</td>
              <td>{{ t('det_read_and_complete_prep_course.table2.table22') }}</td>
            </tr>
          </tbody>
        </table>
        <p>{{ t('det_read_and_complete_prep_course.p_62') }}</p>
        <img
          src="/img/det-read-and-complete-prep-course/Screenshot2.jpg"
          :alt="t('det_read_and_complete_prep_course.h2_9')"
        />
        <p>{{ t('det_read_and_complete_prep_course.p_63') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_64') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_65') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_66') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_67') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_68') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_69') }}</p>
        <div class="title">{{ t('det_read_and_complete_prep_course.title7') }}</div>
        <div class="html_wrapper" v-html="t('det_read_and_complete_prep_course.p_70')"></div>
        <h2 id="prep_8">{{ t('det_read_and_complete_prep_course.h2_10') }}</h2>
        <p>{{ t('det_read_and_complete_prep_course.p_71') }}</p>
        <hr />
        <div class="title">{{ t('det_read_and_complete_prep_course.title8') }}</div>
        <div class="html_wrapper" v-html="t('det_read_and_complete_prep_course.p_72')"></div>
        <p>{{ t('det_read_and_complete_prep_course.p_73') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_74') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_75') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_76') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_77') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_78') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_79') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_80') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_81') }}</p>
        <hr />
        <div class="title">{{ t('det_read_and_complete_prep_course.title9') }}</div>
        <div class="html_wrapper" v-html="t('det_read_and_complete_prep_course.p_82')"></div>
        <p>{{ t('det_read_and_complete_prep_course.p_83') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_84') }}</p>
        <hr />
        <div class="title">{{ t('det_read_and_complete_prep_course.title10') }}</div>
        <div class="html_wrapper" v-html="t('det_read_and_complete_prep_course.p_85')"></div>
        <p>{{ t('det_read_and_complete_prep_course.p_86') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_87') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_88') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_89') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_90') }}</p>
        <hr />
        <div class="title">{{ t('det_read_and_complete_prep_course.title11') }}</div>
        <div class="html_wrapper" v-html="t('det_read_and_complete_prep_course.p_91')"></div>
        <p>{{ t('det_read_and_complete_prep_course.p_92') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_93') }}</p>
        <hr />
        <div class="title">{{ t('det_read_and_complete_prep_course.title12') }}</div>
        <div class="html_wrapper" v-html="t('det_read_and_complete_prep_course.p_94')"></div>
        <p>{{ t('det_read_and_complete_prep_course.p_95') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_96') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_97') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_98') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_99') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_100') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_101') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_102') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_103') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_104') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_105') }}</p>
        <hr />
        <div class="title">{{ t('det_read_and_complete_prep_course.title13') }}</div>
        <div class="html_wrapper" v-html="t('det_read_and_complete_prep_course.p_106')"></div>
        <p>{{ t('det_read_and_complete_prep_course.p_107') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_108') }}</p>
        <hr />
        <div class="title">{{ t('det_read_and_complete_prep_course.title14') }}</div>
        <div class="html_wrapper" v-html="t('det_read_and_complete_prep_course.p_109')"></div>
        <p>{{ t('det_read_and_complete_prep_course.p_110') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_111') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_112') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_113') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_114') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_115') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_116') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_117') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_118') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_119') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_120') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_121') }}</p>
        <div class="title">{{ t('det_read_and_complete_prep_course.title15') }}</div>
        <div class="html_wrapper" v-html="t('det_read_and_complete_prep_course.p_122')"></div>
        <p>{{ t('det_read_and_complete_prep_course.p_123') }}</p>
        <h2>{{ t('det_read_and_complete_prep_course.h2_11') }}</h2>
        <p>{{ t('det_read_and_complete_prep_course.p_124') }}</p>
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
.det_read_and_complete_prep_course {
  .title {
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
  }

  .html_wrapper {
    margin-top: 1em;
    .blank {
      display: inline-block;
      width: 10px;
      height: 1em;
      border: 1px solid black;
      margin: 0 2px;
      vertical-align: middle;
    }
    .highlight {
      font-weight: bold;
      color: green;
    }
    .annotation {
      color: green;
      font-size: 0.8em;
      vertical-align: super;
    }
    .filled {
      color: green;
      font-weight: bold;
    }
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th {
    background-color: #ffa500;
    color: white;
  }
  th,
  td {
    border: 1px solid black;
    padding: 8px;
    text-align: center;
  }
}
</style>
