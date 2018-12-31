<template>
  <div>
    <div id="header">
      <div class="search_shop">
        <a href="javascript:;" class="logo">
          <img src="./images/logo.png" alt="logo">
        </a>
        <div class="secrch_text">
        <span>
          <i class="iconfont icon-sousuo1"></i>
        </span>
          <span>搜索商品共1111款好物</span>
        </div>
        <button>登陆</button>
      </div>
      <div class="taps">
        <div class="m-taps">
          <div class="inner" ref="inners">
            <div class="tap">
              <span :class="{active:isShow}" @click="yes">推荐</span>
            </div>
            <div class="tap" v-for="(cart,index) in cartList" :key="index">
              <span :class="{active:subCateList===index}" @click="isAdd(index)">{{cart.name}}</span>
            </div>
          </div>
        </div >
        <div class="toggleTap">
          <div class="toggle">
            <i class="iconfont icon-iconfontjiantou"></i>
          </div>
        </div>
      </div>
    </div>
    <!--轮播图-->
    <div class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="slide swiper-slide" v-for="(shop,index) in shops.focusList">
            <a href="javascript:;">
              <img :src="shop.picUrl" alt="点击查看">
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <div class="advantage">
      <ul class="items">
        <li class="item">
          <a href="javascript:;" v-for="(policyDescLis,index) in shops.policyDescList" :key="index">
            <i class="iconfont icon-zhengque"></i>
            <span>{{policyDescLis.desc}}</span>
          </a>
        </li>
      </ul>
    </div>
    <!--内容区域-->
    <div class="container">
      <div class="classify">
        <ul class="items">
          <li class="item" v-for="(shop,index) in kingKongList" :key="index">
            <a href="javascript:;">
              <img :src="shop.picUrl" alt="img">
              <span>{{shop.text}}</span>
            </a>
          </li>
        </ul>
      </div>
      <Split/>

      <div class="newPerson">
        <div class="moduleTitle">
          <span class="txt">
            新人专享
          </span>
        </div>
        <div class="content">
          <a href="javascript:;" class="left">
            <div class="name">新人专享红包</div>
            <div class="imgWrap">
              <div class="m-img">
                <img src="./images/xr.png" alt="xr">
              </div>
              <div class="animate"></div>
            </div>
          </a>
          <div class="right">
            <div class="module1">
              <a href="javascript:;">
                <div class="picWrap">
                  <img src="./images/ss.png" alt="ss">
                  <div class="discount">
                    <div class="line1">¥49</div>
                    <div class="line2">¥12</div>
                  </div>
                </div>
                <div class="cnt">
                  <p class="title">福利社</p>
                  <p class="subTitle">今日特价</p>
                </div>
              </a>
            </div>
            <div class="module2">
              <a href="javascript:;">
                <div class="picWrap">
                  <img src="./images/ss.png" alt="ss">
                  <div class="discount">
                    <div class="line1">¥49</div>
                    <div class="line2">¥12</div>
                  </div>
                </div>
                <div class="cnt">
                  <p class="title">福利社</p>
                  <p class="subTitle">今日特价</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Split/>

      <div class="distributor">
        <div class="moduleTitle">
          <div class="left">
            <span>品牌制造商直供</span>
          </div>
          <a href="javascript:;" class="right">
            <span>更多</span>
            <i class="iconfont icon-jiantou"></i>
          </a>
        </div>
        <ul class="list">
          <li class="item">
            <a href="javascript:;">
              <div class="cnt">
                <h4 class="title">海外制造商</h4>
                <div class="Allprice">
                  <span class="price">
                    <span class="data-reactid">9.9</span>
                    <span class="data-reactid">元起</span>
                  </span>
                  <i class="newIcon">上新</i>
                </div>
              </div>
            </a>
          </li>
          <li class="item">
            <a href="javascript:;">
              <div class="cnt">
                <h4 class="title">海外制造商</h4>
                <div class="Allprice">
                  <span class="price">
                    <span class="data-reactid">9.9</span>
                    <span class="data-reactid">元起</span>
                  </span>
                  <i class="newIcon">上新</i>
                </div>
              </div>
            </a>
          </li>
          <li class="item">
            <a href="javascript:;">
              <div class="cnt">
                <h4 class="title">海外制造商</h4>
                <div class="Allprice">
                  <span class="price">
                    <span class="data-reactid">9.9</span>
                    <span class="data-reactid">元起</span>
                  </span>
                  <i class="newIcon">上新</i>
                </div>
              </div>
            </a>
          </li>
          <li class="item">
            <a href="javascript:;">
              <div class="cnt">
                <h4 class="title">海外制造商</h4>
                <div class="Allprice">
                  <span class="price">
                    <span class="data-reactid">9.9</span>
                    <span class="data-reactid">元起</span>
                  </span>
                  <i class="newIcon">上新</i>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <Split/>
      <!--类目热销榜-->
      <div class="hot-sell">
        <div class="moduleTitle">
          <div class="left">
            <span>类目热销榜</span>
          </div>
        </div>
        <div class="content">
          <div class="line1">
            <a href="javascript:;">
              <div class="name">
                <span>{{categoryList[0].categoryName}}</span>
              </div>
              <div class="imgWrap">
                <img src="./images/jujia.png" alt="xxx">
              </div>
            </a>
            <a href="javascript:;">
              <div class="name">
                <span>{{categoryList[1].categoryName}}</span>
              </div>
              <div class="imgWrap">
                <img src="./images/jujia.png" alt="xxx">
              </div>
            </a>
          </div>
          <div class="line2">
            <a href="javascript:;" class="item" v-for="(category,index) in newCategoryName" :key="index">
              <div class="name">{{category.categoryName}}</div>
              <div class="imgWrap">
                <img :src="category.picUrl" alt="">
              </div>
            </a>
          </div>
        </div>
      </div>
      <Split/>
      <!--人气推荐，上一下三-->
      <div class="recommend">
        <div class="moduleTitle">
          <div class="left">
            <span>品牌制造商直供</span>
          </div>
          <a href="javascript:;" class="right">
            <span>更多</span>
            <i class="iconfont icon-jiantou"></i>
          </a>
        </div>
        <a href="javascript:;" class="spItem">
          <div class="wraper">
            <img src="./images/ys.png" alt="">
          </div>
          <div class="data-reactid">
            <div class="name">全净皓齿变速式声波电动牙刷</div>
            <div class="desc">999+好评爆款，洁齿又护龈</div>
            <div class="price">
              <span>￥</span>
              <span>333</span>
            </div>
          </div>
        </a>
        <div class="m-indexItem">
          <ul class="list">
            <li class="item">
              <a href="javascript:;" class="good">
                <img src="./images/zc.png" alt="">
                <div class="name">
                  <span class="txt">30包 谷风一木软抽面巾纸...</span>
                  <span class="dynamicPrice">
                    <span>￥</span>
                    <span>77</span>
                  </span>
                </div>
              </a>
            </li>
            <li class="item">
              <a href="javascript:;" class="good">
                <img src="./images/zc.png" alt="">
                <div class="name">
                  <span class="txt">30包 谷风一木软抽面巾纸...</span>
                  <span class="dynamicPrice">
                    <span>￥</span>
                    <span>77</span>
                  </span>
                </div>
              </a>
            </li>
            <li class="item">
              <a href="javascript:;" class="good">
                <img src="./images/zc.png" alt="">
                <div class="name">
                  <span class="txt">30包 谷风一木软抽面巾纸...</span>
                  <span class="dynamicPrice">
                    <span>￥</span>
                    <span>77</span>
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Split/>
      <!--限时购-->
      <div class="limited">
        <div class="moduleTitle">
          <div class="left">
            <span>限时购</span>
            <div class="m-countdown">
              <span class="hours">00</span>
              <span class="colon">:</span>
              <span class="mins">00</span>
              <span class="colon">:</span>
              <span class="sece">00</span>
            </div>
          </div>
          <a href="javascript:;" class="right">
            <span>更多</span>
            <i class="iconfont icon-jiantou"></i>
          </a>
        </div>
        <div class="cnt">
          <a href="javascript:;" v-for="(itemLis,index) in shops.flashSaleModule.itemList" :key="index">
            <div class="imgWrap">
              <img :src="itemLis.picUrl" alt="">
            </div>
            <div class="price">
              <span class="actualPrice">
                <span>￥</span>
                <span>{{itemLis.activityPrice}}</span>
              </span>
              <span class="retailPrice">
                <span>￥</span>
                <span>{{itemLis.originPrice}}</span>
              </span>
            </div>
          </a>
        </div>
      </div>
      <Split/>
      <!--新品首发-->
      <div class="new-product">
        <div class="moduleTitle">
          <div class="left">
            <span>新品首发</span>
          </div>
          <a href="javascript:;" class="right">
            <span>更多</span>
            <i class="iconfont icon-jiantou"></i>
          </a>
        </div>
        <div class="m-indexItem">
          <ul class="list">
            <li class="item" v-for="(itemLis,index) in shops.flashSaleModule.itemList" :key="index">
              <a href="javascript:;" class="good">
                <div class="wraper">
                  <img :src="itemLis.picUrl">
                </div>
                <div class="name">
                  <span>酵素去污系列 洗衣液3KG</span>
                  <span class="dynamicPrice">
                    <span>￥</span>
                    <span>333</span>
                  </span>
                </div>
                <div class="tagWraper">
                  <p class="status">囤货日</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Split/>

      <div class="m-sceneLightShopping">
        <a href="javascript:;" class="m-styleBanner">
          <div class="title">实时好评榜</div>
          <div class="desc">实时好评榜</div>
          <div class="picList">
            <img src="./images/zc.png" alt="">
            <img src="./images/qs.jpg" alt="">
          </div>
        </a>
        <a href="javascript:;" class="m-styleBanner">
          <div class="title">实时好评榜</div>
          <div class="desc">实时好评榜</div>
          <div class="picList">
            <img src="./images/zc.png" alt="">
            <img src="./images/qs.jpg" alt="">
          </div>
        </a>
        <a href="javascript:;" class="m-styleBanner">
          <div class="title">实时好评榜</div>
          <div class="desc">实时好评榜</div>
          <div class="picList">
            <img src="./images/zc.png" alt="">
            <img src="./images/qs.jpg" alt="">
          </div>
        </a>
        <a href="javascript:;" class="m-styleBanner">
          <div class="title">实时好评榜</div>
          <div class="desc">实时好评榜</div>
          <div class="picList">
            <img src="./images/zc.png" alt="">
            <img src="./images/qs.jpg" alt="">
          </div>
        </a>
      </div>
      <Split/>


    </div>
  </div>
