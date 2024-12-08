<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <header>
    <div class="inner">
      <RouterLink to="/">
        <mdicon name="chevron-left" />
      </RouterLink>
      <h1>{{ title }}</h1>
    </div>
  </header>
</template>

<style scoped>
header {
  position: relative;
  padding: 2rem 0;
}

header .inner {
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr auto 1fr;
}

header .inner::after {
  content: '';
}

header h1 {
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 0.1em;
}
</style>
