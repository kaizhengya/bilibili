import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const chnne = ()=> import('../components/chnne.vue')
const search = ()=> import ('../views/search.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
	children:[
		{
		path: 'chnne/:id',
		  name: 'chnne',
		  component:chnne,
		  children:[{
			  path:'/list',
			  name:'list',
			  component:()=>import('../components/homelist.vue'),
		  }]
		},
		 { path: '/chnne/0', redirect: '/' },
	]
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
