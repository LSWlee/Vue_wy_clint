/**
 * Created by lsw on 2018/12/30 0030.
 */
import {reqMain,reqCartList} from '../../api/index'
import {RECEIVE_SHOPS,RECEIVE_CART_LIST} from '../mutation_types'
const state = {
  shops:{},
  cartList:[],
  kingKongList:[],
  categoryList:[],

  itemList:[]

}
const actions = {
 async getMain({commit},callback){
    let result = await reqMain()
   if(result.code===0){
      const shops = result.data
     const {kingKongList} = result.data.kingKongModule
     const {categoryList} = result.data.categoryHotSellModule
     const {itemList} = result.data.flashSaleModule
      commit(RECEIVE_SHOPS,{shops,kingKongList,categoryList,itemList})
     typeof callback==='function' && callback()
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
  [RECEIVE_SHOPS](state,{shops,kingKongList,categoryList,itemList}){
    state.shops = shops
    state.kingKongList = kingKongList
    state.categoryList = categoryList
    state.itemList = itemList
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
