<template>
  <q-page class="page-container">
    <cus-swiper :list="indexInfo.banners"></cus-swiper>
    <div class="my-space"></div>
    <games-content :game-list="indexInfo.games.list"></games-content>
    <div class="my-space"></div>
    <div class="content-item">
      <div class="item-tit flex-row flex-jst-start flex-ali-center q-pa-sm">
        <q-icon name="iconfont:icon-xinwenshoucang" class="text-red font-24 ma-rt-02"></q-icon>
        <span class="title-font text-black font-18">新闻</span>
      </div>
      <news-list :list="newsList"></news-list>
    </div>
    <div class="my-space"></div>
    <div class="content-item">
      <div class="item-tit flex-row flex-jst-start flex-ali-center q-pa-sm">
        <q-icon name="iconfont:icon-gift" class="text-red font-24 ma-rt-02"></q-icon>
        <span class="title-font text-black font-18">热门活动</span>
      </div>
<!--      活动content-->
      <div class="q-pa-md">
        <div class="full-width flex-row flex-jst-btw flex-ali-center">
          <div class="self-stretch flex-col flex-jst-start flex-ali-center act-module act-left">
            <div class="full-width flex-row flex-jst-start flex-ali-start">
              <img src="~/assets/img/1_41.png?v=2" alt="" class="act-img">
              <p class="font-16 font-bold text-black">龙城凯歌</p>
            </div>
            <div class="self-stretch flex-row flex-jst-start flex-ali-start act-left-cont">
              <p class="p-col">
                惊世人杰，重振山河！
              </p>
              <p class="p-col">
                全平台上线，狂刷装备
              </p>
            </div>
          </div>
<!--          活动模块右侧-->
          <div class="flex-1 flex-col flex-jst-btw flex-ali-center">
            <div v-for="k in activeList" :key="k.title" class="flex-col flex-jst-center flex-ali-center act-module act-module-rt full-width q-pa-sm">
              <img :src="k.img" alt="" class="act-img-rt">
              <p class="font-15 font-bold text-black q-pa-xs">{{k.title}}</p>
              <span class="font-12 text-sub-grey">{{k.description}}</span>
            </div>
          </div>
        </div>
        <div class="my-space"></div>
        <img src="~/assets/img/pic_huodong1.png" alt="" class="full-width">
      </div>
    </div>
    <div class="my-space"></div>
  </q-page>
</template>

<script>
// import { httpGet } from 'boot/axios'
import { mapState } from 'vuex'
import cusSwiper from '../components/index/swiper.vue'
import gamesContent from '../components/index/games'
import newsList from '../components/index/newsList'
import actImg1 from '../assets/img/actPic1.png'
import actImg2 from '../assets/img/actPic2.png'
export default {
  name: 'PageIndex',
  components: {
    cusSwiper,
    gamesContent,
    newsList
  },
  preFetch ({ store }) {
    return store.dispatch('queryIndex')
  },
  data () {
    return {
      info: null,
      activeList: [
        { img: actImg1, title: '仙道独尊', description: '全平台上线，狂刷装备' },
        { img: actImg2, title: '女武神降临', description: '全平台上线，狂刷装备' }
      ]
    }
  },
  computed: {
    ...mapState(['indexInfo', 'newsList'])
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.foot-cont{
  background: #4f4f51;
}
.content-item{
  background: #fff;
  .item-tit{
    border-bottom: 1px solid #e8e8e8;
  }
  .act-module-rt+.act-module-rt{
    margin-top: .15rem;
  }
  .act-module{
    background-color: #f2f4fd;
    border-radius: .07rem;
    .act-img{
      width: 16vw;
    }
    .act-img-rt{
      width: 22vw;
    }
    .p-col{
      font-size: .12rem;
      width: .14rem;
      color: #859196;
    }
    &.act-left{
      box-sizing: border-box;
      padding: .12rem .25rem .55rem .12rem;
      background-image: url("../assets/img/actBg.png");
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: right bottom;
      margin-right: .1rem;
      .act-left-cont{
        margin-top: .15rem;
      }
    }
  }
}
</style>
