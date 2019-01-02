/**
 * Created by lsw on 2019/1/2 0002.
 */
import {reqCurrentcategory} from '../../api'
import {RECEIVE_CURRENTCATEGORY} from '../mutation_types'
const state = {
  currentCategory:{}
}
const mutations = {
  [RECEIVE_CURRENTCATEGORY](state,{currentCategory}){
    state.currentCategory = currentCategory
  }
}
const actions = {
  async getCurrentcategory({commit},callback){
    let resule = await reqCurrentcategory()
    if(resule.code===0){
      const currentCategory = resule.data
      commit(RECEIVE_CURRENTCATEGORY,{currentCategory})
      typeof callback==='function' && callback()
    }
  }
}
const getters = {

}
export default {
  state,
  mutations,
  actions,
  getters
}
