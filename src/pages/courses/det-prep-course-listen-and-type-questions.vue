<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { domain } from '@/utils';
import my_video from '@/components/prepCompoment/video.vue';
import select_change from '@/components/prepCompoment/select_change.vue';

const video_data = computed(() => {
  return {
    video_title: 'det-prep-course-listen-and-type-questions',
    video_url: 'https://www.youtube.com/embed/8vbJAoDrIx0?si=7k-RvT953_rlaAau',
  };
});
useSeoMeta({
  title: t('det_prep_course_listen_and_type_questions.seometa.title'),
  description: t('det_prep_course_listen_and_type_questions.seometa.description'),
});
const localePath = useLocalePath();
useHead({
  meta: [
    { name: 'DC.title', content: t('det_prep_course_listen_and_type_questions.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('det_prep_course_listen_and_type_questions.seometa.title') },
    { property: 'og:description', content: t('tos.seometa.description') },
    {
      property: 'og:url',
      content: `https://www.${domain}${localePath('/courses/det-prep-course-listen-and-type-questions')}`,
    },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: t('det_prep_course_listen_and_type_questions.seometa.title') },
    {
      name: 'twitter:description',
      content: t('det_prep_course_listen_and_type_questions.seometa.description'),
    },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
});
</script>
<template>
  <div class="common_prep_wrapper det_prep_course_listen_and_type_questions">
    <div class="top">
      <nuxt-link :to="localePath('/')" class="hoverGiveBorder">Home</nuxt-link>
      >

      <nuxt-link :to="localePath('/courses')" class="hoverGiveBorder">Courses</nuxt-link>
      > {{ t('courses.four_change_right_data.data2.video1data.title') }} {{ t('courses.prepCourse') }}
    </div>
    <div class="common_prep_out">
      <div class="common_prep_left">
        <h1>{{ t('det_prep_course_listen_and_type_questions.h1_1') }}</h1>
        <h2>{{ t('det_prep_course_listen_and_type_questions.h2_1') }}</h2>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_1') }}</p>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_2') }}</p>
        <ol class="wp-block-list">
          <li>{{ t('det_prep_course_listen_and_type_questions.ol_1.li_1') }}</li>
          <li>{{ t('det_prep_course_listen_and_type_questions.ol_1.li_2') }}</li>
          <li>{{ t('det_prep_course_listen_and_type_questions.ol_1.li_3') }}</li>
          <li>{{ t('det_prep_course_listen_and_type_questions.ol_1.li_4') }}</li>
          <li>{{ t('det_prep_course_listen_and_type_questions.ol_1.li_5') }}</li>
        </ol>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_3') }}</p>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_4') }}</p>
        <div class="video_out">
          <my_video :title="video_data.video_title" :video_url="video_data.video_url" />
        </div>

        <h1>{{ t('det_prep_course_listen_and_type_questions.h1_2') }}</h1>
        <ol class="toc_ol">
          <li>
            <a :href="`#prep_1`">{{ t('det_prep_course_listen_and_type_questions.ol_2.li_1') }}</a>
          </li>
          <li>
            <a :href="`#prep_2`">{{ t('det_prep_course_listen_and_type_questions.ol_2.li_2') }}</a>
          </li>
          <li>
            <a :href="`#prep_3`">{{ t('det_prep_course_listen_and_type_questions.ol_2.li_3') }}</a>
          </li>
          <li>
            <a :href="`#prep_4`"> {{ t('det_prep_course_listen_and_type_questions.ol_2.li_4') }}</a>
          </li>
          <li>
            <a :href="`#prep_5`">{{ t('det_prep_course_listen_and_type_questions.ol_2.li_5') }}</a>
          </li>
          <li>
            <a :href="`#prep_6`">{{ t('det_prep_course_listen_and_type_questions.ol_2.li_6') }}</a>
          </li>
          <li>
            <a :href="`#prep_7`">{{ t('det_prep_course_listen_and_type_questions.ol_2.li_7') }}</a>
            <ul>
              <li>{{ t('det_prep_course_listen_and_type_questions.ol_2.li_7_1') }}</li>
              <li>{{ t('det_prep_course_listen_and_type_questions.ol_2.li_7_2') }}</li>
              <li>{{ t('det_prep_course_listen_and_type_questions.ol_2.li_7_3') }}</li>
            </ul>
          </li>
          <li>
            <a :href="`#prep_8`">{{ t('det_prep_course_listen_and_type_questions.ol_2.li_8') }}</a>
          </li>
        </ol>
        <h2 id="prep_1">{{ t('det_prep_course_listen_and_type_questions.h2_2') }}</h2>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_5') }}</p>
        <h2 id="prep_2">{{ t('det_prep_course_listen_and_type_questions.h2_3') }}</h2>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_6') }}</p>
        <img
          src="/img/det-prep-course-listen-and-type-questions/listen-and-type-UI.png"
          alt="UI of the DET Listen and Type Question"
        />
        <div class="gray">{{ t('det_prep_course_listen_and_type_questions.gray1') }}</div>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_7') }}</p>
        <img
          src="/img/det-prep-course-listen-and-type-questions/listen-and-type-UI2.jpg"
          alt="A close look of Listen and Type UI."
        />
        <div class="gray">{{ t('det_prep_course_listen_and_type_questions.gray2') }}</div>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_8') }}</p>
        <h2 id="prep_3">{{ t('det_prep_course_listen_and_type_questions.h2_4') }}</h2>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_9') }}</p>
        <img
          src="/img/det-prep-course-listen-and-type-questions/listen-and-type-intro.jpg"
          alt="Introduction of Listen and Type questions."
        />
        <div class="gray">{{ t('det_prep_course_listen_and_type_questions.gray3') }}</div>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_10') }}</p>
        <h2 id="prep_4">{{ t('det_prep_course_listen_and_type_questions.h2_5') }}</h2>
        <img
          src="/img/det-prep-course-listen-and-type-questions/DET-answering-strategies.jpg"
          alt="DET Answering Strategies: How to handle numbers?"
        />
        <div class="gray">{{ t('det_prep_course_listen_and_type_questions.gray4') }}</div>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_11') }}</p>
        <h2 id="prep_5">{{ t('det_prep_course_listen_and_type_questions.h2_6') }}</h2>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_12') }}</p>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_13') }}</p>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_14') }}</p>
        <h2 id="prep_6">{{ t('det_prep_course_listen_and_type_questions.h2_7') }}</h2>
        <ul>
          <li class="header">• Types of Linking</li>
          <li class="blue">– Consonant + Vowel:</li>
          <li class="indent">Examples: ge<span class="red">t_o</span>ut, stan<span class="red">d_u</span>p</li>
          <li class="blue">– Assimilation:</li>
          <li class="indent">* /t/ + /j/ becomes /tʃ/; /d/ + /j/ becomes /dʒ/</li>
          <li class="indent">Examples: nex<span class="red">t_y</span>ear, di<span class="red">d_y</span>ou</li>
          <li class="blue">
            – When a word ends with a vowel /ə/ or /ɜː/ and the following word starts with a vowel, an /r/ sound is
            added between them, known as r-linking.
          </li>
          <li class="indent">
            Examples: her own→her <span class="red">r</span>own answer it → answer <span class="red">r</span>it
          </li>
          <li class="blue">– Vowel to Vowel</li>
          <li class="indent">
            a. When a word ending in /u/, /ʊ/, /aʊ/, or /o/ is followed by a word starting with a vowel, a light /w/
            sound is inserted between the two vowels.
          </li>
          <li class="sub-indent">
            e.g: g<span class="red">o_o</span>n, wh<span class="red">o_e</span>lse, y<span class="red">ou_a</span>re
          </li>
          <li class="indent">
            b. When a word ending in /i/, /ai/, or /e/ is followed by a word starting with a vowel, a light /j/ sound is
            inserted between the two vowels.
          </li>
          <li class="sub-indent">
            e.g: b<span class="red">e_o</span>n time, m<span class="red">y_o</span>nly apartment
          </li>
        </ul>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_15') }}</p>
        <ul>
          <li><span class="header">Loss of Plosion</span></li>
          <li>
            – When any two of the sounds <span class="blue">/b/, /p/, /t/, /d/, /k/</span> and<span class="blue"
              >/g/</span
            >
            appear consecutively,
            <div class="indent">the first one is not fully released or articulated.</div>
            <div class="indent">e.g: blac<span class="red">k</span> bike, si<span class="red">t</span> down</div>
          </li>
          <li>
            – <strong>Consonant Clusters:</strong> sa<span class="purple">d d</span>ay, fre<span class="purple"
              >sh sh</span
            >irt, ta<span class="purple">ke c</span>are
          </li>
        </ul>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_16') }}</p>
        <h1>{{ t('det_prep_course_listen_and_type_questions.h1_3') }}</h1>
        <table>
          <tbody>
            <tr>
              <th>Categories</th>
              <th>Examples</th>
            </tr>
            <tr>
              <td>Personal Pronouns</td>
              <td>
                he: /hi:/→/<span class="red">hɪ</span>/, me: /mi:/→/<span class="red">mɪ</span>/, she: /ʃi:/→/<span
                  class="red"
                  >ʃɪ</span
                ><br />
                them: /ðem/→/<span class="red">ðəm</span>/, us: /ʌs/→/<span class="red">əs</span>/, we: /wi:/→/<span
                  class="red"
                  >wɪ</span
                >/, you: /ju:/→/<span class="red">jə</span>/
              </td>
            </tr>
            <tr>
              <td>Possessive Pronouns</td>
              <td>
                her: /hɜ:r/→/hər/→/<span class="red">ər</span>/, his: /hɪz/→/<span class="red">ɪz</span>/<br />
                our: /aʊər/→/<span class="red">ɑ:r</span>/, your: /jɔ:r/→/<span class="red">jər</span>/
              </td>
            </tr>
            <tr>
              <td>Articles</td>
              <td>
                a: /eɪ/→/<span class="red">ə</span>/, an: /æn/→/<span class="red">ən</span>/, the: /ði:/→/<span
                  class="red"
                  >ðə</span
                >/
              </td>
            </tr>
            <tr>
              <td>Conjunctions and Prepositions</td>
              <td>
                and: /ænd/→/<span class="red">ənd</span>/, at: /æt/→/<span class="red">ət</span>/, for: /fɔ:r/→/<span
                  class="red"
                  >fər</span
                >/<br />
                from: /frʌm/→/<span class="red">frəm</span>/, of: /ʌv/→/<span class="red">əv</span>/, to: /tu:/→/<span
                  class="red"
                  >tə</span
                >/<br />
                as: /æz/→/<span class="red">əz</span>/, but: /bʌt/→/<span class="red">bət</span>/, so: /soʊ/→/<span
                  class="red"
                  >sə</span
                >/<br />
                than: /ðæn/→/<span class="red">ðən</span>/, that: /ðæt/→/<span class="red">ðət</span>/
              </td>
            </tr>
            <tr>
              <td>Auxiliary Verbs and Others</td>
              <td>
                am: /æm/→/<span class="red">əm</span>/, are: /ɑ:r/→/<span class="red">ər</span>/, be: /bi:/→/<span
                  class="red"
                  >bɪ</span
                >/<br />
                can: /kæn/→/<span class="red">kɪn</span>/, do: /du:/→/<span class="red">də</span>/, does: /dʌz/→/<span
                  class="red"
                  >dəz</span
                >/<br />
                had: /hæd/→/<span class="red">həd</span>/, has: /hæz/→/<span class="red">həz</span>/, have: /hæv/→/<span
                  class="red"
                  >həv</span
                >/<br />
                is: /ɪz/→/<span class="red">s</span>/, must: /mʌst/→/<span class="red">məst</span>/, shall: /ʃæl/→/<span
                  class="red"
                  >ʃəl</span
                >/<br />
                was: /wʌz/→/<span class="red">wəz</span>/, were: /wɜ:r/→/<span class="red">wər</span>/, will:
                /wɪl/→/<span class="red">wəl</span>/
              </td>
            </tr>
          </tbody>
        </table>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_17') }}</p>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_18') }}</p>
        <h2 id="prep_7">{{ t('det_prep_course_listen_and_type_questions.h2_8') }}</h2>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_19') }}</p>
        <div class="audio-player">
          <audio id="audio" preload="none" controls>
            <source src="/audio/Questions-worth-100-points-or-less.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_20') }}</p>
        <details style="margin-bottom: 20px; border: 1px solid #ddd; border-radius: 4px; padding: 10px">
          <summary style="cursor: pointer; font-weight: bold; margin: -10px; padding: 10px; background-color: #f0f0f0">
            Click here to see the answer
          </summary>
          <div style="margin-top: 10px; padding: 10px; background-color: #f9f9f9; border-radius: 4px">
            “Don’t you see what’s going on?”
          </div>
        </details>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_21') }}</p>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_22') }}</p>
        <div class="audio-player" id="audio-player-2">
          <audio id="audio-2" preload="none" controls>
            <source src="/audio/Question2-worth-100-points-or-less.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_23') }}</p>
        <div>
          <details style="margin-bottom: 20px; border: 1px solid #ddd; border-radius: 4px; padding: 10px">
            <summary
              style="cursor: pointer; font-weight: bold; margin: -10px; padding: 10px; background-color: #f0f0f0"
            >
              Click here to see the answer
            </summary>
            <div style="margin-top: 10px; padding: 10px; background-color: #f9f9f9; border-radius: 4px">
              “I have a headache now.”
            </div>
          </details>
        </div>

        <p>{{ t('det_prep_course_listen_and_type_questions.p_24') }}</p>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_25') }}</p>
        <div class="audio-player" id="audio-player-3">
          <audio id="audio-3" preload="none" controls>
            <source src="/audio/Question3-worth-100-points-or-less.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_26') }}</p>
        <details style="margin-bottom: 20px; border: 1px solid #ddd; border-radius: 4px; padding: 10px">
          <summary style="cursor: pointer; font-weight: bold; margin: -10px; padding: 10px; background-color: #f0f0f0">
            Click here to see the answer
          </summary>
          <div style="margin-top: 10px; padding: 10px; background-color: #f9f9f9; border-radius: 4px">
            “I will tell you about the winter event.”
          </div>
        </details>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_27') }}</p>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_28') }}</p>
        <div class="audio-player" id="audio-player-4">
          <audio id="audio-4" preload="none" controls>
            <source src="/audio/Question-worth-between-105-and-115-points.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_29') }}</p>
        <details style="margin-bottom: 20px; border: 1px solid #ddd; border-radius: 4px; padding: 10px">
          <summary style="cursor: pointer; font-weight: bold; margin: -10px; padding: 10px; background-color: #f0f0f0">
            Click here to see the answer
          </summary>
          <div style="margin-top: 10px; padding: 10px; background-color: #f9f9f9; border-radius: 4px">
            “A centenarian is someone who is one hundred years old or more.”
          </div>
        </details>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_30') }}</p>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_31') }}</p>
        <div class="audio-player" id="audio-player-5">
          <audio id="audio-5" preload="none" controls>
            <source src="/audio/Question2-worth-between-105-and-115-points.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_32') }}</p>
        <details style="margin-bottom: 20px; border: 1px solid #ddd; border-radius: 4px; padding: 10px">
          <summary style="cursor: pointer; font-weight: bold; margin: -10px; padding: 10px; background-color: #f0f0f0">
            Click here to see the answer
          </summary>
          <div style="margin-top: 10px; padding: 10px; background-color: #f9f9f9; border-radius: 4px">
            “The search results will be displayed at the bottom of the screen.”
          </div>
        </details>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_33') }}</p>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_34') }}</p>
        <div class="audio-player" id="audio-player-6">
          <audio id="audio-6" preload="none" controls>
            <source src="/audio/Question3-worth-between-105-and-115-points.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_35') }}</p>
        <details style="margin-bottom: 20px; border: 1px solid #ddd; border-radius: 4px; padding: 10px">
          <summary style="cursor: pointer; font-weight: bold; margin: -10px; padding: 10px; background-color: #f0f0f0">
            Click here to see the answer
          </summary>
          <div style="margin-top: 10px; padding: 10px; background-color: #f9f9f9; border-radius: 4px">
            “It is sometimes called the plasma membrane.”
          </div>
        </details>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_36') }}</p>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_37') }}</p>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_38') }}</p>
        <div class="audio-player" id="audio-player-7">
          <audio id="audio-7" preload="none" controls>
            <source src="/audio/Question-worth-120-points-or-more.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_39') }}</p>
        <details style="margin-bottom: 20px; border: 1px solid #ddd; border-radius: 4px; padding: 10px">
          <summary style="cursor: pointer; font-weight: bold; margin: -10px; padding: 10px; background-color: #f0f0f0">
            Click here to see the answer
          </summary>
          <div style="margin-top: 10px; padding: 10px; background-color: #f9f9f9; border-radius: 4px">
            “Prevention includes vaccination, environmental measures, and appropriate treatment of other health
            problems.”
          </div>
        </details>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_40') }}</p>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_41') }}</p>
        <div class="audio-player" id="audio-player-8">
          <audio id="audio-8" preload="none" controls>
            <source src="/audio/Question2-worth-120-points-or-more.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_42') }}</p>
        <details style="margin-bottom: 20px; border: 1px solid #ddd; border-radius: 4px; padding: 10px">
          <summary style="cursor: pointer; font-weight: bold; margin: -10px; padding: 10px; background-color: #f0f0f0">
            Click here to see the answer
          </summary>
          <div style="margin-top: 10px; padding: 10px; background-color: #f9f9f9; border-radius: 4px">
            “Information theory is the study of a particular mathematical concept of information.”
          </div>
        </details>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_43') }}</p>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_44') }}</p>
        <div class="audio-player" id="audio-player-9" controls>
          <audio id="audio-9" preload="none">
            <source src="/audio/Question3-worth-120-points-or-more.mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_45') }}</p>
        <details style="margin-bottom: 20px; border: 1px solid #ddd; border-radius: 4px; padding: 10px">
          <summary style="cursor: pointer; font-weight: bold; margin: -10px; padding: 10px; background-color: #f0f0f0">
            Click here to see the answer
          </summary>
          <div style="margin-top: 10px; padding: 10px; background-color: #f9f9f9; border-radius: 4px">
            “Pressure acts perpendicular to the solid surface of an object.”
          </div>
        </details>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_46') }}</p>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_47') }}</p>
        <h3 id="prep_8">{{ t('det_prep_course_listen_and_type_questions.h3_1') }}</h3>
        <h4>{{ t('det_prep_course_listen_and_type_questions.h4_1') }}</h4>
        <ul class="wp-block-list">
          <li>{{ t('det_prep_course_listen_and_type_questions.ul_1.li_1') }}</li>
          <li>{{ t('det_prep_course_listen_and_type_questions.ul_1.li_2') }}</li>
          <li>{{ t('det_prep_course_listen_and_type_questions.ul_1.li_3') }}</li>
        </ul>
        <h4>{{ t('det_prep_course_listen_and_type_questions.h4_2') }}</h4>
        <ul class="wp-block-list">
          <li>{{ t('det_prep_course_listen_and_type_questions.ul_2.li_1') }}</li>
          <li>{{ t('det_prep_course_listen_and_type_questions.ul_2.li_2') }}</li>
          <li>{{ t('det_prep_course_listen_and_type_questions.ul_2.li_3') }}</li>
          <li>{{ t('det_prep_course_listen_and_type_questions.ul_2.li_4') }}</li>
        </ul>
        <h4>{{ t('det_prep_course_listen_and_type_questions.h4_3') }}</h4>
        <ul class="wp-block-list">
          <li>{{ t('det_prep_course_listen_and_type_questions.ul_3.li_1') }}</li>
          <li>{{ t('det_prep_course_listen_and_type_questions.ul_3.li_2') }}</li>
          <li>{{ t('det_prep_course_listen_and_type_questions.ul_3.li_3') }}</li>
          <li>{{ t('det_prep_course_listen_and_type_questions.ul_3.li_4') }}</li>
        </ul>
        <h4>{{ t('det_prep_course_listen_and_type_questions.h4_4') }}</h4>
        <ul class="wp-block-list">
          <li>{{ t('det_prep_course_listen_and_type_questions.ul_4.li_1') }}</li>
          <li>{{ t('det_prep_course_listen_and_type_questions.ul_4.li_2') }}</li>
          <li>{{ t('det_prep_course_listen_and_type_questions.ul_4.li_3') }}</li>
        </ul>
        <h4>{{ t('det_prep_course_listen_and_type_questions.h4_5') }}</h4>
        <ul class="wp-block-list">
          <li>{{ t('det_prep_course_listen_and_type_questions.ul_5.li_1') }}</li>
          <li>{{ t('det_prep_course_listen_and_type_questions.ul_5.li_2') }}</li>
          <li>{{ t('det_prep_course_listen_and_type_questions.ul_5.li_3') }}</li>
          <li>{{ t('det_prep_course_listen_and_type_questions.ul_5.li_4') }}</li>
          <li>{{ t('det_prep_course_listen_and_type_questions.ul_5.li_5') }}</li>
        </ul>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_48') }}</p>
        <p>{{ t('det_prep_course_listen_and_type_questions.p_49') }}</p>
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
.det_prep_course_listen_and_type_questions {
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
  table {
    border-collapse: collapse;
    width: 100%;
    th,
    td {
      border: 1px solid black;
      padding: 8px;
      text-align: left;
      .red {
        color: red;
      }
    }
  }

  .gray {
    padding: 10px;
    border-radius: 4px;
    font-size: 12px;
  }
}
</style>
