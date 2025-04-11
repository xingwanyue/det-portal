<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { reactive } from 'vue';
const { t, locale } = useI18n();
import { useStore } from '@/store';
import vSlogen from '../components/slogen.vue';
import { urlGet, staticUrlGet, formatNumber, cdn, domain, getToken, saveStorage } from '@/utils';
import { platformData, portalData, completion } from '@/api';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();

const route = useRoute();
const store = useStore();
const user = computed(() => store.user);
const isVip = computed(() => store.isVip);

const url = route.query.url ? decodeURIComponent(route.query.url as string) : urlGet('/AskAI');

useSeoMeta({
  title: t('index.seometa.title'),
  description: t('index.seometa.description'),
});
const localePath = useLocalePath();

useHead({
  meta: [
    { name: 'DC.title', content: t('index.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('index.seometa.title') },
    { property: 'og:description', content: t('index.seometa.description') },
    { property: 'og:url', content: `https://www.${domain}${localePath('/')}` },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: t('index.seometa.title') },
    {
      name: 'twitter:description',
      content: t('index.seometa.description'),
    },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
});

const state = reactive({
  // 1 chat 2 det tutor
  zhuti: '1',
  modeSelectCode: '1',
  userQuestion: '',
  modeSelectShow: false,
  online: false,
  isclient: false,
});
const haveCookie = ref(false);
const modeList = computed(() => {
  return [
    {
      name: t('index.mode.mode1name'),
      desc: t('index.mode.mode1desc'),
      imgSrc: '/img/home/standard_icon.svg',
      tag: '',
      code: '1',
    },
    {
      name: t('index.mode.mode2name'),
      desc: t('index.mode.mode2desc'),
      imgSrc: '/img/home/deepseek_r1_icon.svg',
      tag: '',
      code: '2',
    },
    {
      name: t('index.mode.mode3name'),
      desc: t('index.mode.mode3desc'),
      imgSrc: '/img/home/chatgpt_4o_icon.svg',
      tag: t('index.mode.mode3tag'),
      code: '3',
    },
  ];
});
const sendMsg = async () => {
  if (!state.userQuestion.length) {
    return;
  }
  const args = {
    content: state.userQuestion,
    type: state.zhuti === '1' ? 'chat' : 'detTutor',
    model: '',
    online: state.online,
  } as any;
  if (state.modeSelectCode === '1') {
    args.model = 'standard';
  } else if (state.modeSelectCode === '2') {
    args.model = 'deepseekR1';
  } else if (state.modeSelectCode === '3') {
    args.model = 'chatGpt4o';
  }
  if (state.zhuti === '2') {
    args.online = false;
  }
  // online 参数 改为 '0' '1'
  args.online = state.online ? '1' : '0';
  const {
    data: { id },
  } = await completion({ ...args });

  if (url.startsWith('http')) {
    // window.location.href = `${url}?talkid=${id}`;
    window.location.href = urlGet(
      `/AskAI?id=${id}&talkmode=${args.type}&modeSelectCode=${state.modeSelectCode}&online=${state.online}`,
    );
    return;
  }

  router.push(`${url}?talkid=${id}`);
};

const token = await getToken();
const userPingLunResponse = computed(() => {
  const pinglunArr = [] as any;
  let pinglunMid = [] as any;
  for (let i = 0; i < portalData[0].length; i += 2) {
    pinglunMid[i] = JSON.parse(portalData[0][i].data);
    pinglunMid[i + 1] = JSON.parse(portalData[0][i + 1].data);
    pinglunMid[i].rate = Number(pinglunMid[i].rate);
    pinglunMid[i + 1].rate = Number(pinglunMid[i + 1].rate);
    pinglunArr.push([pinglunMid[i], pinglunMid[i + 1]]);
  }
  return pinglunArr;
});
const isMobile = ref(false);
onMounted(async () => {
  const token = await getToken();
  if (token) {
    haveCookie.value = true;
  }
  // 如果是在浏览器环境下，执行movePingLun
  if (process.client) {
    state.isclient = true;
    // 监听窗口大小 改变isMobile
    window.addEventListener('resize', () => {
      isMobile.value = window.innerWidth < 450;
    });
    // 获取路由参数code
    const code = route.query.code as string;
    if (code) {
      saveStorage('channel_code', code, true);
    }
    const invite_code = route.query.invite_code as string;
    if (invite_code) {
      saveStorage('invite_code', invite_code, true);
    }
  }
});
const changeMode = (code: string) => {
  if (code === '3') {
    // mode3 需要判断是否是vip 不是vip 跳转到pricing页面
    // 没有登陆 跳转到login页面
    if (user.value.id || haveCookie.value) {
      if (!isVip.value) {
        router.push(localePath('/pricing'));
        return;
      }
    } else {
      router.push(localePath('/login'));
      return;
    }
  }
  state.modeSelectCode = code;
  state.modeSelectShow = false;
};

// 将数字格式化 306281变为306k 3062811变为3061k

const isLoad = ref(false);
const onLoad = () => {
  isLoad.value = true;
};
const isLoad2 = ref(false);
const onLoad2 = () => {
  isLoad2.value = true;
};
const isLoad3 = ref(false);
const onLoad3 = () => {
  isLoad3.value = true;
};
const isLoad4 = ref(false);
const onLoad4 = () => {
  isLoad4.value = true;
};
const isLoad5 = ref(false);
const onLoad5 = () => {
  isLoad5.value = true;
};

// 引入cdn图片
const home1 = `${cdn}/store/portal/home/home1.png`;
const home2 = `${cdn}/store/portal/home/home3.png`;
const home3 = `${cdn}/store/portal/home/home2.png`;
const home4 = `${cdn}/store/portal/home/home55.png`;
const home5 = `${cdn}/store/portal/home/home4.png`;
const yellow_check_icon = `${cdn}/store/portal/home/yellow_check_icon.svg`;
</script>

<template>
  <div class="home" @click.stop="state.modeSelectShow = false">
    <div class="part1_wrapper">
      <div class="part1">
        <div class="page_title">
          <div class="h_one isnoMobile">
            <h1 v-html="$t('index.h1PC')"></h1>
          </div>
        </div>

        <div class="chat_dom_out">
          <div class="two_switch_out">
            <div class="one_switch" :class="state.zhuti === '1' ? 'one_switch_active' : ''" @click="state.zhuti = '1'">
              {{ $t('index.twoswitchname.chat') }}
            </div>
            <div class="one_switch" :class="state.zhuti === '2' ? 'one_switch_active' : ''" @click="state.zhuti = '2'">
              {{ $t('index.twoswitchname.dettutor') }}
            </div>
          </div>
          <div class="white_input_out">
            <div class="input_area_out">
              <el-input
                class="el_input"
                v-model="state.userQuestion"
                type="textarea"
                :placeholder="
                  state.zhuti === '1' ? 'Ask Anything Here.' : 'A professional Duolingo English Test AI Tutor.'
                "
                @keydown.enter.native.prevent="sendMsg"
              />
            </div>
            <div class="white_input_bottom">
              <div class="mode_select_out">
                <div class="icon" @click.stop="state.modeSelectShow = !state.modeSelectShow">
                  <img :src="modeList.find((item) => item.code === state.modeSelectCode)?.imgSrc" alt="mode_icon" />
                </div>
                <div class="mode_font" @click.stop="state.modeSelectShow = !state.modeSelectShow">
                  {{ modeList.find((item) => item.code === state.modeSelectCode)?.name }}
                </div>
                <div
                  :class="state.modeSelectShow ? 'arrow_icon arrow_icon_active' : 'arrow_icon'"
                  @click.stop="state.modeSelectShow = !state.modeSelectShow"
                >
                  <img src="/img/home/arrow_down.svg" alt="arrow_down" />
                </div>
                <div v-if="state.modeSelectShow" class="mode_select_list">
                  <div
                    v-for="item in modeList"
                    :key="item.code"
                    :class="
                      state.modeSelectCode === item.code
                        ? 'mode_select_list_item mode_select_list_item_active'
                        : 'mode_select_list_item'
                    "
                    @click="changeMode(item.code)"
                  >
                    <div class="left_icon">
                      <img :src="item.imgSrc" :alt="item.name" />
                    </div>
                    <div class="right">
                      <div class="name">
                        {{ item.name }} <span v-if="item.tag" class="Premium_tag">{{ item.tag }}</span>
                      </div>
                      <div class="desc">{{ item.desc }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-if="state.zhuti === '1'"
                :class="state.online ? 'online_btn online_btn_active' : 'online_btn'"
                @click="state.online = !state.online"
              >
                <div class="icon">
                  <img
                    :src="state.online ? '/img/home/erath_active_icon.svg' : '/img/home/earth_icon.svg'"
                    alt="online_icon"
                  />
                </div>
                <div class="online_font">{{ $t('index.Online') }}</div>
              </div>
              <div
                :class="state.userQuestion.length ? 'send_btn_gray send_btn_active' : 'send_btn_gray'"
                @click="sendMsg"
              >
                <div class="icon">
                  <img src="/img/home/fly_icon.svg" alt="send_icon" />
                </div>
                <div class="send_font">{{ $t('index.Send') }}</div>
              </div>
            </div>
          </div>
          <div class="we_also_have">
            <div class="we_also_have_title">{{ $t('index.wealsohave') }}</div>
            <div class="we_also_have_list">
              <NuxtLink
                :href="state.isclient ? urlGet('/questions') : ''"
                :title="$t('index.have1_title')"
                class="one_card card1"
              >
                <div class="icon">
                  <img src="/img/home/product_icon1.svg" :alt="$t('index.have1_title')" />
                </div>
                <div class="right">
                  <div class="title">{{ $t('index.have1_title') }}</div>
                  <div class="font" v-html="$t('index.have1_desc')" />
                </div>
              </NuxtLink>
              <NuxtLink
                :href="state.isclient ? urlGet('/exam') : ''"
                :title="$t('index.have2_title')"
                class="one_card card3"
              >
                <div class="icon">
                  <img src="/img/home/product_icon3.svg" :alt="$t('index.have2_title')" />
                </div>
                <div class="right">
                  <div class="title">{{ $t('index.have2_title') }}</div>
                  <div class="font" v-html="$t('index.have2_desc')" />
                </div>
              </NuxtLink>
              <NuxtLink
                :href="state.isclient ? urlGet('/correct') : ''"
                :title="$t('index.have3_title')"
                class="one_card card2"
              >
                <div class="icon">
                  <img src="/img/home/product_icon2.svg" :alt="$t('index.have3_title')" />
                </div>
                <div class="right">
                  <div class="title">{{ $t('index.have3_title') }}</div>
                  <div class="font" v-html="$t('index.have3_desc')" />
                </div>
              </NuxtLink>

              <NuxtLink :to="localePath('/courses')" :title="$t('index.have4_title')" class="one_card card5">
                <div class="icon">
                  <img src="/img/home/head_speak.svg" :alt="$t('index.have4_title')" />
                </div>
                <div class="right">
                  <div class="title">{{ $t('index.have4_title') }}</div>
                  <div class="font" v-html="$t('index.have4_desc')" />
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="three_nums_wrapper">
        <div class="three_nums_out">
          <div class="title1" data-aos="fade-up" data-aos-duration="1000">
            <h2>{{ $t('index.The_Best_Platform') }}</h2>
          </div>
          <div class="three_nums" data-aos="fade-up" data-aos-duration="1000">
            <div class="one_nums">
              <div class="one_nums_top">400,000+</div>
              <div class="one_nums_bottom">{{ $t('index.Tu') }}</div>
            </div>
            <div class="one_nums">
              <div class="one_nums_top">18,000+</div>
              <div class="one_nums_bottom">{{ $t('index.questions') }}</div>
            </div>
            <div class="one_nums">
              <div class="one_nums_top">40,000+</div>
              <div class="one_nums_bottom">{{ $t('index.mockTest') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="part2_wrapper">
      <div class="part2">
        <div class="one_img_article" data-aos="fade-up" data-aos-duration="1000">
          <div class="img_out">
            <img loading="lazy" :src="home1" :alt="$t('index.article1.title')" @load="onLoad" />
          </div>
          <div class="article_out">
            <div class="article_out_title">
              <h3>
                <NuxtLink :to="localePath('/practice')"> {{ $t('index.article1.title') }}</NuxtLink>
              </h3>
            </div>
            <div class="tips">
              <div class="tips_icon">
                <img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" />
              </div>
              <span
                v-html="
                  $t('index.article1.tips1', {
                    number: `<span class='yellow'>${formatNumber(platformData?.questionTotal)}</span>`,
                  })
                "
              ></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article1.tips2')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article1.tips3')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article1.tips4')"></span>
            </div>
            <NuxtLink class="get_more" :to="localePath('/practice')">
              <div class="font">{{ $t('index.article1.btn_font') }}</div>
              <div class="icon">
                <img src="/img/home/yellow_arrow_right.svg" :alt="$t('index.article1.btn_img_alt')" />
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="one_article_img" data-aos="fade-up" data-aos-duration="1000">
          <div class="img_out">
            <img loading="lazy" :src="home2" :alt="$t('index.article2.title')" @load="onLoad2" />
          </div>
          <div class="article_out">
            <div class="article_out_title">
              <h3>
                <NuxtLink :to="localePath('/mock-exam')">{{ $t('index.article2.title') }}</NuxtLink>
              </h3>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article2.tips1')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article2.tips2')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article2.tips3')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article2.tips4')"></span>
            </div>
            <NuxtLink class="get_more" :to="localePath('/mock-exam')">
              <div class="font">{{ $t('index.article2.btn_font') }}</div>
              <div class="icon">
                <img src="/img/home/yellow_arrow_right.svg" :alt="$t('index.article2.btn_img_alt')" />
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="one_img_article" data-aos="fade-up" data-aos-duration="1000">
          <div class="img_out">
            <img loading="lazy" :src="home3" :alt="$t('index.article3.title')" @load="onLoad3" />
          </div>
          <div class="article_out">
            <div class="article_out_title">
              <h3>
                <NuxtLink :to="localePath('/writing-ai-correction')"> {{ $t('index.article3.title') }}</NuxtLink>
              </h3>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article3.tips1')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article3.tips2')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article3.tips3')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article3.tips4')"></span>
            </div>
            <NuxtLink class="get_more" :to="localePath('/writing-ai-correction')">
              <div class="font">{{ $t('index.article3.btn_font') }}</div>
              <div class="icon">
                <img src="/img/home/yellow_arrow_right.svg" :alt="$t('index.article3.btn_img_alt')" />
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="one_article_img" data-aos="fade-up" data-aos-duration="1000">
          <div class="img_out">
            <img loading="lazy" :src="home4" :alt="$t('index.article4.title')" @load="onLoad4" />
            <el-skeleton v-show="!isLoad4" style="width: 100%" animated>
              <template #template>
                <el-skeleton-item variant="image" style="width: 100%; height: 300px" />
              </template>
            </el-skeleton>
          </div>
          <div class="article_out">
            <div class="article_out_title">
              <h3>
                <NuxtLink :to="localePath('/speaking-ai-correction')"> {{ $t('index.article4.title') }}</NuxtLink>
              </h3>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article4.tips1')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article4.tips2')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article4.tips3')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article4.tips4')"></span>
            </div>
            <NuxtLink class="get_more" :to="localePath('/speaking-ai-correction')">
              <div class="font">{{ $t('index.article4.btn_font') }}</div>
              <div class="icon">
                <img src="/img/home/yellow_arrow_right.svg" :alt="$t('index.article4.btn_img_alt')" />
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="one_img_article" data-aos="fade-up" data-aos-duration="1000">
          <div class="img_out">
            <el-image v-show="isLoad5" src="/img/home/home4.png" :alt="$t('index.article3.title')" @load="onLoad5" />
            <el-skeleton v-show="!isLoad5" style="width: 100%" animated>
              <template #template>
                <el-skeleton-item variant="image" style="width: 100%; height: 300px" />
              </template>
            </el-skeleton>
          </div>
          <div class="article_out">
            <div class="article_out_title">
              <h3>
                <NuxtLink :to="localePath('/courses')">{{ $t('index.article5.title') }}</NuxtLink>
              </h3>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article5.tips1')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article5.tips2')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article5.tips3')"></span>
            </div>
            <div class="tips">
              <div class="tips_icon"><img :src="yellow_check_icon" :alt="$t('index.yellow_check_icon_alt')" /></div>
              <span v-html="$t('index.article5.tips4')"></span>
            </div>
            <NuxtLink class="get_more" :to="localePath('/courses')">
              <div class="font">{{ $t('index.article5.btn_font') }}</div>
              <div class="icon">
                <img src="/img/home/yellow_arrow_right.svg" :alt="$t('index.article3.btn_img_alt')" />
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="review_wrapper">
      <div class="review">
        <div class="review_title">
          {{ $t('index.bigtitle2') }}
        </div>
        <div class="review_scroll_out">
          <div v-if="userPingLunResponse && userPingLunResponse.length" class="review_scroll_out_it">
            <Carousel
              :itemsToShow="4"
              :autoplay="2000"
              :wrap-around="true"
              :pauseAutoplayOnHover="true"
              :snap-align="'center'"
              :items-to-scroll="1"
            >
              <Slide
                v-for="(item, index) in userPingLunResponse.concat(userPingLunResponse)"
                :key="index"
                class="two_card_out"
              >
                <div class="width100">
                  <div class="one_card">
                    <div class="one_card_top">
                      <div class="one_card_top_left">
                        <div class="icon_touxiang">
                          <img loading="lazy" :src="staticUrlGet(item[0].avatar)" :alt="item[0].nickname" />
                        </div>
                        <div class="name_out">
                          <div class="name">{{ item[0].nickname }}</div>
                          <div class="country">{{ item[0].country }}</div>
                        </div>
                      </div>
                      <div class="one_card_top_right">
                        <el-rate class="custom_rate" v-model="item[0].rate" allow-half disabled size="large" />
                      </div>
                    </div>
                    <div class="one_card_font">{{ item[0].content }}</div>
                  </div>
                  <div class="one_card" style="margin-top: 24px">
                    <div class="one_card_top">
                      <div class="one_card_top_left">
                        <div class="icon_touxiang">
                          <img loading="lazy" :src="staticUrlGet(item[1].avatar)" :alt="item[1].nickname" />
                        </div>
                        <div class="name_out">
                          <div class="name">{{ item[1].nickname }}</div>
                          <div class="country">{{ item[1].country }}</div>
                        </div>
                      </div>
                      <div class="one_card_top_right">
                        <el-rate v-model="item[1].rate" allow-half disabled size="large" />
                      </div>
                    </div>
                    <div class="one_card_font">{{ item[1].content }}</div>
                  </div>
                </div>
              </Slide>
            </Carousel>
          </div>
          <div v-else class="review_scroll_out_it min_height350">
            <Carousel :itemsToShow="4" :autoplay="0" :wrap-around="true" :pauseAutoplayOnHover="true">
              <Slide v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]" :key="index" class="two_card_out">
                <div class="width100">
                  <div class="one_card" style="height: 250px">
                    <el-skeleton :rows="4" animated />
                  </div>
                  <div class="one_card" style="margin-top: 24px; height: 250px">
                    <el-skeleton :rows="4" animated />
                  </div>
                </div>
              </Slide>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
    <div>
      <v-slogen />
    </div>
    <!-- <div>
      <v-subscribe />
    </div> -->
  </div>
