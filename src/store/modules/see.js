/**
 * Created by lsw on 2019/1/2 0002.
 */
import {reqSeeTaps,reqRecManual} from '../../api'
import {RECEIVE_SEETAPS,RECEIVE_RECMANUAL} from '../mutation_types'
const state = {
  seeTaps:[],
  RecManual:[],
}
const actions = {
  async getSeeTaps({commit}){
    let result = await reqSeeTaps()
    if(result.code==='200'){
      const seeTaps = result.data
      commit(RECEIVE_SEETAPS,{seeTaps})
    }
  },
  async getRecManual({commit}){
    let result = await reqRecManual()
    if(result.code==='200'){
      const RecManual = result.data
      commit(RECEIVE_RECMANUAL,{RecManual})
    }
  }
}
const mutations = {
  [RECEIVE_SEETAPS](state,{seeTaps}){
    state.seeTaps = seeTaps
  },
  [RECEIVE_RECMANUAL](state,{RecManual}){
    state.RecManual = RecManual
  }
}
const getters = {
  topics(state){
    const newTopics = []
    state.RecManual.forEach((items,index) => {
      items.topics.forEach((item,index)=>{
        newTopics.push(item)
      })
    })
    return newTopics
  }
}
export default {
  state,
  actions,
  mutations,
  getters
}
