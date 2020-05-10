// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'default-passive-events'
import service from '@/service/index'

Vue.config.productionTip = false
Vue.prototype.$service = service
Vue.use(ElementUI)

const whiteList = ['/', '/reg'] // 免登陆白名单
const userWhiteList = ['/index', '/pay', '/foodDetail', '/'] // 用户页面路径白名单
const managerWhiteList = ['/m_index/user_m', '/m_index/food_m', '/', 'm_index'] // 管理员页面路径白名单

router.beforeEach((to, from, next) => {
  const userLogin = sessionStorage.getItem('userToken') // 用户登录状态
  const managerLogin = sessionStorage.getItem('managerToken')// 管理员登录状态

  if (to.path === '/' || to.path === '/reg') { // 每次到登录页或注册页都将token置空
    store.state.loginIn.userToken = null
    store.state.loginIn.managerToken = null
    sessionStorage.removeItem('userToken')
    sessionStorage.removeItem('managerToken')
  }
  if (!userLogin && !managerLogin) {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/')
    }
  }
  if (userLogin) {
    if (userWhiteList.indexOf(to.path) === -1) {
      next('/index')
    } else {
      next()
    }
  }
  if (managerLogin) {
    if (managerWhiteList.indexOf(to.path) === -1) {
      next('/m_index')
    } else {
      next()
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
