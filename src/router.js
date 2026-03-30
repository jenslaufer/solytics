import { createWebHistory, createRouter } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('./pages/Home.vue'),
    },
    {
      path: '/impressum',
      component: () => import('./pages/Impressum.vue'),
    },
    {
      path: '/datenschutz',
      component: () => import('./pages/Datenschutz.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})
