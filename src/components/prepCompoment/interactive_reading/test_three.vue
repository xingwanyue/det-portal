<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { reactive } from 'vue';
const props = defineProps({
  question: String,
  answer: String,
});

const state = reactive({
  isShowAnswer: false,
  answer: "Lenore wanted to be an important part of her company's contract management team.",
});
</script>
<template>
  <div class="common_interactive_reading_test_three_wrapper">
    <div class="left">
      Above all, Lenore wanted to be an important part of her company’s contract management team. The problem was that
      they didn’t think she was capable of carrying out the job. Often when she requested a larger role on the team,
      they turned her down. Perhaps that was because even though Lenore worked hard and got all her assignments done on
      time, she always seemed stressed out. One day, one of the managers approached her and asked her what was wrong.
      Lenore said that she wanted to do more, but the company wasn’t giving her a chance. The manager asked her if she
      thought the company should consider giving her a bigger role on the team, and she said she would be thrilled if
      they did. He told her not to worry and that he would speak to the rest of the team. Lenore was overjoyed.
    </div>
    <div class="right">
      <h4 class="common_interactive_reading_test_two_title">
        Click and drag to highlight the answer to the question below.
      </h4>
      <div class="question_text">
        {{ props.question }}
      </div>
      <textarea
        id="answerBox-q3"
        class="answer-box-q3 correct-answer-q3"
        placeholder="Type your answer here..."
      ></textarea>
      <div class="answer_text" v-if="state.isShowAnswer">
        {{ props.answer }}
      </div>

      <div class="common_interactive_reading_test_two_btn" @click="state.isShowAnswer = !state.isShowAnswer">
        {{ state.isShowAnswer ? 'Hide Answer' : 'Show Answer' }}
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.common_interactive_reading_test_three_wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px 0;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  .left {
    padding: 20px;
    flex: 1;
    background-color: #f9f9f9;
    border-right: 1px solid #e0e0e0;
  }
  .right {
    padding: 20px;
    .common_interactive_reading_test_two_title {
      margin-bottom: 20px;
    }
    .question_text {
      margin-bottom: 20px;
    }
    .answer-box-q3 {
      width: calc(100% - 20px);
      height: 100px;
      padding: 10px;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      font-size: 14px;
      font-family: Arial, sans-serif;
      resize: none;
    }
    .answer_text {
      color: #f66442;
    }
    .common_interactive_reading_test_two_btn {
      width: fit-content;
      margin: 0 auto;
      margin-top: 20px;
      background: #f66442;
      border-radius: 4px;
      padding: 11px 16px;
      font-weight: 500;
      font-size: 16px;
      color: #ffffff;
      line-height: 22px;
      cursor: pointer;
    }
  }
}
</style>
