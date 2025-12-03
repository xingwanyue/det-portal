<script setup lang="ts">
import { urlGet, getToken } from '@/utils';
import { useI18n } from 'vue-i18n';
import { useStore } from '@/store';
const localePath = useLocalePath();
const { t } = useI18n();
useSeoMeta({
  title: 'DET Practice - DET Official Gold Partner',
  description:
    'Get a better score with the DET official Gold Partner. AI mock tests, instant scoring & 18,000+ questions. Start for free!',
});
const haveCookie = ref(false);
onMounted(async () => {
  const token = await getToken();
  if (token) {
    haveCookie.value = true;
  }
});
const faqList = ref([
  {
    q: 'What is DET Practice and how does it help me prepare for the Duolingo English Test?',
    a: "<a href='/'>DET Practice</a> is a Gold-tier Partner in the Duolingo Global Partner Network and a leading platform for Duolingo English Test preparation. With AI-powered mock tests, instant scoring, expert-designed courses, and 18,000+ practice questions, we help you achieve your target score.",
    open: false,
  },
  {
    q: 'How accurate is your AI scoring system compared to the real DET?',
    a: "Our AI scoring system is highly accurate and aligned with the DET scoring framework. We continuously refine it to deliver the most precise score predictions.",
    open: false,
  },
  {
    q: 'What makes DET Practice different from other test prep platforms?',
    a: "As a <a href='https://www.detpractice.com/duolingo-english-test-partner'>Gold Partner in the Duolingo English Test Global Partner Network</a>, DET Practice delivers the most authentic preparation experience. With instant AI feedback, 18,000+ practice questions, and proven success for 400,000+ students, we help you achieve your target score.",
    open: false,
  },
  {
    q: 'How long does it take to see improvement in my DET scores?',
    a: 'Most students see significant improvement within 2-4 weeks of consistent practice. Our AI-powered feedback helps you identify and address weaknesses quickly, leading to faster score improvements compared to traditional study methods.',
    open: false,
  },
  {
    q: 'Can I access DET Practice on mobile devices?',
    a: "Yes! <a href='/'>DET Practice</a> is fully optimized for mobile devices, tablets, and desktops. You can practice anytime, anywhere with our responsive web platform that works seamlessly across all devices.",
    open: false,
  },
  {
    q: 'What is included in the free account?',
    a: 'Your free account includes access to 300 sample questions, basic score analysis, and limited feedback. Upgrade to premium for unlimited access to our question bank, plus Duolingo practice tests, detailed analytics, and comprehensive AI corrections. For a limited time, we’re offering a 3‑day VIP experience with unlimited access. Register an account to learn more.',
    open: false,
  },
  {
    q: 'Do you offer any score improvement guarantees?',
    a: 'While we cannot guarantee specific score improvements due to individual learning differences, our track record shows that 95% of students who complete our full course achieve their target scores.',
    open: false,
  },
]);
const store = useStore();
const user = computed(() => store.user);
const jump = () => {
  if ((user.value.id || haveCookie.value) && !user.value.temp) {
    window.location.href = urlGet('/home');
  } else {
    window.location.href = localePath('/login');
  }
};
</script>

