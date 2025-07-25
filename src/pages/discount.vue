<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { urlGet } from '@/utils';
const { t } = useI18n();

useSeoMeta({
  title: t('discount.seometa.title'),
  description: t('discount.seometa.description'),
});

const aqList = ref([
  {
    name: t('discount.part7.q1'),
    content: t('discount.part7.a1'),
    open: false,
  },
  {
    name: t('discount.part7.q2'),
    content: t('discount.part7.a2'),
    open: false,
  },

  {
    name: t('discount.part7.q3'),
    content: t('discount.part7.a3'),
    open: false,
  },
  {
    name: t('discount.part7.q4'),
    content: t('discount.part7.a4'),
    open: false,
  },
  {
    name: t('discount.part7.q5'),
    content: t('discount.part7.a5'),
    open: false,
  },
  {
    name: t('discount.part7.q6'),
    content: t('discount.part7.a6'),
    open: false,
  },
  {
    name: t('discount.part7.q7'),
    content: t('discount.part7.a7'),
    open: false,
  },
]) as any;
const change = (item: any) => {
  item.open = !item.open;
}
const goDiscount = () => {
  window.open(urlGet('/discount'), '_blank');
}
const go = (event: any) => {
  if (event.target.dataset.action === 'discount-coupon') {
    event.preventDefault();
    window.open(urlGet('/discount'), '_blank');
  }
}
</script>

