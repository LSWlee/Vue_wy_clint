/**
 * Created by lsw on 2018/12/29 0029.
 */
import ajax from './api'


export const reqMain = ()=> ajax('/main')

export const reqCartList = () => ajax('/cartlist')

export const reqCurrentcategory = () => ajax('/classify')

//定义获取好物tap的请求
export const reqSeeTaps = () => ajax('/api/topic/v1/find/getTabs.json')

//定义获取好物的内容请求
export const reqRecManual = () => ajax('/api/topic/v1/find/recManual.json')

//定义实现下拉刷新的请求
//http://m.you.163.com/topic/v1/find/getTabData.json?page=1&size=5&tabId=4
export const reqPullRefresh = ({page,size,tabId}) => ajax('/api/topic/v1/find/getTabData.json',{page,size,tabId})

//定义获取热门搜索的数据请求http://m.you.163.com/xhr/search/init.json
export const reqHotSearch = () => ajax('/api/xhr/search/init.json','POST')

//定义搜索的接口 http://m.you.163.com/xhr/search/searchAutoComplete.json?csrf_token=b3562f9291acf772228f8aa617e
export const reqSeacrhComplete = (keywordPrefix) => ajax(`/api/xhr/search/searchAutoComplete.json`,{keywordPrefix})

//晒单title请求https://m.you.163.com/topic/v1/look/homeData.json
export const reqSeeTitle = () => ajax('/api/topic/v1/look/homeData.json')

//晒单title图片请求https://m.you.163.com/topic/v1/look/getCollection.json?id=26
export const reqSeecollecTion = ({id}) => ajax('/api/topic/v1/look/getCollection.json',{id})

//晒单最新https://m.you.163.com/topic/v1/look/getList.json?page=1&size=20&type=1
export const reqBetterNew = ({page,size,type}) => ajax('/api/topic/v1/look/getList.json',{page,size,type})
