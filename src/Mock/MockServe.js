/**
 * Created by lsw on 2018/12/29 0029.
 */
import main from './datas/shouye_data.json'
import cartList from './datas/cateList.json'
import classify from  './datas/fenlei_zhuanqu.json'
import Mock from 'mockjs';

Mock.mock('/main',{code:0,data:main})
Mock.mock('/cartlist',{code:0,data:cartList})

Mock.mock('/classify',{code:0,data:classify})
