<script setup lang="ts">
import { useStore } from '@/store';
const store = useStore();
import { urlGet } from '@/utils';
const localePath = useLocalePath();
const user = computed(() => store.user);
</script>

<template>
  <div class="embark_out_wrapper">
    <div class="embark_out">
      <div class="font1">{{ $t('highscorewriting.font1') }}</div>
      <div class="font2">{{ $t('highscorewriting.font2') }}</div>
      <div v-if="!user.id" class="two_btn_out">
        <div>
          <NuxtLink
            class="common_btn common_btn_hover_bgColor yellow"
            :to="localePath(`/login?url=${urlGet('/correct')}`)"
            rel="nofollow"
          >
            {{ $t('highscorewriting.Start_Now') }}</NuxtLink
          >
        </div>
      </div>
      <div v-else class="two_btn_out">
        <div>
          <NuxtLink class="common_btn common_btn_hover_bgColor yellow" :to="localePath(`${urlGet('/correct')}`)">
            {{ $t('highscorewriting.Start_Now') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.embark_out_wrapper {
  padding: 0 30px;
  @media (max-width: 450px) {
    padding: 0 15px;
  }
  background: #fff4f1;
  .embark_out {
    max-width: 1200px;
    margin: 0 auto;
    padding: 100px 0;
    @media (max-width: 450px) {
      padding: 50px 0;
    }
  }
  .font1 {
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
  .font2 {
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
