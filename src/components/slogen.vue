<script setup lang="ts">
import { useStore } from '@/store';
import { googlePopupLogin } from '@/utils/googleAuth';
import { urlGet, saveToken } from '@/utils';

const localePath = useLocalePath();
const store = useStore();
const user = computed(() => store.user);
const googleLogin = () => {
  googlePopupLogin(async (res: any) => {
    const { err, data: { token = '' } = {} } = res;
    if (!err) {
      await saveToken(token);
      await store.getUserInfo();

      window.location.href = urlGet('/home');
    }
  });
};
</script>

<template>
  <div class="slogen_out_wrapper">
    <div class="slogen_out">
      <h2 v-html="$t('slogen.title')"></h2>
      <div v-if="!user.id" class="two_btn_out">
        <div class="common_btn common_btn_hover_bgColor yellow" @click="googleLogin">
          <img src="/img/home/google_icon.svg" :alt="$t('slogen.Start_free_with_Google')" />
          {{ $t('slogen.Start_free_with_Google') }}
        </div>
        <NuxtLink :to="localePath(`/login`)" class="common_btn common_btn_hover_borderCu white" rel="nofollow">
          {{ $t('slogen.Start_free_with_email') }}
        </NuxtLink>
      </div>
      <div v-else class="two_btn_out">
        <NuxtLink :href="urlGet('/home')" class="common_btn common_btn_hover_borderCu white">
          {{ $t('slogen.Start_for_free') }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.slogen_out_wrapper {
  padding: 0 30px;
  background: #fff4f1;
  @media (max-width: 450px) {
    padding: 0 15px;
  }
  .slogen_out {
    max-width: 1200px;
    margin: 0 auto;
    padding: 100px 0;
  }
  :deep(.font1) {
    font-weight: 600;
    font-size: 56px;
    color: #201515;
    text-align: center;
    @media (max-width: 1270px) {
      font-size: 36px;
    }
    @media (max-width: 830px) {
      font-size: 24px;
    }
  }
  :deep(.font2) {
    font-weight: 600;
    font-size: 56px;
    color: #f66442;
    margin-top: 12px;
    text-align: center;
    @media (max-width: 1270px) {
      font-size: 36px;
    }
    @media (max-width: 830px) {
      font-size: 24px;
    }
  }
  .two_btn_out {
    clear: both;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    grid-gap: 16px;
    @media (max-width: 730px) {
      flex-direction: column;
    }

    .yellow {
      background: #f66442;
      display: flex;
      justify-content: center;
      align-items: center;
      grid-column-gap: 8px;
      img {
        width: 26px;
        height: 26px;
      }
    }
    .white {
      border: 1px solid #201515;
      color: #201515;
    }
  }
}
</style>
