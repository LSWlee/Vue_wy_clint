/**
 * Created by lsw on 2019/1/2 0002.
 */
import {reqCurrentcategory} from '../../api'
import {RECEIVE_CURRENTCATEGORY} from '../mutation_types'
const state = {
  currentCategory:{},
  subCateList:[],
  categoryL1List:[]
}
const mutations = {
  [RECEIVE_CURRENTCATEGORY](state,{subCateList,categoryL1List,result}){
    state.currentCategory = result
    state.subCateList = subCateList
    state.categoryL1List = categoryL1List
  }
}
const actions = {
  async getCurrentcategory({commit},callback){
    let resule = await reqCurrentcategory()
    if(resule.code===0){
      const {subCateList} = resule.data.currentCategory
      const {categoryL1List} = resule.data
      const result = resule.data
      commit(RECEIVE_CURRENTCATEGORY,{subCateList,categoryL1List,result})
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
