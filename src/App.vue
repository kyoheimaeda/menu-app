<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RouterView } from 'vue-router'

import HeaderView from '@/components/HeaderView.vue'

const route = useRoute()
const pageTitle = computed((): string => {
  return (route.meta.title as string) || 'Default Title'
})
</script>

<template>
  <HeaderView :title="pageTitle" />
  <article>
    <div class="inner">
      <RouterView />
    </div>
  </article>
</template>

<style scoped>
article {
  padding: 0 0 4rem;
}
@media (min-width: 1024px) {
}
</style>
