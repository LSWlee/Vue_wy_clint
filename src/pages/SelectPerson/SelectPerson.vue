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
              <a href="javascript:;" class="item" :class="{active:$route.path==='/see'}" @click="goTo('/see')">发现</a>
              <a href="javascript:;" class="item" :class="{active:$route.path==='/selectperson'}" @click="goTo('/selectperson')">甄选家</a>
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
  </div>
</template>
<script type="text/javascript">
  export default {
    methods:{
      goTo(path){
        this.$router.push(path)
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
</style>
