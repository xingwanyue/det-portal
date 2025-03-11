<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
import { reactive } from 'vue';

const state = reactive({});
const props = defineProps({
  list: Array,
}) as any;
const localePath = useLocalePath();
const routername = ref(' ');
// 获取路由名称
onMounted(() => {
  const route = useRoute();
  console.log(route.path);
  console.log(route.path);
  routername.value = route.path;
});

const tree_data = computed(() => {
  return [
    {
      id: 0,
      name: t('courses.changeleftfont.read'),
      chikldren: [
        {
          name: t('courses.four_change_right_data.data1.video1data.title'),
          path: '/courses/det-read-and-select-course',
        },
        { name: t('courses.four_change_right_data.data1.video2data.title'), path: '/courses/det-fill-in-the-blanks' },
        {
          name: t('courses.four_change_right_data.data1.video3data.title'),
          path: '/courses/det-interactive-reading-course',
        },
        {
          name: t('courses.four_change_right_data.data1.video4data.title'),
          path: '/courses/det-read-and-complete-prep-course',
        },
      ],
    },
    {
      id: 1,
      name: t('courses.changeleftfont.lis'),
      chikldren: [
        {
          name: t('courses.four_change_right_data.data2.video1data.title'),
          path: '/courses/det-prep-course-listen-and-type-questions',
        },
        {
          name: t('courses.four_change_right_data.data2.video2data.title'),
          path: '/courses/det-prep-course-interactive-listening',
        },
      ],
    },
    {
      id: 2,
      name: t('courses.changeleftfont.spe'),
      chikldren: [
        {
          name: t('courses.four_change_right_data.data3.video1data.title'),
          path: '/courses/det-course-speak-about-the-photo',
        },
        {
          name: t('courses.four_change_right_data.data3.video2data.title'),
          path: '/courses/det-course-read-listen-then-speak',
        },
        {
          name: t('courses.four_change_right_data.data3.video3data.title'),
          path: '/courses/det-prep-course-read-aloud',
        },
        {
          name: t('courses.four_change_right_data.data3.video4data.title'),
          path: '/courses/det-course-speaking-sample',
        },
      ],
    },
    {
      id: 3,
      name: t('courses.changeleftfont.wri'),
      chikldren: [
        {
          name: t('courses.four_change_right_data.data4.video1data.title'),
          path: '/courses/det-write-about-the-photo-course',
        },
        { name: t('courses.four_change_right_data.data4.video2data.title'), path: '/courses/det-interactive-writing' },
        {
          name: t('courses.four_change_right_data.data4.video3data.title'),
          path: '/courses/det-prep-course-writing-sample',
        },
      ],
    },
    {
      id: 4,
      name: t('courses.changeleftfont.vocabulary'),
      chikldren: [
        {
          name: t('courses.four_change_right_data.data5.video1data.title'),
          path: '/courses/boost-det-vocabulary-7-adv-photo-desc-tech',
        },
        {
          name: t('courses.four_change_right_data.data5.video2data.title'),
          path: '/courses/det-listening-words',
        },
      ],
    },
  ];
});
</script>
<template>
  <div class="common_tree_select_out">
    <div class="top_title">Duolingo English Test {{ t('courses.prepCourse') }}</div>
    <div class="tree_out">
      <div v-for="item in tree_data" :key="item.id" class="one_part">
        <div class="father_name_out">{{ item.name }}</div>
        <nuxt-link
          :to="localePath(itemin.path)"
          :class="routername === `${itemin.path}` ? 'child_name_out child_name_out_selected' : 'child_name_out'"
          v-for="(itemin, indexin) in item.chikldren"
          :key="indexin"
        >
          {{ itemin.name }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.common_tree_select_out {
  a {
    text-decoration: none !important;
  }
  margin-top: 60px;
  .top_title {
    font-weight: 500;
    font-size: 18px;
    color: #201515;
    line-height: 25px;
    margin-bottom: 25px;
    margin-left: 24px;
    margin-top: 16px;
  }
  .tree_out {
    .one_part {
      .father_name_out {
        padding: 12px 24px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        font-weight: 500;
        font-size: 18px;
        color: #999999;
        margin-top: 16px;
        margin-bottom: 6px;
      }
      .child_name_out {
        padding: 11px 24px;
        font-weight: 400;
        font-size: 18px;
        color: #201515;
        line-height: 26px;
        border-radius: 4px;

        display: block;
        &:hover {
          color: #201515;
          background: #fafafa;
        }
      }
      .child_name_out_selected {
        background: rgba(246, 100, 66, 0.05);
        color: #f66442;
        &:hover {
          background: rgba(246, 100, 66, 0.05);
          color: #f66442;
        }
      }
    }
  }
}
</style>
