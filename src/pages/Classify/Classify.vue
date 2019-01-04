<template>
  <div id="classify">
    <div class="hdWraper">
      <div class="m-hd">
        <div class="m-itemCateListHd">
          <div class="m-topSearchIpt">
            <i class="iconfont icon-sousuo1"></i>
            <span class="placeholder">搜索商品, 共20000款好物</span>
          </div>
        </div>
      </div>
    </div>
    <div class="m-cateNavVertWrap">
      <div class="inner">
        <ul class="j-cateNav">
          <li class="item">
            <a href="javascript:;" class="txt" :class="{active:superCategoryId===index}" v-for="(category,index) in categoryL1List" @click="isAdd(index)" :key="index">{{category.name}}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="m-subCateList" v-for="(category,index) in categoryL1List" v-show="superCategoryId===index">
      <div class="banner">
        <img :src="category.bannerUrl" alt="">
      </div>
      <div class="cateList">
        <ul class="list">
          <li class="cateItem" v-for="(subCate,index) in category.subCateList" :key="index">
            <a href="javascript:;">
              <div class="cateImgWrapper">
                <img :src="subCate.bannerUrl" alt="">
              </div>
              <div class="name">{{subCate.name}}</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        superCategoryId:0
      }
    },
    computed:{
      ...mapState({
        currentCategory:state => state.classIfy.currentCategory,
        subCateList:state => state.classIfy.subCateList,
        categoryL1List:state=>state.classIfy.categoryL1List
      })
    },
    mounted(){
      this.$store.dispatch('getCurrentcategory',()=>{
        this.$nextTick(()=>{
          new BScroll('.inner',{
            click:true
          })
        })
      })
    },
    methods:{
      isAdd(index){
        this.superCategoryId = index
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #classify
    .hdWraper
      height: 88px;
      .m-hd
        position: fixed!important;
        left: 0;
        top: 0;
        z-index: 5;
        width: 100%;
        .m-itemCateListHd
          align-items: center;
          height: 1.17333rem;
          padding: 0 .4rem;
          background-color: #fff;
          position: relative;
          display: flex;
          -webkit-box-align: center;
          .m-topSearchIpt
            width 100%
            justify-content: center;
            height: .74667rem;
            font-size: .37333rem;
            background-color: #ededed;
            border-radius: .10667rem;
            align-items: center;
            -webkit-box-pack: center;
            flex-flow: row nowrap;
            -webkit-box-align: center;
            display: flex;
            &:after
              content: '';
              position: absolute;
              background-color: #d9d9d9;
              left: 0;
              width: 100%;
              height: 1px;
              transform-origin: 50% 100% 0;
              bottom: 0;
              box-sizing: border-box;
            .iconfont
              display: inline-block;
              vertical-align: middle;
              background-repeat: no-repeat;
              background-size: 100% 100%;
              width: .37333rem;
              height: .37333rem;
              margin-right: .13333rem;
              font-size 30px
            .placeholder
              color: #666;
    .m-cateNavVertWrap
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 4;
      width: 2.16rem;
      background-color: #fff;
      top: 1.17333rem;
      .inner
        position: relative;
        height: 100%;
        width: 100%;
        overflow: hidden;
        &:after
          content: '';
          position: absolute;
          background-color: rgba(0,0,0,.15);
          top: 0;
          bottom: 0;
          width: 1px;
          transform-origin: 100% 50% 0;
          right: 0;

        .j-cateNav
          padding: .53333rem 0;
          padding-bottom: 1.84rem;
          height: 100%;
          width: 100%;
          .item
            width: 100%;
            height: .66667rem;
            text-align: center;
            border: none;
            .txt
              position: relative;
              margin-top: .53333rem;
              display: block;
              color: #333;
              font-size: .37333rem;
              line-height: .66667rem;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              &.active
                color: #ab2b2b;
                &:before
                  content: ' ';
                  position: absolute;
                  top: 0;
                  left: 0;
                  bottom: 0;
                  width: .08rem;
                  height 100%
                  background-color: #ab2b2b;
                  box-sizing: border-box;
    .m-subCateList
      margin-left: 2.16rem;
      padding: .4rem .4rem .28rem;
      .banner
        position: relative;
        width: 100%;
        height: 2.56rem;
        display: table;
        margin-bottom: .42667rem;
        background: center no-repeat #f4f4f4;
        background-size: cover;
        border-radius: 4px;
        img
          display: table-cell;
          vertical-align: middle;
          text-align: center;
          font-size: .37333rem;
          color: #fff;
          width 100%
          height 100%
      .cateList
        .list
          .cateItem
            display: inline-block;
            margin-right: .45333rem;
            font-size: 0;
            width: 1.89rem
            vertical-align: top;
            .cateImgWrapper
              width: 1.92rem;
              height: 1.92rem;
              img
                display: block;
                width: 100%;
                background: #fff;
                height: 100%;
            .name
              height: .96rem;
              font-size: .32rem;
              text-align: center;
              line-height: .48rem;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
</style>
