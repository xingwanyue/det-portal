<script lang="ts" setup>
const props = defineProps({
  list: Array,
  title: String,
}) as any;
const localePath = useLocalePath();
</script>
<template>
  <div class="common_table_of_con_out">
    <h2 class="p_h2 p_mgt_20">{{ props.title }}</h2>
    <ul>
      <li v-for="(item, index) in props.list" :key="index">
        {{ item.name }}
        <ul v-if="item.children">
          <li v-for="(item2, index2) in item.children" :key="index2">{{ item2.name }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.common_table_of_con_out {
  margin-top: 20px;
  border: 1px blue solid;
}
</style>
