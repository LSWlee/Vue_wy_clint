/**
 * Created by lsw on 2018/12/30 0030.
 */
import {reqMain,reqCartList} from '../../api/index'
import {RECEIVE_SHOPS,RECEIVE_CART_LIST} from '../mutation_types'
const state = {
  shops:{},
  cartList:[],
}
const actions = {
 async getMain({commit}){
    let result = await reqMain()
   if(result.code===0){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
   }
  },
  async getCartList({commit},callback){
   let result = await reqCartList()
    if(result.code===0){
     const cartList = result.data
     commit(RECEIVE_CART_LIST,{cartList})
      typeof callback==='function' && callback()
    }
  }
}
const getters = {

}
const mutations = {
  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops
  },
  [RECEIVE_CART_LIST](state,{cartList}){
    state.cartList = cartList
  }
}
export default {
  state,
  actions,
  getters,
  mutations
}
