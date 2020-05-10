import Vue from 'vue'
import Vuex from 'vuex'
import a from './modules/a'
import detail from './modules/foodDetail'
import loginIn from './modules/login'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    a,
    detail,
    loginIn
  },
  getters
})

export default store
