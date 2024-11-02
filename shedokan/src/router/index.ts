import { createRouter as _createRouter, createMemoryHistory, createWebHistory } from 'vue-router'

const createRouter = () => _createRouter({
  history: import.meta.env.SSR ? createMemoryHistory(import.meta.env.BASE_URL) : createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: '/404',
      name: '404',
      strict: false,
      component: () => import("@/views/404View.vue"),
    },
    {
      path: "/:catchAll(.*)",
      redirect: {name: "404"}
    }
  ]
})

export default createRouter;
