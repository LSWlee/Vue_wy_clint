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
