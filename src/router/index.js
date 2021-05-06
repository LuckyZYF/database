import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../modules/Login'
import Index from '../modules/Index'
import Error from '../modules/Error'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/error',
    component: Error
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
