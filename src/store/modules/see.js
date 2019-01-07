/**
 * Created by lsw on 2019/1/2 0002.
 */
import {reqSeeTaps,reqRecManual,reqPullRefresh,reqSeeTitle,reqSeecollecTion,reqBetterNew} from '../../api'
import {RECEIVE_SEETAPS,RECEIVE_RECMANUAL,RECEIVE_PULLREFRESH,RECEIVE_SEETITLE,RECEIVE_SEECOLLECTION,REVEIVE_BETTER_NEW} from '../mutation_types'
const state = {
  seeTaps:[],
  RecManual:[],
  arr:[],//下拉加载的数组,
  //晒单数据
  seeTitle:{},
  lookList:[],
  topicList:[]//最新数据
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
      const PullRefresh = result.data.result
      commit(RECEIVE_PULLREFRESH,{PullRefresh})
    }
  },
  async getSeeTitle({commit}){
    let result = await reqSeeTitle()
    if(result.code==='200'){
      const {data} = result
      commit(RECEIVE_SEETITLE,{data})
    }
  },
  async getSeeCollecTion({commit},{id}){
    let result = await reqSeecollecTion({id})
    if(result.code==='200'){
      const {lookList} = result.data
      commit(RECEIVE_SEECOLLECTION,{lookList})
    }
  },
  async getSeeBetterNew({commit},{page,size,type,callback}){
    const result = await reqBetterNew({page,size,type})
    if(result.code==='200'){
      const {topicList} = result.data
      commit('REVEIVE_BETTER_NEW',{topicList})
      typeof callback==='function' && callback()
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
    PullRefresh.forEach((item,index)=>{
      return state.arr.push(item)
    })
  },
  [RECEIVE_SEETITLE](state,{data}){
    state.seeTitle = data
  },
  [RECEIVE_SEECOLLECTION](state,{lookList}){
    state.lookList = lookList
  },
  [REVEIVE_BETTER_NEW](state,{topicList}){
    const newtopicList = []
    topicList.forEach((item,index)=>{
      return state.topicList.push(item)
    })
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
