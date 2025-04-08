<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { useStore } from '@/store';
import { useRouter } from 'vue-router';
import { domain, cdn } from '@/utils';
import { onMounted, onUnmounted } from 'vue';

const router = useRouter();

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

const topVideoFont = computed(() => {
  return [
    {
      icon: '/img/courses/green_check_icon.svg',
      desc: t('courses.topVideoFont.desc1'),
    },
    {
      icon: '/img/courses/green_check_icon.svg',
      desc: t('courses.topVideoFont.desc2'),
    },
    {
      icon: '/img/courses/green_check_icon.svg',
      desc: t('courses.topVideoFont.desc3'),
    },
    {
      icon: '/img/courses/green_check_icon.svg',
      desc: t('courses.topVideoFont.desc4'),
    },
    {
      icon: '/img/courses/green_check_icon.svg',
      desc: t('courses.topVideoFont.desc5'),
    },
  ];
});
const four_change_left_active_index = ref(0);
const four_change_right_active_index = ref(0);
const four_change_left_active_index_change = (index: number) => {
  four_change_left_active_index.value = index;
  four_change_right_active_index.value = index;
  const element = document.getElementById(`section-${index}`);
  if (element) {
    const offset = 100; // 可以根据需要调整这个值
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

const five_change_left_data = computed(() => {
  return [
    {
      index: 0,
      title: t('courses.changeleftfont.read'),
      icon: '/img/courses/reading_icon.svg',
      icon_active: '/img/courses/reading_active_icon.svg',
    },
    {
      index: 1,
      title: t('courses.changeleftfont.lis'),
      icon: '/img/courses/listening_icon.svg',
      icon_active: '/img/courses/listening_active_icon.svg',
    },
    {
      index: 2,
      title: t('courses.changeleftfont.spe'),
      icon: '/img/courses/speaking_icon.svg',
      icon_active: '/img/courses/speaking_active_icon.svg',
    },
    {
      index: 3,
      title: t('courses.changeleftfont.wri'),
      icon: '/img/courses/writing_icon.svg',
      icon_active: '/img/courses/writing_active_icon.svg',
    },
    {
      index: 4,
      title: t('courses.changeleftfont.vocabulary'),
      icon: '/img/courses/vocabulary_icon.svg',
      icon_active: '/img/courses/vocabulary_active_icon.svg',
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
          prepUrl: '/courses/det-read-and-select-course',
        },
        {
          title: t('courses.four_change_right_data.data1.video2data.title'),
          desc: t('courses.four_change_right_data.data1.video2data.desc'),
          videoUrl: 'https://www.youtube.com/embed/k7kIedxU9og',
          prepUrl: '/courses/det-fill-in-the-blanks',
        },
        {
          title: t('courses.four_change_right_data.data1.video3data.title'),
          desc: t('courses.four_change_right_data.data1.video3data.desc'),
          videoUrl: 'https://www.youtube.com/embed/J7ymVabfTJk?si=qy-P02K7ly1faKNf',
          prepUrl: '/courses/det-interactive-reading-course',
        },
        {
          title: t('courses.four_change_right_data.data1.video4data.title'),
          desc: t('courses.four_change_right_data.data1.video4data.desc'),
          videoUrl: 'https://www.youtube.com/embed/YpDzyBUeOUk?si=tRtQlb7asqAXpa75',
          prepUrl: '/courses/det-read-and-complete-prep-course',
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
          prepUrl: '/courses/det-prep-course-listen-and-type-questions',
        },
        {
          title: t('courses.four_change_right_data.data2.video2data.title'),
          desc: t('courses.four_change_right_data.data2.video2data.desc'),
          videoUrl: 'https://www.youtube.com/embed/ptt8E7DNyFw',
          prepUrl: '/courses/det-prep-course-interactive-listening',
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
          prepUrl: '/courses/det-course-speak-about-the-photo',
        },
        {
          title: t('courses.four_change_right_data.data3.video2data.title'),
          desc: t('courses.four_change_right_data.data3.video2data.desc'),
          videoUrl: 'https://www.youtube.com/embed/2bj3ViAPkMY',
          prepUrl: '/courses/det-course-read-listen-then-speak',
        },
        {
          title: t('courses.four_change_right_data.data3.video3data.title'),
          desc: t('courses.four_change_right_data.data3.video3data.desc'),
          videoUrl: 'https://www.youtube.com/embed/rqPV8cP9EPo?si=mMTNCeu4Jl3zjFeC',
          prepUrl: '/courses/det-prep-course-read-aloud',
        },
        {
          title: t('courses.four_change_right_data.data3.video4data.title'),
          desc: t('courses.four_change_right_data.data3.video4data.desc'),
          videoUrl: 'https://www.youtube.com/embed/sf8FN3GAuHI',
          prepUrl: '/courses/det-course-speaking-sample',
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
          prepUrl: '/courses/det-write-about-the-photo-course',
        },
        {
          title: t('courses.four_change_right_data.data4.video2data.title'),
          desc: t('courses.four_change_right_data.data4.video2data.desc'),
          videoUrl: 'https://www.youtube.com/embed/BgQ5dxC72WY',
          prepUrl: '/courses/det-interactive-writing',
        },
        {
          title: t('courses.four_change_right_data.data4.video3data.title'),
          desc: t('courses.four_change_right_data.data4.video3data.desc'),
          videoUrl: 'https://www.youtube.com/embed/hJpe-FvLH9I',
          prepUrl: '/courses/det-prep-course-writing-sample',
        },
        {
          title: t('courses.four_change_right_data.data4.video4data.title'),
          desc: '',
          imgUrl: '/img/courses/video_hack.png',
          // prepUrl: '/det-listening-words',
        },
      ],
    },
    {
      title: t('courses.four_change_right_data.data5.title'),
      desc: t('courses.four_change_right_data.data5.desc'),

      videoUrlArr: [
        {
          title: t('courses.four_change_right_data.data5.video1data.title'),
          desc: t('courses.four_change_right_data.data5.video1data.desc'),
          imgUrl: '/img/courses/Red-White-Modern-Youtube-Thumbnail.jpg',
          prepUrl: '/courses/boost-det-vocabulary-7-adv-photo-desc-tech',
        },
        {
          title: t('courses.four_change_right_data.data5.video2data.title'),
          desc: t('courses.four_change_right_data.data5.video2data.desc'),
          imgUrl: '/img/courses/det-voc-post.jpg',
          prepUrl: '/courses/det-listening-words',
        },
      ],
    },
  ];
});

