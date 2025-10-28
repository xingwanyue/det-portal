<template>
  <div>
    <template v-if="user?.id && !user?.temp">
      <template v-if="user?.vipIds && user?.vipIds.length > 33">
        <!-- 多个vipid 全部灰色 直接打开stripe弹框-->
        <div class="buy_btn_new gray_btn" @click="emit('buy', item)">
          {{ $t('pricing.pagefont.Buy_Now') }}
        </div>
      </template>
      <template v-else>
        <template v-if="user?.vipIds">
          <!-- 三个月开关打开 -> 对应 saveOpen=true 的逻辑 -->
          <template v-if="tableSwitchOpen">
            <template v-if="item?.isCurrent90">
              <div class="buy_btn_new" @click="emit('buy', item)">
                {{ t('pricing.storeVip.currentplan') }}
              </div>
            </template>
            <template v-else>
              <template v-if="Number(item?.price90) > Number(currentPrice90)">
                <div class="buy_btn_new" @click="emit('upgrade', item)">
                  {{ t('pricing.storeVip.Upgrade') }}
                </div>
              </template>
              <template v-else>
                <div class="buy_btn_new gray_btn" @click="emit('buy', item)">
                  {{ t('pricing.pagefont.Buy_Now') }}
                </div>
              </template>
            </template>
          </template>
          <!-- 三个月开关关闭 -> 对应 saveOpen=false 的逻辑 -->
          <template v-else>
            <template v-if="item?.isCurrent30">
              <div class="buy_btn_new" @click="emit('buy', item)">
                {{ t('pricing.storeVip.currentplan') }}
              </div>
            </template>
            <template v-else>
              <template v-if="Number(item?.price) > Number(currentPrice30)">
                <div class="buy_btn_new" @click="emit('upgrade', item)">
                  {{ t('pricing.storeVip.Upgrade') }}
                </div>
              </template>
              <template v-else>
                <div class="buy_btn_new gray_btn" @click="emit('buy', item)">
                  {{ t('pricing.pagefont.Buy_Now') }}
                </div>
              </template>
            </template>
          </template>
        </template>
        <template v-else>
          <div class="buy_btn_new" @click="emit('buy', item)">
            {{ $t('pricing.pagefont.Buy_Now') }}
          </div>
        </template>
      </template>
    </template>
    <template v-else>
      <NuxtLink class="buy_btn_new" :to="localePath('/login?url=/pricing')">
        {{ t('pricing.pagefont.Buy_Now') }}
      </NuxtLink>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const localePath = useLocalePath();

const props = defineProps<{
  user: any;
  item: any;
  currentPrice30: number;
  currentPrice90: number;
  tableSwitchOpen: boolean;
}>();

const emit = defineEmits<{
  (e: 'buy', item: any): void;
  (e: 'upgrade', item: any): void;
}>();
</script>

<style lang="scss" scoped>
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
.gray_btn {
  background: #f5f5f5 !important;
  color: #b3b3b3 !important;
  border: 1px solid #f5f5f5 !important;
}
</style>