<template>
  <div class="partner">
    <div class="part1">
      <div class="container">
        <div class="left">
          <h1>Succeed on Your Duolingo English Test with a DET Gold Partner</h1>
          <p>
            Trusted by 400,000+ students worldwide. Get everything you need for the Duolingo English Test: Al-powered
            24/7 tutor, full-length mock tests with instant scoring, the largest questionbank, and free expert-designed
            courses. Your all-in-one pathway to top DET scores.
          </p>
          <div class="btn" @click="jump">Start Free Practice</div>
        </div>
        <img src="/img/partner/partner.webp" alt="duolingo-english-test-partner" />
      </div>
    </div>
    <div class="part2">
      <div class="container">
        <h2>The Best Prep Platform for Duolingo English Test</h2>
        <img src="/img/partner/practice.png" alt="practice" />
      </div>
    </div>
    <div class="part3">
      <div class="container">
        <h2>Trusted by Students from Top Universities Worldwide</h2>
        <div class="list">
          <div class="universities">
            <div>MIT</div>
            <div>Harvard</div>
            <div>ICL</div>
            <div>Stanford</div>
            <div>NYU</div>
            <div>Princeton</div>
            <div>BU</div>
          </div>
          <div class="universities">
            <div>Yale</div>
            <div>Berkeley</div>
            <div>CMU</div>
            <div>Columbia</div>
            <div>JHU</div>
            <div>UChicago</div>
            <div>Duke</div>
          </div>
          <div class="universities">
            <div>UPenn</div>
            <div>Cornell</div>
            <div>Toronto</div>
            <div>Caltech</div>
            <div>UCLA</div>
            <div>NTHU</div>
            <div>ZJU</div>
            <div>SKKU</div>
          </div>
        </div>
        <div class="tips">
          *Our platform is used by students from these universities. This does not imply endorsement by institutions.
        </div>
      </div>
    </div>
    <div class="part4">
      <div class="container">
        <h2>Real Students, Real High DET Scores</h2>
        <p>See how DET Practice is making a difference.</p>
        <div class="list">
          <img src="/img/partner/photo-1.png" alt="scores" />
          <img src="/img/partner/photo-2.png" alt="scores" />
          <img src="/img/partner/photo-3.png" alt="scores" />
          <img src="/img/partner/photo-4.png" alt="scores" />
          <img src="/img/partner/photo-5.png" alt="scores" />
          <img src="/img/partner/photo-6.png" alt="scores" />
        </div>
      </div>
    </div>
    <div class="part5">
      <div class="container">
        <h2>Supercharged Prep for the Duolingo English Test</h2>
        <p>Powerful tools designed for your Duolingo English Test success.</p>
        <div class="list">
          <div class="item">
            <img src="/img/partner/1.svg" alt="al-powered-1:1-mock-tests" />
            <h3>Al-Powered 1:1 Mock Tests</h3>
            <div class="text">
              Practice in the real exam format and know exactly where youstand-so you walk into test day with
              confidence.
            </div>
          </div>
          <div class="item">
            <img src="/img/partner/2.svg" alt="instant-feedback" />
            <h3>Instant Feedback</h3>
            <div class="text">
              Fix mistakes instantly and improve your speaking and writing faster — no waiting, no guessing.
            </div>
          </div>
          <div class="item">
            <img src="/img/partner/3.svg" alt="largest-question-bank" />
            <h3>Largest Question Bank</h3>
            <div class="text">
              18,000+ practice questions ensure you’ll never run out of material — master every section with complete
              coverage.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="part6">
      <div class="container">
        <h2>Ready to Reach Your Dream DET Score?</h2>
        <p>Start practicing today and move one step closer to your DET success.</p>
        <div class="btn" @click="jump">Start Free Practice</div>
      </div>
    </div>
    <div class="part7">
      <div class="container">
        <h2>Frequently Asked Questions</h2>
        <p>Get answers to common questions about DET Practice</p>
        <div class="list">
          <div class="item" v-for="item in faqList">
            <div class="top" @click="item.open = !item.open">
              <h3>{{ item.q }}</h3>
              <img v-if="!item.open" src="/img/partner/down.svg" alt="down" />
              <img v-else src="/img/partner/up.svg" alt="up" />
            </div>
            <div v-show="item.open" class="bottom" v-html="item.a"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.partner {
  margin-top: 50px;

  .container {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 1200px) {
      padding-left: 30px;
      padding-right: 30px;
    }

    @media (max-width: 600px) {
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  h2 {
    font-weight: 800;
    font-size: 40px;
    color: #201515;
    text-align: center;
    font-style: normal;
    margin-bottom: 60px;
  }

  p {
    margin: 0;
    font-weight: 500;
    font-size: 18px;
    color: #666666;
    text-align: center;
  }

  .btn {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .part1 {
    .container {
      display: flex;
      align-items: center;
      column-gap: 18px;
      flex-wrap: wrap;

      .left {
        flex: 1;

        h1 {
          font-weight: 800;
          font-size: 50px;
          color: #201515;
        }

        p {
          font-weight: 400;
          font-size: 18px;
          color: #666666;
          text-align: left;
          margin: 20px 0;
        }

        .btn {
          width: max-content;
          padding: 12px 16px;
          background: #58cc02;
          border-radius: 8px 8px 8px 8px;
          font-weight: 600;
          font-size: 20px;
          color: #ffffff;
        }
      }

      img {
        max-width: 530px;
        height: auto;
      }
    }
  }

  .part2 {
    background: #f9fafb;
    margin-top: 50px;
    padding: 80px 0;

    img {
      border-radius: 30px 30px 30px 30px;
    }
  }

  .part3 {
    margin-top: 80px;

    .list {
      margin: 60px 0;
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;

      .universities {
        display: flex;
        flex-wrap: wrap;
        column-gap: 30px;
        font-size: 28px;
        color: #201515;
      }
    }

    .tips {
      font-weight: 500;
      font-size: 14px;
      color: #666666;
      text-align: center;
    }
  }

  .part4 {
    margin-top: 80px;
    padding: 80px 0;
    background: #f9fafb;

    h2 {
      margin-bottom: 10px;
    }

    .list {
      margin-top: 60px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(318px, 1fr));
      gap: 30px;

      img {
        box-shadow: 0px 2px 40px 0px rgba(0, 0, 0, 0.08);
        border-radius: 8px 8px 8px 8px;
      }
    }
  }

  .part5 {
    margin-top: 80px;

    h2 {
      margin-bottom: 10px;
    }

    .list {
      margin-top: 60px;
      display: flex;
      justify-content: space-between;
      column-gap: 20px;

      @media screen and (max-width: 1100px) {
        flex-direction: column;
        row-gap: 40px;
      }

      .item {
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
          width: 50px;
          height: 50px;
        }

        h3 {
          font-weight: 800;
          font-size: 20px;
          color: #201515;
          margin: 10px 0;
        }

        .text {
          font-weight: 500;
          font-size: 18px;
          color: #201515;
          text-align: center;
        }
      }
    }
  }

  .part6 {
    margin-top: 80px;
    padding: 80px 0;
    background: #f9fafb;

    h2 {
      margin-bottom: 10px;
    }

    .btn {
      margin: 30px auto 0;
      padding: 12px 16px;
      font-weight: 600;
      font-size: 20px;
      color: #ffffff;
      width: max-content;
      background: #58cc02;
      border-radius: 8px 8px 8px 8px;
    }
  }

  .part7 {
    margin-top: 80px;
    margin-bottom: 80px;

    h2 {
      margin-bottom: 10px;
    }

    .list {
      margin-top: 60px;
      display: flex;
      flex-direction: column;
      gap: 30px;

      .item {
        padding: 30px;
        border-radius: 30px 30px 30px 30px;
        border: 1px solid #cccccc;

        .top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;

          h3 {
            font-weight: bold;
            font-size: 20px;
            color: #000000;

            @media screen and (max-width: 768px) {
              font-size: 16px;
            }
          }

          img {
            width: 20px;
            height: 20px;
            cursor: pointer;
          }
        }

        .bottom {
          margin-top: 10px;
          font-weight: 500;
          font-size: 18px;
          color: #666666;

          ::v-deep(a) {
            color: #58cc02 !important;
          }

          @media screen and (max-width: 768px) {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
<style scoped lang="scss"></style>
