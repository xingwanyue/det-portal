<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useStore } from '@/store';
import { urlGet } from '@/utils';
const { t } = useI18n();
const localePath = useLocalePath();
const store = useStore();
const user = computed(() => store.user);
const props = defineProps({
  aqlist: Array,
  aqtitle: String,
}) as any;
const openIndexArr = ref([]);
const openOrCloseOneQuestion = (index) => {
  if (openIndexArr.value.includes(index)) {
    openIndexArr.value = openIndexArr.value.filter((item) => item !== index);
  } else {
    openIndexArr.value.push(index);
  }
};
</script>

<template>
  <div class="common_faq_list_wrapper">
    <div class="part2">
      <h2 class="title" v-html="props.aqtitle || t('pricing.pagefont.faq')"></h2>

      <div class="list_out">
        <div
          v-for="(item, index) in props.aqlist"
          :key="index"
          :class="[openIndexArr.indexOf(index) > -1 ? 'one_question one_question_open' : 'one_question']"
        >
          <div class="header" @click="openOrCloseOneQuestion(index)">
            <div class="icon">
              <img src="/img/pricing/arrow_down.svg" :alt="$t('pricing.pagefont.arrow_down')" />
            </div>
            <h3 class="qusetion" v-html="item.name"></h3>
          </div>
          <div v-if="openIndexArr.indexOf(index) > -1" class="answer">
            <div class="answer_content" v-html="item.content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.common_faq_list_wrapper {
  padding: 0px 30px;
  @media screen and (max-width: 450px) {
    padding: 0px 15px;
  }
  margin-top: 60px;
  margin-bottom: 120px;
  @media (max-width: 450px) {
    margin-top: 30px;
    margin-bottom: 60px;
  }

  .part2 {
    max-width: 1200px;
    margin: 0 auto;
    // overflow: hidden;

    .title {
      font-weight: 500;
      font-size: 40px;
      color: #201515;
      text-align: center;
      :deep(.yellow) {
        color: #f66442;
      }

      @media (max-width: 450px) {
        font-size: 20px;
      }
    }

    .list_out {
      // border: 1px red solid;
      margin-top: 56px;

      .one_question {
        padding: 18px 24px;
        background: #f2f4f6;
        border-radius: 8px;

        margin-bottom: 8px;

        .header {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          grid-gap: 24px;
          cursor: pointer;

          .icon {
            width: 16px;
            height: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .qusetion {
            font-weight: 500;
            font-size: 20px;
            color: #201515;
            :deep(a) {
              color: #f66442;
              text-decoration: underline;
            }

            @media (max-width: 662px) {
              font-size: 16px;
            }
          }
        }

        .answer {
          font-weight: 400;
          font-size: 18px;
          color: #201515;
          margin-top: 24px;
          padding-left: 44px;
          :deep(.email_address) {
            color: #f66442;
            text-decoration: underline;
          }

          @media (max-width: 662px) {
            font-size: 16px;
          }
          .answer_content {
            line-height: 26px;
            ::v-deep(a) {
              color: #f66442;
              text-decoration: underline;
            }
          }
        }
      }

      .one_question_open {
        background: #ffffff;
        border: 1px solid #e9e9e9;
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.08);

        .header {
          .icon {
            transform: rotate(180deg);
          }
        }
      }
    }
  }
}
</style>
