import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/login')
    },
    {
      path: '/reg',
      name: 'register',
      component: () => import('@/views/register')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/index')
    },
    {
      path: '/pay',
      name: 'pay',
      component: () => import('@/views/pay')
    },
    {
      path: '/foodDetail',
      name: 'foodDetail',
      component: () => import('@/views/foodDetail')
    }
  ]
})
