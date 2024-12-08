<script setup lang="ts">
import { computed, ref } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'
import { useRouter } from 'vue-router'
import type { DateEntry } from '@/types/firebase'

import { formatDate } from '@/utils/formatDate'

const router = useRouter()

// 今週の日付を計算する
const getDatesOfWeek = (): string[] => {
  const today = new Date()
  const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()))
  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startOfWeek)
    date.setDate(startOfWeek.getDate() + i)
    return date.toISOString().split('T')[0]
  })
}
const dates = computed(() => getDatesOfWeek())

const goToDetail = (date: string) => {
  router.push({ name: 'detail', params: { date } })
}
</script>

<template>
  <ul>
    <li v-for="date in dates" :key="date" @click="goToDetail(date)">
      {{ formatDate(date) }}
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

li {
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  list-style: none;
  border: 1px solid var(--color-gray-300);
  border-radius: 0.8rem;
  font-weight: bold;
}
</style>
