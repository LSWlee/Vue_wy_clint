<template>
  <div id="app">
    <div class="m-hwrapper">
      <header class="psc-g-hd">
        <div class="psc-m-topbar">
          <div class="psc-row">
            <div class="psc-m-hamburger">
              <a href="javascript:;" class="psc-u-nav-link">
                <i class="iconfont icon-zhuye" @click="$router.push('/msite')"></i>
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
    <div class="m-main-tab">
      <div class="flexbox">
        <a href="javascript:;" class="itme" :class="{active:tabType===index}" @click="isShow(index)" v-for="(seeTap,index) in seeTaps" :key="index">{{seeTap.tabName}}</a>
        <!--<router-link class="itme" to="/see/expert" :class="{active:tabType===index}" @click="isShow(index)" v-for="(seeTap,index) in seeTaps" :key="index">{{seeTap.tabName}}</router-link>-->
      </div>
    </div>
    <div class="content" v-show="tabType===0">
      <div class="m-main-content" v-for="(topics,index) in topics">
        <div class="m-tpls" v-if="topics.style===1">
          <a href="javascript:;">
            <div class="u-name">
              <span class="ava">
                <img :src="topics.avatar" alt="">
              </span>
              <span>{{topics.nickname}}</span>
            </div>
            <div class="title">{{topics.title}}</div>
            <div class="u-pic">
              <img :src="topics.picUrl" alt="">
            </div>
            <div class="u-rcount">
              <i class="iconfont icon-yanjing"></i>
              <span v-if="topics.readCount>=10000">{{topics.readCount>10000 ? getReadCount[index] : topics.readCount}}万人看过</span>
              <span v-if="topics.readCount<10000">{{topics.readCount>10000 ? getReadCount[index] : topics.readCount}}人看过</span>
            </div>
          </a>
        </div>
        <div class="m-tpls-picker" v-if="topics.style===2">
          <a href="javascript:;" class="u-flexbox">
            <div class="info">
              <div class="u-name">
                <span class="ava">
                  <img :src="topics.avatar" alt="">
                </span>
                <span>{{topics.nickname}}</span>
              </div>
              <div class="title">{{topics.title}}</div>
              <div class="desc">{{topics.subTitle}}</div>
              <div class="u-rcount">
                <i class="iconfont icon-yanjing"></i>
                <span v-if="topics.readCount>=10000">{{topics.readCount>10000 ? getReadCount[index] : topics.readCount}}万人看过</span>
                <span v-if="topics.readCount<10000">{{topics.readCount>10000 ? getReadCount[index] : topics.readCount}}人看过</span>
              </div>
            </div>
            <div class="u-pic">
              <img :src="topics.picUrl" alt="">
            </div>
          </a>
        </div>
        <Split/>
      </div>
    </div>

    <div class="content" v-show="tabType===1" ref="wrapper" style="height: 1000px"
           :style="arr.length>5 ? 'marginTop:95px': 'marginTop:85px'">
        <div>
          <div class="m-main-content" v-for="(topics,index) in arr">
            <div class="m-tpls" v-if="topics.style===1">
              <a href="javascript:;">
                <div class="u-name">
              <span class="ava">
                <img :src="topics.avatar" alt="">
              </span>
                  <span>{{topics.nickname}}</span>
                </div>
                <div class="title">{{topics.title}}</div>
                <div class="u-pic">
                  <img :src="topics.picUrl" alt="">
                </div>
                <div class="u-rcount">
                  <i class="iconfont icon-yanjing"></i>
                  <span v-if="topics.readCount>=10000">{{topics.readCount>10000 ? getReadCount[index] : topics.readCount}}万人看过</span>
                  <span v-if="topics.readCount<10000">{{topics.readCount>10000 ? getReadCount[index] : topics.readCount}}人看过</span>
                </div>
              </a>
            </div>
            <div class="m-tpls-picker" v-if="topics.style===2">
              <a href="javascript:;" class="u-flexbox">
                <div class="info">
                  <div class="u-name">
                <span class="ava">
                  <img :src="topics.avatar" alt="">
                </span>
                    <span>{{topics.nickname}}</span>
                  </div>
                  <div class="title">{{topics.title}}</div>
                  <div class="desc">{{topics.subTitle}}</div>
                  <div class="u-rcount">
                    <i class="iconfont icon-yanjing"></i>
                    <span v-if="topics.readCount>=10000">{{topics.readCount>10000 ? getReadCount[index] : topics.readCount}}万人看过</span>
                    <span v-if="topics.readCount<10000">{{topics.readCount>10000 ? getReadCount[index] : topics.readCount}}人看过</span>
                  </div>
                </div>
                <div class="u-pic">
                  <img :src="topics.picUrl" alt="">
                </div>
              </a>
            </div>
            <Split/>
          </div>
        </div>
      </div>
    <div v-show="tabType===2" style="font-size: 30px ; margin-top:100px" >上新</div>

    <div style="height: 1000px" class="xxx">
      <div class="show-ticket" v-show="tabType===3" style="font-size: 30px ; margin-top:100px" >
        <div class="see-title">
          <p v-if="seeTitle.recModule">{{seeTitle.recModule.recommendName}}</p>
          <p v-if="seeTitle.recModule">{{seeTitle.recModule.collectionList[0].title}}</p>
          <div class="show">
            <ul class="show-item">
              <li class="show-list" v-for="(item,index) in lookList" :key="index">
                <img :src="item.banner.picUrl" alt="">
              </li>
            </ul>
          </div>
          <Split/>
        </div>
        <div class="see-content">
          <div class="title" v-if="seeTitle.recModule">{{seeTitle.recModule.globalName}}</div>
          <div class="m-option">
            <span class="active">最新</span>
            <span>本月</span>
            <span>晒单</span>
          </div>
          <div class="content">
            <div class="left">
              <div class="m-new" v-for="(item,index) in textContent.resultL" :key="index">
                <div class="m-heade">
                  <img :src="item.bannerInfo.picUrl" alt="" v-if="item.bannerInfo">
                </div>
                <div class="title">{{item.content}}</div>
                <div class="name">
                <span>
                  <img :src="item.avatar" alt="">
                </span>
                  <span>{{item.nickName}}</span>
                  <span>{{item.supportNum}}</span>
                  <span>
                   <i class="iconfont icon-dianzan"></i>
                </span>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="m-new" v-for="(item,index) in textContent.resultR" :key="index">
                <div class="m-heade">
                  <img :src="item.bannerInfo.picUrl" alt="" v-if="item.bannerInfo">
                </div>
                <div class="title">{{item.content}}</div>
                <div class="name">
                <span>
                  <img :src="item.avatar" alt="">
                </span>
                  <span>{{item.nickName}}</span>
                  <span>{{item.supportNum}}</span>
                  <span>
                   <i class="iconfont icon-dianzan"></i>
                </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-show="tabType===4" style="font-size: 30px ; margin-top:100px" >Home</div>
  </div>
