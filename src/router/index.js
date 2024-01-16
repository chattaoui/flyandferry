import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import axios from 'axios'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      showNavbar: true, 
    }
  },
  {
    path: '/triplist',
    name: 'triplist',
    component: () => import('../views/tripList.vue'),
    meta: {
      showNavbar: true, 
    },
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('trips'))
        next()
      else
        next({ path: '/' })
    }
  },
  // {
  //   path: '/notfound',
  //   name: 'triplist',
  //   component: () => import('../views/notFound.vue'),
  // },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/loginPage.vue')
  },
  {
    path: '/userspace',
    name: 'userspace',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/userspace.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.path === '/login' && await validateToken(localStorage.getItem('token'))) {
    next({ path: '/userspace' })
    return
  }
  // Check if the route requires authentication
  if (to.meta.requiresAuth) {
    // Check if the user is authenticated
    if (await validateToken(localStorage.getItem('token'))) {
      // User is authenticated, allow access
      next();
    } else {
      // User is not authenticated, redirect to login page
      next('/login');
    }
  } else {
    // Route does not require authentication, allow access
    next();
  }
});

async function validateToken(token) {
  try {
    if (!localStorage.getItem('token')) return false
    const response = await axios.post('https://cms.4help.tn/api/Authentication_API/auth', {}, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });

    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error validating token:', error);
    localStorage.removeItem('token');
    return false;
  }
}

export default router
