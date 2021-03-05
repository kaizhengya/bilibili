import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const search = ()=> import ('../views/search.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
 
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
  path: '/search',
    name: 'search',
    component:search
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
