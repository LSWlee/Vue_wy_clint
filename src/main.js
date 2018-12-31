/**
 * Created by lsw on 2018/12/29 0029.
 */
import Vue from 'vue'
import App from './App.vue'

import router from './router/index'
import './Mock/MockServe'
import store from './store/index'

import Split from './components/Splite/Splite.vue'

Vue.component('Split',Split)

new Vue({
  el:'#app',
  render:h=>h(App),
  router,
  store
})
