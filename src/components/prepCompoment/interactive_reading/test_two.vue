<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { reactive } from 'vue';
import { QuestionFilled } from '@element-plus/icons-vue';
const props = defineProps({
  answer: Array,
  showSpace: Boolean,
  question: String,
  h4: String,
});

const state = reactive({
  isShowAnswer: false,
});
</script>
<template>
  <div class="common_interactive_reading_test_two_wrapper">
    <div class="left">
      {{ props.question }}
      <div v-if="showSpace" class="answer_space"></div>
      Lenore was overjoyed.
    </div>
    <div class="right">
      <h4 class="common_interactive_reading_test_two_title">
        {{ props.h4 }}
      </h4>
      <template v-for="(item, index) in props.answer" :key="index">
        <label :class="['answer-option', state.isShowAnswer && item.isanswer ? 'correct-answer' : '']">
          <input type="radio" name="answer" /> {{ item.answer }}
        </label>
      </template>

      <div class="common_interactive_reading_test_two_btn" @click="state.isShowAnswer = !state.isShowAnswer">
        {{ state.isShowAnswer ? 'Hide Answer' : 'Show Answer' }}
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.common_interactive_reading_test_two_wrapper {
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
    .answer_space {
      height: 40px;
      background-color: #f0f8ff;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      margin-bottom: 20px;
      margin-top: 20px;
    }
  }
  .right {
    padding: 20px;
    .common_interactive_reading_test_two_title {
      margin-bottom: 20px;
    }
    .answer-option {
      margin-bottom: 10px;
      display: block;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      padding: 10px;
      background-color: #ffffff;
      cursor: pointer;
      transition: background-color 0.3sease;
    }
    .correct-answer {
      background-color: rgba(246, 100, 66, 0.05);
      border-color: rgba(246, 100, 66, 0.05);
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
