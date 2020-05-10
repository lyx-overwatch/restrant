import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/login')
    },
    {
      path: '/reg',
      name: 'register',
      component: () => import('@/views/user/register')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/user/index')
    },
    {
      path: '/pay',
      name: 'pay',
      component: () => import('@/views/user/pay')
    },
    {
      path: '/foodDetail',
      name: 'foodDetail',
      component: () => import('@/views/user/foodDetail')
    },
    {
      path: '/m_index',
      name: 'm_idnex',
      redirect: '/m_index/user_m',
      component: () => import('@/views/manager/index'),
      children: [
        {
          path: 'user_m',
          name: 'user_m',
          component: () => import('@/views/manager/user')
        },
        {
          path: 'food_m',
          name: 'food_m',
          component: () => import('@/views/manager/food')
        }
      ]
    }
  ]
})

export default router
