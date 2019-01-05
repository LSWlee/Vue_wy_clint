<template>
  <div>
    <div class="header">
      <div class="row_search">
        <div class="m_search">
          <div class="search">
            <i class="iconfont icon-sousuo1"></i>
            <input type="text" class="txt" :placeholder="defaultKeyword.keyword" v-model="keywordPrefix" @keyup.enter="sendCode">
          </div>
        </div>
        <span class="cancel">取消</span>
      </div>
    </div>
    <ul class="m-list" v-if="topics.length">
      <li class="item" v-for="(item,index) in topics">
        <p>{{topics[index]}}</p>
      </li>
    </ul>
    <div class="history" v-show="HistoryMsg.length">
      <div class="name">
        <h3>历史纪录</h3>
        <i class="iconfont icon-shanchu"></i>
      </div>
      <nav class="list">
        <a href="javascript:;" class="item" v-for="(msg,index) in HistoryMsg" :key="index">{{HistoryMsg[index]}}</a>
      </nav>
    </div>
    <Split v-if="HistoryMsg.length"/>
    <div class="hot" v-if="!keywordPrefix">
      <header>
        <h3>热门搜索</h3>
      </header>
      <nav class="list">
        <a href="javascript:;" class="item" :class="{active:hotKeywordVO.highlight===1}" v-for="(hotKeywordVO,index) in hotKeywordVOList" :key="index">
          {{hotKeywordVO.keyword}}
        </a>
      </nav>
    </div>
  </div>
</template>
<script type="text/javascript">
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        HistoryMsg:[],
        keywordPrefix:''
      }
    },
    mounted(){
      this.$store.dispatch('getHotShop')
    },
    computed:{
      ...mapState({
        hotKeywordVOList:state => state.Search.hotKeywordVOList,
        defaultKeywords:state => state.Search.defaultKeywords,
        defaultKeyword:state => state.Search.defaultKeyword,
        colorfulEggList:state => state.Search.colorfulEggList,
        topics:state => state.Search.topics,
      }),
    },
    watch:{
      keywordPrefix(){
        const {keywordPrefix} = this
        this.$store.dispatch('getSearchComplete',keywordPrefix)
      }
    },
    methods:{
      sendCode(){
        const {keywordPrefix,HistoryMsg} = this
        if(keywordPrefix){
          const arr = HistoryMsg.push(keywordPrefix)
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    width 100%
    height 1.16rem
    background pink
    .row_search
      padding 0 .4rem
      height 100%
      z-index: 1;
      margin: auto;
      overflow: hidden;
      position: relative;
      display flex
      .m_search
        flex 1
        .search
          display flex
          padding-left: .26667rem;
          background-color: #f4f4f4;
          height: .74667rem;
          border-radius: 4px;
          align-items: center;
          justify-content center
          -moz-justify-content: space-between;
          margin-top 15px
          .iconfont
            font-size 35px
          .txt
            box-sizing border-box
            display flex
            line-height: .73333rem;
            padding-left: .52667rem;
            flex: 1;
            font-size: .37333rem;
            border: none;
            color: rgba(0,0,0,.8);
            background-color: transparent;
            width 100%
            outline none
      .cancel
        margin-left: .4rem;
        font-size: .37333rem;
        line-height 1rem



  .history
    padding: 0 .4rem .4rem;
    background-color: #fff;
    overflow: hidden;
    .name
      height: 1.2rem;
      font-size: .37333rem;
      color: #999;
      display flex
      align-items center
      .iconfont
        width: .72rem;
        height: .72rem;
        display: inline-block;
        vertical-align: middle;
        margin-left: auto;
        margin-right: -.08rem;
        font-size 35px


    .list
      margin-right: -.4rem;
      margin-bottom: -.42667rem;
      zoom: 1;
      .item
        float: left;
        padding: 0 .2rem;
        margin-right: .42667rem;
        margin-bottom: .42667rem;
        line-height: .61333rem;
        border: 1px solid #999;
        border-radius: 4px;
        color: #333;

  .m-list
    display: block;
    padding-left: .4rem;
    background-color: #fff;
    z-index: 1;
    position: relative;
    .item
      height: 1.2rem;
      font-size: .37333rem;
      position: relative;
      p
        align-items: center;
        position: relative;
        min-height: 1.38667rem;
        flex-flow: row nowrap;
        display flex
        width: 100%;
        zoom: 1;
        font-size 28px
        &:after
          content: '';
          position: absolute;
          background-color: #d9d9d9;
          left: 0;
          width: 100%;
          height: 1px;
          -webkit-transform-origin: 50% 100% 0;
          transform-origin: 50% 100% 0;
          bottom: 0;
  .hot
    padding: 0 .4rem .4rem;
    background-color: #fff;
    overflow: hidden;
    header
      height: 1.2rem;
      font-size: .37333rem;
      color: #999;
      display flex
      align-items center
    .list
      margin-right: -.4rem;
      margin-bottom: -.42667rem;
      zoom: 1;
      .item
        float: left;
        padding: 0 .2rem;
        margin-right: .42667rem;
        margin-bottom: .42667rem;
        line-height: .61333rem;
        border: 1px solid #999;
        border-radius: 4px;
        color: #333;
        &.active
          border-color: #b4282d;
          color: #b4282d;
</style>
