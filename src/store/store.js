import Vue from 'vue'
import Vuex from 'vuex'
import a from './modules/a'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    a
  },
  getters
})

export default store
