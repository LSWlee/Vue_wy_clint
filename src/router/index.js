/**
 * Created by lsw on 2018/12/29 0029.
 */
import VueRouter from 'vue-router';
import routes from './routers'
import Vue from 'vue'


Vue.use(VueRouter);

export default new VueRouter({
  mode:'history',
  routes
})