</template>
<script type="text/javascript">
  import {reqMain} from '../../../src/api/index'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    data(){
      return{
        isShow:true,
        subCateList:'',
      }
    },
    mounted(){
      this.$store.dispatch('getMain')
      this.$store.dispatch('getCartList',()=>{
        this.$nextTick(()=>{
          //需要动态计算tap的个数
//          const inners = this.$refs.inners
          let scroll = new BScroll('.taps',{
            click:true,
            scrollX:true
          })
        })
      })
      console.log(this.categoryList)
    },
    computed:{
      ...mapState({
        cartList:state => state.msite.cartList,
        shops:state => state.msite.shops,
        kingKongList:state => state.msite.kingKongList,
        categoryList:state => state.msite.categoryList,
      }),
      newCategoryName(){
        const {categoryList} = this
        const result = categoryList.splice(0,2)
        this.categoryList = categoryList
        return categoryList
      }
    },
    watch:{
      shops(){
        this.$nextTick(()=>{
          new Swiper('.swiper-container',{
            click:true,
            loop:true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      },
    },
    methods:{
      isAdd(data){
        this.subCateList = data
        this.isShow = false
      },
      yes(){
        this.isShow = true
        this.subCateList = ''
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #header
    .search_shop
      display flex
      padding: .21333rem .4rem;
      .secrch_text
        display flex
        justify-content: center;
        height: .74667rem;
        line-height .74667rem;
        font-size: .37333rem;
        background-color: #ededed;
        border-radius: .10667rem;
        width 450px
        .iconfont
          width: .37333rem;
          height: .37333rem;
          margin-right: .13333rem;
          font-size 48px
          line-height: 58px;
          vertical-align: middle;
          color #666
      .logo
        width: 1.84rem;
        height: .53333rem;
        margin-right: .26667rem;
        margin-top 8px
      button
        width: .98667rem;
        height: .53333rem;
        color: #b4282d;
        border: 1px solid #b4282d;
        border-radius: .10667rem;
        margin-left: .21333rem;
        font-size: .32rem;
        margin-top 8px


    .taps
      height:0.866rem
      margin-top: -.01333rem;
      display flex
      .m-taps
        width 1400px
        .inner
          height 100%
          display flex
          padding: 0 .4rem;
          background: #fff;
          align-items center
          width 1500px
          .tap
            display: inline-block;
            padding: 0 .11333rem;
            line-height: .8rem;
            font-size: .37333rem;
            color: #333;
            text-align: center;
            position relative
            span
              display: inline-block;
              padding: 0 .21333rem;
              line-height: .8rem;
              font-size: .37333rem;
              color: #333;
              text-align: center;
              font-weight 700
              &.active
                color: #b4282d
          .active
            color: #b4282d
            &:after
              content: ' ';
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              height: .05333rem;
              background-color: #b4282d;
      .toggleTap
        width 20%
        background yellow
        position absolute
        right 0
        height: .8rem;
        .toggle
          margin-top: .2rem;
          display: inline-block;
          vertical-align: middle;
          font-size 30px
          position absolute
          left 89px
          top 0px
          .iconfont
            font-size 35px
  .swiper-container
    width 100%
    background pink
    height: 4.93333rem;
    .swiper-wrapper
      width 800%
      height 100%
      .slide
        float left
        width 12.5%
        height 100%
        img
          width 100%
          height 100%




  .advantage
    background-color: #FFFFFF;
    .items
      display flex
      width: 100%;
      height: .96rem;
      padding: 0 .4rem;
      align-items: center;
      .item
        width 100%
        display flex
        padding: 0 55px 0 0;
        a
          flex 1
          display inline-block
          height: 0.42667rem;
          color: #B4282D;
          font-size 25px
          .iconfont
            font-size 30px
  .container
    .classify
      width 100%
      height: 5.22667rem;
      background pink
      .items
        height 100%
        flex-shrink: 0;
        .item
          display: block;
          width: 1.46667rem;
          height: 2.08rem;
          float: left;
          margin: .13333rem .26667rem 0;
          a
            display inline-block
            width: 1.46667rem;
            height: 1.46667rem;
            img
              width: 1.46667rem;
              height: 1.46667rem;
            span
              display inline-block
              margin-top: .13333rem;
              text-align: center;
              font-size: .32rem;
              color: #333333;
              line-height: .48rem;
              white-space: nowrap;
              width 100%


    .newPerson
      background pink
      position relative
      .moduleTitle
        height: 1.2rem;
        width: 100%;
        line-height: 1.2rem;
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: .42667rem;
        .txt
          display: inline-block;
          position: relative;
          &:before
            content: '';
            position: absolute;
            top: .6rem;
            left -.5rem
            width: .32rem;
            height: .04rem;
            background: #333;
          &:after
            content: '';
            position: absolute;
            top: .6rem;
            left 1.8rem
            width: .32rem;
            height: .04rem;
            background: #333;

      .content
        padding-left: .4rem;
        overflow: hidden;
        .left
          display: block;
          width: 4.57333rem;
          height: 5.78667rem;
          background: #F9E9CF;
          border-radius: .05333rem;
          margin-right: .05333rem;
          float: left;
          color: #333;
          .name
            font-family: PingFangSC-Medium;
            font-size: .42667rem;
            padding: .4rem 0 0 .4rem;
          .imgWrap
            margin: .49333rem auto;
            width: 3.44rem;
            height: 3.42667rem;
            position: relative;
            .animate
              position: absolute;
              width: .4rem;
              height: .26667rem;
              bottom: .24rem;
              right: .86667rem;
              background url("./images/jt.png") no-repeat
              background-size: 100% 100%;
              animation: carousel 1s linear infinite;
        .right
          float: left;
          .module1
            background: #FBE2D3;
            border-radius: 4px;
            width: 4.57333rem;
            height: 2.86667rem;
            margin-bottom: .05333rem;
            a
              display: block;
              color: #333;
              width: 4.57333rem;
              height: 2.93333rem;
              float: left;
              border-radius: .05333rem;
              margin: 0 .05333rem .05333rem 0;
              font-size: .32rem;
              padding: .26667rem 0 0 .4rem;
              .picWrap
                position: absolute;
                right: 0;
                top: 1.2rem;
                width: 2.66667rem;
                height: 2.66667rem;
                background pink
              .discount
                position: absolute;
                top: 0;
                right: .4rem;
                width: 1.06667rem;
                height: 1.06667rem;
                opacity: .8;
                background: #F59524;
                border-radius: 50%;
                padding-top: .13333rem;
                color: #fff;
                text-align: center;
                .line1
                  font-size: .32rem;
                .line2
                  font-size: .26667rem;
                  margin-top: 0.20667rem;
                  text-decoration: line-through;
              .cnt
                position: relative;
                .title
                  font-family: PingFangSC-Medium
                  font-size: .42667rem
                .subTitle
                  color: #7F7F7F
                  margin-top: 18px;

          .module2
            background: #FFECC2;
            border-radius: 4px;
            width: 4.57333rem;
            height: 2.86667rem;
            margin-bottom: .05333rem;
            a
              display: block;
              color: #333;
              width: 4.57333rem;
              height: 2.93333rem;
              float: left;
              border-radius: .05333rem;
              margin: 0 .05333rem .05333rem 0;
              font-size: .32rem;
              padding: .26667rem 0 0 .4rem;
              .picWrap
                position: absolute;
                right: 0;
                top: 4.1rem;
                width: 2.66667rem;
                height: 2.66667rem;
                background pink
              .discount
                position: absolute;
                top: 0;
                right: .4rem;
                width: 1.06667rem;
                height: 1.06667rem;
                opacity: .8;
                background: #F59524;
                border-radius: 50%;
                padding-top: .13333rem;
                color: #fff;
                text-align: center;
                .line1
                  font-size: .32rem;
                .line2
                  font-size: .26667rem;
                  margin-top: 0.20667rem;
                  text-decoration: line-through;
              .cnt
                position: relative;
                .title
                  font-family: PingFangSC-Medium
                  font-size: .42667rem
                .subTitle
                  color: #7F7F7F
                  margin-top: 18px;

    .distributor
      padding-bottom: .10667rem;
      .moduleTitle
        width: 100%;
        height: 1.33333rem;
        line-height: 1.33333rem;
        padding: 0 .4rem;
        background: #fff;
        overflow: hidden;
        .left
          float: left;
          font-size: .42667rem;
          font-family: PingFangSC-Regular;
        .right
          display: block;
          font-size: .37333rem;
          float: right;
          color: #333;
          line-height: 1.33333rem;
          margin-right: 0.8rem;
          .iconfont
            font-size: 30px
      .list
        position: relative;
        overflow: hidden;
        background: #fff;
        margin-bottom: .26667rem;
        padding: 0 .34667rem .34667rem .4rem;
        .item
          display: inline-block;
          position: relative;
          margin: 0 .05333rem .05333rem 0;
          width: 4.57333rem;
          height: 3.46667rem;
          overflow: hidden;
          background-color: #f4f4f4;
          border-radius: .05333rem;
          background-image url("./images/qs.jpg")
          float: left;
          .cnt
            position: absolute;
            left: 0;
            top: 0;
            padding-top: .30667rem;
            width: 100%;
            z-index: 4;
            text-align: center;
            .title
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              color: #333;
              font-family: PingFangSC-Medium;
              font-size: .37333rem;
              line-height: .45333rem;
              margin-bottom: .04rem;
            .Allprice
              .price
                .data-reactid
                  color: #7F7F7F;
                  font-size: .32rem;
              .newIcon
                display: inline-block;
                width: .85333rem;
                height: .42667rem;
                color: #fff;
                line-height: .42667rem;
                text-align: center;
                background: #CBB693;
                border-radius: .05333rem;
                margin-left: .13333rem;


    .hot-sell
      .moduleTitle
        width: 100%;
        height: 1.33333rem;
        line-height: 1.33333rem;
        padding: 0 .4rem;
        background: #fff;
        overflow: hidden;
        .left
          float: left;
          font-size: .42667rem;
          font-family: PingFangSC-Regular;

      .content
        padding: 0 .26667rem .26667rem .4rem;
        overflow: hidden;
        .line1
          a
            background: #F9F3E4;
            width: 4.53333rem;
            height: 2.66667rem;
            float: left;
            border-radius: .05333rem;
            margin: 0 .13333rem .13333rem 0;
            position: relative;
            .name
              padding-left: .4rem;
              color: #333;
              font-family: PingFangSC-Medium;
              font-size: .37333rem;
              margin-top: .88rem;
              span
                display: inline-block;
                position: relative;
                &:before
                  content: '';
                  position: absolute;
                  left: 0;
                  bottom: -.21333rem;
                  width: .64rem;
                  height: .05333rem;
                  background: #333;
            .imgWrap
              position: absolute;
              right: 0;
              top: 0;
              width: 2.66667rem;
              height: 2.66667rem;



        .line2
          .item
            display: block;
            width: 2.2rem;
            height: 2.4rem;
            background: #F5F5F5;
            border-radius: .05333rem;
            float: left;
            margin: 0 .13333rem .13333rem 0;
            .name
              margin-top: .13333rem;
              text-align: center;
              font-size: .32rem;
              color: #333;
              font-family: PingFangSC-Medium;
            .imgWrap
              width: 1.6rem;
              height: 1.6rem;
              margin: .02667rem 0 0 .30667rem;
              img
                width: 100%;



    .recommend
      .moduleTitle
        width: 100%;
        height: 1.33333rem;
        line-height: 1.33333rem;
        padding: 0 .4rem;
        background: #fff;
        overflow: hidden;
        .left
          float: left;
          font-size: .42667rem;
          font-family: PingFangSC-Regular;
        .right
          display: block;
          font-size: .37333rem;
          float: right;
          color: #333;
          line-height: 1.33333rem;
          margin-right: 0.8rem;
          .iconfont
            font-size: 30px
      .spItem
        color: #333;
        width: 9.2rem;
        height: 3.73333rem;
        display: flex;
        align-items: center;
        background: #FEF0DF;
        border-radius: .05333rem;
        margin: 0 .4rem .26667rem;
        .wraper
          width: 3.73333rem;
          height: 3.73333rem;
          background-size: 100% 100%;
          margin-right: .4rem;
        .data-reactid
          .name
            font-family: PingFangSC-Regular;
            font-size: .37333rem;
            width: 4.66667rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          .desc
            font-size: .32rem;
            color: #7F7F7F;
            width: 4.66667rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          .price
            font-size: .37333rem;
            color: #b4282d;
      .m-indexItem
        padding-left: .13333rem;
        box-sizing: border-box;
        height 400px
        .list
          display: flex;
          flex-wrap: wrap;
          .item
            padding: 0 0 .17333rem!important;
            margin-left: .26667rem;
            width: 2.88rem;
            height: auto;
            .good

              width: 100%;
              img
                background-color: #f5f5f5;
                border-radius: .05333rem;
                position: relative;
                z-index: 0;
                background-color: #f5f5f5;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              .name
                margin-top: 0;
                margin-bottom: .05333rem;
                padding: 0;
                font-size: .32rem;
                overflow: visible;
                white-space: normal;
                line-height: .48rem;
                .dynamicPrice
                  font-family: PingFangSC-Medium;
                  color: #b4282d;
    .limited
      .moduleTitle
        width: 100%;
        height: 1.33333rem;
        line-height: 1.33333rem;
        padding: 0 .4rem;
        background: #fff;
        overflow: hidden;
        .left
          float: left;
          font-size: .42667rem;
          font-family: PingFangSC-Regular;
          .m-countdown
            display: inline-block;
            vertical-align: middle;
            margin: -.08rem 0 0 .16rem;
            .hours,.mins,.sece
              display: inline-block;
              font-size: .32rem;
              line-height: .48rem;
              width: .48rem;
              height: .48rem;
              text-align: center;
              background-color: #333;
              border-radius: .05333rem;
              color: #fff;
              margin: 0 .13333rem;
              font-family: PingFangSC-Medium;
        .right
          display: block;
          font-size: 0.37333rem;
          float: right;
          color: #333;
          line-height: 1.33333rem;
          margin-right: 0.8rem;
          .iconfont
            font-size: 30px;
      .cnt
        overflow: hidden;
        padding: 0 .13333rem 0 .4rem;
        a
          display: block;
          color: #333;
          float: left;
          margin-right: .26667rem;
          padding-bottom: .4rem;
          .imgWrap
            width: 2.88rem;
            height: 2.88rem;
            background: #F5F5F5;
            border-radius: 4px;
            margin-bottom: .16rem;
            img
              width: 2.88rem;
              height: 2.88rem;
          .price
            padding-left: .26667rem;
            .actualPrice
              font-size: .37333rem;
              color: #b4282d;
              margin-right: .16rem;
            .retailPrice
              font-size: .32rem;
              color: #7F7F7F;
              text-decoration: line-through;


    .new-product
      .moduleTitle
        width: 100%;
        height: 1.33333rem;
        line-height: 1.33333rem;
        padding: 0 .4rem;
        background: #fff;
        overflow: hidden;
        .left
          float: left;
          font-size: .42667rem;
          font-family: PingFangSC-Regular;
          .m-countdown
            display: inline-block;
            vertical-align: middle;
            margin: -.08rem 0 0 .16rem;
        .right
          display: block;
          font-size: 0.37333rem;
          float: right;
          color: #333;
          line-height: 1.33333rem;
          margin-right: 0.8rem;
          .iconfont
            font-size: 30px;

      .m-indexItem
        padding-left: .13333rem;
        .list
          position: relative;
          z-index: 0;
          overflow: hidden;
          .item
            padding: 0 0 .17333rem!important;
            margin-left: .26667rem;
            width: 2.88rem;
            float left
            height 4.88rem
            .good
              width: 100%;
              display block
              .wraper
                background-color: #f5f5f5;
                margin-bottom: .16rem;
                img
                  background-color: #f5f5f5;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
              .name
                margin-top: 0;
                margin-bottom: .05333rem;
                padding: 0;
                font-size: .32rem;
                overflow: visible;
                white-space: normal;
                line-height: .48rem;
                .dynamicPrice
                  font-family: PingFangSC-Medium;
                  color: #b4282d;
              .tagWraper
                width: 100%;
                z-index: 1;
                margin: 0 0 .05333rem -.16rem;
                height: .41333rem;
                overflow: hidden;
                padding-left: 0;
                p
                  margin-left: .16rem;
              .status
                margin-bottom: .06667rem;
                padding: 0 .10667rem;
                height: .4rem;
                line-height: .37333rem;
                text-align: center;
                color: #B4282D;
                background: rgba(255,255,255,.9);
                border: 1px solid #B4282D;
                font-size: .26667rem;
                border-radius: .02667rem;
                display: -moz-inline-stack;
                display: inline-block;
                vertical-align: middle;
                zoom: 1;
    .m-sceneLightShopping
      overflow: hidden;
      padding: .13333rem .4rem .4rem .34667rem;
      background: #fff;
      margin-bottom: .26667rem;
      .m-styleBanner
        display: block;
        width: 4.29333rem
        height: 3.52rem;
        float: left;
        margin: .05333rem 0 0 .05333rem;
        padding: .26667rem 0 0 .26667rem;
        border-radius: .05333rem;
        background-color: #F5F5F5;
        .title
          padding-left: .13333rem;
          font-size: .42667rem;
          font-family: PingFangSC-Medium;
        .desc
          padding-left: .13333rem;
          font-size: .32rem;
          color: #7f7f7f;
          margin-top: 5px;
        .picList
          img
            width: 2rem;
            height: 2rem;
            float: left;
            margin-right: .05333rem;
</style>
