/**
 * Created by lsw on 2018/12/29 0029.
 */
import Vue from 'vue'
import App from './App.vue'
import 'mint-ui/lib/style.min.css'
import router from './router/index'
import './Mock/MockServe'
import store from './store/index'
import {Button} from 'mint-ui'
import Split from './components/Splite/Splite.vue'
import Mint from 'mint-ui';
Vue.use(Mint);

Vue.component('Split',Split)
Vue.component(Button.name, Button);
new Vue({
  el:'#app',
  render:h=>h(App),
  router,
  store
})
