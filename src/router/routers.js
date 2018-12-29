/**
 * Created by lsw on 2018/12/29 0029.
 */
import Msite from '../pages/Msite/Miste.vue'
import Classify from '../pages/Classify/Classify.vue'
import Persion from '../pages/Persion/Persion.vue'
import See from '../pages/See/See.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'

export default [
  {
    path:'/msite',
    component:Msite
  },
  {
    path:'/classify',
    component:Classify
  },
  {
    path:'/persion',
    component:Persion
  },
  {
    path:'/see',
    component:See
  },
  {
    path:'/shopCart',
    component:ShopCart
  },
  {
    path:'/',
    redirect:'msite'
  },
]
