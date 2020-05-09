import Vue from 'vue'
import Vuex from 'vuex'
import a from './modules/a'
import detail from './modules/foodDetail'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    a,
    detail
  },
  getters
})

export default store
