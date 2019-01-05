/**
 * Created by lsw on 2018/12/30 0030.
 */
import Vuex from 'vuex'
import Vue from 'vue'

import actions from './actions'
import getters from './getters'

import msite from './modules/msite'
import classIfy from './modules/classIfy'
import seeTaps from './modules/see'
import Search from './modules/Search'
Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  modules:{
    msite,
    classIfy,
    seeTaps,
    Search
  }
})
