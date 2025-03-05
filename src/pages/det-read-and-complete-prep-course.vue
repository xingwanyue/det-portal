<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { reactive } from 'vue';
</script>
<template>
  <div class="common_prep_wrapper det_read_and_complete_prep_course">
    <div class="common_prep_out">
      <div class="common_prep_left">
        <div class="banner_img">
          <img src="/img/det-read-and-complete-prep-course/read-and-complete-lesson.jpg" alt="" />
        </div>
        <h1>{{ t('det_read_and_complete_prep_course.h1_1') }}</h1>
        <h2>{{ t('det_read_and_complete_prep_course.h2_1') }}</h2>
        <p>{{ t('det_read_and_complete_prep_course.p_1') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_2') }}</p>
        <div class="video_out"></div>
        <h2>{{ t('det_read_and_complete_prep_course.h2_2') }}</h2>
        <ul>
          <li>{{ t('det_read_and_complete_prep_course.li1') }}</li>
          <li>{{ t('det_read_and_complete_prep_course.li2') }}</li>
          <li>{{ t('det_read_and_complete_prep_course.li3') }}</li>
          <li>{{ t('det_read_and_complete_prep_course.li4') }}</li>
          <li>{{ t('det_read_and_complete_prep_course.li5') }}</li>
          <li>{{ t('det_read_and_complete_prep_course.li6') }}</li>
          <li>{{ t('det_read_and_complete_prep_course.li7') }}</li>
          <li>{{ t('det_read_and_complete_prep_course.li8') }}</li>
        </ul>
        <h2>{{ t('det_read_and_complete_prep_course.h2_3') }}</h2>
        <p>{{ t('det_read_and_complete_prep_course.p_3') }}</p>
        <h2>{{ t('det_read_and_complete_prep_course.h2_4') }}</h2>
        <p>{{ t('det_read_and_complete_prep_course.p_4') }}</p>
        <img src="/img/det-read-and-complete-prep-course/read-and-complete-lesson.jpg" alt="" />
        <p>{{ t('det_read_and_complete_prep_course.p_5') }}</p>
        <h2>{{ t('det_read_and_complete_prep_course.h2_5') }}</h2>
        <p>{{ t('det_read_and_complete_prep_course.p_6') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_7') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_8') }}</p>
        <h2>{{ t('det_read_and_complete_prep_course.h2_6') }}</h2>
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
        <h2>{{ t('det_read_and_complete_prep_course.h2_7') }}</h2>
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
        <h2>{{ t('det_read_and_complete_prep_course.h2_8') }}</h2>
        <p>{{ t('det_read_and_complete_prep_course.p_47') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_48') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_49') }}</p>
        <table1></table1>
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
        <h2>{{ t('det_read_and_complete_prep_course.h2_9') }}</h2>
        <p>{{ t('det_read_and_complete_prep_course.p_61') }}</p>
        table*****
        <p>{{ t('det_read_and_complete_prep_course.p_62') }}</p>
        <img src="/img/det-read-and-complete-prep-course/read-and-complete-lesson.jpg" alt="" />
        <p>{{ t('det_read_and_complete_prep_course.p_63') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_64') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_65') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_66') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_67') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_68') }}</p>
        <p>{{ t('det_read_and_complete_prep_course.p_69') }}</p>
        <div class="title">{{ t('det_read_and_complete_prep_course.title7') }}</div>
        <div class="html_wrapper" v-html="t('det_read_and_complete_prep_course.p_70')"></div>
        <h2>{{ t('det_read_and_complete_prep_course.h2_10') }}</h2>
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
      <div class="common_prep_right"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.common_prep_wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 10vh;
  overflow: hidden;
  .common_prep_out {
    display: grid;
    grid-template-columns: 1fr 340px;
    grid-gap: 28px;
    .common_prep_left {
      flex-grow: 0;
      .banner_img {
        border-radius: 26px;
        overflow: hidden;
        margin-bottom: 2vh;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
    .common_prep_right {
      flex-grow: 0;
    }
  }
}
</style>
<style lang="scss">
.det_read_and_complete_prep_course {
  .title {
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
  }
  p,
  .html_wrapper {
    border: 1px red solid;
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
}
</style>
