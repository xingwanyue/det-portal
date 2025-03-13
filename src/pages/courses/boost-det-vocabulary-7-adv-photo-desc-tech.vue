<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { domain } from '@/utils';
import select_change from '@/components/prepCompoment/select_change.vue';

useSeoMeta({
  title: t('boost_det_vocabulary_7_adv_photo_desc_tech.seometa.title'),
  description: t('boost_det_vocabulary_7_adv_photo_desc_tech.seometa.description'),
});

const localePath = useLocalePath();
useHead({
  meta: [
    { name: 'DC.title', content: t('boost_det_vocabulary_7_adv_photo_desc_tech.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('boost_det_vocabulary_7_adv_photo_desc_tech.seometa.title') },
    { property: 'og:description', content: t('tos.seometa.description') },
    {
      property: 'og:url',
      content: `https://www.${domain}${localePath('/courses/boost-det-vocabulary-7-adv-photo-desc-tech')}`,
    },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: t('boost_det_vocabulary_7_adv_photo_desc_tech.seometa.title') },
    {
      name: 'twitter:description',
      content: t('boost_det_vocabulary_7_adv_photo_desc_tech.seometa.description'),
    },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
});
</script>
<template>
  <div class="common_prep_wrapper boost-det-vocabulary-7-adv-photo-desc-tech">
    <div class="top">
      <nuxt-link :to="localePath('/')" class="hoverGiveBorder">Home</nuxt-link>
      >

      <nuxt-link :to="localePath('/courses')" class="hoverGiveBorder">Courses</nuxt-link>
      > {{ t('courses.four_change_right_data.data5.video1data.title') }} {{ t('courses.prepCourse') }}
    </div>
    <div class="common_prep_out">
      <div class="common_prep_left">
        <h1>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.h11') }}</h1>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p1')"></div>
        <h2>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.h21') }}</h2>
        <ol>
          <li>
            <a :href="`#prep_1`">{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.oo1') }}</a>
          </li>
          <li>
            <a :href="`#prep_2`">{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.oo2') }}</a>
          </li>
          <li>
            <a :href="`#prep_3`">{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.oo3') }}</a>
          </li>
          <li>
            <a :href="`#prep_4`">{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.oo4') }}</a>
          </li>
          <li>
            <a :href="`#prep_5`">{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.oo5') }}</a>
          </li>
          <li>
            <a :href="`#prep_6`">{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.oo6') }}</a>
          </li>
          <li>
            <a :href="`#prep_7`">{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.oo7') }}</a>
          </li>
          <li>
            <a :href="`#prep_8`">{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.oo8') }}</a>
          </li>
          <li>
            <a :href="`#prep_9`">{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.oo9') }}</a>
          </li>
          <li>
            <a :href="`#prep_10`">{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.oo10') }}</a>
          </li>
        </ol>

        <h2 id="prep_1">{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.h22') }}</h2>

        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p2') }}</p>

        <iframe
          src="https://podcasters.spotify.com/pod/show/duolingoenglishtest/embed/episodes/Boost-Your-DET-Vocabulary-7-Advanced-Photo-Description-Techniques-e2qtpst/a-abkjvuv"
          height="102px"
          frameborder="0"
          scrolling="no"
        ></iframe>

        <h2 id="prep_2">{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.h23') }}</h2>
        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p3') }}</p>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.ol2')"></div>
        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p4') }}</p>
        <h2 id="prep_3">{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.h24') }}</h2>
        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p5') }}</p>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p6')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.ul1')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p7')"></div>
        <img
          src="/img/boost_det_vocabulary_7_adv_photo_desc_tech/001.png"
          :alt="t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption1')"
        />
        <figure>
          <figcaption>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption1') }}</figcaption>
        </figure>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.ul2')"></div>
        <img
          src="/img/boost_det_vocabulary_7_adv_photo_desc_tech/002.png"
          :alt="t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption2')"
        />
        <figure>
          <figcaption>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption2') }}</figcaption>
        </figure>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.ul3')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p8')"></div>
        <img
          src="/img/boost_det_vocabulary_7_adv_photo_desc_tech/003.jpg"
          :alt="t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption3')"
        />
        <figure>
          <figcaption>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption3') }}</figcaption>
        </figure>
        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p9') }}</p>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p10')"></div>
        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p11') }}</p>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p12')"></div>
        <h2 id="prep_4">{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.h25') }}</h2>
        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p13') }}</p>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p14')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.ul4')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p15')"></div>
        <img
          src="/img/boost_det_vocabulary_7_adv_photo_desc_tech/004.jpg"
          :alt="t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption4')"
        />
        <figure>
          <figcaption>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption4') }}</figcaption>
        </figure>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.ul5')"></div>
        <img
          src="/img/boost_det_vocabulary_7_adv_photo_desc_tech/005.png"
          :alt="t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption5')"
        />
        <figure>
          <figcaption>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption5') }}</figcaption>
        </figure>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.ul6')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p16')"></div>
        <img
          src="/img/boost_det_vocabulary_7_adv_photo_desc_tech/006.jpg"
          :alt="t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption6')"
        />
        <figure>
          <figcaption>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption6') }}</figcaption>
        </figure>
        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p17') }}</p>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p18')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p19')"></div>
        <h2 id="prep_5">{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.h26') }}</h2>
        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p20') }}</p>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p21')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.ul7')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p22')"></div>
        <img
          src="/img/boost_det_vocabulary_7_adv_photo_desc_tech/007.jpg"
          :alt="t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption7')"
        />
        <figure>
          <figcaption>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption7') }}</figcaption>
        </figure>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.ul8')"></div>
        <img
          src="/img/boost_det_vocabulary_7_adv_photo_desc_tech/008.jpg"
          :alt="t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption8')"
        />
        <figure>
          <figcaption>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption8') }}</figcaption>
        </figure>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.ul9')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p23')"></div>
        <img
          src="/img/boost_det_vocabulary_7_adv_photo_desc_tech/009.jpg"
          :alt="t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption9')"
        />
        <figure>
          <figcaption>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption9') }}</figcaption>
        </figure>
        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p24') }}</p>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p25')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p26')"></div>
        <h2 id="prep_6">{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.h27') }}</h2>
        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p27') }}</p>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p28')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.ul10')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p29')"></div>
        <img
          src="/img/boost_det_vocabulary_7_adv_photo_desc_tech/010.jpg"
          :alt="t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption10')"
        />
        <figure>
          <figcaption>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption10') }}</figcaption>
        </figure>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.ul11')"></div>
        <img
          src="/img/boost_det_vocabulary_7_adv_photo_desc_tech/011.jpg"
          :alt="t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption11')"
        />
        <figure>
          <figcaption>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption11') }}</figcaption>
        </figure>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.ul12')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p30')"></div>
        <img
          src="/img/boost_det_vocabulary_7_adv_photo_desc_tech/012.jpg"
          :alt="t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption12')"
        />
        <figure>
          <figcaption>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption12') }}</figcaption>
        </figure>
        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p31') }}</p>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p32')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p33')"></div>
        <h2 id="prep_7">{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.h28') }}</h2>
        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p34') }}</p>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p35')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.ul13')"></div>
        <img
          src="/img/boost_det_vocabulary_7_adv_photo_desc_tech/013.png"
          :alt="t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption13')"
        />
        <figure>
          <figcaption>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption13') }}</figcaption>
        </figure>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.ul14')"></div>
        <img
          src="/img/boost_det_vocabulary_7_adv_photo_desc_tech/014.png"
          :alt="t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption14')"
        />
        <figure>
          <figcaption>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption14') }}</figcaption>
        </figure>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.ul15')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p37')"></div>
        <img
          src="/img/boost_det_vocabulary_7_adv_photo_desc_tech/015.png"
          :alt="t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption15')"
        />
        <figure>
          <figcaption>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption15') }}</figcaption>
        </figure>
        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p38') }}</p>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p39')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p40')"></div>
        <h2 id="prep_8">{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.h29') }}</h2>
        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p41') }}</p>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p42')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.ul16')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p43')"></div>
        <img
          src="/img/boost_det_vocabulary_7_adv_photo_desc_tech/016.png"
          :alt="t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption16')"
        />
        <figure>
          <figcaption>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption16') }}</figcaption>
        </figure>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.ul17')"></div>
        <img
          src="/img/boost_det_vocabulary_7_adv_photo_desc_tech/017.png"
          :alt="t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption17')"
        />
        <figure>
          <figcaption>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption17') }}</figcaption>
        </figure>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.ul18')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p44')"></div>
        <img
          src="/img/boost_det_vocabulary_7_adv_photo_desc_tech/018.png"
          :alt="t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption18')"
        />
        <figure>
          <figcaption>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption18') }}</figcaption>
        </figure>
        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p45') }}</p>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p46')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p47')"></div>
        <h2 id="prep_9">{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.h210') }}</h2>
        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p48') }}</p>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p49')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.ul19')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p50')"></div>
        <img
          src="/img/boost_det_vocabulary_7_adv_photo_desc_tech/019.png"
          :alt="t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption19')"
        />
        <figure>
          <figcaption>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption19') }}</figcaption>
        </figure>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.ul20')"></div>
        <img
          src="/img/boost_det_vocabulary_7_adv_photo_desc_tech/020.jpg"
          :alt="t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption20')"
        />
        <figure>
          <figcaption>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption20') }}</figcaption>
        </figure>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.ul21')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p51')"></div>
        <img
          src="/img/boost_det_vocabulary_7_adv_photo_desc_tech/021.png"
          :alt="t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption21')"
        />
        <figure>
          <figcaption>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.figcaption21') }}</figcaption>
        </figure>
        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p52') }}</p>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p53')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p54')"></div>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p55')"></div>
        <h2 id="prep_10">{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.h211') }}</h2>
        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p56') }}</p>
        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p57') }}</p>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.ol3')"></div>
        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p58') }}</p>
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p59')"></div>
        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p60') }}</p>
        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p61') }}</p>
        <img src="/img/boost_det_vocabulary_7_adv_photo_desc_tech/image-22.jpg" />
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p62')"></div>
        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p63') }}</p>
        <img src="/img/boost_det_vocabulary_7_adv_photo_desc_tech/image-23.jpg" />
        <div class="html_wrapper" v-html="t('boost_det_vocabulary_7_adv_photo_desc_tech.p64')"></div>
        <p>{{ t('boost_det_vocabulary_7_adv_photo_desc_tech.p65') }}</p>
        <!-- <img /> ****img*** -->
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
.boost-det-vocabulary-7-adv-photo-desc-tech {
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
