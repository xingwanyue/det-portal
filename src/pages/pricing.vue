<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { getToken } from '@/utils';
const { t } = useI18n();
import { getVipdataNoToken, getVipdataWithToken, getSetting } from '@/api';

import vMembershippricepackages from '../components/membershipprice_packages.vue';
import { domain, cdn, formatCash, urlGet } from '@/utils';
import { useStore } from '@/store';
useSeoMeta({
  title: t('pricing.seometa.title'),
  description: t('pricing.seometa.description'),
});
const localePath = useLocalePath();

useHead({
  meta: [
    { name: 'DC.title', content: t('pricing.seometa.title') },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: t('pricing.seometa.title') },
    { property: 'og:description', content: t('pricing.seometa.description') },
    { property: 'og:url', content: `https://www.${domain}${localePath('/pricing')}` },
    { property: 'og:site_name', content: 'DET Practice' },
    { property: 'og:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@det_practice' },
    { name: 'twitter:creator', content: 'DET Practice' },
    { name: 'twitter:title', content: t('pricing.seometa.title') },
    {
      name: 'twitter:description',
      content: t('pricing.seometa.description'),
    },
    { name: 'twitter:image', content: 'https://www.detpractice.com/img/footer/small_logo.svg' },
  ],
});

const circle_check_icon = `${cdn}/store/portal/pricing/circle_check_icon.svg`;
const store = useStore();
const user = computed(() => store.user);
const userChangeFlag = ref(() => store.user);
const isVip = computed(() => store.isVip);
const savetagnumber = ref('');
const tableSwitchOpen = ref(true);
// 2 Free 3 Basic 4 Plus 5 Pro
const mobileShowWhich = ref(5);

const onlycorrectTimesid = ref(0);
const onlycorrectTimesprice = ref(0);
const isSticky = ref(false);
const handleScroll = () => {
  const scrollTop = window.scrollY;
  const feature = document.querySelector('.Feature_wrapper');
  const featureRect = feature?.getBoundingClientRect();
  if (featureRect?.top <= 10) {
    isSticky.value = true;
  } else {
    isSticky.value = false;
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
  // {
  //   name: t('pricing.aqList[2].name'),
  //   content: t('pricing.aqList[2].content'),
  //   open: false,
  // },
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

const vipsData = ref({}) as any;

const getData = async () => {
  if (!user.value.id) {
    const {
      data: { data },
    } = await getVipdataNoToken();
    const practiceArr = [] as any;
    const packagesArr = [] as any;

    const correctSelectBuyTimes = data.filter((item: any) => item.type === '3');
    const mockSelectBuyTimes = data.filter((item: any) => item.type === '4');
    data.forEach((item: any) => {
      if (item.type === '1') {
        item.correctTimesid = correctSelectBuyTimes[1].id;
        onlycorrectTimesid.value = correctSelectBuyTimes[1].id;
        onlycorrectTimesprice.value = correctSelectBuyTimes[1].price;
        item.correctPrice = correctSelectBuyTimes[1].price;
        item.correctOriginalPrice = correctSelectBuyTimes[1].originalPrice;
        practiceArr.push(item);
      } else if (item.type === '5' && item.day === 30) {
        packagesArr.push({
          ...item,
          originalPrice90: data.find(
            (itemin: any) => itemin.type === '5' && itemin.day === 90 && itemin.tag === item.tag,
          ).originalPrice,
          price90: data.find((itemin: any) => itemin.type === '5' && itemin.day === 90 && itemin.tag === item.tag)
            .price,
          id90: data.find((itemin: any) => itemin.type === '5' && itemin.day === 90 && itemin.tag === item.tag).id,
          saveOpen: true,
          qylist: [
            // t('pricing.packagesallQy.qy2', {
            //   times: item.tag === 'Pro' ? t('pricing.packagesallQy.unlimited') : item.correctNum,
            // }),
            item.tag === 'Pro'
              ? t('pricing.packagesallQy.unlimited')
              : t('pricing.packagesallQy.qy2', {
                  times: item.correctNum,
                }),
            item.examNum === 0
              ? t('pricing.packagesallQy.qy1_1')
              : t('pricing.packagesallQy.qy1', { times: item.examNum }),
            t('pricing.packagesallQy.qy3'),
            t('pricing.packagesallQy.qy4'),
            t('pricing.packagesallQy.qy5'),
            t('pricing.packagesallQy.qy6'),
            t('pricing.packagesallQy.qy7'),
            t('pricing.packagesallQy.qy8'),
            t('pricing.packagesallQy.qy9'),
            t('pricing.packagesallQy.qy10'),
            t('pricing.packagesallQy.qy11'),
            t('pricing.packagesallQy.qyspeak'),
            t('pricing.packagesallQy.qywrite'),
          ],
        });
        // 如果item.tag = Pro 向qylist 第4 5 位置插入
        console.log(item);
        // if (item.tag === 'Pro') {
        //   packagesArr[packagesArr.length - 1].qylist.splice(3, 0, t('pricing.packagesallQy.qyspeak'));
        //   packagesArr[packagesArr.length - 1].qylist.splice(4, 0, t('pricing.packagesallQy.qywrite'));
        // }
      }
    });
    vipsData.value = { practiceArr, packagesArr, correctSelectBuyTimes, mockSelectBuyTimes };
  } else {
    const token = await getToken();
    const {
      data: { data },
    } = await getVipdataWithToken(token);
    const practiceArr = [] as any;
    const packagesArr = [] as any;

    const correctSelectBuyTimes = data.filter((item: any) => item.type === '3');
    const mockSelectBuyTimes = data.filter((item: any) => item.type === '4');
    data.forEach((item: any) => {
      if (item.type === '1') {
        item.correctTimesid = correctSelectBuyTimes[1].id;
        onlycorrectTimesid.value = correctSelectBuyTimes[1].id;
        onlycorrectTimesprice.value = correctSelectBuyTimes[1].price;
        item.correctPrice = correctSelectBuyTimes[1].price;
        item.correctOriginalPrice = correctSelectBuyTimes[1].originalPrice;

        practiceArr.push(item);
      } else if (item.type === '5' && item.day === 30) {
        packagesArr.push({
          ...item,
          originalPrice90: data.find(
            (itemin: any) => itemin.type === '5' && itemin.day === 90 && itemin.tag === item.tag,
          ).originalPrice,
          price90: data.find((itemin: any) => itemin.type === '5' && itemin.day === 90 && itemin.tag === item.tag)
            .price,
          id90: data.find((itemin: any) => itemin.type === '5' && itemin.day === 90 && itemin.tag === item.tag).id,
          saveOpen: true,
          qylist: [
            // t('pricing.packagesallQy.qy2', {
            //   times: item.tag === 'Pro' ? t('pricing.packagesallQy.unlimited') : item.correctNum,
            // }),
            item.tag === 'Pro'
              ? t('pricing.packagesallQy.unlimited')
              : t('pricing.packagesallQy.qy2', { times: item.correctNum }),
            item.examNum === 0
              ? t('pricing.packagesallQy.qy1_1')
              : t('pricing.packagesallQy.qy1', { times: item.examNum }),
            t('pricing.packagesallQy.qy3'),
            t('pricing.packagesallQy.qy4'),
            t('pricing.packagesallQy.qy5'),
            t('pricing.packagesallQy.qy6'),
            t('pricing.packagesallQy.qy7'),
            t('pricing.packagesallQy.qy8'),
            t('pricing.packagesallQy.qy9'),
            t('pricing.packagesallQy.qy10'),
            t('pricing.packagesallQy.qy11'),
            t('pricing.packagesallQy.qyspeak'),
            t('pricing.packagesallQy.qywrite'),
          ],
        });
        // 如果item.tag = Pro 向qylist 第4 5 位置插入
        // if (item.tag === 'Pro') {
        //   packagesArr[packagesArr.length - 1].qylist.splice(3, 0, t('pricing.packagesallQy.qyspeak'));
        //   packagesArr[packagesArr.length - 1].qylist.splice(4, 0, t('pricing.packagesallQy.qywrite'));
        // }
      }
    });
    vipsData.value = { practiceArr, packagesArr, correctSelectBuyTimes, mockSelectBuyTimes };
  }
};
const getsavenum = async () => {
  const {
    data: { data },
  } = await getSetting();
  savetagnumber.value = data[0].data;
};

// 检查窗口宽度的函数
const checkWindowWidth = () => {
  const elements = ['shu2', 'shu3', 'shu4'];
  elements.forEach((className) => {
    const els = document.getElementsByClassName(className);
    for (let i = 0; i < els.length; i++) {
      const el = els[i] as HTMLElement;
      if (window.innerWidth <= 750) {
        el.style.display = 'none';
      } else {
        el.style.display = 'flex';
      }
    }
  });
};

onMounted(async () => {
  getData();
  getsavenum();
  checkWindowWidth();
  window.addEventListener('resize', checkWindowWidth);
  window.addEventListener('scroll', handleScroll);
  // 监听窗口宽度 小于等于 750  将shu3 shu4 shu5 display:no
  // 监听窗口宽度 大于 750  将shu3 shu4 shu5 display:flex
});
onUnmounted(() => {
  window.removeEventListener('resize', checkWindowWidth);
});

watch(
  () => user.value.write,
  () => {
    getData();
  },
);
watch(
  () => user.value.speak,
  () => {
    getData();
  },
);

const CurrentMembershipId = ref(0);
const changeCurrentMembershipId = (id: number) => {
  CurrentMembershipId.value = id;
};

const coursrBuyedVisible = ref(false);
const openCoursrBuyed = () => {
  coursrBuyedVisible.value = true;
};
const handleCloseCoursrBuyed = () => {
  coursrBuyedVisible.value = false;
};

const openOrCloseOneQuestion = (item: any) => {
  item.open = !item.open;
};
const changeMobileShowWhich = (which: number) => {
  mobileShowWhich.value = which;
  // 隐藏所有元素
  const allElements = ['shu2', 'shu3', 'shu4', 'shu5'];
  allElements.forEach((className) => {
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
      (elements[i] as HTMLElement).style.display = 'none';
    }
  });

  // 只显示选中的元素
  const selectedElements = document.getElementsByClassName(`shu${which}`);
  for (let i = 0; i < selectedElements.length; i++) {
    (selectedElements[i] as HTMLElement).style.display = 'flex';
  }
};

const contaceUsList = ref([
  {
    type: '1',
    icon: '/img/pricing/online.svg',
    font: t('pricing.contaceUsList.type1.font'),
    tip: t('pricing.contaceUsList.type1.tip'),
    btn: t('pricing.contaceUsList.type1.btn'),
  },
  {
    type: '2',
    icon: '/img/pricing/email.svg',
    font: t('pricing.contaceUsList.type2.font'),
    tip: t('pricing.contaceUsList.type2.tip'),
    btn: 'support@detpractice.com',
  },
  {
    type: '3',
    icon: '/img/pricing/message.svg',
    font: t('pricing.contaceUsList.type3.font'),
    tip: t('pricing.contaceUsList.type3.tip'),
    btn: t('pricing.contaceUsList.type3.btn'),
  },
]);

const copy = async (text: any) => {
  if (navigator.clipboard) {
    // 尝试使用 Clipboard API
    try {
      await navigator.clipboard.writeText(text);
      ElMessage.success('Copy successfully');
    } catch (err) {
      ElMessage.error('Failed to copy text: ' + err);
    }
  } else if (document.execCommand) {
    // 尝试使用 document.execCommand
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      ElMessage.success('Copy successfully');
    } catch (err) {
      // console.error('Failed to copy text: ' + err);
      ElMessage.error('Failed to copy text: ' + err);
    } finally {
      document.body.removeChild(textarea);
    }
  } else {
    ElMessage.error('Your browser does not support copying text to clipboard.');
  }
};
const openchat = () => {
  (window as any).tidioChatApi.open();
};
const formateMinToHour = (min: number) => {
  const hour = Math.floor(min / 60);
  const minute = min % 60;
  if (hour === 0) {
    return `${minute}mins ago`;
  }
  return `${hour}h ${minute}mins ago`;
};
const buyMembership = (item: any) => {
  const { id, id90 } = item;
  if (tableSwitchOpen.value) {
    store.stripePay({ vipId: `${id90}` });
  } else {
    store.stripePay({ vipId: `${id}` });
  }
};

