<template>
  <div id="footer">
    <a href="javascript:;" class="guide_item" :class="{active:$route.path==='/msite'}" @click="goTo('/msite')">
      <span>
        <i class="iconfont icon-zhuye"></i>
      </span>
      <span>
        首页
      </span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{active:$route.path==='/classify'}" @click="goTo('/classify')">
      <span>
        <i class="iconfont icon-drawer2chouti"></i>
      </span>
      <span>
        分类
      </span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{active:$route.path==='/see'}" @click="goTo('/see')">
      <span>
        <i class="iconfont icon-liebiao"></i>
      </span>
      <span>
        识物
      </span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{active:$route.path==='/shopcart'}" @click="goTo('/shopcart')">
      <span>
        <i class="iconfont icon-gouwuche1"></i>
      </span>
      <span>
        购物车
      </span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{active:$route.path==='/persion'}" @click="goTo('/persion')">
      <span>
        <i class="iconfont icon-wode"></i>
      </span>
      <span>
        个人
      </span>
    </a>
  </div>
</template>"
<script type="text/javascript">
  export default {
    methods:{
      goTo(data){
        this.$router.push(data)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #footer
    width 100%
    height 1.30667rem;
    position fixed
    bottom 0;
    a
      display flex
      flex-direction column
      float left
      width 20%
      height 1.30667rem;
      background gainsboro
      align-items center
      justify-content center
      .iconfont
        font-size 35px
        margin-bottom 5px
      span
        margin-top .09333rem
    .active
      color #b4282d

</style>
