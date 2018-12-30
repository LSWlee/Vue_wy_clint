/**
 * Created by lsw on 2018/12/29 0029.
 */
import ajax from './api'
const BASE = '/api';
export const reqMain = ()=> ajax('/main')
export const reqCartList = () => ajax('/cartlist')
