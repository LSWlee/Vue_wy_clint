<template>
  <div id="login">
    <div class="hdWraper">
      <div class="m-hd">
        <div class="m-topBar">
          <div class="bd">
            <div class="row">
              <a href="javascript:;" class="u-icon-home" @click="$router.push('/msite')">
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
    <div class="loginWrap">
      <div class="view">
        <div class="logo">
          <img src="./images/logo.png" alt="">
        </div>
        <div class="ursBox">
          <div class="phone">
            <input type="text" v-model="PhoneNumber" maxlength="11" placeholder="请输入手机号">
          </div>
          <div class="pwd">
            <input :type="loginPhone ? 'text': 'password' " v-model="MsgPwd" :placeholder="loginPhone ? '请输入短信验证码' : '请输入密码' ">
            <button class="btn" :disabled="computedTime>0 || !isRightPhone" v-if="loginPhone" @click="sendCode">{{computedTime>0 ? `已发送${computedTime}s`:'获取验证码'}}</button>
            <div class="others">
              <a href="javascript:;" class="left">{{loginPhone ? '遇到问题？':'忘记密码？' }}</a>
              <a href="javascript:;" class="right" @click="loginPhone=!loginPhone">{{loginPhone ? '使用密码验证登陆':'使用短信验证登陆'}}</a>
            </div>
            <div class="loginbox">
              <a href="javascript:;" class="submitBtn" @click="login">登陆</a>
            </div>
          </div>
        </div>
        <div class="foot">
          <div class="w-button">
            <span>其他登录方式</span>
          </div>
          <div class="register">
            <span>注册帐号</span>
            <i class="iconfont icon-jiantou"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import { Toast } from 'mint-ui';
  export default {
    data(){
      return{
        loginPhone:true,//默认是电话短信验证码登陆方式
        PhoneNumber:'',
        MsgPwd:'',//短信验证码
        pwd:'',//密码验证码
        computedTime:0
      }
    },
    computed:{
      isRightPhone(){
        return /^1\d{10}$/.test(this.PhoneNumber)
      },
    },
    methods:{
      sendCode(){
        console.log('sendcode()')
        this.computedTime = 30
       let intervalId = setInterval(()=>{
          this.computedTime--
         if(this.computedTime<0){
            this.computedTime = 0
            clearInterval(intervalId)
         }
        },1000)
        //发送请求,在发送请求前判断登陆方式做表单验证
      },
      login(){
        const {PhoneNumber} = this
        if(!PhoneNumber.trim()){
           Toast({
            message: '请输入手机号',
            position: 'center',
            duration: 2000,
            className: 'toasts'
          });
        }
      }
    }
  }
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
    .loginWrap
      .logo
        text-align: center;
        margin-top: .74667rem;
        margin-bottom: 0;
        img
          width: 2.56rem;
          height: .85333rem;
      .ursBox
        height: 370px;
        padding 30px 30px 50px 30px
        margin-top 150px
        .phone,.pwd
          height 1.28rem
          position relative
          &:after
            content: '';
            position: absolute;
            bottom: 0;
            left 0
            width: 100%;
            height: 1px;
            background: #d9d9d9;
          input
            width 100%
            height 100%
            outline none
            font-size 35px
          .btn
            display: block;
            width: 185px;
            height: 61px;
            text-align: center;
            color: #333;
            font-size: 30px;
            background: #fff;
            line-height: 0.75rem;
            border: 1px solid #7F7F7F;
            border-radius: 10px;
            position: absolute;
            left: 485px;
            top: 15px;
          .others
            margin-top 35px
            .left
              float: left !important;
              height: 0.6rem;
              text-decoration: none;
              cursor: pointer;
              color: #7f7f7f !important;
              font-size: 0.4rem;
              line-height: 0.6rem;
            .right
              background: none;
              color: #333;
              font-size: 0.4rem;
              height: 0.6rem;
              padding: 0;
              line-height: 0.6rem;
              margin-left: 275px;
          .loginbox
            margin: 0;
            position: absolute;
            left: 0;
            bottom: -3rem;
            width: 100%;
            .submitBtn
              display: block;
              width: 100%;
              cursor: pointer;
              text-align: center;
              color: #fff;
              position: relative;
              background: #b4282d;
              text-indent: 0;
              height: 1.28rem;
              font-size: 0.4rem;
              line-height: 1.28rem;
              border-radius: 3px;
        .pwd
          margin-top 20px
      .foot
        padding: 0 .443333rem;
        .w-button
          display: block;
          width: 100%;
          cursor: pointer;
          text-align: center;
          color: #b4282d;
          position: relative;
          background-color: transparent;
          text-indent: 0;
          height: 1.28rem;
          font-size: 0.4rem;
          line-height: 1.28rem;
          border-radius: 3px;
          border 1px solid #b4282d
          margin-top 45px
          padding 0px 1px
        .register
          margin-top: .42667rem;
          text-align: center;
          span
            font-size: .37333rem;
            line-height: .53333rem;
            color: #333;
          .iconfont
            width: .37333rem;
            height: .37333rem;
            display: inline-block;
            vertical-align: middle;
            margin-left: .05333rem;
            position: relative;
            top: -.05333rem;
            font-size 30px


</style>
