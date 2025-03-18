<script setup lang="ts">
import { saveStorage } from '@/utils';
const route = useRoute();
const router = useRouter();

definePageMeta({
  layout: 'noheaderfooter',
});

const { code } = route.params as { code?: string };
if (code) {
  saveStorage('invite_code', code);
  router.replace('/');
}
</script>

<template></template>
