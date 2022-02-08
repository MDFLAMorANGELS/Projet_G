import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Accueil',
    name: 'Accueil',
    component: () => import('../views/Accueil.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
