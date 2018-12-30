/**
 * Created by lsw on 2018/12/30 0030.
 */
import Vuex from 'vuex'
import Vue from 'vue'

import actions from './actions'
import getters from './getters'

import msite from './modules/msite'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules:{
    msite
  }
})