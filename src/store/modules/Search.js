/**
 * Created by lsw on 2019/1/5 0005.
 */
import {reqHotSearch,reqSeacrhComplete} from '../../api'
import {RECEIVE_HOTSEARCH,RECEIVE_SEARCH_COMPLETE} from '../mutation_types'
const state = {
  hotKeywordVOList:[],
  defaultKeywords:[],
  defaultKeyword:{},
  colorfulEggList:[],

  topics:[]
}
const actions = {
  async getHotShop({commit}){
    const result = await reqHotSearch()
    if(result.code==='200'){
      const {hotKeywordVOList,defaultKeywords,defaultKeyword,colorfulEggList} = result.data
      commit(RECEIVE_HOTSEARCH,{hotKeywordVOList,defaultKeywords,defaultKeyword,colorfulEggList})
    }
  },
  async getSearchComplete({commit},keywordPrefix){
    const result = await reqSeacrhComplete(keywordPrefix)
    if(result.code==='200'){
      const {data} = result
      commit(RECEIVE_SEARCH_COMPLETE,{data})
    }

  }
}
const mutations = {
  [RECEIVE_HOTSEARCH](state,{hotKeywordVOList,defaultKeywords,defaultKeyword,colorfulEggList}){
    state.hotKeywordVOList = hotKeywordVOList
    state.defaultKeywords = defaultKeywords
    state.defaultKeyword = defaultKeyword
    state.colorfulEggList = colorfulEggList
  },
  [RECEIVE_SEARCH_COMPLETE](state,{data}){
    state.topics = data
  }
}
const getters = {

}
export default {
  state,
  actions,
  mutations,
  getters
}
