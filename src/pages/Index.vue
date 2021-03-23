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
        <span class="title-font text-black font-18">活动</span>
      </div>
    </div>
  </q-page>
</template>

<script>
// import { httpGet } from 'boot/axios'
import { mapState } from 'vuex'
import cusSwiper from '../components/index/swiper.vue'
import gamesContent from '../components/index/games'
import newsList from '../components/index/newsList'
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
      info: null
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
.content-item{
  background: #fff;
  .item-tit{
    border-bottom: 1px solid #e8e8e8;
  }
}
</style>
