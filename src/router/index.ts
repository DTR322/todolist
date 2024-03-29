import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import TaskAddView from "@/views/TaskAddView.vue";
import TaskRedactionView from "@/views/TaskRedactionView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/TaskAdd',
      name: 'TaskAdd',
      component: TaskAddView
    },
    {
      path: '/TaskRedaction',
      name: 'TaskRedaction',
      component: TaskRedactionView
    }
  ]
})

export default router