const buyCorrectNum = () => {
  if (!isVip.value) {
    ElMessageBox.alert(
      "You haven't activated the practice access yet.  you need to have the practice rights before you can use the correction service.",
      'Buying Tips',
      {
        confirmButtonText: 'Continue to buy',
        cancelButtonText: 'Cancel',
        cancelButtonClass: 'cancel_btn',
        showCancelButton: true,
        callback: (action: string) => {
          if (action === 'confirm') {
            store.stripePay({ vipId: onlycorrectTimesid.value });
          }
        },
      },
    );
    return;
  }
  store.stripePay({ vipId: onlycorrectTimesid.value });
};
</script>
<template>
  <div class="pricing">
    <div class="part1_wrapper">
      <div class="part1">
        <div class="title1">
          <h1>{{ $t('pricing.pagefont.h1') }}</h1>
        </div>

        <div class="three_out_new">
          <div class="one">
            <div class="one_icon"><img :src="circle_check_icon" :alt="$t('pricing.pagefont.circle_check_icon')" /></div>
            <div class="one_font">{{ $t('pricing.pagefont.atde') }}</div>
          </div>
          <div class="one">
            <div class="one_icon"><img :src="circle_check_icon" :alt="$t('pricing.pagefont.circle_check_icon')" /></div>
            <div class="one_font">{{ $t('pricing.pagefont.sep') }}</div>
          </div>
          <div class="one">
            <div class="one_icon"><img :src="circle_check_icon" :alt="$t('pricing.pagefont.circle_check_icon')" /></div>
            <div class="one_font">{{ $t('pricing.pagefont.ca') }}</div>
          </div>
        </div>

        <div class="Service_dom">
          <!-- packages -->
          <v-membershippricepackages
            :membershipArr="vipsData?.packagesArr || []"
            :correctSelectBuyTimes="vipsData?.correctSelectBuyTimes || []"
            :mockSelectBuyTimes="vipsData?.mockSelectBuyTimes || []"
            :savetagnumber="savetagnumber"
          ></v-membershippricepackages>
        </div>

        <div class="bank_card">
          <div class="title">{{ $t('pricing.pagefont.Secure_Payment') }}</div>
          <div class="img_self">
            <img src="/img/pricing/payment.svg" :alt="$t('pricing.pagefont.Secure_Payment')" />
          </div>
        </div>
      </div>
      <div class="circle_items">
        <div class="circle_01"></div>
        <div class="circle_02"></div>
      </div>
    </div>
    <div class="Feature_wrapper">
      <div class="Feature_in">
        <div class="Feature_title">
          <h2>{{ $t('pricing.pagefont.Feature') }}</h2>
        </div>
        <!-- 手机端展示 -->
        <div class="Feature_content_mobile">
          <div class="change_wrapper">
            <div
              :class="mobileShowWhich === 2 ? 'one_type one_type_active' : 'one_type'"
              @click="changeMobileShowWhich(2)"
            >
              {{ $t('pricing.pagefont.four_vips_name.name1') }}
            </div>
            <div
              :class="mobileShowWhich === 3 ? 'one_type one_type_active' : 'one_type'"
              @click="changeMobileShowWhich(3)"
            >
              {{ $t('pricing.pagefont.four_vips_name.name2') }}
            </div>
            <div
              :class="mobileShowWhich === 4 ? 'one_type one_type_active' : 'one_type'"
              @click="changeMobileShowWhich(4)"
            >
              {{ $t('pricing.pagefont.four_vips_name.name3') }}
            </div>
            <div
              :class="mobileShowWhich === 5 ? 'one_type one_type_active' : 'one_type'"
              @click="changeMobileShowWhich(5)"
            >
              {{ $t('pricing.pagefont.four_vips_name.name4') }}
            </div>
          </div>
        </div>
        <!-- pc展示1 -->
        <div class="Feature_content">
          <div :class="['one_feature', { static_css: isSticky }]">
            <div class="one_feature_item havepadding shu1" style="padding-left: 0px">
              <div class="title">{{ $t('pricing.pagefont.pre') }}</div>
              <div class="switch_out">
                <div class="font">{{ $t('pricing.pagefont.sw3m', { times: 25 }) }}</div>
                <div><el-switch v-model="tableSwitchOpen" /></div>
              </div>
            </div>
            <div class="one_feature_item havepadding shu2">
              <div class="title">{{ $t('pricing.pagefont.four_vips_name.name1') }}</div>
              <div class="price_out">0</div>

              <NuxtLink class="buy_btn_new" :href="urlGet(`/home`)"> Try for free </NuxtLink>
            </div>
            <div class="one_feature_item havepadding shu3">
              <div class="title">{{ $t('pricing.pagefont.four_vips_name.name2') }}</div>
              <div v-if="!tableSwitchOpen" class="price_out common_price_number_animate">
                <span v-if="vipsData?.packagesArr" class=""> ${{ formatCash(vipsData.packagesArr[0].price) }}</span>
                /{{ $t('pricing.pagefont.month1') }}
              </div>
              <div v-else class="price_out common_price_number_animate">
                $<span v-if="vipsData?.packagesArr" class="">
                  {{ formatCash(vipsData.packagesArr[0].price90 / 3) }}</span
                >
                /{{ $t('pricing.pagefont.month1') }}
              </div>
              <div v-if="user?.id && !user?.temp" class="buy_btn_new" @click="buyMembership(vipsData?.packagesArr[0])">
                {{ $t('pricing.pagefont.Buy_Now') }}
              </div>
              <NuxtLink :to="localePath(`/login?url=/pricing`)" v-else class="buy_btn_new">
                {{ $t('pricing.pagefont.Buy_Now') }}
              </NuxtLink>
            </div>
            <div class="one_feature_item havepadding shu4">
              <div class="title">{{ $t('pricing.pagefont.four_vips_name.name3') }}</div>
              <div v-if="!tableSwitchOpen" class="price_out common_price_number_animate">
                <span v-if="vipsData?.packagesArr"> ${{ formatCash(vipsData.packagesArr[1].price) }}</span>
                /{{ $t('pricing.pagefont.month1') }}
              </div>
              <div v-else class="price_out common_price_number_animate">
                <span v-if="vipsData?.packagesArr">${{ formatCash(vipsData.packagesArr[1].price90 / 3) }}</span>
                /{{ $t('pricing.pagefont.month1') }}
              </div>
              <div v-if="user?.id && !user?.temp" class="buy_btn_new" @click="buyMembership(vipsData?.packagesArr[1])">
                {{ $t('pricing.pagefont.Buy_Now') }}
              </div>
              <NuxtLink :to="localePath(`/login?url=/pricing`)" v-else class="buy_btn_new">
                {{ $t('pricing.pagefont.Buy_Now') }}
              </NuxtLink>
            </div>
            <div class="one_feature_item havepadding one_feature_item_last shu5 lt_rt_radio">
              <div class="title">
                {{ $t('pricing.pagefont.four_vips_name.name4') }}
                <div v-if="vipsData?.packagesArr && tableSwitchOpen" class="save_tag_fer">
                  {{
                    $t('pricing.pagefont.only_save', {
                      num: (
                        (1 - vipsData.packagesArr[2].price90 / vipsData.packagesArr[2].originalPrice90) *
                        100
                      ).toFixed(0),
                    })
                  }}
                </div>
              </div>
              <div v-if="!tableSwitchOpen" class="price_out common_price_number_animate">
                <span v-if="vipsData?.packagesArr"> ${{ formatCash(vipsData.packagesArr[2].price) }}</span>
                /{{ $t('pricing.pagefont.month1') }}
              </div>
              <div v-else class="price_out common_price_number_animate">
                <span v-if="vipsData?.packagesArr">${{ formatCash(vipsData.packagesArr[2].price90 / 3) }}</span>
                /{{ $t('pricing.pagefont.month1') }}
              </div>
              <div v-if="user?.id && !user?.temp" class="buy_btn_new" @click="buyMembership(vipsData?.packagesArr[2])">
                {{ $t('pricing.pagefont.Buy_Now') }}
              </div>
              <NuxtLink :to="localePath(`/login?url=/pricing`)" v-else class="buy_btn_new">
                {{ $t('pricing.pagefont.Buy_Now') }}
              </NuxtLink>
            </div>
          </div>
          <!-- 表内的title**************************** -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="img_font">
                <div class="img_icon">
                  <img src="/img/pricing/table1_mock_icon.svg" />
                </div>
                <div class="font">{{ $t('pricing.pagefont.mockexam') }}</div>
              </div>
            </div>
            <div class="one_feature_item shu2"></div>
            <div class="one_feature_item shu3"></div>
            <div class="one_feature_item shu4"></div>
            <div class="one_feature_item one_feature_item_last shu5"></div>
          </div>
          <!-- 表内title下的一个内容 -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="regular_font">
                {{ $t('pricing.pagefont.full_len') }}

                <el-popover class="box-item" :content="$t('pricing.pagefont.full_len_tips')" placement="top">
                  <template #reference>
                    <div class="t_icon">
                      <img src="/img/pricing/tip.svg" />
                    </div>
                  </template>
                </el-popover>
              </div>
            </div>
            <div class="one_feature_item center_show shu2">
              <div class="have_or_no">
                <div class="icon">
                  <img src="/img/pricing/black_heng_icon.svg" />
                </div>
                <div class="have_nums"></div>
              </div>
            </div>
            <div class="one_feature_item center_show shu3">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_heng_icon.svg" /></div>
                <div class="have_nums"></div>
              </div>
            </div>
            <div class="one_feature_item center_show shu4">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <div class="have_nums">3 {{ $t('pricing.pagefont.timemonth') }}</div>
              </div>
            </div>
            <div class="one_feature_item center_show one_feature_item_last shu5">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <div class="have_nums">10 {{ $t('pricing.pagefont.timemonth') }}</div>
              </div>
            </div>
          </div>
          <!-- 表内的title***************************** -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="img_font">
                <div class="img_icon">
                  <img src="/img/pricing/table_2_correction_icon.svg" />
                </div>
                <div class="font">{{ $t('pricing.pagefont.ai_correct') }}</div>
              </div>
            </div>
            <div class="one_feature_item shu2"></div>
            <div class="one_feature_item shu3"></div>
            <div class="one_feature_item shu4"></div>
            <div class="one_feature_item one_feature_item_last shu5"></div>
          </div>
          <!-- 表内title下的一个内容 -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="regular_font">{{ $t('pricing.pagefont.ai_p_c_s') }}</div>
            </div>
            <div class="one_feature_item center_show shu2">
              <div class="have_or_no">
                <div class="icon">
                  <img src="/img/pricing/black_heng_icon.svg" />
                </div>
                <div class="have_nums"></div>
              </div>
            </div>
            <div class="one_feature_item center_show shu3">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <div class="have_nums">10 {{ $t('pricing.pagefont.timemonth') }}</div>
              </div>
            </div>
            <div class="one_feature_item center_show shu4">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <div class="have_nums">60 {{ $t('pricing.pagefont.timemonth') }}</div>
              </div>
            </div>
            <div class="one_feature_item center_show one_feature_item_last shu5">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <div class="have_nums">{{ $t('pricing.pagefont.Unlimited') }}</div>
              </div>
            </div>
          </div>
          <!-- 表内title下的一个内容 -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="regular_font">
                {{ $t('pricing.pagefont.det_s_ai_c') }}

                <!-- <el-tooltip
                  class="box-item"
                  effect="dark"
                  :content="$t('pricing.pagefont.det_s_ai_c_tips')"
                  placement="top-start"
                >
                  <div class="t_icon"><img src="/img/pricing/tip.svg" /></div>
                </el-tooltip> -->
                <el-popover class="box-item" :content="$t('pricing.pagefont.det_s_ai_c_tips')" placement="top">
                  <template #reference>
                    <div class="t_icon">
                      <img src="/img/pricing/tip.svg" />
                    </div>
                  </template>
                </el-popover>
              </div>
            </div>
            <div class="one_feature_item center_show shu2">
              <div class="have_or_no">
                <div class="icon">
                  <img src="/img/pricing/black_heng_icon.svg" />
                </div>
                <div class="have_nums"></div>
              </div>
            </div>
            <div class="one_feature_item center_show shu3">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <div class="have_nums"></div>
              </div>
            </div>
            <div class="one_feature_item center_show shu4">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <div class="have_nums"></div>
              </div>
            </div>
            <div class="one_feature_item center_show one_feature_item_last shu5">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <div class="have_nums"></div>
              </div>
            </div>
          </div>
          <!-- 表内title下的一个内容 -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="regular_font">
                {{ $t('pricing.pagefont.det_w_ai_c') }}
                <!-- <el-tooltip
                  class="box-item"
                  effect="dark"
                  :content="$t('pricing.pagefont.det_w_ai_c_tips')"
                  placement="top-start"
                >
                  <div class="t_icon"><img src="/img/pricing/tip.svg" /></div>
                </el-tooltip> -->
                <el-popover class="box-item" :content="$t('pricing.pagefont.det_w_ai_c_tips')" placement="top">
                  <template #reference>
                    <div class="t_icon">
                      <img src="/img/pricing/tip.svg" />
                    </div>
                  </template>
                </el-popover>
              </div>
            </div>
            <div class="one_feature_item center_show shu2">
              <div class="have_or_no">
                <div class="icon">
                  <img src="/img/pricing/black_heng_icon.svg" />
                </div>
                <div class="have_nums"></div>
              </div>
            </div>
            <div class="one_feature_item center_show shu3">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <div class="have_nums"></div>
              </div>
            </div>
            <div class="one_feature_item center_show shu4">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <div class="have_nums"></div>
              </div>
            </div>
            <div class="one_feature_item center_show one_feature_item_last shu5">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <div class="have_nums"></div>
              </div>
            </div>
          </div>
          <!-- 表内的title***************************** -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="img_font">
                <div class="img_icon">
                  <img src="/img/pricing/table3_practice_icon.svg" />
                </div>
                <div class="font">{{ $t('pricing.pagefont.Practice') }}</div>
              </div>
            </div>
            <div class="one_feature_item shu2"></div>
            <div class="one_feature_item shu3"></div>
            <div class="one_feature_item shu4"></div>
            <div class="one_feature_item one_feature_item_last shu5"></div>
          </div>
          <!-- 表内title下的一个内容 -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="regular_font">{{ $t('pricing.pagefont.pr_que') }}</div>
            </div>
            <div class="one_feature_item center_show shu2">
              <div class="have_or_no">
                <div class="icon">
                  <img src="/img/pricing/black_check_icon.svg" />
                </div>
                <div class="have_nums">300</div>
              </div>
            </div>
            <div class="one_feature_item center_show shu3">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <div class="have_nums">18000+</div>
              </div>
            </div>
            <div class="one_feature_item center_show shu4">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <div class="have_nums">18000+</div>
              </div>
            </div>
            <div class="one_feature_item center_show one_feature_item_last shu5">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <div class="have_nums">18000+</div>
              </div>
            </div>
          </div>
          <!-- 表内title下的一个内容 -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="regular_font">{{ $t('pricing.pagefont.a_t_o_q') }}</div>
            </div>
            <div class="one_feature_item center_show shu2">
              <div class="have_or_no">
                <div class="icon">
                  <img src="/img/pricing/black_check_icon.svg" />
                </div>
                <div class="have_nums"></div>
              </div>
            </div>
            <div class="one_feature_item center_show shu3">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <div class="have_nums"></div>
              </div>
            </div>
            <div class="one_feature_item center_show shu4">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <div class="have_nums"></div>
              </div>
            </div>
            <div class="one_feature_item center_show one_feature_item_last shu5">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <div class="have_nums"></div>
              </div>
            </div>
          </div>
          <!-- 表内title下的一个内容 -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="regular_font">{{ $t('pricing.pagefont.a_p_s_e_r_a') }}</div>
            </div>
            <div class="one_feature_item center_show shu2">
              <div class="have_or_no">
                <!-- <div class="icon">
                  <img src="/img/pricing/black_check_icon.svg" />
                </div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Limited') }}</div>
              </div>
            </div>
            <div class="one_feature_item center_show shu3">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Unlimited') }}</div>
              </div>
            </div>
            <div class="one_feature_item center_show shu4">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Unlimited') }}</div>
              </div>
            </div>
            <div class="one_feature_item center_show one_feature_item_last shu5">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Unlimited') }}</div>
              </div>
            </div>
          </div>
          <!-- 表内title下的一个内容 -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="regular_font">{{ $t('pricing.pagefont.b_h_s_s_a') }}</div>
            </div>
            <div class="one_feature_item center_show shu2">
              <div class="have_or_no">
                <!-- <div class="icon">
                  <img src="/img/pricing/black_check_icon.svg" />
                </div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Limited') }}</div>
              </div>
            </div>
            <div class="one_feature_item center_show shu3">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Unlimited') }}</div>
              </div>
            </div>
            <div class="one_feature_item center_show shu4">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Unlimited') }}</div>
              </div>
            </div>
            <div class="one_feature_item center_show one_feature_item_last shu5">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Unlimited') }}</div>
              </div>
            </div>
          </div>
          <!-- 表内title下的一个内容 -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="regular_font">{{ $t('pricing.pagefont.i_d_q_a') }}</div>
            </div>
            <div class="one_feature_item center_show shu2">
              <div class="have_or_no">
                <!-- <div class="icon">
                  <img src="/img/pricing/black_check_icon.svg" />
                </div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Limited') }}</div>
              </div>
            </div>
            <div class="one_feature_item center_show shu3">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Unlimited') }}</div>
              </div>
            </div>
            <div class="one_feature_item center_show shu4">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Unlimited') }}</div>
              </div>
            </div>
            <div class="one_feature_item center_show one_feature_item_last shu5">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Unlimited') }}</div>
              </div>
            </div>
          </div>
          <!-- 表内title下的一个内容 -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="regular_font">{{ $t('pricing.pagefont.h_f_e_v') }}</div>
            </div>
            <div class="one_feature_item center_show shu2">
              <div class="have_or_no">
                <div class="icon">
                  <img src="/img/pricing/black_check_icon.svg" />
                </div>
                <!-- <div class="have_nums">Limited</div> -->
              </div>
            </div>
            <div class="one_feature_item center_show shu3">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <!-- <div class="have_nums">Unlimited</div> -->
              </div>
            </div>
            <div class="one_feature_item center_show shu4">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <!-- <div class="have_nums">Unlimited</div> -->
              </div>
            </div>
            <div class="one_feature_item center_show one_feature_item_last shu5">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <!-- <div class="have_nums">Unlimited</div> -->
              </div>
            </div>
          </div>
          <!-- 表内title下的一个内容 -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="regular_font">{{ $t('pricing.pagefont.smart_p') }}</div>
            </div>
            <div class="one_feature_item center_show shu2">
              <div class="have_or_no">
                <div class="icon">
                  <img src="/img/pricing/black_check_icon.svg" />
                </div>
                <!-- <div class="have_nums">Limited</div> -->
              </div>
            </div>
            <div class="one_feature_item center_show shu3">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <!-- <div class="have_nums">Unlimited</div> -->
              </div>
            </div>
            <div class="one_feature_item center_show shu4">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <!-- <div class="have_nums">Unlimited</div> -->
              </div>
            </div>
            <div class="one_feature_item center_show one_feature_item_last shu5">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <!-- <div class="have_nums">Unlimited</div> -->
              </div>
            </div>
          </div>
          <!-- 表内title下的一个内容 -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="regular_font">{{ $t('pricing.pagefont.g_i_f') }}</div>
            </div>
            <div class="one_feature_item center_show shu2">
              <div class="have_or_no">
                <!-- <div class="icon">
                  <img src="/img/pricing/black_check_icon.svg" />
                </div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Limited') }}</div>
              </div>
            </div>
            <div class="one_feature_item center_show shu3">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Unlimited') }}</div>
              </div>
            </div>
            <div class="one_feature_item center_show shu4">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Unlimited') }}</div>
              </div>
            </div>
            <div class="one_feature_item center_show one_feature_item_last shu5">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Unlimited') }}</div>
              </div>
            </div>
          </div>
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="regular_font">{{ $t('pricing.pagefont.ask_ai_tutor') }}</div>
            </div>
            <div class="one_feature_item center_show shu2">
              <div class="have_or_no">
                <div class="icon">
                  <img src="/img/pricing/black_heng_icon.svg" />
                </div>
                <!-- <div class="have_nums">Limited-50 Daily</div> -->
              </div>
            </div>
            <div class="one_feature_item center_show shu3">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Unlimited') }}</div>
              </div>
            </div>
            <div class="one_feature_item center_show shu4">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Unlimited') }}</div>
              </div>
            </div>
            <div class="one_feature_item center_show one_feature_item_last shu5">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Unlimited') }}</div>
              </div>
            </div>
          </div>
          <!-- 表内的title***************************** -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="img_font">
                <div class="img_icon">
                  <img src="/img/pricing/table4_askai_icon.svg" />
                </div>
                <div class="font">{{ $t('pricing.pagefont.askai') }}</div>
              </div>
            </div>
            <div class="one_feature_item shu2"></div>
            <div class="one_feature_item shu3"></div>
            <div class="one_feature_item shu4"></div>
            <div class="one_feature_item one_feature_item_last shu5"></div>
          </div>
          <!-- 表内title下的一个内容 -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="regular_font">{{ $t('pricing.pagefont.Standard') }}</div>
            </div>
            <div class="one_feature_item center_show shu2">
              <div class="have_or_no">
                <!-- <div class="icon">
                  <img src="/img/pricing/black_check_icon.svg" />
                </div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.lim_x_daily', { times: 50 }) }}</div>
              </div>
            </div>
            <div class="one_feature_item center_show shu3">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Unlimited') }}</div>
              </div>
            </div>
            <div class="one_feature_item center_show shu4">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Unlimited') }}</div>
              </div>
            </div>
            <div class="one_feature_item center_show one_feature_item_last shu5">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Unlimited') }}</div>
              </div>
            </div>
          </div>
         
          <!-- 表内title下的一个内容 -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="regular_font">{{ $t('pricing.pagefont.chatgpt4o') }}</div>
            </div>
            <div class="one_feature_item center_show shu2">
              <div class="have_or_no">
                <div class="icon">
                  <img src="/img/pricing/black_heng_icon.svg" />
                </div>
                <!-- <div class="have_nums">Limited-50 Daily</div> -->
              </div>
            </div>
            <div class="one_feature_item center_show shu3">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">100/{{ $t('pricing.pagefont.Month') }}</div>
              </div>
            </div>
            <div class="one_feature_item center_show shu4">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">300/{{ $t('pricing.pagefont.Month') }}</div>
              </div>
            </div>
            <div class="one_feature_item center_show one_feature_item_last shu5">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Unlimited') }}</div>
              </div>
            </div>
          </div>
          <!-- 表内title下的一个内容 -->

          <!-- 表内的title***************************** -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="img_font">
                <div class="img_icon">
                  <img src="/img/pricing/table5_guide_icon.svg" :alt="$t('pricing.pagefont.DET_Guide')" />
                </div>
                <div class="font">{{ $t('pricing.pagefont.DET_Guide') }}</div>
              </div>
            </div>
            <div class="one_feature_item shu2"></div>
            <div class="one_feature_item shu3"></div>
            <div class="one_feature_item shu4"></div>
            <div class="one_feature_item one_feature_item_last shu5"></div>
          </div>
          <!-- 表内title下的一个内容 -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="regular_font">{{ $t('pricing.pagefont.DET_Speaking_Exam_Guide') }}</div>
            </div>
            <div class="one_feature_item center_show shu2">
              <div class="have_or_no">
                <div class="icon">
                  <img src="/img/pricing/black_heng_icon.svg" />
                </div>
                <!-- <div class="have_nums">Limited-50 Daily</div> -->
              </div>
            </div>
            <div class="one_feature_item center_show shu3">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_heng_icon.svg" /></div>
                <!-- <div class="have_nums">Unlimited</div> -->
              </div>
            </div>
            <div class="one_feature_item center_show shu4">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Free_Gift') }}</div>
              </div>
            </div>
            <div class="one_feature_item center_show one_feature_item_last shu5">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Free_Gift') }}</div>
              </div>
            </div>
          </div>
          <!-- 表内title下的一个内容 -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="regular_font">{{ $t('pricing.pagefont.DET_Writing_Exam_Guide') }}</div>
            </div>
            <div class="one_feature_item center_show shu2">
              <div class="have_or_no">
                <div class="icon">
                  <img src="/img/pricing/black_heng_icon.svg" />
                </div>
                <!-- <div class="have_nums">Limited-50 Daily</div> -->
              </div>
            </div>
            <div class="one_feature_item center_show shu3">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_heng_icon.svg" /></div>
                <!-- <div class="have_nums">Unlimited</div> -->
              </div>
            </div>
            <div class="one_feature_item center_show shu4">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Free_Gift') }}</div>
              </div>
            </div>
            <div class="one_feature_item center_show one_feature_item_last shu5">
              <div class="have_or_no">
                <!-- <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div> -->
                <div class="have_nums">{{ $t('pricing.pagefont.Free_Gift') }}</div>
              </div>
            </div>
          </div>
          <!-- 表内的title***************************** -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="img_font">
                <div class="img_icon">
                  <img src="/img/pricing/table6_course_icon.svg" />
                </div>
                <div class="font">{{ $t('pricing.pagefont.DET_Course') }}</div>
              </div>
            </div>
            <div class="one_feature_item shu2"></div>
            <div class="one_feature_item shu3"></div>
            <div class="one_feature_item shu4"></div>
            <div class="one_feature_item one_feature_item_last shu5"></div>
          </div>
          <!-- 表内title下的一个内容 -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="regular_font">{{ $t('pricing.pagefont.Courses') }}</div>
            </div>
            <div class="one_feature_item center_show shu2">
              <div class="have_or_no">
                <div class="icon">
                  <img src="/img/pricing/black_check_icon.svg" />
                </div>
                <!-- <div class="have_nums">Limited-50 Daily</div> -->
              </div>
            </div>
            <div class="one_feature_item center_show shu3">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <!-- <div class="have_nums">Unlimited</div> -->
              </div>
            </div>
            <div class="one_feature_item center_show shu4">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <!-- <div class="have_nums">Unlimited</div> -->
              </div>
            </div>
            <div class="one_feature_item center_show one_feature_item_last shu5">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <!-- <div class="have_nums">Unlimited</div> -->
              </div>
            </div>
          </div>
          <!-- 表内title下的一个内容 -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="regular_font">
                {{ $t('pricing.pagefont.learn_ma') }}

                <!-- <el-tooltip
                  class="box-item"
                  effect="dark"
                  :content="$t('pricing.pagefont.learn_ma_tips')"
                  placement="top-start"
                >
                  <div class="t_icon"><img src="/img/pricing/tip.svg" /></div>
                </el-tooltip> -->

                <el-popover class="box-item" :content="$t('pricing.pagefont.learn_ma_tips')" placement="top">
                  <template #reference>
                    <div class="t_icon">
                      <img src="/img/pricing/tip.svg" />
                    </div>
                  </template>
                </el-popover>
              </div>
            </div>
            <div class="one_feature_item center_show shu2">
              <div class="have_or_no">
                <div class="icon">
                  <img src="/img/pricing/black_check_icon.svg" />
                </div>
                <!-- <div class="have_nums">Limited-50 Daily</div> -->
              </div>
            </div>
            <div class="one_feature_item center_show shu3">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <!-- <div class="have_nums">Unlimited</div> -->
              </div>
            </div>
            <div class="one_feature_item center_show shu4">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <!-- <div class="have_nums">Unlimited</div> -->
              </div>
            </div>
            <div class="one_feature_item center_show one_feature_item_last shu5">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <!-- <div class="have_nums">Unlimited</div> -->
              </div>
            </div>
          </div>
          <!-- 表内的title***************************** -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="img_font">
                <div class="img_icon">
                  <img src="/img/pricing/table7_others_icon.svg" />
                </div>
                <div class="font">{{ $t('pricing.pagefont.Others') }}</div>
              </div>
            </div>
            <div class="one_feature_item shu2"></div>
            <div class="one_feature_item shu3"></div>
            <div class="one_feature_item shu4"></div>
            <div class="one_feature_item one_feature_item_last shu5"></div>
          </div>
          <!-- 表内title下的一个内容 -->
          <div class="one_feature">
            <div class="one_feature_item padding1 shu1">
              <div class="regular_font">{{ $t('pricing.pagefont.new_f') }}</div>
            </div>
            <div class="one_feature_item center_show shu2">
              <div class="have_or_no">
                <div class="icon">
                  <img src="/img/pricing/black_heng_icon.svg" />
                </div>
                <!-- <div class="have_nums">Limited-50 Daily</div> -->
              </div>
            </div>
            <div class="one_feature_item center_show shu3">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <!-- <div class="have_nums">Unlimited</div> -->
              </div>
            </div>
            <div class="one_feature_item center_show shu4">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <!-- <div class="have_nums">Unlimited</div> -->
              </div>
            </div>
            <div class="one_feature_item center_show one_feature_item_last shu5">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <!-- <div class="have_nums">Unlimited</div> -->
              </div>
            </div>
          </div>
          <!-- 表内title下的一个内容 -->
          <div class="one_feature no_border_bottom">
            <div class="one_feature_item padding1 shu1">
              <div class="regular_font">{{ $t('pricing.pagefont.peri_su') }}</div>
            </div>
            <div class="one_feature_item center_show shu2">
              <div class="have_or_no">
                <div class="icon">
                  <img src="/img/pricing/black_heng_icon.svg" />
                </div>
                <!-- <div class="have_nums">Limited-50 Daily</div> -->
              </div>
            </div>
            <div class="one_feature_item center_show shu3">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <!-- <div class="have_nums">Unlimited</div> -->
              </div>
            </div>
            <div class="one_feature_item center_show shu4">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <!-- <div class="have_nums">Unlimited</div> -->
              </div>
            </div>
            <div class="one_feature_item center_show one_feature_item_last shu5 lb_rb_radio">
              <div class="have_or_no">
                <div class="icon"><img src="/img/pricing/black_check_icon.svg" /></div>
                <!-- <div class="have_nums">Unlimited</div> -->
              </div>
            </div>
          </div>
        </div>
        <!-- 窄屏幕展示 -->
      </div>
    </div>
    <div class="part2_wrapper">
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
    <div class="part3_wrapper">
      <div class="part3">
        <div class="title">{{ $t('pricing.pagefont.Contact_Us') }}</div>
        <div class="three_out">
          <div v-for="(item, index) in contaceUsList" :key="index" class="one_card">
            <div class="icon">
              <img :src="`${item.icon}`" :alt="$t('pricing.pagefont.alt')" />
            </div>
            <div class="method_font">{{ item.font }}</div>
            <div class="method_tip">{{ item.tip }}</div>
            <div v-if="item.type === '1'" class="btn" @click="openchat">
              {{ item.btn }}
            </div>
            <div v-if="item.type === '2'" class="btn" @click="copy(item.btn)">
              {{ item.btn }}
            </div>
            <NuxtLink v-if="item.type === '3'" class="btn" :to="localePath(`/contact-us`)">
              <div>{{ item.btn }}</div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="Purchase courses"
      v-model="coursrBuyedVisible"
      :before-close="handleCloseCoursrBuyed"
      class="pay_result_dialog"
    >
      <span class="no_wrap">
        You have successfully purchased the course. Each course only needs to be purchased once.
      </span>
      <template #footer>
        <div class="footer_wrapp"><div class="close_btn" @click="handleCloseCoursrBuyed">I get it</div></div>
      </template>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped>
