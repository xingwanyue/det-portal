<script setup lang="ts">
import { urlGet, saveStorage, getStorage, getToken } from '@/utils';
import { useStore } from '@/store';
import last from 'lodash/last';
const localePath = useLocalePath();
const { t, locale } = useI18n();
const props = defineProps({
  type: {
    type: String,
  },
});

const store = useStore();
const user = computed(() => store.user);

const route = useRoute();
// const pathname = computed(() => `/${last(route.path.split('/'))}` || '/');
const pathname = computed(() => {
  const pathParts = route.path.split('/');
  const newPathParts = pathParts[pathParts.length - 1] === locale.value ? pathParts.slice(0, -1) : pathParts;
  return `/${last(newPathParts)}` || '/';
});
const headerColor = ref('#FFF4F1');
const oldPath = ref('');
const haveCookie = ref(false);
const isProductsMobile = ref(false);
watch(pathname, (val: string) => {
  oldPath.value = getStorage('pathname');
  setTimeout(() => {
    oldPath.value = '';
  }, 200);
  changeHeaderColor(val);
  saveStorage('pathname', val);
});

onMounted(async () => {
  const token = await getToken();
  if (token) {
    haveCookie.value = true;
  }
  changeHeaderColor(pathname.value);
  const dom = document.getElementsByClassName('v-header')[0] as any;
  window.addEventListener('scroll', (e) => {
    if (document.documentElement.scrollTop === 0) {
      changeHeaderColor(pathname.value);
      dom.style.borderBottom = '0px solid';
    } else {
      headerColor.value = '#fff';
      dom.style.borderBottom = '1px solid #f0e8e8';
    }
  });
  window.addEventListener('click', () => {
    popoverQuestions.value = false;
  });
});
const changeHeaderColor = (pathname: string) => {
  // pathname已/det-开头 则白色
  if (pathname.indexOf('/det-') === 0) {
    headerColor.value = '#fff';
    return;
  }

  switch (pathname) {
    case '/practice':
      headerColor.value = '#ECF7FF';
      break;
    case '/writing-ai-correction':
      headerColor.value = '#FFF4F1';
      break;
    case '/mock-exam':
      headerColor.value = '#FFEFE1';
      break;
    case '/courses':
      headerColor.value = '#E7FDEC';
      break;
    case '/pricing':
      headerColor.value = 'rgba(0,0,0,0)';
      break;
    case '/speaking-ai-correction':
      headerColor.value = '#EAEAFEFF';
      break;
    default:
      headerColor.value = 'rgba(0,0,0,0)';
      break;
  }
};
const productPaths = ['/practice', '/correction', '/mock-exam', '/courses'];
const visible = ref(false);
const popoverQuestions = ref(false);
const handleOpen = () => {
  visible.value = true;
  // productPaths
  if (productPaths.indexOf(pathname.value) !== -1) {
    isProductsMobile.value = true;
  }
};

const handleClose = () => {
  visible.value = false;
  isProductsMobile.value = false;
};
const productClick = () => {
  isProductsMobile.value = !isProductsMobile.value;
};

const menus = computed(() => [
  {
    name: t('Home'),
    path: '/',
  },
  {
    name: t('Products'),
    path: '/products',
  },
  {
    name: t('courses_title'),
    path: '/courses',
  },
  {
    name: t('Pricing'),
    path: '/pricing',
  },
  {
    name: t('Blog'),
    path: '/blog',
  },
]);
// const menus = ;
</script>

