<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { useStore } from '@/store';
import { useRouter } from 'vue-router';
import { staticUrlGet, domain, cdn, getToken } from '@/utils';
import { getVipdataWithToken, getVipdataNoToken } from '@/api';
const router = useRouter();
import Vtwocourse from '../components/courseBottom.vue';
import Vcoursezh from '../components/courseZonghe.vue';
const guide1 = `${cdn}/store/portal/guid/kouyu.webp`;
const guide2 = `${cdn}/store/portal/guid/xiezuo.webp`;
useSeoMeta({
  title: t('courses.seometa.title'),
  description: t('courses.seometa.description'),
});
const localePath = useLocalePath();

useHead({
  meta: [
    { name: 'DC.title', content: t('courses.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('courses.seometa.title') },
    { property: 'og:description', content: t('courses.seometa.description') },
    { property: 'og:url', content: `https://www.${domain}${localePath('/courses')}` },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: t('courses.seometa.title') },
    {
      name: 'twitter:description',
      content: t('courses.seometa.description'),
    },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
});

const store = useStore();
const user = computed(() => store.user);
// const userchangeFlag = reactive(() => store.user);

const article1 = ref({
  title: t('courses.article1.title'),
  list: [
    {
      content: t('courses.article1.list[0].content'),
    },
    {
      content: t('courses.article1.list[1].content'),
    },
    {
      content: t('courses.article1.list[2].content'),
    },
    {
      content: t('courses.article1.list[3].content'),
    },
    {
      content: t('courses.article1.list[4].content'),
    },
    {
      content: t('courses.article1.list[5].content'),
    },
    {
      content: t('courses.article1.list[6].content'),
    },
    {
      content: t('courses.article1.list[7].content'),
    },
    {
      content: t('courses.article1.list[8].content'),
    },
  ],
});
const article2 = ref({
  title: t('courses.article2.title'),
  list: [
    {
      content: t('courses.article2.list[0].content'),
    },
    {
      content: t('courses.article2.list[1].content'),
    },
    {
      content: t('courses.article2.list[2].content'),
    },
    {
      content: t('courses.article2.list[3].content'),
    },
    {
      content: t('courses.article2.list[4].content'),
    },
    {
      content: t('courses.article2.list[5].content'),
    },
    {
      content: t('courses.article2.list[6].content'),
    },
    {
      content: t('courses.article2.list[7].content'),
    },
  ],
});

const contaceUsList = ref([
  {
    icon: '/img/guid/wallet.svg',
    font: t('courses.contaceUsList[0].font'),
    tip: t('courses.contaceUsList[0].tip'),
    btn: t('courses.contaceUsList[0].btn'),
    btn1: t('courses.contaceUsList[0].btn1'),
    id: '1',
  },
  {
    icon: '/img/guid/download.svg',
    font: t('courses.contaceUsList[1].font'),
    tip: t('courses.contaceUsList[1].tip'),
    btn: t('courses.contaceUsList[1].btn'),
    btn1: t('courses.contaceUsList[1].btn1'),
    id: '2',
  },
  {
    icon: '/img/guid/book.svg',
    font: t('courses.contaceUsList[2].font'),
    tip: t('courses.contaceUsList[2].tip'),
    btn: '',
    btn1: t('courses.contaceUsList[2].btn1'),
    id: '3',
  },
]);
const speakDataPage = ref({}) as any;
const writeDataPage = ref({}) as any;

const { data: downloadhref = {} } = (await useFetch(`${api}/common/courses`, {
  server: false,
  lazy: false,
  transform: (data: any) => {
    const { DETSpeakingExamExcellence, DETWritingExamExcellence2024 } = data;
    return { DETSpeakingExamExcellence, DETWritingExamExcellence2024 };
  },
})) as any;

// 0 未购买 1 已购买sepaking 2 已购买writing 3 已购买sepaking和writing
const buystatus = ref(0);
let zongheData = ref({
  img: '/img/courses/courses_group.webp',
  price: 0,
  priceid: 0,
  vipPrice: 0,
  title: t('courses.zhonghe.title'),
  desc: t('courses.zhonghe.desc'),
  isbuyed: false,
  type: 'zonghe',
  downloadhref: '',
});
let bottomData = ref([
  {
    img: guide1,
    price: 0,
    priceid: 0,
    vipPrice: 0,
    title: t('courses.speaking.title'),
    article: article1 as any,
    isbuyed: false,
    type: 'speaking',
    downloadhref: '',
  },
  {
    img: guide2,
    price: 0,
    priceid: 0,
    title: t('courses.writing.title'),
    article: article2 as any,
    isbuyed: false,
    type: 'writing',
    downloadhref: '',
  },
]);
const topVideoFont = computed(() => {
  return [
    {
      icon: '/img/courses/green_check_icon.svg',
      desc: 'Complete DET course covering all question types',
    },
    {
      icon: '/img/courses/green_check_icon.svg',
      desc: 'Integrated practice sets with each lesson - learn and practice simultaneously for maximum efficiency',
    },
    {
      icon: '/img/courses/green_check_icon.svg',
      desc: 'Available in both video lessons and text format to match your learning style',
    },
    {
      icon: '/img/courses/green_check_icon.svg',
      desc: 'Fully aligned with the 2025 DET exam format',
    },
    {
      icon: '/img/courses/green_check_icon.svg',
      desc: 'Free access for all DET Practice members, no additional fees',
    },
  ];
});
const four_change_left_active_index = ref(0);
const four_change_right_active_index = ref(0);
const four_change_left_active_index_change = (index: number) => {
  four_change_left_active_index.value = index;
  four_change_right_active_index.value = index;
};

const four_change_left_data = computed(() => {
  return [
    {
      index: 0,
      title: 'Reading',
      icon: '/img/courses/reading_icon.svg',
      icon_active: '/img/courses/reading_active_icon.svg',
    },
    {
      index: 1,
      title: 'Listening',
      icon: '/img/courses/listening_icon.svg',
      icon_active: '/img/courses/listening_active_icon.svg',
    },
    {
      index: 2,
      title: 'Speaking',
      icon: '/img/courses/speaking_icon.svg',
      icon_active: '/img/courses/speaking_active_icon.svg',
    },
    {
      index: 3,
      title: 'Writing',
      icon: '/img/courses/writing_icon.svg',
      icon_active: '/img/courses/writing_active_icon.svg',
    },
  ];
});
const four_change_right_data = computed(() => {
  return [
    {
      title: t('courses.four_change_right_data.data1.title'),
      desc: t('courses.four_change_right_data.data1.desc'),
      desc2: t('courses.four_change_right_data.data1.desc2'),
      videoUrlArr: [
        {
          title: t('courses.four_change_right_data.data1.video1data.title'),
          desc: t('courses.four_change_right_data.data1.video1data.desc'),
          videoUrl: 'https://www.youtube.com/embed/8UYh_8Co2vo',
        },
        {
          title: t('courses.four_change_right_data.data1.video2data.title'),
          desc: t('courses.four_change_right_data.data1.video2data.desc'),
          videoUrl: 'https://www.youtube.com/embed/k7kIedxU9og',
        },
        {
          title: t('courses.four_change_right_data.data1.video3data.title'),
          desc: t('courses.four_change_right_data.data1.video3data.desc'),
          videoUrl: 'https://www.youtube.com/embed/J7ymVabfTJk?si=qy-P02K7ly1faKNf',
        },
        {
          title: t('courses.four_change_right_data.data1.video4data.title'),
          desc: t('courses.four_change_right_data.data1.video4data.desc'),
          videoUrl: 'https://www.youtube.com/embed/YpDzyBUeOUk?si=tRtQlb7asqAXpa75',
        },
      ],
    },
    {
      title: t('courses.four_change_right_data.data2.title'),
      desc: t('courses.four_change_right_data.data2.desc'),
      desc2: t('courses.four_change_right_data.data2.desc2'),
      videoUrlArr: [
        {
          title: t('courses.four_change_right_data.data2.video1data.title'),
          desc: t('courses.four_change_right_data.data2.video1data.desc'),
          videoUrl: 'https://www.youtube.com/embed/8vbJAoDrIx0',
        },
        {
          title: t('courses.four_change_right_data.data2.video2data.title'),
          desc: t('courses.four_change_right_data.data2.video2data.desc'),
          videoUrl: 'https://www.youtube.com/embed/ptt8E7DNyFw',
        },
      ],
    },
    {
      title: t('courses.four_change_right_data.data3.title'),
      desc: t('courses.four_change_right_data.data3.desc'),
      desc2: t('courses.four_change_right_data.data3.desc2'),
      videoUrlArr: [
        {
          title: t('courses.four_change_right_data.data3.video1data.title'),
          desc: t('courses.four_change_right_data.data3.video1data.desc'),
          videoUrl: 'https://www.youtube.com/embed/oTyjWsblbYk',
        },
        {
          title: t('courses.four_change_right_data.data3.video2data.title'),
          desc: t('courses.four_change_right_data.data3.video2data.desc'),
          videoUrl: 'https://www.youtube.com/embed/2bj3ViAPkMY',
        },
        {
          title: t('courses.four_change_right_data.data3.video3data.title'),
          desc: t('courses.four_change_right_data.data3.video3data.desc'),
          videoUrl: 'https://www.youtube.com/embed/rqPV8cP9EPo?si=mMTNCeu4Jl3zjFeC',
        },
        {
          title: t('courses.four_change_right_data.data3.video4data.title'),
          desc: t('courses.four_change_right_data.data3.video4data.desc'),
          videoUrl: 'https://www.youtube.com/embed/sf8FN3GAuHI',
        },
      ],
    },
    {
      title: t('courses.four_change_right_data.data4.title'),
      desc: t('courses.four_change_right_data.data4.desc'),
      desc2: t('courses.four_change_right_data.data4.desc2'),
      videoUrlArr: [
        {
          title: t('courses.four_change_right_data.data4.video1data.title'),
          desc: t('courses.four_change_right_data.data4.video1data.desc'),
          videoUrl: 'https://www.youtube.com/embed/4FMRfkIKsvQ',
        },
        {
          title: t('courses.four_change_right_data.data4.video2data.title'),
          desc: t('courses.four_change_right_data.data4.video2data.desc'),
          videoUrl: 'https://www.youtube.com/embed/BgQ5dxC72WY',
        },
        {
          title: t('courses.four_change_right_data.data4.video3data.title'),
          desc: t('courses.four_change_right_data.data4.video3data.desc'),
          videoUrl: 'https://www.youtube.com/embed/hJpe-FvLH9I',
        },
        {
          title: t('courses.four_change_right_data.data4.video4data.title'),
          desc: t('courses.four_change_right_data.data4.video4data.desc'),
          videoUrl: '000',
        },
      ],
    },
  ];
});
const four_change_right_data_page = computed(() => {
  return [four_change_right_data.value[four_change_right_active_index.value]];
});
// 0 未购买 1 已购买sepaking 2 已购买writing 3 已购买sepaking和writing
// user 的转态 支付后会更新
const changePageData = (zongheDataarg: any, speakData: any, writeData: any) => {
  if (user.value.speak === 1 && user.value.write === 1) {
    buystatus.value = 3;
  } else if (user.value.speak === 1) {
    buystatus.value = 1;
  } else if (user.value.write === 1) {
    buystatus.value = 2;
  } else {
    buystatus.value = 0;
  }
  if (buystatus.value === 0) {
    zongheData.value = {
      img: '/img/courses/courses_group.webp',
      price: zongheDataarg?.price,
      priceid: zongheDataarg?.id,
      vipPrice: zongheDataarg?.vipPrice,
      title: t('courses.zhonghe.title'),
      desc: t('courses.zhonghe.desc'),
      isbuyed: false,
      type: 'zonghe',
      downloadhref: '',
    };
    bottomData.value = [
      {
        img: guide1,
        price: speakData?.price,
        priceid: speakData?.id,
        vipPrice: speakData?.vipPrice,
        title: t('courses.speaking.title'),
        article: article1,
        isbuyed: false,
        type: 'speaking',
        downloadhref: downloadhref.value?.DETSpeakingExamExcellence,
      },
      {
        img: guide2,
        price: writeData?.price,
        priceid: writeData?.id,
        vipPrice: writeData?.vipPrice,
        title: t('courses.writing.title'),
        article: article2,
        isbuyed: false,
        type: 'writing',
        downloadhref: downloadhref.value?.DETWritingExamExcellence2024,
      },
    ];
  } else if (buystatus.value === 1) {
    zongheData.value = {
      img: guide1,
      price: speakData?.price,
      priceid: speakData?.id,
      vipPrice: speakData?.vipPrice,
      title: t('courses.speaking.title'),
      desc: '',
      isbuyed: true,
      type: 'speaking',
      downloadhref: downloadhref.value?.DETSpeakingExamExcellence,
    };
    bottomData.value = [
      {
        img: guide2,
        price: writeData?.price,
        priceid: writeData?.id,
        vipPrice: writeData?.vipPrice,
        title: t('courses.writing.title'),
        article: article2,
        isbuyed: false,
        type: 'writing',
        downloadhref: downloadhref.value?.DETWritingExamExcellence2024,
      },
    ];
  } else if (buystatus.value === 2) {
    zongheData.value = {
      img: guide2,
      price: writeData?.price,
      priceid: writeData?.id,
      vipPrice: writeData?.vipPrice,
      title: t('courses.writing.title'),
      desc: '',
      isbuyed: true,
      type: 'writing',
      downloadhref: downloadhref.value?.DETWritingExamExcellence2024,
    };
    bottomData.value = [
      {
        img: guide1,
        price: speakData?.price,
        priceid: speakData?.id,
        vipPrice: speakData?.vipPrice,
        title: t('courses.speaking.title'),
        article: article1,
        isbuyed: false,
        type: 'speaking',
        downloadhref: downloadhref.value?.DETSpeakingExamExcellence,
      },
    ];
  } else if (buystatus.value === 3) {
    zongheData.value = {
      img: '/img/courses/courses_group.webp',
      price: 123456,
      priceid: 123456,
      vipPrice: 123456,
      title: t('courses.zhonghe.title'),
      desc: 'The course package includes the "DET Speaking Exam Excellence" and the "DET Writing Exam Excellence." Upon subscription, you will be able to download the guides at any time and study them with ease, anytime and anywhere. Buy Now Subscription takes effect immediately. Scroll up on the page, view, and click to download the course to start learning.',
      isbuyed: true,
      type: 'zonghe',
      downloadhref: '',
    };
    bottomData.value = [
      {
        img: guide1,
        price: speakData?.price,
        priceid: speakData?.id,
        vipPrice: speakData?.vipPrice,
        title: t('courses.speaking.title'),
        article: [],
        isbuyed: true,
        type: 'speaking',
        downloadhref: downloadhref.value.DETSpeakingExamExcellence,
      },
      {
        img: guide2,
        price: writeData?.price,
        priceid: writeData?.id,
        vipPrice: writeData?.vipPrice,
        title: t('courses.writing.title'),
        article: [],
        isbuyed: true,
        type: 'writing',
        downloadhref: downloadhref.value.DETWritingExamExcellence2024,
      },
    ];
  }
};

const buyedChangePage = async () => {
  if (user.value.id) {
    const token = await getToken();
    const {
      data: { data },
    } = await getVipdataWithToken(token);
    const writeData = data.find((item: any) => item.write === 1 && !item.speak);
    const speakData = data.find((item: any) => item.speak === 1 && !item.write);
    const zongheDataDataarg = data.find((item: any) => item.speak === 1 && item.write === 1);
    speakDataPage.value = speakData;
    writeDataPage.value = writeData;

    changePageData(zongheDataDataarg, speakData, writeData);
  } else {
    const {
      data: { data },
    } = await getVipdataNoToken();
    const writeData = data.find((item: any) => item.write === 1 && !item.speak);
    const speakData = data.find((item: any) => item.speak === 1 && !item.write);
    const zongheDataDataarg = data.find((item: any) => item.speak === 1 && item.write === 1);

    speakDataPage.value = speakData;
    writeDataPage.value = writeData;

    changePageData(zongheDataDataarg, speakData, writeData);
  }
};

watch(
  () => user.value.write,
  () => {
    buyedChangePage();
  },
);
watch(
  () => user.value.speak,
  () => {
    buyedChangePage();
  },
);
onMounted(() => {
  buyedChangePage();
});

const buyMembership = (id: number) => {
  store.stripePay({ vipId: id });
};
const gobuyordetail = () => {
  if (user.value.speak === 1 && user.value.write === 1) {
    router.push('/member/detail');
  } else {
    router.push(localePath('/pricing'));
  }
};
const aqList = ref([
  {
    name: t('pricing.aqList[0].name'),
    content: t('pricing.aqList[0].content'),
    open: false,
  },
  {
    name: t('pricing.aqList[1].name'),
    content: t('pricing.aqList[1].content'),
    open: false,
  },

  {
    name: t('pricing.aqList[3].name'),
    content: t('pricing.aqList[3].content'),
    open: false,
  },
  {
    name: t('pricing.aqList[4].name'),
    content: t('pricing.aqList[4].content'),
    open: false,
  },
  {
    name: t('pricing.aqList[5].name'),
    content: t('pricing.aqList[5].content'),
    open: false,
  },
  {
    name: t('pricing.aqList[6].name'),
    content: `${t('pricing.aqList[6].content1')}`,
    open: false,
  },
]) as any;
const openOrCloseOneQuestion = (item: any) => {
  item.open = !item.open;
};

// 引入cdn图片

const team_bg = `${cdn}/store/portal/guid/team_bg.png`;
</script>

<template>
  <div class="guide_out">
    <div class="guide_wrapper_out">
      <div class="guide_wrapper">
        <div class="title">DET Course: Your Path to Duolingo English Test Success</div>
        <div class="title_desc">Expert-Led DET Course with 95% Student Success Rate</div>
        <div class="font_video_out">
          <div class="font_out">
            <div v-for="(item, index) in topVideoFont" :key="index" class="one_font">
              <div class="one_font_icon">
                <img :src="`${item.icon}`" alt="green_check_icon" />
              </div>
              <div class="one_font_desc">{{ item.desc }}</div>
            </div>
          </div>
          <section class="video_out">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/8UYh_8Co2vo"
              title="Duolingo English Test | Expert Tips &amp; Practice Questions for DET&#39;s &#39;Read and Complete&#39;"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </section>
        </div>

        <div class="exten_det_out">
          <div class="exten_det_title">Extensive DET Course by DET Practice: Introduction</div>
          <div class="exten_det_content">
            <div class="exten_det_content_left">
              <img src="/img/courses/ext_det_bg.svg" alt="Introduction.svg" />
            </div>
            <div class="exten_det_content_right">
              <div class="one_font">
                Transform your Duolingo English Test preparation with our comprehensive learning hub! We understand that
                navigating the DET can seem challenging, which is why we've developed a strategic approach that breaks
                down every component into manageable, success-oriented modules.
              </div>
              <div class="one_font">
                Our expertly crafted DET course covers all essential DET components—from advanced reading comprehension
                to nuanced speaking tasks. What sets us apart is our adaptive learning system that combines in-depth
                instruction with targeted practice exercises. You'll find dynamic study materials tailored to each
                proficiency level, allowing you to build confidence across every test section.
              </div>
              <div class="one_font">
                Start your journey today with our proven methodology, whether you're targeting a competitive score for
                top universities or building a solid foundation in English proficiency. Each module is specifically
                engineered to enhance your performance on the latest DET format, ensuring you're fully prepared for test
                day success.
              </div>
            </div>
          </div>
        </div>

        <div class="four_changes_out">
          <div class="change_left">
            <div
              v-for="(item, index) in four_change_left_data"
              :key="index"
              :class="
                four_change_left_active_index === item.index
                  ? 'one_change_click_dom one_change_click_dom_active'
                  : 'one_change_click_dom'
              "
              @click="four_change_left_active_index_change(index)"
            >
              <div v-if="four_change_left_active_index === item.index" class="one_change_icon">
                <img :src="`${item.icon_active}`" alt="green_check_icon" />
              </div>
              <div v-else class="one_change_icon">
                <img :src="`${item.icon}`" alt="green_check_icon" />
              </div>
              <div
                :class="
                  four_change_left_active_index === item.index
                    ? 'one_change_title one_change_title_active'
                    : 'one_change_title'
                "
              >
                {{ item.title }}
              </div>
            </div>
          </div>
          <div class="change_right">
            <div
              v-for="(item, index) in four_change_right_data"
              :key="index"
              v-show="four_change_left_active_index === index"
            >
              <div class="change_right_title">{{ item.title }}</div>
              <div class="change_right_desc">{{ item.desc }}</div>
              <div class="change_right_desc">{{ item.desc2 }}</div>
              <div class="change_right_video">
                <div v-for="(item2, index) in item.videoUrlArr" :key="index">
                  <div class="change_right_video_iframe">
                    <iframe
                      width="100%"
                      :src="item2.videoUrl"
                      title=""
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div class="change_right_video_title">{{ item2.title }}</div>
                  <div class="change_right_video_desc">{{ item2.desc }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- **************************************** -->
        <template v-if="buystatus === 0">
          <Vcoursezh :zongheData="zongheData" :buystatus="buystatus" />
          <div class="you_can">{{ $t('courses.dandumai') }}</div>
          <Vtwocourse :bottomData="bottomData" :buystatus="buystatus"
        /></template>
        <template v-if="buystatus === 1">
          <Vcoursezh :zongheData="zongheData" :buystatus="buystatus" />
          <div class="you_can">{{ $t('courses.writing5') }}</div>
          <Vtwocourse :bottomData="bottomData" :buystatus="buystatus"
        /></template>
        <template v-if="buystatus === 2">
          <Vcoursezh :zongheData="zongheData" :buystatus="buystatus" />
          <div class="you_can">{{ $t('courses.speaking5') }}</div>
          <Vtwocourse :bottomData="bottomData" :buystatus="buystatus"
        /></template>
        <template v-if="buystatus === 3">
          <Vcoursezh :zongheData="zongheData" :buystatus="buystatus">
            <template #footer>
              <Vtwocourse :bottomData="bottomData" :buystatus="buystatus" />
            </template>
          </Vcoursezh>
        </template>
      </div>
    </div>
    <div class="package_out_wrapper">
      <div class="package_out">
        <div class="package_left">
          <img src="/img/courses/courses_group.webp" alt="courses_group.webp" />
        </div>
        <div class="package_right">
          <div class="title">{{ t('courses.package_out.title') }}</div>
          <div class="desc">{{ t('courses.package_out.desc') }}</div>
          <div class="desc">{{ t('courses.package_out.desc2') }}</div>
          <div class="desc">{{ t('courses.package_out.desc3') }}</div>
          <div v-if="user.id" class="btn common_btn_hover_bgColor" @click="gobuyordetail">
            {{ t('courses.package_out.btn') }}
          </div>
          <NuxtLink v-else class="btn common_btn_hover_bgColor" :to="localePath(`/login?url=/courses`)">{{
            t('courses.package_out.btn')
          }}</NuxtLink>
        </div>
      </div>
    </div>

    <div class="part3_wrapper">
      <div class="part3">
        <div class="title">{{ $t('courses.pagefont.How_to') }}</div>
        <div class="three_out">
          <div v-for="(item, index) in contaceUsList" :key="index" class="one_card">
            <div class="icon">
              <img :src="`${item.icon}`" :alt="$t('courses.pagefont.alt')" />
            </div>
            <img
              src="/img/guid/Double_Right_Arrow.svg"
              class="Double_Right_Arrow"
              :alt="$t('courses.pagefont.Double_Right_Arrow')"
            />
            <div class="method_font">{{ item.font }}</div>
            <div class="method_tip">{{ item.tip }}</div>
            <template v-if="item.id === '1'">
              <template v-if="user.id">
                <div
                  v-if="item.btn"
                  @click="buyMembership(speakDataPage?.id)"
                  :class="user.speak === 1 ? 'btn disbtn' : 'btn'"
                >
                  {{ item.btn }}
                </div>
                <div
                  v-if="item.btn1"
                  @click="buyMembership(writeDataPage?.id)"
                  :class="user.write === 1 ? 'btn disbtn' : 'btn'"
                >
                  {{ item.btn1 }}
                </div>
              </template>
              <template v-else>
                <NuxtLink v-if="item.btn" :to="localePath(`/login?url=/courses`)" class="btn" rel="nofollow">
                  {{ item.btn }}
                </NuxtLink>
                <NuxtLink v-if="item.btn1" :to="localePath(`/login?url=/courses`)" class="btn" rel="nofollow">
                  {{ item.btn1 }}
                </NuxtLink>
              </template>
            </template>

            <template v-if="item.id === '2'">
              <template v-if="user.id">
                <template v-if="user.speak === 1">
                  <a
                    v-if="item.btn"
                    :href="staticUrlGet(`/${downloadhref.DETSpeakingExamExcellence}`)"
                    class="btn"
                    target="_blank"
                    >{{ item.btn }}
                  </a>
                </template>
                <template v-else>
                  <div v-if="item.btn" class="disbtn">{{ item.btn }}</div>
                </template>
                <template v-if="user.write === 1">
                  <a
                    v-if="item.btn1"
                    :href="staticUrlGet(`/${downloadhref.DETWritingExamExcellence2024}`)"
                    class="btn"
                    target="_blank"
                    >{{ item.btn1 }}
                  </a>
                </template>
                <template v-else>
                  <div v-if="item.btn1" class="disbtn">
                    {{ item.btn1 }}
                  </div>
                </template>
              </template>
              <template v-else>
                <NuxtLink class="btn" :to="localePath(`/login?url=/courses`)" rel="nofollow">
                  {{ item.btn }}
                </NuxtLink>
                <NuxtLink class="btn" :to="localePath(`/login?url=/courses`)" rel="nofollow">
                  {{ item.btn1 }}
                </NuxtLink>
              </template>
            </template>
            <template v-if="item.id === '3'">
              <div class="btnNone">{{ $t('courses.pagefont.spa') }}</div>
              <template v-if="user.id">
                <template v-if="user.speak === 1">
                  <NuxtLink class="btn" :to="localePath(`/listen`)">
                    {{ item.btn1 }}
                  </NuxtLink>
                </template>
                <template v-else>
                  <div class="disbtn">
                    {{ item.btn1 }}
                  </div>
                </template>
              </template>
              <template v-else>
                <NuxtLink class="btn" :to="localePath(`/login?url=/listen`)" rel="nofollow">
                  {{ item.btn1 }}
                </NuxtLink></template
              >
            </template>
          </div>
        </div>
        <div class="tips">
          {{ $t('courses.pagefont.tips') }}
        </div>
      </div>
    </div>

    <div class="aqlist_wrapper">
      <div class="part2">
        <div class="title">{{ $t('pricing.pagefont.faq') }}</div>
        <div class="list_out">
          <div
            v-for="(item, index) in aqList"
            :key="index"
            :class="[item.open ? 'one_question one_question_open' : 'one_question']"
          >
            <div class="header" @click="openOrCloseOneQuestion(item)">
              <div class="icon">
                <img src="/img/pricing/arrow_down.svg" :alt="$t('pricing.pagefont.arrow_down')" />
              </div>
              <div class="qusetion">{{ item.name }}</div>
            </div>
            <div v-if="item.open" class="answer">
              <div class="answer_content" v-html="item.content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="orange_block_wrapper">
      <div class="orange_block">
        <div class="orange_title">{{ $t('courses.pagefont.orange_title') }}</div>
        <div class="team_desc">
          {{ $t('courses.pagefont.team_desc') }}
        </div>
        <div class="team_img">
          <img :src="team_bg" :alt="$t('courses.pagefont.Elite_Language_Educators')" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.guide_out {
  overflow: hidden;
  padding: 0 0px;
  background: linear-gradient(#e7fdec 0, #ffffff 657px, #ffffff 0px, #ffffff);
  .guide_wrapper_out {
    padding: 0px 30px;
    @media (max-width: 450px) {
      padding: 0 15px;
    }
    .guide_wrapper {
      max-width: 1200px;
      margin: 0 auto;
      .title {
        font-weight: 600;
        font-size: 56px;
        color: #201515;
        line-height: 72px;
        margin-top: 56px;
        text-align: center;
      }
      .title_desc {
        font-weight: 500;
        font-size: 32px;
        color: #201515;
        line-height: 44px;
        margin-top: 24px;
        text-align: center;
      }
      .font_video_out {
        display: grid;
        grid-template-columns: 1fr 0.85fr;
        gap: 22px;
        margin-top: 54px;
        .font_out {
          display: flex;
          flex-direction: column;
          gap: 20px;
          .one_font {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 16px;
            .one_font_icon {
              width: 20px;
              height: 20px;
              flex-shrink: 0;
              margin-top: 4px;

              img {
                width: 100%;
                height: 100%;
              }
            }
            .one_font_desc {
              font-weight: 400;
              font-size: 20px;
              color: #201515;
              line-height: 30px;
            }
          }
        }
        .video_out {
        }
      }
      .exten_det_out {
        margin-top: 119px;
        .exten_det_title {
          font-weight: 500;
          font-size: 40px;
          color: #201515;
          line-height: 48px;
          text-align: center;
        }
        .exten_det_content {
          display: grid;
          grid-template-columns: 0.75fr 1fr;
          gap: 80px;
          margin-top: 40px;
          .exten_det_content_left {
            img {
              width: 100%;
              height: auto;
            }
          }
          .exten_det_content_right {
            display: flex;
            flex-direction: column;
            gap: 20px;
            .one_font {
              font-weight: 400;
              font-size: 18px;
              color: #403f3e;
              line-height: 26px;
            }
          }
        }
      }
      .four_changes_out {
        display: grid;
        grid-template-columns: 0.33fr 1fr;
        gap: 80px;
        margin-top: 120px;
        flex-wrap: wrap;

        @media screen and (max-width: 450px) {
          margin-top: 60px;
          grid-template-columns: 1fr !important;
        }
        .change_left {
          flex-shrink: 0;

          .one_change_click_dom {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            gap: 8px;
            padding: 24px 0;
            &:hover {
              background: #fef7f5;
            }
            cursor: pointer;
            .one_change_icon {
              width: 56px;
              height: 56px;

              img {
                width: 100%;
                height: 100%;
              }
            }

            .one_change_title {
              font-weight: 500;
              font-size: 24px;
              color: #333333ff;
            }
            .one_change_title_active {
              color: #f66442;
            }
          }
          .one_change_click_dom_active {
            background: #fef7f5;
          }
        }
        .change_right {
          .change_right_title {
            font-weight: 500;
            font-size: 32px;
            color: #201515;
            line-height: 44px;
          }
          .change_right_desc {
            font-weight: 400;
            font-size: 18px;
            color: #403f3e;
            line-height: 26px;
            margin-top: 12px;
          }
          .change_right_video {
            margin-top: 32px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
            .change_right_video_iframe {
              display: flex;
              justify-content: center;
              align-items: center;
              background: #000000;
              border-radius: 16px;
              overflow: hidden;
              // min-height: 400px;+
              // border: 1px red solid;
            }
            .change_right_video_title {
              margin-top: 16px;
              font-weight: 500;
              font-size: 20px;
              color: #201515;
              line-height: 28px;
            }
            .change_right_video_desc {
              margin-top: 8px;
              font-weight: 400;
              font-size: 16px;
              color: #666666;
              line-height: 22px;
            }
          }
        }
      }

      .you_can {
        margin-bottom: 16px;
      }
    }
  }
  .package_out_wrapper {
    padding: 0px 30px;
    @media screen and (max-width: 450px) {
      padding: 0px 15px;
    }
    background: #fff4f1;
    margin-top: 120px;

    .package_out {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 0.33fr 1fr;
      gap: 80px;
      padding: 100px 0;
      @media screen and (max-width: 450px) {
        padding: 50px 15px;
        grid-template-columns: 1fr;
      }
      .package_left {
        img {
          width: 100%;
          height: auto;
        }
      }
      .package_right {
        .title {
          font-weight: 500;
          font-size: 40px;
          color: #201515;
          line-height: 48px;
          margin-bottom: 16px;
        }
        .desc {
          font-weight: 400;
          font-size: 20px;
          color: #403f3e;
          line-height: 28px;
          margin-bottom: 16px;
        }
        .btn {
          padding: 8px 24px;
          background: #f66442;
          border-radius: 20px;
          font-weight: 400;
          font-size: 16px;
          color: #ffffff;
          margin-top: 8px;
          width: fit-content;
          cursor: pointer;
          display: block;
        }
      }
    }
  }

  .part3_wrapper {
    padding: 0px 30px;
    @media screen and (max-width: 450px) {
      padding: 0px 15px;
    }
    background: #fff4f1;
    margin-top: 120px;
    @media screen and (max-width: 450px) {
      margin-top: 60px;
    }
    .part3 {
      padding: 100px 0;
      padding-bottom: 92px;
      @media screen and (max-width: 450px) {
        padding: 50px 0;
      }

      max-width: 1200px;
      margin: 0 auto;
      .title {
        font-weight: 500;
        font-size: 40px;
        color: #201515;
        text-align: center;
        margin-bottom: 64px;
        @media screen and (max-width: 450px) {
          font-size: 20px;
          margin-bottom: 32px;
        }
      }
      .three_out {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 24px;
        .one_card {
          padding: 32px 20px;
          background: #ffffff;
          border-radius: 8px;
          border: 1px solid #f0e8e8;
          position: relative;
          .icon {
            width: 56px;
            height: 56px;
            margin: 0 auto;
          }
          .Double_Right_Arrow {
            width: 40px;
            height: 40px;
            position: absolute;
            top: 20px;
            right: 20px;
          }
          .method_font {
            font-weight: 600;
            font-size: 24px;
            color: #201515;
            margin-top: 16px;
            text-align: center;
          }
          .method_tip {
            font-weight: 400;
            font-size: 14px;
            color: #403f3e;
            margin-top: 8px;
            // border: 1px red solid;
            min-height: 36px;
          }
          .btn {
            display: block;
            padding: 11px;
            text-align: center;
            border-radius: 4px;
            border: 1px solid #201515;
            outline: 1px solid transparent; /* 添加一个透明的外边框 */
            font-weight: 500;
            font-size: 16px;
            color: #201515;
            margin-top: 24px;
            cursor: pointer;

            &:hover {
              border: 2px solid #201515;
              outline: 0px solid #201515;
              padding: 10px;
            }
          }
          .disbtn {
            opacity: 0.3;
            display: block;
            padding: 11px;
            text-align: center;
            border-radius: 4px;
            border: 1px solid #201515;
            outline: 1px solid transparent; /* 添加一个透明的外边框 */
            font-weight: 500;
            font-size: 16px;
            color: #201515;
            margin-top: 24px;
            cursor: not-allowed;
          }
          .btnNone {
            display: block;
            padding: 11px;
            text-align: center;
            border-radius: 4px;
            border: 1px solid #fff;
            font-weight: 500;
            font-size: 16px;
            color: #fff;
            margin-top: 24px;
            // cursor: pointer;
          }
        }
      }
      .tips {
        font-weight: 400;
        font-size: 14px;
        color: #666666;
        margin-top: 16px;
        line-height: 22px;
      }
    }
  }
  .aqlist_wrapper {
    padding: 0px 30px;
    @media screen and (max-width: 450px) {
      padding: 0px 15px;
    }
    margin-top: 60px;
    @media (max-width: 450px) {
      margin-top: 30px;
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
  .orange_block_wrapper {
    padding: 0px 30px;
    @media screen and (max-width: 450px) {
      padding: 0px 15px;
    }
    background: #f66442;
    .orange_block {
      max-width: 1200px;
      margin: 0 auto;
      padding-top: 100px;
      @media screen and (max-width: 450px) {
        padding-top: 50px;
      }
      .orange_title {
        font-weight: 500;
        font-size: 40px;
        @media screen and (max-width: 450px) {
          font-size: 22px;
        }
        color: #ffffff;
        text-align: center;
        margin: 0;
      }
      .team_desc {
        margin: 0 auto;
        font-weight: 400;
        font-size: 20px;
        @media screen and (max-width: 450px) {
          font-size: 14px;
        }
        color: #ffffff;
        max-width: 900px;
        line-height: 28px;
        text-align: center;
        margin-top: 32px;
      }
      .team_img {
        margin: 0 auto;
        max-width: 1078px;
        margin-top: 48px;
        display: flex;

        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}
</style>
