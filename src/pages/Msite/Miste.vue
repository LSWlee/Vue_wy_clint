<template>
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
    <div class="tap"></div>
  </div>
</template>
<script type="text/javascript">
  import {reqMain} from '../../../src/api/index'
  export default {
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .search_shop
      display flex
      padding: .21333rem .4rem;
      .secrch_text
        display flex
        justify-content: center;
        height: .74667rem;
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


</style>
