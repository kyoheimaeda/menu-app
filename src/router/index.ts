import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import IngredientsView from '../views/IngredientsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: '週の献立' },
  },
  {
    path: '/detail/:date',
    name: 'detail',
    component: DetailView,
    props: true,
    meta: { title: '献立詳細' },
  },
  {
    path: '/ingredients',
    name: 'IngredientsView',
    component: IngredientsView,
    meta: { title: '買い物リスト' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
