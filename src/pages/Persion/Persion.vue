<template>
  <div id="login">
    <div class="hdWraper">
      <div class="m-hd">
        <div class="m-topBar">
          <div class="bd">
            <div class="row">
              <a href="javascript:;" class="u-icon-home">
                <i class="iconfont icon-zhuye"></i>
              </a>
              <a href="javascript:;" class="u-icon-logo">
                <i class="logo"></i>
              </a>
              <div class="right">
                <a href="javascript:;" class="search">
                  <i class="iconfont icon-sousuo1"></i>
                </a>
                <a href="javascript:;" class="cart">
                  <i class="iconfont icon-gouwuche1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="loginTypesWrap">
      <div class="m-loginTypes">
        <div class="cont">
          <div class="logoWrap">
            <img src="./images/logo.png" alt="">
          </div>
          <div class="btnWrap">
            <div class="w-button" @click="$router.push('/phonelogin')">
              <i class="iconfont icon-youxiang"></i>
              <span>手机号码登录</span>
            </div>
            <div class="w-button-ghostRed" @click="$router.push('/messagelogin')">
              <i class="iconfont icon-youxiang"></i>
              <span>邮箱帐号登录</span>
            </div>
            <div class="btn">
              <span>手机号快捷注册</span>
              <i class="iconfont icon-jiantou"></i>
            </div>
          </div>
        </div>
        <div class="thirdWrap">
          <div class="itemWrap">
            <span class="item">
              <i class="iconfont icon-weixin"></i>
              <span class="name">微信</span>
            </span>
          </div>
          <div class="itemWrap">
            <span class="item">
              <i class="iconfont icon-QQ"></i>
              <span class="name">QQ</span>
            </span>
          </div>
          <div class="itemWrap">
            <span class="item">
              <i class="iconfont icon-QQ"></i>
              <span class="name">微博</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #login
    .hdWraper
      height: 85px;
      .m-hd
        position: fixed!important;
        left: 0;
        top: 0;
        z-index: 5;
        width: 100%;
        .m-topBar
          position: relative;
          .bd
            height: 1.16rem;
            background-color: #fafafa;
            position: relative;
            .row
              z-index: 1;
              width: 10rem;
              margin: auto;
              overflow: hidden;
              position: relative;
              padding: 0 .21333rem 0 .32rem;
              height: 1.17333rem;
              align-items: center;
              justify-content: space-between;
              display flex
              &:after
                position: absolute;
                background-color: #d9d9d9;
                width: 100%;
                height: 1px;
                bottom: 0
                content: '';
                left: 0;
              .u-icon-home
                width: .64rem;
                height: .58667rem;
                background-position: 0 -.98667rem;
                background-repeat: no-repeat;
                background-size: 2.29333rem 5.6rem;
                display: inline-block;
                vertical-align: middle;
                .iconfont
                  font-size: 55px;
              .u-icon-logo
                width: 188px;
                height: 85px;
                margin-left: 210px;
                .logo
                  width: 316px;
                  height: 65px;
                  display: inline-block;
                  vertical-align: middle;
                  background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png);
                  background-repeat: no-repeat;
                  background-size: 2.29333rem 5.6rem;
                  background-position: 19px -119px;
                  margin-top: 9px;
              .right
                margin-left: auto;
                margin-right: .76667rem;
                .search
                  margin-right: .26667rem;
                  .iconfont
                    background-repeat: no-repeat;
                    background-size: 2.29333rem 5.6rem;
                    display: inline-block;
                    vertical-align: middle;
                    width: .85333rem;
                    height: .85333rem;
                    background-position: 0 -4.74667rem;
                    font-size: 55px;
                .cart
                  .iconfont
                    background-repeat: no-repeat;
                    background-size: 2.29333rem 5.6rem;
                    display: inline-block;
                    vertical-align: middle;
                    width: .85333rem;
                    height: .85333rem;
                    background-position: 0 0;
                    font-size: 55px;
    .loginTypesWrap
      height: 1155px;
      .m-loginTypes
        position: relative;
        height: 100%;
        background: #F2F5F4;
        .cont
          .logoWrap
            text-align: center;
            padding-top: 2.13333rem;
            padding-bottom: 2.13333rem;
            img
              width: 3.57333rem;
              height: 1.2rem;
          .btnWrap
            padding: 0 .53333rem;
            margin-bottom: 2.73333rem;
            .w-button
              display: block;
              width: 100%;
              border-radius: 2px;
              margin-bottom: .42667rem;
              height: 1.25333rem;
              line-height: 1.25333rem;
              overflow: hidden;
              font-size: .37333rem;
              color: #fff;
              border: 1px solid #b4282d;
              background-color: #b4282d;
              vertical-align: middle;
              text-align: center;
              .iconfont
                width: 0.53333rem;
                height: 0.53333rem;
                vertical-align: middle;
                margin-right: 0.21333rem;
                position: relative;
                top: -0.02rem;
                font-size: 35px;
            .w-button-ghostRed
              overflow: hidden;
              border: 1px solid #b4282d;
              font-size: .37333rem;
              text-align: center;
              vertical-align: middle;
              color: #b4282d;
              background-color: transparent;
              height: 1.25333rem;
              line-height: 1.25333rem;
              display: block;
              width: 100%;
              border-radius: 2px;
              margin-bottom: .42667rem;
              .iconfont
                width: 0.53333rem;
                height: 0.53333rem;
                vertical-align: middle;
                margin-right: 0.21333rem;
                position: relative;
                top: -0.02rem;
                font-size: 35px;
            .btn
              color: #333;
              font-size: .37333rem;
              text-align: center;
              width: 100%;
              .iconfont
                width: .37333rem;
                height: .37333rem;
                display: inline-block;
                vertical-align: middle;
                margin-right: .21333rem;
                position: relative;
                top: -.02667rem;
                font-size: 28px;
        .thirdWrap
          position: absolute;
          width: 100%;
          left: 0;
          bottom: 1.06667rem;
          height: .53333rem;
          text-align: center;
          .itemWrap
            height: .53333rem;
            border-right: 1px solid #979797;
            display: inline-block;
            text-align: center;
            padding: 0 .53333rem;
            .item
              height: .53333rem;
              position: relative;
              top: -.13333rem;
              .iconfont
                position: relative;
                top: .03333rem;
                display: inline-block;
                width: .53333rem;
                height: .53333rem;
                color: #7F7F7F;
                font-size: 28px;
              .name
                display inline-block
                font-size: .37333rem;
                line-height: .53333rem;
                height: .53333rem;
                color: #7F7F7F;
                margin-left: .06667rem;
            &:last-child
              border-right: none;

</style>
