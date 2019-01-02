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