</template>
<script type="text/javascript">
  import {mapState,mapGetters} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        tabType:0,
        page:1,
        size:5,
        tabId:4,
        ht:'150px',
        id:26,
        isTrue:true
      }
    },
    computed:{
      ...mapState({
        seeTaps:state => state.seeTaps.seeTaps,
        RecManual:state => state.seeTaps.RecManual,
        arr:state => state.seeTaps.arr,
        seeTitle:state => state.seeTaps.seeTitle,
        lookList:state => state.seeTaps.lookList,
        topicList:state => state.seeTaps.topicList
      }),
      ...mapGetters(['topics']),
      //处理观看人数
      getReadCount(){
        const {topics} = this
        let val = [];
        topics.forEach((topic,index)=>{
          if(topic.readCount>10000){
            val.push((topic.readCount/10000).toFixed(1))
          }
        })
        return val
      },
      textContent(){
        const {topicList} = this
        const resultL = []
        const resultR = []
        topicList.forEach((item,index)=>{
          if(index%2===0){
            resultL.push(item)
          }else{
            resultR.push(item)
          }
        })
        return {resultL,resultR}
      }
    },
    mounted(){
      const {id,page} = this
      this.$store.dispatch('getSeeTaps')
      this.$store.dispatch('getRecManual')
      //晒单
      this.$store.dispatch('getSeeTitle')
      this.$store.dispatch('getSeeCollecTion',{id:id})
      this.$store.dispatch('getSeeBetterNew',{page:page,size:20,type:1,callback:()=>{
        this.$nextTick(()=>{
          this._initscroll()
        })
      }})
  },
    methods:{
      isShow(index){
        this.tabType = index
        const {page,size,tabId} = this
        this.$store.dispatch('getPullRefresh',{page:page,size:size,tabId:tabId})
      },
      goTo(path){
        this.$router.push(path)
      },
      _initscroll(){
        if(!this.bscroll3){
          this.bscroll3 = new BScroll('.xxx',{
            click:true,
              pullUpLoad: {
                threshold: 100
              }
          })
        }else{
          if(this.isTrue){
            this.isTrue = false
            this.bscroll3.on('pullingUp',()=>{
              setTimeout(()=>{
                console.log('发送请求')
                this.page = this.page+1
              this.$store.dispatch('getSeeBetterNew',{page:this.page,size:20,type:1})
              this.bscroll3.finishPullUp()
              this.isTrue = true
            },2000)
            })

            this.bscroll3.refresh()
          }
        }
      }
    },
    created(){
      //下拉加载
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.wrapper, {
            probeType: 1,
            click: true,
          })
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', pos)
        })
        this.scroll.on('scrollEnd', () => {
          if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
            this.$emit('scrollToEnd')
            this.page++
            this.$store.dispatch('getPullRefresh', {page: this.page, size: 5, tabId: 4})
          }
        })
      })
    },
    watch: {
      tabType(newValue){
        const {_instail} = this
        console.log(newValue);
        if(newValue === 3){
          this.$nextTick(()=>{
            this.scroll2 = new BScroll('.show', {
              click: true,
              scrollX:true,
              scrollY:false
            });
          })

        }
      },
      topicList(){
        this._initscroll()
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


    .content
      .m-main-content
        padding: 1.02rem 0 -0.92rem 0;
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
              width: 100%
              height: 4.76rem;
              position: relative;
              margin-bottom: .2rem;
              overflow: hidden;
              border-radius: .08rem;
              img
                display block;
                width 100%
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
        .m-tpls-picker
          width: 100%;
          background: #fff;
          margin: .2rem 0;
          box-sizing: border-box;
          position: relative;
          padding: .32rem .3rem;
          height 4.5rem
          .u-flexbox
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .info
              width: 5.2rem;
              .u-name
                font-size: .38rem;
                color: #333;
                line-height: .36rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                .ava
                  width: .56rem;
                  height: .56rem;
                  overflow: hidden;
                  border-radius: 50%;
                  box-sizing: border-box;
                  border: .01rem solid #d9d9d9;
                  margin-right: .12rem;
                  img
                    width 100%
                span
                  display: inline-block;
                  vertical-align: middle;
              .title
                width: 100%;
                height 100px
                font-size: .46rem;
                color: #333;
                line-height: .44rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                padding-top: .32rem;
                font-family: PingFangSC-Regular;
              .desc
                width: 100%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: .38rem;
                line-height: .4rem;
                padding-top: .48rem;
                color: #7f7f7f;
              .u-rcount
                font-size: .32rem;
                color: #999;
                line-height: .32rem;
                margin-top: .18rem;
                position: absolute;
                left: .3rem;
                bottom: .26rem;
                .iconfont
                  display: inline-block;
                  width: .48rem;
                  height: .4rem;
                  vertical-align: middle;
                  margin-right: .08rem;
                  font-size 35px
                span
                  display: inline-block;
                  vertical-align: middle;
            .u-pic
              width: 3.72rem;
              height: 3.72rem;
              position: relative;
              overflow: hidden;
              border-radius: .08rem;
              img
                width 100%
                height 100%
    .show-ticket
      background-color: #fff;
      padding-top: .37333rem;
      margin-bottom: .26667rem;
      padding-bottom: .53333rem;
      .see-title
        p
          width 100%
          height .53333rem;
          text-align center
          color: #7f7f7f;
          font-size: .37333rem;
          &:nth-child(2)
            margin-top 10px
            font-size: .42667rem;
            line-height: .64rem;
            color: #333;
        .show
          height: 3.9rem;
          margin-top: .42667rem;
          display flex
          .show-item
            display flex
            margin: 0 .13333rem;
            .show-list
              width: 3.2rem;
              height: 3.2rem;
              border-radius: 4px;
              margin: 0 .13333rem;
              img
                width 3.2rem;
                height: 3.2rem;
      .see-content
        padding-top: .8rem;
        .title
          color: #333;
          font-size: .42667rem;
          height: .45333rem;
          line-height: .45333rem;
          margin: 0 .26667rem;
          font-weight: 700;
          justify-content: center;
          text-align center

        .m-option
          width: 10rem;
          height: 1.76rem;
          display flex
          justify-content space-around
          align-items center
          padding: .42667rem 0;
          span
            width: 2.29333rem;
            height: .74667rem;
            margin: 0 .32rem;
            text-align center
            line-height .74667rem
            &.active
              background-color: #ffe4af;
              color: #b0955f;
              font-weight: 700;
        .content
          display flex
          .left,.right
            width 50%
            box-shadow: 0 0 0.08rem #ddd;
            box-sizing: border-box;
            margin-bottom: .26667rem;
            border-radius: 4px;
            padding 10px
            .m-heade
              img
                width 100%
                border-radius 20px
            .title
              padding: .24rem .21333rem 0;
              color: #333;
              font-size: .32rem;
              line-height: .48rem;
              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              line-clamp: 2;
              -webkit-box-orient: vertical;
              height 70px
            .name
              padding: .32rem .21333rem;
              width: 4.57333rem;
              box-sizing: border-box;
              flex-direction: row;
              background-color: #fff;
              display: flex;
              align-items: center;
              span
                img
                  vertical-align middle
                  display inline-block
                  width 100%
                  border-radius 50%
                &:nth-child(1)
                  width: .63333rem;
                  height .63333rem;
                  background pink
                  display inline-block
                  border-radius 50%
                &:nth-child(2)
                  width: 1.6rem;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  font-size: .32rem;
                  color: #7f7f7f;
                  height: .64rem;
                  line-height: .64rem;
                  margin-left: .10667rem;
                  display inline-block
                &:nth-child(3)
                  font-size: .32rem;
                  color: #7f7f7f;
                  width: 1.2rem;
                  text-align: right;
                  height: .64rem;
                  line-height: .64rem;
                  margin-right: .02667rem;
                &:nth-child(4)
                  display: block;
                  width: .37333rem;
                  height: .37333rem;
                  .iconfont
                    font-size 30px

</style>
