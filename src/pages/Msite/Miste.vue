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
        subCateList:''
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
    },
    computed:{
      ...mapState({
        cartList:state => state.msite.cartList,
        shops:state => state.msite.shops
      })
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
      }
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






</style>
