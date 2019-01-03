/**
 * Created by lsw on 2019/1/2 0002.
 */
import {reqSeeTaps,reqRecManual,reqPullRefresh} from '../../api'
import {RECEIVE_SEETAPS,RECEIVE_RECMANUAL,RECEIVE_PULLREFRESH} from '../mutation_types'
const state = {
  seeTaps:[],
  RecManual:[],
  PullRefresh:{},
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
  },
  async getPullRefresh({commit},{page,size,tabId,}){
    let result = await reqPullRefresh({page,size,tabId})
    if(result.code==='200'){
      const PullRefresh = result.data
      commit(RECEIVE_PULLREFRESH,{PullRefresh})
    }
  }
}
const mutations = {
  [RECEIVE_SEETAPS](state,{seeTaps}){
    state.seeTaps = seeTaps
  },
  [RECEIVE_RECMANUAL](state,{RecManual}){
    state.RecManual = RecManual
  },
  [RECEIVE_PULLREFRESH](state,{PullRefresh}){
    state.PullRefresh = PullRefresh
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
  },

}
export default {
  state,
  actions,
  mutations,
  getters
}