<template>
  <div class="v-header" :style="{ backgroundColor: `${headerColor} !important` }">
    <div style="display: none">test</div>
    <div class="header-content">
      <nuxt-link :to="localePath('/')" class="home-logo" :title="t('header.home_logo_title')">
        <span class="icon iconfont icon-logo logo"></span>
      </nuxt-link>
      <div class="menus">
        <nav
          v-for="menu in menus"
          :key="menu.path"
          :class="`meun ${
            pathname === menu.path ||
            (menu.path === '/blog' && props.type === '1') ||
            (menu.path === '/learn' && props.type === '2')
              ? 'active'
              : ''
          }`"
        >
          <el-popover
            v-if="menu.path === '/products'"
            :visible="popoverQuestions"
            placement="bottom"
            trigger="click"
            popper-class="head-question-popover"
          >
            <div class="head-question-con" @mouseleave="popoverQuestions = false" @mouseover="popoverQuestions = true">
              <NuxtLink :to="localePath('/practice')" :title="$t('header.path_practice_title')" class="one_card card1">
                <div class="icon">
                  <img src="/img/home/product_icon1.svg" :alt="$t('header.prod1.alt')" />
                </div>
                <div class="right">
                  <div class="title">{{ $t('header.prod1.title') }}</div>
                  <div class="font">
                    {{ $t('header.prod1.font') }}
                  </div>
                </div>
              </NuxtLink>
              <NuxtLink :to="localePath('/mock-exam')" :title="$t('header.path_mock_title')" class="one_card card3">
                <div class="icon">
                  <img src="/img/home/product_icon3.svg" :alt="$t('header.prod4.alt')" />
                </div>
                <div class="right">
                  <div class="title">{{ $t('header.prod4.title') }}</div>
                  <div class="font">
                    {{ $t('header.prod3.font') }}
                  </div>
                </div>
              </NuxtLink>
              <NuxtLink
                :to="localePath('/writing-ai-correction')"
                :title="$t('header.path_correction_title')"
                class="one_card card2"
              >
                <div class="icon">
                  <img src="/img/home/product_icon2.svg" :alt="$t('header.prodwriting.alt')" />
                </div>
                <div class="right">
                  <div class="title">{{ $t('header.prodwriting.title') }}</div>
                  <div class="font">
                    {{ $t('header.prodwriting.font') }}
                  </div>
                </div>
              </NuxtLink>

              <NuxtLink
                :to="localePath('/speaking-ai-correction')"
                :title="$t('header.path_correction_title')"
                class="one_card card5"
              >
                <div class="icon">
                  <img src="/img/home/head_speak.svg" :alt="$t('header.prodspeaking.alt')" />
                </div>
                <div class="right">
                  <div class="title">{{ $t('header.prodspeaking.title') }}</div>
                  <div class="font">
                    {{ $t('header.prodspeaking.font') }}
                  </div>
                </div>
              </NuxtLink>
            </div>
            <template #reference>
              <div
                :class="`head-name head-name-products ${popoverQuestions ? 'head-name-products1' : ''}`"
                @mouseover="popoverQuestions = true"
                @mouseleave="popoverQuestions = false"
              >
                {{ menu.name }}
                <img
                  v-if="!popoverQuestions"
                  src="/img/learn/down-icon.svg"
                  class="down-icon"
                  :alt="$t('header.commonAlt')"
                />
                <img v-else src="/img/learn/up-icon.svg" class="down-icon" :alt="$t('header.commonAlt')" />
              </div>
            </template>
          </el-popover>
          <template v-else-if="menu.path === 'https://prep.detpractice.com/'">
            <NuxtLink :to="menu.path" :title="menu.name" target="_blank"
              >{{ menu.name }}
              <div v-if="pathname === menu.path" class="header-scrolls"></div>
              <div v-if="oldPath === menu.path" class="header-scrolls-move"></div>
            </NuxtLink>
          </template>

          <nuxt-link v-else :to="localePath(menu.path)" :title="menu.name"
            >{{ menu.name }}
            <div v-if="pathname === menu.path" class="header-scrolls"></div>
            <div v-if="oldPath === menu.path" class="header-scrolls-move"></div>
          </nuxt-link>
        </nav>
      </div>
      <div class="mobile">
        <nuxt-link :to="localePath('/')" class="">
          <span class="icon iconfont icon-logo mobileLogo"></span>
        </nuxt-link>
      </div>
      <div v-if="(user.id || haveCookie) && !user.temp" href="/app">
        <div class="loginbtn">
          <nuxt-link :href="urlGet('/home')" class="try_free common_btn_hover_bgColor">{{
            $t('header.Get_started')
          }}</nuxt-link>
        </div>
      </div>
      <div v-else class="loginbtn">
        <!-- <nuxt-link :to="localePath(`/login`)" class="login_font"> Login </nuxt-link> -->
        <nuxt-link :to="localePath(`/login`)" class="try_free common_btn_hover_bgColor" rel="nofollow">
          {{ $t('header.Try_for_free') }}
        </nuxt-link>
      </div>
      <div class="mobile">
        <img src="/img/menu.svg" class="mobileMenus" :alt="$t('header.commonAlt')" @click="handleOpen" />
      </div>
    </div>
    <el-drawer
      v-model="visible"
      direction="ltr"
      size="100%"
      :with-header="false"
      class="drawer-mobile"
      :before-close="handleClose"
    >
      <div class="drawer-head">
        <nuxt-link :to="localePath('/')" class="" @click="handleClose">
          <span class="icon iconfont icon-logo mobileLogo"></span>
        </nuxt-link>
        <el-image
          class="mobile-cancel"
          @click="handleClose"
          src="/img/learn/mobile-close.svg"
          :alt="$t('header.commonAlt')"
        />
      </div>
      <div class="asideMenus">
        <div v-for="menu in menus" :key="menu.path">
          <div v-if="menu.path === '/products'" :class="`asideMeun-pro`">
            <div class="asideMeun1" @click="productClick">
              {{ menu.name }}
              <el-image
                v-if="!isProductsMobile"
                src="/img/learn/down-mobile.svg"
                class="down-icon-mobile"
                :alt="$t('header.commonAlt')"
              />
              <el-image v-else src="/img/learn/up-mobile.svg" class="down-icon-mobile" :alt="$t('header.commonAlt')" />
            </div>
            <nuxt-link
              v-if="isProductsMobile"
              :class="`product-child`"
              :to="localePath('/practice')"
              @click="handleClose"
            >
              {{ $t('header.prod1.title') }}
            </nuxt-link>
            <nuxt-link
              v-if="isProductsMobile"
              :class="`product-child`"
              :to="localePath('/mock-exam')"
              @click="handleClose"
            >
              {{ $t('header.prod4.title') }}
            </nuxt-link>
            <nuxt-link
              v-if="isProductsMobile"
              :class="`product-child`"
              :to="localePath('/writing-ai-correction')"
              @click="handleClose"
            >
              {{ $t('header.prodwriting.title') }}
            </nuxt-link>
            <nuxt-link
              v-if="isProductsMobile"
              :class="`product-child`"
              :to="localePath('/speaking-ai-correction')"
              @click="handleClose"
            >
              {{ $t('header.prodspeaking.title') }}
            </nuxt-link>

            <!-- <nuxt-link
              v-if="isProductsMobile"
              :class="`product-child`"
              :to="localePath('/courses')"
              @click="handleClose"
            >
              {{ $t('header.prod3.title') }}
            </nuxt-link> -->
          </div>
          <nuxt-link v-else :class="`asideMeun`" :href="menu.path" @click="handleClose" :title="menu.name">
            {{ menu.name }}
          </nuxt-link>
        </div>
      </div>
      <div v-if="user.id" href="/app">
        <div class="loginbtn-mobile">
          <nuxt-link :href="urlGet('/home')" class="try_free">{{ $t('header.Get_started') }}</nuxt-link>
        </div>
      </div>
      <div v-else class="loginbtn-mobile">
        <nuxt-link :to="localePath(`/login`)" class="try_free" rel="nofollow">
          {{ $t('header.Try_for_free') }}
        </nuxt-link>
        <!-- <nuxt-link :to="localePath(`/login`)" class="login_font">Login</nuxt-link> -->
      </div>
    </el-drawer>
  </div>
</template>
<style lang="scss">
.drawer-mobile {
  padding: 0px;
  .el-drawer__body {
    padding: 0px;
    position: relative;
  }
  .drawer-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e9e9e9;
    padding: 15px 15px 14px;
    .mobileLogo {
      font-size: 26px;
    }
    .mobile-cancel {
      display: block;
      width: 18px;
      height: 18px;
      color: #403f3e;
    }
  }
  .asideMenus {
    width: 100%;
    padding: 0px 15px;
    box-sizing: border-box;
    margin-top: 12px;
    .asideMeun {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      border-bottom: 2px solid #e9e9e9;
      width: 100%;
      padding: 14px 5px;
      color: #201515;
      font-size: 16px;
      font-weight: 600;
      &:hover {
        background: #f2f4f6;
      }
      .down-icon-mobile {
        width: 24px;
        height: 24px;
      }
    }
    .asideMeun-pro {
      box-sizing: border-box;
      border-bottom: 2px solid #e9e9e9;
      width: 100%;
      padding: 14px 5px;
      color: #201515;
      font-size: 16px;
      font-weight: 600;
      .down-icon-mobile {
        width: 24px;
        height: 24px;
      }
    }
    .asideMeun1 {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .product-child {
      display: block;
      box-sizing: border-box;
      padding: 10px;
      font-size: 14px;
      color: #403f3e;
      border-radius: 6px;
      font-weight: 400;
      &:hover {
        background: #f2f4f6;
      }
    }
  }
  .loginbtn-mobile {
    position: absolute;
    bottom: 15px;
    left: 15px;
    width: calc(100% - 30px);
    .login_font {
      display: block;
      width: 100%;
      height: 38px;
      line-height: 38px;
      border-radius: 25px;
      font-weight: 500;
      font-size: 16px;
      color: #201515;
      text-align: center;
      border: 1px solid #201515;
      margin-top: 12px;
    }
    .try_free {
      display: block;
      width: 100%;
      height: 40px;
      line-height: 40px;
      background-color: #f66442;
      border-radius: 25px;
      font-weight: 500;
      color: #ffffff;
      font-size: 16px;
      text-align: center;
    }
  }
}
</style>
<style lang="scss">
.el-popover.el-popper {
  border: 0px red solid !important;
  box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}
.header-scrolls {
  display: none;
  width: 100%;
  border-bottom: 4px solid #f66442;
  animation-name: moveto;
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
}
@keyframes moveto {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
.header-scrolls-move {
  display: none;
  width: 100%;
  border-bottom: 4px solid #f66442;
  animation-name: disappear;
  animation-duration: 0.2s;
  animation-iteration-count: 1;
  animation-timing-function: forwards;
}
@keyframes disappear {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
.head-question-popover {
  max-width: 1000px !important;
  width: auto !important;

  .head-question-con {
    display: grid;
    grid-template-columns: 1fr 1fr;
    // grid-template-rows: 1fr 1fr;
    grid-gap: 16px;
    .one_card {
      padding: 16px;
      border-radius: 8px;
      display: flex;
      grid-column-gap: 16px;
      cursor: pointer;
      .icon {
        width: 32px;
        height: 32px;
      }
      .right {
        .title {
          font-weight: 500;
          font-size: 18px;
          color: #201515;
        }
        .font {
          font-weight: 400;
          font-size: 14px;
          color: #403f3e;
          margin-top: 8px;
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
.logout_btn {
  cursor: pointer;
  // line-height: 40px;
  text-align: center;
  color: rgb(96, 98, 102);
  &:hover {
    color: #f66442;
  }
}
.userInfo {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  cursor: pointer;
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 8px;
  }
  .nickname {
    font-size: 14px;
    font-weight: 500;
    color: #4c4c4c;
    line-height: 20px;
  }
}
</style>
<style lang="scss" scoped>
.v-header {
  height: 80px;
  // width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  flex-grow: 1;
  padding: 0;
  // border: 1px red solid;
  .header-content {
    width: 100%;
    max-width: 1200px;
    padding: 0 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    // box-sizing: border-box;
    @media screen and (max-width: 600px) {
      padding: 0 15px;
    }
    .logo {
      font-size: 40px;
    }
    .menus {
      // border: 1px red solid;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      // flex: auto;
      margin: 0 80px;
      // max-width: 453px;
      grid-gap: 26px;
      height: 100%;
      .meun {
        font-size: 20px;
        font-weight: 500;
        // color: #484848;
        color: #403f3e;
        box-sizing: border-box;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        a {
          display: block;
          // height: 72px;
          // line-height: 72px;
          height: 72px;
          line-height: 68px;
          box-sizing: border-box;
          overflow: hidden;
          color: #403f3e;
          .down-icon {
            display: inline-block;
            width: 16px;
            height: 16px;
            margin-left: 8px;
          }
        }
        .head-name-products {
          height: 72px;
          line-height: 68px;
          padding-bottom: 4px;
          display: flex;
          align-items: center;
          color: #403f3e;
          overflow: hidden;
          .down-icon {
            display: inline-block;
            width: 16px;
            height: 16px;
            margin-left: 8px;
          }
        }
        .head-name-products1 {
          color: #f66442;
        }
        &.active {
          // border-bottom: 4px solid #f66442;
          a {
            color: #f66442;
          }
        }
        &:hover {
          a {
            color: #f66442;
          }
        }
      }
    }
    .mobile {
      display: none;

      .mobileLogo {
        font-size: 26px;
        cursor: pointer;
      }

      .mobileMenus {
        width: 20px;
        height: 20px;
      }
    }
    .btn {
      width: 104px;
      height: 40px;
      font-size: 16px;
      font-weight: 400;
      color: #ffffff;
      line-height: 22px;
      line-height: 40px;
    }
  }

  .loginbtn {
    display: flex;
    align-items: center;
    justify-content: center;
    // border: 1px red solid;
    @media screen and (max-width: 1000px) {
      display: none;
    }
    .login_font {
      width: 80px;
      font-weight: 400;
      font-size: 18px;
      color: #403f3e;
      text-align: right;
      &:hover {
        color: #201515;
        font-weight: 600;
      }
      @media screen and (max-width: 460px) {
        font-size: 12px;
      }
    }
    .try_free {
      padding: 9px 24px;
      background-color: #f66442;
      border-radius: 22px;
      font-weight: 500;
      font-size: 20px;
      color: #ffffff;
      margin-left: 24px;
      @media screen and (max-width: 460px) {
        font-size: 12px;
        margin-left: 16px;
        padding: 4px 4px;
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .v-header {
    .header-content {
      // padding: 0 15px;
      .home-logo {
        display: none;
      }
      .logo {
        display: none;
      }
      .menus {
        display: none;
      }
      .mobile {
        display: flex;
        align-items: center;
        .mobileMenus {
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