.pricing {
  /* 左右滚动效果 */
  .scroll-line {
    width: 12px;
    height: 132%;
    transform: rotate(30deg);
    background: rgba(255, 255, 255, 0.3);
    position: absolute;
    z-index: 3;
    left: 0px;
    top: -16%;
    white-space: nowrap;
    animation-name: around;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes around {
    from {
      margin-left: 0;
    }

    to {
      margin-left: 100%;
    }
  }
  .height_hack {
    min-height: 77px;
  }
}
</style>
<style lang="scss" scoped>
.pricing {
  min-height: 100vh;
  // background: linear-gradient(to bottom, #fff4f1 0%, #fff4f1 604px, #ffffff 604px);

  .part1_wrapper {
    // border: 1px red solid;
    // overflow: hidden;
    padding: 0px 30px;
    position: relative;

    @media screen and (max-width: 450px) {
      padding: 0px 15px;
    }
    .part1 {
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
      z-index: 10;
      // overflow-x: hidden;
      // overflow-y: auto;

      .title1 {
        overflow: hidden;
        h1 {
          font-weight: 600;
          font-size: 56px;
          color: #201515;
          text-align: center;
          padding: 0px 0px;
          margin: 0px 0px 0px 0px;
          margin-top: 56px;

          @media (max-width: 450px) {
            font-size: 24px;
          }
        }
      }

      .title2 {
        h4 {
          font-weight: 500;
          font-size: 24px;
          color: #201515;
          text-align: center;
          margin: 0px 0px 0px 0px;
          margin-top: 32px;

          @media (max-width: 450px) {
            font-size: 16px;
          }
        }
      }

      .three_out_new {
        margin-top: 26px;
        display: flex;
        justify-content: center;
        align-items: center;
        grid-gap: 56px;
        flex-wrap: wrap;
        @media (max-width: 800px) {
          grid-gap: 16px;
        }

        .one {
          display: flex;
          justify-content: center;
          align-items: center;
          grid-gap: 8px;
          .one_icon {
            width: 16px;
            height: 16px;
            flex-shrink: 0;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .one_font {
            font-weight: 400;
            font-size: 16px;
            color: #403f3e;
          }
        }
      }

      .Membership_dom {
        margin-top: 16px;
        // display: grid;
        // grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
        // grid-gap: 16px;
        @media (max-width: 450px) {
          margin-top: 20px;
        }

        .one_price {
          border-radius: 8px;
          display: grid;
          cursor: pointer;

          .card_price {
            padding: 20px;
            background: #ffffff;
            border-radius: 8px;
            border: 1px solid #e9e9e9;
            .card_in_card {
              padding: 24px 16px;
              background: rgba(250, 250, 250, 0.05);
              border-radius: 8px;
              border: 1px solid #e9e9e9;
              .card_price_part1 {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .day {
                  font-weight: 600;
                  font-size: 24px;
                  color: #4c2929;
                  @media (max-width: 450px) {
                    font-size: 18px;
                  }
                }

                .off {
                  padding: 4px 10px;
                  background: #edc295;
                  border-radius: 16px;
                  font-weight: 500;
                  font-size: 14px;
                  color: #fff;
                }
                .off1 {
                  color: #4c2929;
                }
              }

              .card_price_part2 {
                display: none;
                font-weight: 400;
                font-size: 14px;
                color: #403f3e;
                margin-top: 11px;
                min-height: 61px;
                // border: 1px red solid;
              }

              .card_price_part3 {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin-top: 24px;
                grid-gap: 8px;

                .big_price {
                  font-weight: 600;
                  font-size: 40px;
                  color: #4c2929;
                  @media (max-width: 450px) {
                    font-size: 40px;
                  }
                  .symbol {
                    font-size: 20px;
                    @media (max-width: 450px) {
                      font-size: 16px;
                    }
                  }
                }

                .small_price {
                  font-weight: 400;
                  font-size: 14px;
                  color: #403f3e;
                  position: relative;
                  top: 10px;
                  text-decoration: line-through;
                }
              }
              .card_price_part4 {
                .tip_font {
                  font-weight: 400;
                  font-size: 14px;
                  color: #333333;
                  margin-bottom: 10px;
                }

                .sleect_out_wrapper {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  grid-gap: 8px;
                  .select_out {
                    width: 136px;
                    height: 32px;
                    border-radius: 4px;
                  }
                  .select_font {
                    font-weight: 400;
                    font-size: 14px;
                    color: rgba(51, 51, 51, 0.88);
                  }
                }
              }
              .card_price_buy_btn {
                padding: 11px 0px;
                background: #f66442;
                border-radius: 4px;
                font-weight: 500;
                font-size: 16px;
                color: white;
                text-align: center;
                margin-top: 16px;
                position: relative;
                display: block;
                a {
                  color: white;
                }
              }
              .card_price_buy_btn1 {
                color: #4c2929 !important;
                background: #edc295;

                &:hover {
                  background: #d0aa83 !important;
                }
              }
              .try_free {
                background: white;
                border: 1px solid #201515;
                font-size: 16px;
                color: #201515;
                display: block;
                a {
                  color: #4c2929;
                }
                &:hover {
                  padding: 10px 0px;
                  background: white;
                  border: 2px solid #201515;
                }
              }
            }

            .card_price_qllist {
              margin-top: 40px;
              display: flex;
              flex-direction: column;
              grid-gap: 16px;

              .one_ql {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                grid-gap: 8px;

                .icon {
                  width: 12px;
                  height: 10px;
                  display: flex;
                }

                .font {
                  // font-weight: 500;
                  font-size: 14px;
                  color: #403f3e;
                  :deep(.bigger) {
                    color: #201515;
                    font-weight: 600;
                  }
                }

                .tips {
                  width: 12px;
                  height: 12px;
                  display: flex;
                }
              }
            }
          }
        }

        .box_shadow {
          &:hover {
            box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.08);
          }
        }

        .no-load {
          background: #fff;
          display: block;
          border: 1px solid #e9e9e9;
          border-radius: 8px;
          padding: 20px;
          @media (max-width: 750px) {
            padding: 10px;
          }
        }
      }

      .Service_dom {
        margin-top: 40px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
        grid-gap: 16px;
        // border: 1px red solid;
        // padding: 0px 30px;

        .one_price {
          border-radius: 8px;
          display: grid;
          cursor: pointer;

          .title {
            display: none;
            font-weight: 600;
            font-size: 16px;
            color: #ffffff;
            text-align: center;
            flex: 1;
            padding: 9px 0px;
          }

          .card_price {
            padding: 20px;
            background: #ffffff;
            border-radius: 8px;
            border: 1px solid #e9e9e9;
            &:hover {
              box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.08);
            }

            .card_price_part1 {
              font-weight: 600;
              font-size: 24px;
              color: #201515;
              // border: 1px red solid;
              min-height: 26px;
            }

            .card_price_part2 {
              font-weight: 400;
              font-size: 14px;
              color: #403f3e;
              margin-top: 11px;
              min-height: 68px;
            }
            .height_hack_222 {
              min-height: 46px;
            }

            .card_price_part3 {
              // height: 84px;
              margin-top: 16px;
              // border: 1px red solid;
              .select_out_new {
                .select_out_new_font {
                  font-weight: 400;
                  font-size: 14px;
                  color: #333333;
                }
                .sleect_out_wrapper {
                  margin-top: 10px;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  grid-gap: 8px;
                  .select_out {
                    width: 100%;
                    height: 32px;
                    border-radius: 4px;
                  }
                  .select_font {
                    font-weight: 400;
                    font-size: 14px;
                    color: rgba(51, 51, 51, 0.88);
                  }
                }
              }
              .member_price {
                font-weight: 600;
                font-size: 32px;
                color: #f66442;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                grid-gap: 8px;
                // margin-top: 24px;
                .small {
                  font-size: 20px;
                }
              }

              .member_font {
                font-weight: 400;
                font-size: 14px;
                color: #f66442;
              }
            }

            .card_price_part4 {
              min-height: 92px;
              // border: 1px blue solid;
              .off_price {
                font-weight: 600;
                font-size: 32px;
                color: #201515;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                grid-gap: 8px;
                .small {
                  font-size: 20px;
                }
                .save_tag {
                  padding: 4px 10px;
                  background: #ffe1bc;
                  border-radius: 16px;
                  font-weight: 500;
                  font-size: 14px;
                  color: #4c2929;
                }
              }

              .old_price {
                font-weight: 400;
                font-size: 14px;
                color: #403f3e;
                text-decoration: line-through;
              }
              .no_member_font {
                font-weight: 400;
                font-size: 14px;
                color: #403f3e;
              }
            }
            .min_heighthack {
              min-height: 92px;
            }
            .min_heighthack2 {
              min-height: 62px;
            }
            .your_price {
              width: 80px;
              font-weight: 400;
              font-size: 12px;
              color: #f66442;
              padding: 4px 8px;
              background: rgba(246, 100, 66, 0.1);
              border-radius: 12px;
              text-align: center;
              margin-bottom: 6px;
            }

            .card_price_buy_btn {
              padding: 11px 0px;
              background: #f66442;
              border-radius: 4px;
              font-weight: 500;
              font-size: 16px;
              text-align: center;
              margin-top: 16px;
              position: relative;
              color: white;
              display: block;
              &:hover {
                opacity: 0.9;
              }
              a {
                color: white;
              }
            }
            .card_price_buy_btn_dis {
              opacity: 0.5;
              &:hover {
                opacity: 0.5;
              }
            }

            .correct_service_quanyi {
              margin-top: 20px;
              .one_quanyi {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                grid-gap: 8px;
                margin-bottom: 8px;
                .icon {
                  width: 12px;
                  height: 10px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-shrink: 0;
                  img {
                    width: 100%;
                    height: 100%;
                  }
                }
                .font {
                  font-weight: 400;
                  font-size: 14px;
                  color: #403f3e;
                  ::v-deep(.strongfont) {
                    font-weight: 650;
                    color: #f66442;
                  }
                }
              }
            }
          }
        }
        .one_price_bundle {
          // border: 1px red solid;
          .card_price {
            background: #4c2929;
            border: 1px solid #e9e9e9;
            .card_price_part1 {
              color: #ffffff;
            }
            .card_price_part2 {
              min-height: 34px !important;
            }
            .your_price {
              background: rgba(255, 225, 188, 0.1) !important;
              color: #ffe1bc !important;
            }
            .off_price {
              color: #ffffff !important;
            }
            .no_member_font {
              color: rgba(255, 255, 255, 0.65) !important;
            }
            .member_price {
              color: #ffe1bc !important;
            }
            .member_font {
              color: #ffe1bc !important;
            }
            .card_price_buy_btn {
              background: #ffe1bc !important;
              color: #4c2929 !important;
              overflow: hidden;
            }
          }
        }
        .no-load {
          background: #fff;
          display: block;
          border: 1px solid #e9e9e9;
          border-radius: 8px;
          padding: 20px;
          @media (max-width: 750px) {
            padding: 10px;
          }
        }
      }

      .scroll_buyed_wrapper {
        height: 46px;
        margin-top: 32px;
        height: fit-content;
        padding: 10px 20px;
        background: #fff4f1;
        border-radius: 8px;

        .scroll_buyed {
          padding: 0px 0px;
          background: #fff4f1;

          // width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;

          // overflow: hidden;
          @media (max-width: 846px) {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 8px;
          }

          .scroll_buyed_left {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            .icon {
              width: 20px;
              height: 20px;

              img {
                width: 100%;
                height: 100%;
              }
            }

            .name {
              font-weight: 400;
              font-size: 16px;
              color: #201515;
              margin-left: 12px;
              @media (max-width: 528px) {
                font-size: 12px;
              }
            }

            .type {
              font-weight: 400;
              font-size: 16px;
              color: #201515;
              margin-left: 12px;
              @media (max-width: 528px) {
                font-size: 12px;
              }
            }

            .days {
              font-weight: 400;
              font-size: 16px;
              color: #f66442;
              margin-left: 12px;
              @media (max-width: 528px) {
                font-size: 12px;
              }
            }
          }
          .scroll_buyed_mid {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            grid-gap: 16px;
            flex: 1;
            .flag {
              width: 36px;
              height: 24px;
              margin-left: 40px;
              position: relative;

              @media (max-width: 846px) {
                margin-left: 0px;
              }

              // top: 2px;
              @media (max-width: 528px) {
                width: 24px;
                height: 16px;
              }

              img {
                width: 100%;
                height: 100%;
              }
            }

            .country_name {
              font-weight: 400;
              font-size: 16px;
              color: #201515;
              flex: 1;
              text-align: left;
              @media (max-width: 528px) {
                font-size: 12px;
              }
            }
            .time {
              font-weight: 400;
              font-size: 16px;
              color: #201515;
              @media (max-width: 528px) {
                font-size: 12px;
              }
            }
          }
        }
      }

      .bank_card {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        grid-gap: 6px;
        flex-wrap: wrap;
        @media (max-width: 450px) {
          margin-top: 60px;
        }

        .title {
          font-weight: 400;
          font-size: 14px;
          color: #403f3e;
        }

        .img_self {
          max-width: 422px;

          // border: 1px red solid;
          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
    .circle_items {
      width: 100%;
      height: 660px;
      position: absolute;
      top: 290px;
      left: 50%;
      margin-left: -472px;
      z-index: 0;
      .circle_01 {
        width: 660px;
        height: 460px;
        border-radius: 660px;
        background: #ffa08b;
        -webkit-filter: blur(300px);
        filter: blur(300px);
        position: absolute;
        left: 0;
        top: 0;
      }
      .circle_02 {
        width: 440px;
        height: 240px;
        border-radius: 440px;
        background: #ffca42;
        -webkit-filter: blur(300px);
        filter: blur(300px);
        position: absolute;
        right: 0;
        top: 110px;
      }
    }
  }
  .Feature_wrapper {
    padding: 0px 30px;
    @media screen and (max-width: 450px) {
      padding: 0px 15px;
    }
    margin-top: 112px;
    @media (max-width: 450px) {
      margin-top: 60px;
    }
    // border: 1px red solid;
    .Feature_in {
      max-width: 1200px;
      margin: 0 auto;
      .Feature_title {
        h2 {
          font-weight: 600;
          font-size: 40px;
          color: #201515;
          text-align: center;
          @media (max-width: 750px) {
            font-size: 24px;
          }
        }

        margin-bottom: 56px;
      }
    }
    .Feature_content_mobile {
      display: none;
      margin-top: 12px;
      @media (max-width: 750px) {
        display: block;
      }
      .change_wrapper {
        padding: 4px;
        background: #ffffff;
        border-radius: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        grid-gap: 8px;
        .one_type {
          padding: 6px 12px;
          font-weight: 600;
          font-size: 16px;
          color: #f66442;
          border-radius: 24px;
        }
        .one_type_active {
          background: #feefec;
        }
      }
      .switch_out {
        margin-top: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        grid-gap: 8px;
        .font {
          font-weight: 400;
          font-size: 14px;
          color: #f66442;
        }
      }
      .mobileShowWhich_detail {
        margin-top: 12px;
      }
    }
    .Feature_content {
      .static_css {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        background: #ffffff;
        position: fixed;
        top: 60px;
        left: 0;
        right: 0;
        @media screen and (max-width: 1200px) {
          padding: 0px 30px;
        }

        box-sizing: border-box;
      }
      .one_feature {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        @media (max-width: 750px) {
          grid-template-columns: repeat(2, 1fr);
        }
        border-bottom: 1px solid #e9e9e9;

        .one_feature_item {
          .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            grid-gap: 8px;
            font-weight: 600;
            font-size: 20px;
            color: #201515;
            .save_tag_fer {
              padding: 4px 8px;
              font-weight: 400;
              font-size: 12px;
              color: #ffffff;
              background: linear-gradient(270deg, #fb9d77 0%, #f66442 100%);
              border-radius: 4px;
            }
          }
          .price_out {
            font-weight: 600;
            font-size: 18px;
            color: #484848;
            margin-top: 8px;
          }
          .buy_btn_new {
            padding: 9px 20px;
            border-radius: 8px;
            border: 1px solid #201515;
            font-weight: 400;
            font-size: 16px;
            color: #201515;
            width: fit-content;
            cursor: pointer;
            margin-top: 16px;
            display: block;
          }
          .img_font {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            grid-gap: 8px;
            .img_icon {
              width: 32px;
              height: 32px;

              img {
                width: 100%;
                height: 100%;
              }
            }
            .font {
              font-weight: 600;
              font-size: 20px;
              color: #201515;
            }
          }
          .regular_font {
            font-weight: 400;
            font-size: 16px;
            color: #484848;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
          }
          .box-item {
          }
          .t_icon {
            width: 16px;
            height: 16px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .have_or_no {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            grid-gap: 8px;
            .icon {
              width: 16px;
              height: 16px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .have_nums {
              font-weight: 400;
              font-size: 16px;
              color: #484848;
            }
          }
          .switch_out {
            margin-top: 11px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            grid-gap: 8px;
            .font {
              font-weight: 400;
              font-size: 14px;
              color: #f66442;
            }
          }
        }
      }
      .shu1 {
        .regular_font {
          justify-content: flex-start !important;
        }
      }
      .shu3 {
        // border: 1px red solid;
      }
      .shu4 {
        // border: 1px blue solid;
      }
      .shu5 {
        // border: 1px yellow solid;
      }
      .lt_rt_radio {
        border-radius: 16px 16px 0 0;
      }
      .lb_rb_radio {
        border-radius: 0 0 16px 16px;
      }

      .havepadding {
        padding: 32px 24px;
        flex-direction: column;
      }
      .padding1 {
        margin-top: 24px;
        padding-bottom: 16px;
      }
      .center_show {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 24px;
      }
      .no_border_bottom {
        border-bottom: none;
      }
      .one_feature_item_last {
        background: #fef7f5;
        .title {
          color: #f66442 !important;
        }
        .price_out {
          color: #f66442 !important;
        }
        .buy_btn_new {
          background: #f66442 !important;
          color: #ffffff !important;
          border: 1px solid #f66442 !important;
        }
      }
    }
  }

  .part2_wrapper {
    padding: 0px 30px;
    @media screen and (max-width: 450px) {
      padding: 0px 15px;
    }
    margin-top: 120px;
    @media (max-width: 450px) {
      margin-top: 60px;
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

  .part3_wrapper {
    // border: 1px red solid;
    padding: 0px 30px;
    @media screen and (max-width: 450px) {
      padding: 0px 15px;
    }
    background: #fff4f1;
    margin-top: 100px;
    @media (max-width: 450px) {
      margin-top: 50px;
    }

    .part3 {
      padding: 100px 0;
      @media (max-width: 450px) {
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
        @media (max-width: 450px) {
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

          .icon {
            width: 56px;
            height: 56px;
            margin: 0 auto;
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
            text-align: center;
          }

          .btn {
            padding: 11px;
            text-align: center;
            border-radius: 4px;
            border: 1px solid #201515;
            font-weight: 500;
            font-size: 16px;
            color: #201515;
            margin-top: 24px;
            display: block;
            cursor: pointer;
            &:hover {
              border: 2px solid #201515;
              padding: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.cancel_btn:hover {
  background-color: white;
  border-color: #3c4652 !important;
  color: black !important;
  outline: none !important;
}
.el-button--primary {
  background: #f66442 !important;
  border-color: #f66442 !important;
}
.el-message-box__content {
  margin-top: 10px;
}
.pay_result_dialog {
  width: 500px;
  @media screen and (max-width: 524px) {
    width: 360px;
  }

  .no_wrap {
    word-break: normal;
    line-height: 20px;
    .yellow {
      color: #f66442;
    }
  }
  .footer_wrapp {
    display: flex;
    justify-content: flex-end;
  }
  .close_btn {
    color: red;
    padding: 10px 14px;
    background: #f66442;
    border-radius: 4px;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    width: fit-content;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
}
.el-button:focus-visible {
  outline: 0px;
}

.el-popover.el-popper {
  min-width: 200px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 15px 2px !important;
  margin-left: 6px;
  font-weight: 400;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.65);
  @media screen and (max-width: 524px) {
    min-width: 200px;
  }
}
</style>
<style scoped>
@import '@/assets/numberchangeanimate.scss';
</style>
