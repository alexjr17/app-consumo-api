import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/views/IndexView'
import productos from './productos.js'
const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexView
  }
].concat(productos)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

