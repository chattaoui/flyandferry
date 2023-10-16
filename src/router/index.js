import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/triplist',
    name: 'triplist',
    component: () => import('../views/tripList.vue'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('trips'))
        next()
      else 
        next({path: '/'})
    }
  },
  {
    path: '/jellyloader',
    name: 'loader',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/jellyLoader.vue')
  }, 
  {
    path: '/form',
    name: 'form',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/formWidget.vue')
  }, 
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/loginPage.vue'),
    meta: {
      hideNavbar: true // Set this meta field to true to hide the navbar
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