const gobuyordetail = () => {
  if (user.value.speak === 1 && user.value.write === 1) {
    router.push('/member/detail');
  } else {
    router.push(localePath('/pricing'));
  }
};
const aqList = ref([
  {
    name: t('courses.aqList[0].name'),
    content: t('courses.aqList[0].content'),
    open: false,
  },
  {
    name: t('courses.aqList[1].name'),
    content: t('courses.aqList[1].content'),
    open: false,
  },

  {
    name: t('courses.aqList[3].name'),
    content: t('courses.aqList[3].content'),
    open: false,
  },
  {
    name: t('courses.aqList[4].name'),
    content: t('courses.aqList[4].content'),
    open: false,
  },
  {
    name: t('courses.aqList[5].name'),
    content: t('courses.aqList[5].content'),
    open: false,
  },
]) as any;
const openOrCloseOneQuestion = (item: any) => {
  item.open = !item.open;
};

// 引入cdn图片

const team_bg = `${cdn}/store/portal/guid/team_bg.png`;

const isSticky = ref(false);
const changeLeftRef = ref<HTMLElement | null>(null);
const changeRightRef = ref<HTMLElement | null>(null);

const handleScroll = () => {
  if (!changeLeftRef.value || !changeRightRef.value) return;

  const rightRect = changeRightRef.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // 当右侧内容开始进入视口时，设置左侧为固定定位
  if (rightRect.top <= 20 && rightRect.bottom >= windowHeight * 0.5) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  // 处理 URL 中的锚点
  const hash = window.location.hash;

  if (hash) {
    const sectionIndex = parseInt(hash.replace('#section-', ''));
    if (!isNaN(sectionIndex)) {
      // 使用 nextTick 确保 DOM 更新完成
      nextTick(() => {
        setTimeout(() => {
          four_change_left_active_index.value = sectionIndex;
          four_change_right_active_index.value = sectionIndex;

          const element = document.getElementById(`section-${sectionIndex}`);
          if (element) {
            const offset = 120; // 增加偏移量，确保标题不会被遮挡
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }
        }, 100);
      });
    }
  }
});
// 清理事件监听
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="guide_out">
    <div class="guide_wrapper_out">
      <div class="guide_wrapper">
        <h1 class="title">{{ t('courses.h1') }}</h1>
        <h2 class="title_desc">{{ t('courses.h2') }}</h2>
        <div class="font_video_out">
          <div class="font_out">
            <div v-for="(item, index) in topVideoFont" :key="index" class="one_font">
              <div class="one_font_icon">
                <img :src="`${item.icon}`" alt="green_check_icon" />
              </div>
              <div class="one_font_desc">{{ item.desc }}</div>
            </div>
          </div>
          <section class="img_out">
            <img src="/img/courses/course_banner.webp" alt="course_video_img" />
          </section>
        </div>

        <div class="exten_det_out">
          <h2 class="exten_det_title">{{ t('courses.extdet.title') }}</h2>
          <div class="exten_det_content">
            <div class="exten_det_content_left">
              <img src="/img/courses/ext_det_bg.svg" alt="Introduction.svg" />
            </div>
            <div class="exten_det_content_right">
              <div class="one_font">
                {{ t('courses.extdet.desc1') }}
              </div>
              <div class="one_font">
                {{ t('courses.extdet.desc2') }}
              </div>
              <div class="one_font">
                {{ t('courses.extdet.desc3') }}
              </div>
            </div>
          </div>
        </div>

        <div class="four_changes_out">
          <div class="four_changes_out_left">
            <div ref="changeLeftRef" :class="['change_left', { change_left_sticky: isSticky }]">
              <div
                v-for="(item, index) in five_change_left_data"
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
          </div>

          <div ref="changeRightRef" class="change_right">
            <div v-for="(item, index) in four_change_right_data" :key="index" :id="`section-${index}`">
              <h2 class="change_right_title">{{ item.title }}</h2>
              <div class="change_right_desc">{{ item.desc }}</div>
              <div class="change_right_desc">{{ item.desc2 }}</div>

              <div class="change_right_video">
                <div v-for="(item2, index) in item.videoUrlArr" :key="index" class="one_dom">
                  <div v-if="item2.videoUrl" class="change_right_video_iframe">
                    <iframe
                      width="100%"
                      :src="item2.videoUrl"
                      :title="item2.title"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div v-else class="change_right_video_iframe">
                    <img :src="`${item2.imgUrl}`" :alt="item2.title" />
                  </div>

                  <h3 class="change_right_video_title">{{ item2.title }}</h3>
                  <div v-if="item2.desc" class="change_right_video_desc">{{ item2.desc }}</div>
                  <div v-if="!item2.videoUrl && index === 3" class="video_hack">
                    <a target="_blank" href="/"> DET Practice | One-stop Duolingo English Test Prep Platform </a>
                    <a target="_blank" href="/practice"> Duolingo English Test Practice Question Bank </a>
                    <a target="_blank" href="/duolingo-practice-test"> Duolingo Practice Test </a>
                    <a target="_blank" href="/blog"> DET Practice Learning Blog </a>
                  </div>
                  <!-- <NuxtLink class="prepUrl_dom" :to="localePath(`${item2.prepUrl}`)">
                    {{ item2.title }} Prep Course</NuxtLink
                  > -->
                  <div class="height_hack"></div>
                  <NuxtLink v-if="item2.prepUrl" class="right_click" :to="localePath(`${item2.prepUrl}`)">
                    <div class="font">{{ item2.title }} {{ t('courses.prepCourse') }}</div>
                    <div class="arrow">
                      <img src="/img/products/yellow_arrow_right.svg" alt="yellow_arrow_right" />
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- **************************************** -->
      </div>
    </div>
    <div class="package_out_wrapper">
      <div class="package_out">
        <div class="package_left">
          <img src="/img/courses/courses_group.webp" alt="courses_group.webp" />
        </div>
        <div class="package_right">
          <h2 class="title">{{ t('courses.package_out.title') }}</h2>
          <div class="desc">{{ t('courses.package_out.desc') }}</div>
          <div class="desc">{{ t('courses.package_out.desc2') }}</div>
          <div class="desc">{{ t('courses.package_out.desc3') }}</div>
          <NuxtLink v-if="user.id" class="btn common_btn_hover_bgColor" :to="urlGet(`/guide`)">
            {{ t('courses.package_out.btn') }}
          </NuxtLink>
          <NuxtLink
            v-else
            class="btn common_btn_hover_bgColor"
            :to="localePath(`/login?url=${encodeURIComponent(urlGet('/guide'))}`)"
            >{{ t('courses.package_out.btn') }}</NuxtLink
          >
        </div>
      </div>
    </div>

    <div class="aqlist_wrapper">
      <div class="part2">
        <h2 class="title">{{ $t('pricing.pagefont.faq') }}</h2>
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
              <h3 class="qusetion">{{ item.name }}</h3>
            </div>
            <div v-if="item.open" class="answer">
              <div class="answer_content" v-html="item.content"></div>
            </div>
          </div>
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
    @media (max-width: 760px) {
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
        @media screen and (max-width: 760px) {
          font-size: 28px;
          line-height: 40px;
        }
      }
      .title_desc {
        font-weight: 500;
        font-size: 32px;
        color: #201515;
        line-height: 44px;
        margin-top: 24px;
        text-align: center;
        @media screen and (max-width: 760px) {
          font-size: 20px;
          line-height: 30px;
        }
      }
      .font_video_out {
        display: grid;
        grid-template-columns: 1fr 0.85fr;
        gap: 22px;
        align-items: center;
        margin-top: 54px;
        @media screen and (max-width: 760px) {
          grid-template-columns: 1fr;
          margin-top: 32px;
        }
        .font_out {
          display: flex;
          flex-direction: column;
          gap: 20px;
          @media screen and (max-width: 760px) {
            gap: 16px;
          }
          .one_font {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 16px;
            @media screen and (max-width: 760px) {
              gap: 12px;
            }
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
              @media screen and (max-width: 760px) {
                font-size: 16px;
                line-height: 24px;
              }
            }
          }
        }
        .img_out {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 100%;
            height: auto;
          }
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
          @media screen and (max-width: 760px) {
            font-size: 20px;
            line-height: 30px;
          }
        }
        .exten_det_content {
          display: grid;
          grid-template-columns: 0.75fr 1fr;
          gap: 80px;
          margin-top: 40px;
          @media screen and (max-width: 760px) {
            grid-template-columns: 1fr;
            margin-top: 20px;
          }
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
              @media screen and (max-width: 760px) {
                font-size: 16px;
                line-height: 24px;
              }
            }
          }
        }
      }
      .four_changes_out {
        display: grid;
        grid-template-columns: 300px 1fr;
        gap: 80px;
        margin-top: 120px;
        flex-wrap: wrap;
        position: relative;
        @media screen and (max-width: 760px) {
          margin-top: 60px;
          grid-template-columns: 1fr !important;
          gap: 20px;
        }
        .four_changes_out_left {
        }

        .change_left {
          flex-shrink: 0;

          display: flex;
          flex-direction: column;
          gap: 16px;
          flex-wrap: wrap;

          @media screen and (max-width: 760px) {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          .one_change_click_dom {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            gap: 8px;
            padding: 24px 0;
            border-radius: 20px;
            &:hover {
              background: #fef7f5;
              @media screen and (max-width: 760px) {
                background: white;
              }
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
              @media screen and (max-width: 760px) {
                font-size: 16px;
              }
            }
            .one_change_title_active {
              color: #f66442;
            }
          }
          .one_change_click_dom_active {
            background: #fef7f5;
            @media screen and (max-width: 760px) {
              background: white;
            }
          }
        }

        .change_left_sticky {
          @media screen and (min-width: 761px) {
            position: fixed;
            top: 80px;
            width: 300px; // 根据实际布局调整宽度
            max-width: 300px;
          }
        }

        .change_right {
          display: flex;
          flex-direction: column;
          gap: 120px;
          .one_dom {
            // border: 1px red solid;
            display: flex;
            flex-direction: column;
            // gap: 16px;
            .height_hack {
              height: 20px;
            }
          }
          .change_right_title {
            font-weight: 500;
            font-size: 32px;
            color: #201515;
            line-height: 44px;
            @media screen and (max-width: 760px) {
              font-size: 20px;
              line-height: 30px;
            }
          }
          .change_right_desc {
            font-weight: 400;
            font-size: 18px;
            color: #403f3e;
            line-height: 26px;
            margin-top: 12px;
            @media screen and (max-width: 760px) {
              font-size: 16px;
              line-height: 24px;
            }
          }
          .change_right_video {
            margin-top: 32px;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
            @media screen and (max-width: 760px) {
              grid-template-columns: 1fr;
              gap: 16px;
            }
            .change_right_video_iframe {
              position: relative;
              width: 100%;
              padding-bottom: 56.25%; /* 16:9 宽高比 (9/16 = 0.5625) */
              height: 0;
              border-radius: 16px;
              overflow: hidden;
              img {
                width: 100%;
                height: auto;
              }
            }
            .change_right_video_iframe iframe {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
            .video_hack {
              display: flex;
              flex-direction: column;
              gap: 4px;
              margin-top: 8px;
              a {
                display: block;
                color: #666666ff;
                text-decoration: underline;
                &:hover {
                  color: #f66442;
                }
              }
            }
            .right_click {
              // margin-top: 42px;
              margin-top: auto;
              display: flex;
              justify-content: flex-start;
              // align-items: center;
              grid-gap: 8px;
              cursor: pointer;

              @media (max-width: 450px) {
                margin-top: 21px;
              }

              .font {
                font-weight: 500;
                font-size: 20px;
                color: #ff7c0e;
                height: 28px;
                line-height: 28px;

                &:hover {
                  text-decoration: underline;
                }
              }

              .arrow {
                width: 24px;
                height: 24px;
                position: relative;
                top: 2px;
                flex-shrink: 0;

                img {
                  width: 100%;
                  height: 100%;
                }

                display: flex;
                justify-content: center;
                align-items: center;
              }

              &:hover {
                .arrow {
                  transform: translateX(8px);
                  transition: all 0.2s;
                }
              }
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
    @media screen and (max-width: 760px) {
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
      @media screen and (max-width: 760px) {
        padding: 50px 15px;
        grid-template-columns: 1fr;
        gap: 20px;
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
          @media screen and (max-width: 760px) {
            font-size: 20px;
            line-height: 30px;
          }
        }
        .desc {
          font-weight: 400;
          font-size: 20px;
          color: #403f3e;
          line-height: 28px;
          margin-bottom: 16px;
          @media screen and (max-width: 760px) {
            font-size: 16px;
            line-height: 24px;
          }
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
    @media screen and (max-width: 760px) {
      padding: 0px 15px;
    }
    background: #fff4f1;
    margin-top: 120px;
    @media screen and (max-width: 760px) {
      margin-top: 60px;
    }
    .part3 {
      padding: 100px 0;
      padding-bottom: 92px;
      @media screen and (max-width: 760px) {
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
        @media screen and (max-width: 760px) {
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
    padding: 120px 30px;
    border-bottom: 1px solid #e9e9e9;
    @media screen and (max-width: 760px) {
      padding: 60px 15px;
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

        @media (max-width: 760px) {
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
}
</style>