</template>
<style lang="scss">
.v-header {
  background: #fff4f1 !important;
}
.home {
  .scrolls {
    // border: 1px red solid;
    display: flex;
    align-items: flex-start;
    animation-name: around;
    animation-duration: 30s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @keyframes around {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
}
.chat_dom_out {
  .white_input_out {
    .input_area_out {
      padding-bottom: 16px;

      .el_input {
        .el-textarea__inner {
          height: 166px;
          border: none;
          box-shadow: none;
          border-radius: 0px;
          font-weight: 400;
          font-size: 16px;
          color: #201515;
          line-height: 22px;
          outline: none;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.home {
  margin: 0 auto;
  overflow: hidden;

  .part1_wrapper {
    background: linear-gradient(0, #ffffff 0%, #fff4f1 100%);
    padding: 0px 30px;
    @media (max-width: 450px) {
      padding: 0px 15px;
    }
    position: relative;

    .part1 {
      max-width: 1200px;
      overflow: hidden;
      margin: 0 auto;
      height: 100%;

      .page_title {
        margin-top: 56px;
        .h_one {
          font-weight: 600;
          font-size: 56px;
          color: #201515;
          h1 {
            text-align: center;
            font-weight: bold;
            font-size: 56px;
            color: #f66442;
            padding: 0px;
            margin: 0px;
            @media (max-width: 906px) {
              font-size: 46px;
            }
            @media (max-width: 744px) {
              font-size: 36px;
            }
            @media (max-width: 570px) {
              font-size: 26px;
            }
            @media (max-width: 450px) {
              font-size: 24px;
            }
          }
          :deep(.black_font) {
            color: #201515;
          }
        }
        // .isMobile {
        //   display: none;
        //   @media (max-width: 450px) {
        //     display: block;
        //   }
        // }
        // .isnoMobile {
        //   display: block;
        //   @media (max-width: 450px) {
        //     display: none;
        //   }
        // }
      }

      .chat_dom_out {
        padding: 0px 0px;
        margin-top: 40px;
        padding-bottom: 200px;
        @media (max-width: 730px) {
          padding: 0px 0px;
          padding-bottom: 50px;
        }
        .two_switch_out {
          width: fit-content;
          background: #ffffff;
          padding: 4px;
          border-radius: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          .one_switch {
            border-radius: 24px;
            padding: 8px 57px;
            font-weight: 400;
            font-size: 18px;
            color: #403f3e;
            cursor: pointer;
            @media (max-width: 450px) {
              padding: 8px 30px;
            }
          }
          .one_switch_active {
            background: rgba(246, 100, 66, 0.1);
            border-radius: 24px;
            color: #f66442;
          }
        }
        .white_input_out {
          background: #ffffff;
          border-radius: 16px;
          padding: 16px 16px;
          margin-top: 16px;
          &:hover {
            box-shadow: 0px 0px 16px 0px rgba(246, 100, 66, 0.05);
          }

          .white_input_bottom {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            .mode_select_out {
              background: #f3f4f6;
              border-radius: 4px;
              padding: 6px 8px;
              width: fit-content;
              display: flex;
              justify-content: center;
              align-items: center;
              grid-gap: 8px;
              cursor: pointer;
              position: relative;
              .icon {
                width: 20px;
                height: 20px;
                margin-left: 6px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .mode_font {
                font-weight: 400;
                font-size: 14px;
                color: #403f3e;
                min-width: 102px;
                @media (max-width: 450px) {
                  min-width: 0px;
                }
              }
              .arrow_icon {
                width: 16px;
                height: 16px;
                margin-left: 16px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .arrow_icon_active {
                transform: rotate(180deg);
              }
              .mode_select_list {
                background: #ffffff;
                box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.05);
                border-radius: 8px;
                position: absolute;
                top: calc(100% + 8px);
                left: 0;
                background: #ffffff;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 4px;
                padding: 8px;
                .mode_select_list_item {
                  border-radius: 8px;
                  padding: 8px;
                  padding-top: 12px;
                  cursor: pointer;
                  display: flex;
                  justify-content: center;
                  align-items: flex-start;
                  grid-gap: 6px;
                  &:hover {
                    background: #f3f4f6;
                  }
                  .left_icon {
                    width: 20px;
                    height: 20px;
                    img {
                      width: 100%;
                      height: 100%;
                    }
                  }
                  .right {
                    min-width: 242px;
                    .name {
                      font-weight: 600;
                      font-size: 14px;
                      color: #201515;
                      .Premium_tag {
                        padding: 1px 8px;
                        background: linear-gradient(270deg, #e7c39b 0%, #fbe2c1 100%);
                        border-radius: 8px;
                        font-weight: 500;
                        font-size: 10px;
                        color: #482b2a;
                      }
                    }
                    .desc {
                      font-weight: 400;
                      font-size: 12px;
                      color: #666666;
                      line-height: 20px;
                    }
                  }
                }
                .mode_select_list_item_active {
                  background: #feefec;
                  &:hover {
                    background: #feefec;
                  }
                }
              }
            }
            .online_btn {
              padding: 5px 8px;

              border-radius: 4px;
              border: 1px solid rgba(0, 0, 0, 0.1);
              display: flex;
              justify-content: center;
              align-items: center;
              grid-gap: 6px;
              margin-left: 8px;
              cursor: pointer;
              &:hover {
                background: rgba(0, 0, 0, 0.05);
              }
              .icon {
                width: 20px;
                height: 20px;

                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .online_font {
                font-weight: 400;
                font-size: 14px;
                color: #666666;
                @media (max-width: 450px) {
                  display: none;
                }
              }
            }
            .online_btn_active {
              border: 1px solid rgba(246, 100, 66, 0.2);
              background: #fff4f1;

              .online_font {
                color: #f66442;
              }
              &:hover {
                background: #fff4f1;
              }
            }
            .send_btn_gray {
              background: #f66442;
              border-radius: 4px;
              opacity: 0.5;
              display: flex;
              justify-content: center;
              align-items: center;
              width: fit-content;
              padding: 5px 7px;
              gap: 8px;
              margin-left: auto;
              cursor: not-allowed;
              .icon {
                width: 16px;
                height: 16px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .send_font {
                font-weight: 400;
                font-size: 14px;
                color: #ffffff;
              }
            }
            .send_btn_active {
              opacity: 1;
              cursor: pointer;
            }
          }
        }
        .we_also_have {
          margin-top: 32px;
          .we_also_have_title {
            font-weight: 600;
            font-size: 18px;
            color: #403f3e;
            margin-bottom: 16px;
          }
          .we_also_have_list {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 16px;
            @media (max-width: 1200px) {
              grid-template-columns: repeat(2, 1fr);
            }
            @media (max-width: 750px) {
              grid-template-columns: repeat(1, 1fr);
            }
            .one_card {
              padding: 16px 24px;
              border-radius: 8px;
              display: flex;

              align-items: center;
              grid-column-gap: 16px;
              background: #ffffff;
              cursor: pointer;
              .icon {
                width: 48px;
                height: 48px;
                flex-shrink: 0;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .right {
                .title {
                  font-weight: 600;
                  font-size: 18px;
                  color: #201515;
                }
                .font {
                  font-weight: 400;
                  font-weight: 400;
                  font-size: 14px;
                  color: #666666;
                  margin-top: 4px;
                }
              }
            }
            .card1 {
              &:hover {
                .right {
                  .title {
                    color: #3e8bf8;
                  }
                }
                background: linear-gradient(0, #f5fcff 0%, #ecf7ff 100%);
              }
            }
            .card2 {
              &:hover {
                .right {
                  .title {
                    color: #f66442;
                  }
                }
                background: linear-gradient(0, #fff8f5 0%, #fff0ec 100%);
              }
            }
            .card3 {
              &:hover {
                .right {
                  .title {
                    color: #ff7c0e;
                  }
                }
                background: linear-gradient(0, #fffaf4 0%, #ffefe1 100%);
                color: #fff;
              }
            }
            .card4 {
              &:hover {
                .right {
                  .title {
                    color: #06cc76;
                  }
                }
                background: linear-gradient(0, #f2fff6 0%, #e7fdec 100%);
                color: #fff;
              }
            }
            .card5 {
              &:hover {
                .right {
                  .title {
                    color: #201515ff;
                  }
                }
                background: linear-gradient(180deg, #eaeafe 0%, #fbf9ff 100%);
                color: #fff;
              }
            }
          }
        }
      }
    }
    .three_nums_wrapper {
      padding: 100px 0px;
      padding-top: 0px;

      margin-bottom: 120px;
      @media (max-width: 450px) {
        margin-bottom: 10px;
      }
      .three_nums_out {
        max-width: 1200px;
        @media (max-width: 1200px) {
          padding: 0px 30px;
        }
        margin: 0 auto;
        .title1 {
          h2 {
            font-weight: 500;
            font-size: 40px;
            color: #201515;
            text-align: center;
            padding: 0px;
            margin: 0px;
            @media (max-width: 906px) {
              font-size: 36px;
            }
            @media (max-width: 744px) {
              font-size: 36px;
            }
            @media (max-width: 570px) {
              font-size: 30px;
            }
            @media (max-width: 450px) {
              font-size: 23px;
            }
            @media (max-width: 450px) {
              font-size: 22px;
            }
          }
        }
        .three_nums {
          display: flex;
          justify-content: center;
          align-items: center;
          grid-column-gap: 100px;
          grid-row-gap: 40px;
          flex-wrap: wrap;
          margin-top: 64px;
          @media (max-width: 450px) {
            grid-column-gap: 16px;
          }
          .one_nums {
            text-align: center;
            .one_nums_top {
              font-weight: 600;
              font-size: 48px;
              color: #f66442;
              @media (max-width: 450px) {
                font-size: 23px;
              }
            }
            .one_nums_bottom {
              font-weight: 400;
              font-size: 20px;
              color: #201515;
              @media (max-width: 450px) {
                font-size: 18px;
              }
            }
          }
        }
      }
    }
  }

  .part2_wrapper {
    padding: 0px 30px;
    @media (max-width: 450px) {
      padding: 0px 15px;
    }
    box-sizing: border-box;
    .part2 {
      max-width: 1200px;
      // border: 1px blue solid;
      margin: 0 auto;

      .one_img_article {
        // border:1px red solid;
        display: grid;
        margin-bottom: 120px;
        @media (max-width: 450px) {
          margin-bottom: 30px;
          grid-row-gap: 0px;
        }
        grid-template-columns: 1fr 0.75fr;
        grid-column-gap: 40px;
        grid-row-gap: 40px;
        grid-template-areas: 'img_out  article_out';
        @media (max-width: 926px) {
          grid-template-columns: 1fr;
          grid-template-areas:
            'img_out'
            'article_out';
        }
        .img_out {
          grid-area: img_out;
          min-height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          :deep(.el-image) {
            box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.05);
          }
          img {
            box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.05);
            width: 100%;
            height: auto;
            border-radius: 16px;
          }
        }
        .article_out {
          // border: 1px red solid;
          grid-area: article_out;
          padding-top: 24px;
          @media (max-width: 926px) {
            padding-top: 0px;
          }
          .article_out_title {
            h3 {
              font-weight: 500;
              font-size: 32px;
              color: #201515;
              margin-top: 0px;
              margin-bottom: 0px;
              @media (max-width: 450px) {
                font-size: 22px;
              }
            }
            h4 {
              font-weight: 500;
              font-size: 32px;
              color: #201515;
              margin-top: 0px;
              margin-bottom: 0px;
              @media (max-width: 450px) {
                font-size: 22px;
              }
            }
          }
          .tips {
            font-weight: 400;
            font-size: 18px;
            color: #403f3e;
            margin-top: 24px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            grid-gap: 16px;
            .tips_icon {
              width: 18px;
              height: 18px;
              position: relative;
              top: 2px;
              flex-shrink: 0;
              img {
                width: 100%;
                height: 100%;
              }
            }
            ::v-deep(.yellow) {
              font-weight: 650;
              color: #f66442;
            }
            @media (max-width: 450px) {
              font-size: 16px;
            }
          }
          .get_more {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex: 1;
            // border: 1px red solid;
            margin-top: 34px;
            grid-column-gap: 8px;
            // @media (max-width: 926px) {
            //   justify-content: center;
            // }
            cursor: pointer;
            .font {
              font-weight: 500;
              font-size: 20px;
              color: #f66442;
            }
            .icon {
              width: 24px;
              height: 24px;
            }
            &:hover {
              .font {
                border-bottom: 1px #f66442 solid;
              }

              .icon {
                transform: translateX(8px);
                transition: all 0.2s;
              }
            }
          }
        }
      }
      .one_article_img {
        display: grid;
        margin-bottom: 120px;
        @media (max-width: 450px) {
          margin-bottom: 30px;
          grid-row-gap: 0px;
        }
        grid-template-columns: 0.75fr 1fr;
        grid-column-gap: 40px;
        grid-row-gap: 40px;
        grid-template-areas: ' article_out img_out';
        @media (max-width: 926px) {
          grid-template-columns: 1fr;
          grid-template-areas:
            'img_out'
            'article_out';
        }
        .img_out {
          grid-area: img_out;
          min-height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          // border: 1px red solid;
          :deep(.el-image) {
            box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.05);
          }
          img {
            width: 100%;
            height: auto;
            border-radius: 16px;
            box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.05);
          }
        }
        .article_out {
          // border: 1px blue solid;
          grid-area: article_out;
          padding-top: 24px;
          @media (max-width: 926px) {
            padding-top: 0px;
          }
          .article_out_title {
            h3 {
              font-weight: 500;
              font-size: 32px;
              color: #201515;
              margin-top: 0px;
              margin-bottom: 0px;
              @media (max-width: 450px) {
                font-size: 22px;
              }
            }
            h4 {
              font-weight: 500;
              font-size: 32px;
              color: #201515;
              margin-top: 0px;
              margin-bottom: 0px;
              @media (max-width: 450px) {
                font-size: 22px;
              }
            }
          }
          .tips {
            font-weight: 400;
            font-size: 18px;
            color: #403f3e;
            margin-top: 24px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            grid-gap: 16px;
            .tips_icon {
              width: 18px;
              height: 18px;
              position: relative;
              top: 2px;
              flex-shrink: 0;
              img {
                width: 100%;
                height: 100%;
              }
            }
            ::v-deep(.yellow) {
              font-weight: 650;
              color: #f66442;
            }
            @media (max-width: 450px) {
              font-size: 16px;
            }
          }
          .get_more {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex: 1;
            // border: 1px red solid;
            margin-top: 34px;
            grid-column-gap: 8px;
            // @media (max-width: 926px) {
            //   justify-content: center;
            // }
            cursor: pointer;
            .font {
              font-weight: 500;
              font-size: 20px;
              color: #f66442;
            }
            .icon {
              width: 24px;
              height: 24px;
            }
            &:hover {
              .font {
                border-bottom: 1px #f66442 solid;
              }
              .icon {
                transform: translateX(8px);
                transition: all 0.2s;
              }
            }
          }
        }
      }
    }
  }
  .part3_wrapper {
    overflow: hidden;
    background: #f2f4f6;
    padding-bottom: 72px;
    @media (max-width: 450px) {
      padding-bottom: 40px;
    }
    .part3 {
      .title {
        font-weight: 500;
        font-size: 40px;
        color: #201515;
        text-align: center;
        margin-top: 100px;
        @media (max-width: 450px) {
          font-size: 23px;
        }
      }
      .user_nums_out {
        display: flex;
        justify-content: center;
        align-items: center;
        grid-column-gap: 24px;
        margin-top: 40px;

        @media (max-width: 450px) {
          flex-wrap: wrap;
          grid-column-gap: 12px;
          grid-row-gap: 12px;
        }

        .one_num {
          padding: 4px 32px;
          @media (max-width: 450px) {
            padding: 4px 16px;
          }
          background: #ffffff;
          border-radius: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          grid-column-gap: 16px;
          .bigger_num {
            font-weight: 500;
            font-size: 32px;
            color: #201515;
            @media (max-width: 450px) {
              font-size: 22px;
            }
          }
          .small_font {
            font-weight: 400;
            font-size: 18px;
            color: #201515;
            @media (max-width: 450px) {
              font-size: 16px;
            }
          }
        }
      }
      .btn_out {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        .yellow {
          background: #f66442;
        }
      }

      .score_scroll_out {
        overflow: hidden;
        margin-top: 40px;
        position: relative;
        .one_score {
          width: 312px !important;
          @media (max-width: 450px) {
            width: 176px !important;
            margin-left: 12px;
          }
          box-sizing: border-box;
          height: fit-content;
          // border: 1px blue solid;
          margin-left: 24px;
          background: #ffffff;
          box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.05);
          border-radius: 8px;
          // height: 100px;
          .one_score_content {
            padding: 24px;
            flex: 1;

            .one_score_head {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              grid-column-gap: 16px;
              .user_icon {
                width: 48px;
                height: 48px;
                border-radius: 50%;
                overflow: hidden;
                flex-shrink: 0;
                @media (max-width: 450px) {
                  width: 28px;
                  height: 28px;
                }
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .user_detail {
                .user_name {
                  font-weight: 500;
                  font-size: 16px;
                  color: #201515;
                  text-align: left;
                  @media (max-width: 450px) {
                    font-size: 12px;
                  }
                }
                .user_country {
                  font-weight: 400;
                  font-size: 14px;
                  color: #403f3e;
                  text-align: left;
                  @media (max-width: 450px) {
                    font-size: 10px;
                  }
                }
              }
            }
            .one_score_content_img {
              width: auto;
              margin-top: 17px;
              border-radius: 8px;
              border: 2px solid #e9e9e9;
              img {
                width: 100%;
                height: auto;
              }
            }
          }
        }
      }
    }
  }
  .review_wrapper {
    background: #f66442;
    overflow-y: hidden;

    .review {
      padding-bottom: 100px;
      .review_title {
        margin-top: 100px;
        font-weight: 500;
        font-size: 40px;
        color: #ffffff;
        padding: 0 10px;
        text-align: center;
        margin-bottom: 64px;
        @media (max-width: 450px) {
          font-size: 23px;
          margin-top: 50px;
          margin-bottom: 34px;
        }
      }
      .review_scroll_out {
        // padding: 0 20px;

        scrollbar-width: none;
        .review_scroll_out_it {
          overflow: hidden;
          .two_card_out {
            // border: 1px red solid;
            padding: 0 6px; // 改用 padding 来设置间距
            width: calc(28% - 12px) !important; // 动态计算宽度，考虑间距
            @media (max-width: 1450px) {
              width: calc(35% - 12px) !important; // 动态计算宽度，考虑间距
            }
            @media (max-width: 1250px) {
              width: calc(50% - 12px) !important; // 动态计算宽度，考虑间距
            }
            @media (max-width: 1050px) {
              width: calc(65% - 12px) !important; // 动态计算宽度，考虑间距
            }
            @media (max-width: 850px) {
              width: calc(75% - 12px) !important; // 动态计算宽度，考虑间距
            }
            @media (max-width: 650px) {
              width: calc(85% - 12px) !important; // 动态计算宽度，考虑间距
            }

            @media (max-width: 450px) {
              width: calc(100% - 12px) !important;
            }

            display: flex;
            justify-content: center;
            align-items: flex-start;
            .width100 {
              width: 100%;
            }
          }
          .one_card {
            padding: 24px;
            background: #ffffff;
            border-radius: 8px;
            width: 100%;
            .one_card_top {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .one_card_top_left {
                display: flex;
                justify-content: flex-start;
                grid-column-gap: 16px;
                align-items: center;
                .icon_touxiang {
                  width: 48px;
                  height: 48px;
                  flex-shrink: 0;
                  border-radius: 50%;
                  overflow: hidden;
                  @media (max-width: 450px) {
                    width: 28px;
                    height: 28px;
                  }
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
                .name_out {
                  .name {
                    font-weight: 500;
                    font-size: 16px;
                    color: #201515;
                    text-align: left;
                    @media (max-width: 450px) {
                      font-size: 14px;
                    }
                  }
                  .country {
                    margin-top: 4px;
                    font-weight: 400;
                    font-size: 14px;
                    color: #403f3e;
                    text-align: left;
                    @media (max-width: 450px) {
                      font-size: 10px;
                    }
                  }
                }
              }
              .one_card_top_right {
                :deep(.el-rate .el-rate__icon) {
                  font-size: 28px;
                }
                :deep(.el-icon) {
                  width: 15px;
                }
              }
            }
            .one_card_font {
              font-weight: 400;
              font-size: 18px;
              color: #201515;
              margin-top: 24px;
              text-align: left;
              @media (max-width: 450px) {
                font-size: 16px;
              }
            }
          }
        }
        .min_height350 {
          height: 550px;
        }
      }
    }
  }
  @keyframes scroll {
    0% {
      transform: translateX(0); /* 初始位置 */
    }
    100% {
      transform: translateX(-100%); /* 向上滚动 100% 的高度 */
    }
  }
}
</style>
