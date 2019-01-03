/**
 * Created by lsw on 2018/12/29 0029.
 */
import Msite from '../pages/Msite/Miste.vue'
import Classify from '../pages/Classify/Classify.vue'
import Persion from '../pages/Persion/Persion.vue'
import See from '../pages/See/See.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import SelectPerson from '../pages/SelectPerson/SelectPerson.vue'
import Phonelogin from '../pages/Phonelogin/Phonelogin.vue'
import MessageLogin from '../pages/MessageLogin/MessageLogin.vue'
export default [
  {
    path:'/msite',
    component:Msite,
    meta:{
      FooterShow:true
    }
  },
  {
    path:'/classify',
    component:Classify,
    meta:{
      FooterShow:true
    }
  },
  {
    path:'/persion',
    component:Persion,
    meta:{
      FooterShow:true
    }
  },
  {
    path:'/see',
    component:See,
    meta:{
      FooterShow:true
    }
  },
  {
    path:'/shopCart',
    component:ShopCart,
    meta:{
      FooterShow:true
    }
  },
  {
    path:'/selectperson',
    component:SelectPerson
  },
  {
    path:'/phonelogin',
    component:Phonelogin,
  },
  {
    path:'/messagelogin',
    component:MessageLogin,
  },
  {
    path:'/',
    redirect:'msite'
  },
]