<template>
  <div class="discount">
    <div class="part1">
      <div class="container">
        <div class="text">
          <div class="box">
            <div class="icon">
              <img src="/img/discount/percentageIcon.svg" alt="percentageIcon">
            </div>
            {{ t('discount.part1.btn1') }}
          </div>
          <h1>{{ t('discount.part1.h1_1') }} <span style="color: #f66442;">{{ t('discount.part1.h1_2') }}</span></h1>
          <p class="hero-subtitle">
            {{ t('discount.part1.p') }}
          </p>
          <div class="btn box2">
            <a href="#how-it-works">{{ t('discount.part1.btn2') }}</a>
          </div>
        </div>
        <div class="img">
          <img src="/img/discount/bigImg.png" alt="Coupons & Discounts">
        </div>
      </div>
    </div>
    <div class="part2">
      <div class="container">
        <div class="item">
          <div class="num">{{ t('discount.part2.num1') }}</div>
          <div class="text">{{ t('discount.part2.text1') }}</div>
        </div>
        <div class="item">
          <div class="num">{{ t('discount.part2.num2') }}</div>
          <div class="text">{{ t('discount.part2.text2') }}</div>
        </div>
        <div class="item">
          <div class="num">{{ t('discount.part2.num3') }}</div>
          <div class="text">{{ t('discount.part2.text3') }}</div>
        </div>
        <div class="item">
          <div class="num">{{ t('discount.part2.num4') }}</div>
          <div class="text">{{ t('discount.part2.text4') }}</div>
        </div>
      </div>
    </div>
    <div class="part3">
      <div class="container">
        <h2>{{ t('discount.part3.h2') }}</h2>
        <p>{{ t('discount.part3.p') }}</p>
        <div class="list">
          <div class="item">
            <div class="icon">
              <img src="/img/discount/icon1.png" alt="24-Hour Fast DET Scoring">
            </div>
            <div class="title">{{ t('discount.part3.title1') }}</div>
            <div class="text">{{ t('discount.part3.text1') }}</div>
          </div>
          <div class="item">
            <div class="icon">
              <img src="/img/discount/icon2.png" alt="10% Instant DET Discount">
            </div>
            <div class="title">{{ t('discount.part3.title2') }}</div>
            <div class="text">{{ t('discount.part3.text2') }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="part4" id="how-it-works">
      <div class="container">
        <h2>{{ t('discount.part4.h2') }}</h2>
        <p>{{ t('discount.part4.p') }}</p>
        <div class="list">
          <div class="item">
            <div class="icon">
              <img src="/img/discount/icon3.png" alt="Activate Your Benefits">
            </div>
            <div class="title">{{ t('discount.part4.title1') }}</div>
            <div class="text">{{ t('discount.part4.text1') }}</div>
          </div>
          <div class="item">
            <div class="icon">
              <img src="/img/discount/icon4.png" alt="Add Us as Sponsor">
            </div>
            <div class="title">{{ t('discount.part4.title2') }}</div>
            <div class="text">{{ t('discount.part4.text2') }}</div>
          </div>
          <div class="item">
            <div class="icon">
              <img src="/img/discount/icon5.png" alt="Get Your DET Coupon">
            </div>
            <div class="title">{{ t('discount.part4.title3') }}</div>
            <div class="text">{{ t('discount.part4.text3') }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="part5">
      <div class="container">
        <h2>{{ t('discount.part5.h2') }}</h2>
        <p>{{ t('discount.part5.p') }}</p>
        <div class="list">
          <div class="item">
            <div class="icon">
              <img src="/img/discount/icon6.png" alt="18K+ AI-Graded Questions">
            </div>
            <div class="title">{{ t('discount.part5.title1') }}</div>
            <div class="text">{{ t('discount.part5.text1') }}</div>
          </div>
          <div class="item">
            <div class="icon">
              <img src="/img/discount/icon7.png" alt="Full-Length Mock Exams">
            </div>
            <div class="title">{{ t('discount.part5.title2') }}</div>
            <div class="text">{{ t('discount.part5.text2') }}</div>
          </div>
          <div class="item">
            <div class="icon">
              <img src="/img/discount/icon8.png" alt="Personalized Study Plans">
            </div>
            <div class="title">{{ t('discount.part5.title3') }}</div>
            <div class="text">{{ t('discount.part5.text3') }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="part6">
      <div class="container">
        <h2>{{ t('discount.part6.h2') }}</h2>
        <p>{{ t('discount.part6.p') }}</p>
        <div class="btn box" @click="goDiscount">{{ t('discount.part6.btn') }}</div>
      </div>
    </div>
    <div class="part7 ">
      <div class="container">
        <h2>Frequently Asked Questions</h2>
        <p>Have questions? We've got answers. Here are some common queries about DET discounts and benefits.</p>
        <div class="list">
          <div v-for="(item, index) in aqList" :key="index"
            :class="[item.open ? 'one_question one_question_open' : 'one_question']">
            <div class="header" @click="change(item)">
              <div class="icon">
                <img src="/img/pricing/arrow_down.svg" alt="arrow_down" />
              </div>
              <h3 class="qusetion">{{ item.name }}</h3>
            </div>
            <div v-show="item.open" class="answer">
              <div class="answer_content" v-html="item.content" @click="go"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.discount {

  a {
    color: inherit;
  }

  p {
    margin: 0;
  }

  .btn {
    cursor: pointer;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 1200px) {
      padding: 0 20px;
    }
  }

  .part1 {
    background: linear-gradient(360deg, #FFFFFF 0%, #FFF3F0 100%);
    padding-top: 54px;

    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      grid-column-gap: 60px;
      grid-row-gap: 20px;
    }

    .text {
      flex: 1;
    }

    .box {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 25px;
      border: 1px solid #F66442;
      background: rgba(246, 100, 66, 0.1);
      padding: 11px;
      max-width: 284px;
      height: 50px;
      gap: 6px;
      box-sizing: border-box;
      font-weight: 500;
      font-size: 18px;
      color: #F66442;
      line-height: 25px;
      text-align: left;

      .icon {
        width: 28px;
        height: 28px;
      }
    }

    h1 {
      font-weight: 600;
      font-size: 56px;
      color: #201515;
      line-height: 72px;
      text-align: left;
      margin-top: 12px;
    }

    p {
      font-size: 20px;
      color: #201515;
      line-height: 32px;
      text-align: left;
      margin: 32px 0 40px;
    }

    .box2 {
      width: 233px;
      height: 50px;
      background: #F66442;
      border-radius: 25px;
      font-weight: 500;
      font-size: 18px;
      color: #FFFFFF;
      line-height: 25px;
      padding: 12px 32px;
      box-sizing: border-box;
    }

    .img {
      max-width: 400px;
      max-height: 400px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .part2 {
    background: #FFF4F1;
    margin-top: 176px;
    padding: 64px 0;
    box-sizing: border-box;

    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      grid-column-gap: 80px;
      grid-row-gap: 20px;
      box-sizing: border-box;

      @media screen and (max-width: 1200px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 40px;
        grid-row-gap: 20px;

        .item {
          margin: 0 auto;
        }
      }

      @media screen and (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 20px;

        .item {
          margin: 0 auto;
        }
      }

      .item {
        width: 240px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;

        .num {
          font-weight: 600;
          font-size: 48px;
          color: #F66442;
          line-height: 48px;
        }

        .text {
          font-weight: 400;
          font-size: 20px;
          color: #201515;
          line-height: 28px;
        }
      }
    }
  }

  .part3 {
    margin-top: 120px;

    h2 {
      font-weight: 600;
      font-size: 40px;
      color: #201515;
      line-height: 56px;
      text-align: center;
    }

    p {
      margin-top: 16px;
      margin-bottom: 70px;
      font-size: 24px;
      color: #201515;
      line-height: 33px;
      text-align: center;
    }

    .list {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      grid-column-gap: 72px;
      grid-row-gap: 20px;

      .item {
        max-width: 564px;
        background: #FFFFFF;
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.05);
        border-radius: 20px;
        border: 1px solid #E9E9E9;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 43px 68px 68px 68px;
        box-sizing: border-box;

        .title {
          font-weight: 600;
          font-size: 24px;
          color: #F66442;
          line-height: 33px;
          margin: 24px 0 28px;
        }

        .text {
          font-weight: 400;
          font-size: 16px;
          color: #403F3E;
          line-height: 22px;
          text-align: center;
        }
      }
    }
  }

  .part4 {
    background: #F9FAFB;
    padding: 80px 0 76px;
    scroll-margin-top: 80px;
  }

  .part4,
  .part5 {
    margin-top: 120px;

    h2 {
      font-weight: 600;
      font-size: 40px;
      color: #201515;
      line-height: 56px;
      text-align: center;
    }

    p {
      margin-top: 16px;
      margin-bottom: 70px;
      font-size: 24px;
      color: #201515;
      line-height: 33px;
      text-align: center;
    }

    .list {
      display: flex;
      align-items: center;
      grid-column-gap: 45px;
      grid-row-gap: 20px;
      justify-content: center;
      box-sizing: border-box;

      @media screen and (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
      }

      .item {
        display: flex;
        max-width: 370px;
        height: 284px;
        flex-direction: column;
        align-items: center;
        background: #FFFFFF;
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.05);
        border-radius: 20px;
        border: 1px solid #E9E9E9;
        padding: 42px 30px 40px;
        box-sizing: border-box;

        .title {
          font-weight: 600;
          font-size: 20px;
          color: #F66442;
          line-height: 28px;
          margin: 16px 0 28px;
        }

        .text {
          font-weight: 400;
          font-size: 16px;
          color: #403F3E;
          line-height: 22px;
          text-align: center;
        }
      }
    }
  }

  .part6 {
    background: #F66442;
    padding: 80px 0 76px;
    margin-top: 120px;

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h2 {
      font-weight: 600;
      font-size: 40px;
      color: #FFFFFF;
      line-height: 56px;
      text-align: center;
    }

    p {
      font-size: 24px;
      color: #FFFFFF;
      line-height: 33px;
      margin: 16px 0 40px;
      text-align: center;
    }

    .box {
      width: 282px;
      height: 52px;
      background: #FFFFFF;
      border-radius: 26px;
      font-weight: 500;
      font-size: 20px;
      color: #F66442;
      line-height: 28px;
      padding: 12px 32px;
      box-sizing: border-box;
    }
  }

  .part7 {
    margin-top: 120px;
    margin-bottom: 120px;

    h2 {
      font-weight: 600;
      font-size: 40px;
      color: #201515;
      line-height: 56px;
      text-align: center;
    }

    p {
      font-size: 24px;
      color: #201515;
      line-height: 33px;
      text-align: center;
      margin: 16px 0 56px;
    }

    .list {
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

            :deep(a) {
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
<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .part1 {
    padding-top: 27px !important;
  }

  .part2 {
    margin-top: 88px !important;
  }

  .part3,
  .part4,
  .part5,
  .part6,
  .part7 {
    margin-top: 60px !important;
  }

  .part7 {
    margin-bottom: 60px !important;
  }
}
</style>
