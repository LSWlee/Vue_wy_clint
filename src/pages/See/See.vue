<template>
  <div id="app">
    <div class="m-hwrapper">
      <header class="psc-g-hd">
        <div class="psc-m-topbar">
          <div class="psc-row">
            <div class="psc-m-hamburger">
              <a href="javascript:;" class="psc-u-nav-link">
                <i class="iconfont icon-zhuye"></i>
              </a>
            </div>
            <div class="m-head-tab">
              <a href="javascript:;" class="item active">发现</a>
              <a href="javascript:;" class="item">甄选家</a>
            </div>
            <div class="psc-m-right">
              <a href="javascript:;" class="psc-u-link-cart">
                <i class="iconfont icon-gouwuche1"></i>
              </a>
              <a href="javascript:;" class="psc-u-link-search">
                <i class="iconfont icon-sousuo"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
    <div class="m-main-tab">
      <div class="flexbox">
        <a href="javascript:;" class="itme" :class="{active:tabType===index}" @click="isShow(index)" v-for="(seeTap,index) in seeTaps" :key="index">{{seeTap.tabName}}</a>
      </div>
    </div>
    <div>
      <div class="m-main-content" v-for="(topics,index) in topics">
        <div class="m-tpls">
          <a href="javascript:;">
            <div class="u-name">
              <span class="ava">
                <img src="" alt="">
              </span>
              <span>{{topics.nickname}}</span>
            </div>
            <div class="title">{{topics.title}}</div>
            <div class="u-pic">
              <img src="" alt="">
            </div>
            <div class="u-rcount">
              <i class="iconfont icon-yanjing"></i>
              <span>{{topics.readCount}}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import {mapState,mapGetters} from 'vuex'
  export default {
    data(){
      return{
        tabType:0
      }
    },
    computed:{
      ...mapState({
        seeTaps:state => state.seeTaps.seeTaps,
        RecManual:state => state.seeTaps.RecManual
      }),
      ...mapGetters(['topics'])
    },
    mounted(){
      const {RecManual} = this
      this.$store.dispatch('getSeeTaps')
      this.$store.dispatch('getRecManual')
    },
    methods:{
      isShow(index){
        this.tabType = index
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    .m-hwrapper
      height: 1.3rem;
      .psc-g-hd
        position: fixed !important;
        left: 0;
        top: 0;
        z-index: 99;
        width: 100%;
        height: 1.3rem;
        .psc-m-topbar
          position: relative;
          height: 1.3rem;
          background-color: #fafafa;
          box-sizing: border-box;
          border-bottom: .01rem solid #d9d9d9;
          .psc-row
            z-index: 1;
            max-width: 768px;
            box-sizing: border-box;
            margin: auto;
            overflow: hidden;
            padding: 0 .26rem 0 .24rem;
            position: relative;
            height 100%
            .psc-m-hamburger
              display: block;
              float: left;
              .psc-u-nav-link
                display: block;
                height: 1.3rem;
                .iconfont
                  width: 0.49rem;
                  height: 1.3rem;
                  display: block;
                  position: relative;
                  background-position: center;
                  background-repeat: no-repeat;
                  font-size: 45px;
                  text-align: center;
                  line-height: 1.3rem;
            .m-head-tab
              position: absolute;
              width: 3.2rem;
              height: 100%;
              line-height: 1.3rem;
              text-align: center;
              left: 50%;
              top: 0;
              margin-left: -1.6rem;
              font-size: .28rem;
              color: #7F7F7F;
              z-index: 1;
              .item
                padding: 0 .16rem;
                vertical-align: middle;
                font-size: 0.4rem;
                &.active
                  font-size: 0.6rem
                  color: #b4282d;
                  font-weight: bold;
            .psc-m-right
              display: block;
              float: right;
              height: 1.3rem;
              margin-right: .02rem;
              .psc-u-link-cart
                display: block;
                height: 1.3rem;
                float: right;
                .iconfont
                  width: .49rem;
                  height: 1.3rem;
                  display: block;
                  position: relative;
                  background-position: center;
                  background-repeat: no-repeat;
                  font-size 45px
                  text-align center
                  line-height 1.3rem
              .psc-u-link-search
                float: right;
                margin-right: .7rem;
                display: block;
                height: 1.3rem;
                .iconfont
                  width: .49rem;
                  height: 1.3rem;
                  display: block;
                  position: relative;
                  background-position: center;
                  background-repeat: no-repeat;
                  font-size 45px
                  text-align center
                  line-height 1.3rem
    .m-main-tab
      width: 100%;
      height: 1.2rem;
      background: #fafafa;
      border-bottom: .01rem solid #d9d9d9;
      box-sizing: border-box;
      overflow: hidden;
      position: fixed;
      left: 0;
      top: 1.2rem;
      z-index: 20;
      .flexbox
        width: 100%;
        height:1.2rem;
        padding-bottom: .2rem;
        white-space: nowrap;
        overflow-y: hidden;
        overflow-x: auto;
        flex-flow: row wrap;
        justify-content: space-around;
        margin: 0;
        display flex
        .itme
          display: flex;
          height: 100%
          line-height: 1.32rem
          box-sizing: border-box;
          color: #7F7F7F;
          padding: 0 .08rem;
          margin: 0 .2rem;
          vertical-align: middle;
          font-size 30px
          &.active
            color: #B4282D;
            border-bottom: .04rem solid #B4282D;
    .m-main-content
      padding: 1.02rem 0 .98rem 0;
      .m-tpls
        width: 100%;
        background: #fff;
        margin: .2rem 0;
        box-sizing: border-box;
        padding: .36rem .3rem;
        a
          .u-name
            font-size: .38rem;
            color: #333;
            line-height: .36rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: .24rem;
            .ava
              width: .66rem;
              height: .66rem;
              overflow: hidden;
              border-radius: 50%;
              box-sizing: border-box;
              border: .01rem solid #d9d9d9;
              margin-right: .12rem;
              display: inline-block;
              vertical-align: middle;
              img
                width 100%
                height 100%
          .title
            font-size: .46rem;
            color: #333;
            line-height: .52rem;
            margin: -.08rem 0 .16rem 0;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            font-family: PingFangSC-Regular;
          .u-pic
            width: 6.9rem;
            height: 3.76rem;
            position: relative;
            margin-bottom: .2rem;
            overflow: hidden;
            border-radius: .08rem;
            img
              display block;

          .u-rcount
            font-size: .22rem;
            color: #999;
            line-height: .32rem;
            margin-top: .18rem;
            margin-bottom: -.16rem;
            .iconfont
              display: inline-block;
              width: .28rem;
              height: .2rem;
              vertical-align: middle;
              margin-right: .08rem;
              font-size: 30px;
            span
              display: inline-block;
              vertical-align: middle;
              font-size: 30px;
              margin-top: 6px;
</style>
