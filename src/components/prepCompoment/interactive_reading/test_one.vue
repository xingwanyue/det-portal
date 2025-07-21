<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { reactive } from 'vue';

const state = reactive({
  isShowAnswer: false,
});
</script>
<template>
  <div class="common_interactive_reading_test_one_wrapper">
    <div class="common_interactive_reading_test_one_out" :class="{ is_show_answer: state.isShowAnswer }">
      Above all, Lenore wanted to <span class="tk">1.someone/<span class="answer">be</span>/find/became/are</span> an
      important part of her company’s contract management team. The problem was that they didn’t think she was
      <span class="tk">2.afraid/worth/<span class="answer">capable</span>/going/all</span> of carrying out the job.
      Often <span class="tk">3.how/so/and/<span class="answer">when</span>/although</span> she requested a larger role
      on the team, <span class="tk">4.there/<span class="answer">they</span>/we/everybody/men</span> turned her down.
      Perhaps that was because even though Lenore
      <span class="tk">5.trained/talked/<span class="answer">worked</span>/were/fought</span> hard and got all her
      assignments done on <span class="tk">6.course/it/day/earth/<span class="answer">time</span></span
      >, she always seemed stressed out. One day, one of the managers approached her and asked her
      <span class="tk">7.nothing/<span class="answer">what</span>/whatever/they/there</span> was wrong. Lenore said that
      she <span class="tk">8.wished/<span class="answer">wanted</span>/hoped/started/has</span> to do more, but the
      company wasn’t giving her a chance. The manager
      <span class="tk">9.gave/said/questioned/was/<span class="answer">asked</span></span> her if she thought the
      company should consider giving her a bigger role
      <span class="tk">10.or/outside/out/over/<span class="answer">on</span></span> the team, and she said she would be
      thrilled if they <span class="tk">11.<span class="answer">did</span>/should/approved/tried/had</span>.
    </div>
    <div class="common_interactive_reading_test_one_btn" @click="state.isShowAnswer = !state.isShowAnswer">
      <span v-if="state.isShowAnswer">Click Here to Hide the Answer</span>
      <span v-else>Click Here to Show the Answer</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.common_interactive_reading_test_one_wrapper {
  margin-top: 20px;
  .common_interactive_reading_test_one_out {
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    .tk {
      color: blue;
    }
  }
  .is_show_answer {
    .answer {
      color: #f66442;
    }
  }
  .common_interactive_reading_test_one_btn {
    min-width: 257px;
    box-sizing: border-box;
    padding: 11px 16px;
    width: fit-content;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    background: #f66442;
    border-radius: 4px;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    line-height: 22px;
  }
}
</style>
