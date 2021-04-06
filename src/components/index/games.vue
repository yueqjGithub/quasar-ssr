<template>
  <div class="full-width bg-white games-out">
    <div class="tit-bar flex-row flex-jst-center flex-ali-center">
      <span @click="changeCurrent(1)">热门游戏</span>
      <span @click="changeCurrent(2)">公测新游</span>
      <img src="~assets/img/icon_bar_xuanzhong.png" alt="" class="choose-icon" :class="{'active': current === 2}">
    </div>
    <q-tab-panels
      v-model="current"
      animated
      swipeable
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-tab-panel :name="1">
        <div class="games-container flex-col flex-jst-start flex-ali-center">
          <div class="full-width flex-row flex-wrap flex-jst-btw flex-ali-center">
            <div class="games-item" v-for="item in hotGames" :key="item.id">
              <img :src="item.poster" alt="" class="item-poster">
              <div class="flex-col flex-jst-start flex-ali-start q-pa-sm">
                <p class="item-title">《{{item.name}}》</p>
                <span class="ellipis">{{item.introduction}}</span>
              </div>
              <div class="download-btn relative-position" v-ripple @click="toDetail(item.id)">立即下载</div>
            </div>
          </div>
        </div>
      </q-tab-panel>
      <q-tab-panel :name="2">
        <div class="games-container flex-col flex-jst-start flex-ali-center">
          <div class="full-width flex-row flex-wrap flex-jst-btw flex-ali-center">
            <div class="games-item" v-for="item in publicGames" :key="item.id">
              <img :src="item.poster" alt="" class="item-poster">
              <div class="flex-col flex-jst-start flex-ali-start q-pa-sm">
                <p class="item-title">《{{item.name}}》</p>
                <span class="ellipis">{{item.introduction}}</span>
              </div>
              <div class="download-btn relative-position" v-ripple @click="toDetail(item.id)">立即下载</div>
            </div>
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
    <div class="flex-row flex-jst-center flex-ali-center">
      <q-btn unelevated style="background-color: #db2a25;color: #ffffff;font-size: .18rem;" :to="{name: 'gameCenter'}">
        <span class="font-16 text-white">查看更多</span>
      </q-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'games',
  props: {
    gameList: {
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      current: 1
    }
  },
  computed: {
    hotGames () {
      return this.gameList.filter(item => item.is_hot).slice(0, 4)
    },
    publicGames () {
      return this.gameList.filter(item => item.is_publish).slice(0, 4)
    }
  },
  methods: {
    changeCurrent (cur) {
      this.current = cur
    },
    toDetail (id) {
      this.$router.push({ name: 'gameDetail', params: { id: id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.tit-bar{
  border-bottom: 2px solid #be2431;
  position: relative;
  span{
    color: #3c3f41;
    font-size: .2rem;
    font-family: 'title-font';
    display: block;
    padding: .1rem 0;
    box-sizing: border-box;
    margin: 0 .2rem;
  }
  .choose-icon{
    width: .8rem;
    height: .04rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    transition: all .2s linear;
    transform: translate(-1rem, 0);
    &.active{
      transform: translate(.2rem, 0);
    }
  }
}
.games-out{
  padding-bottom: .2rem;
}
.games-container{
  .games-item{
    background: #F6F7FB;
    width: 48%;
    margin-bottom: .1rem;
    border-radius: .07rem;
    overflow: hidden;
    .item-poster{
      width: 100%;
      height: 1rem;
      display: block;
      border-radius: .07rem;
    }
    .item-title{
      color: #5f5460;
      font-size: .16rem;
      font-weight: bolder;
      +span{
        color: #8a8a8a;
        font-size: .13rem;
        padding-left: .06rem;
        overflow: hidden;
        max-width: 100%;
      }
    }
    .download-btn{
      background: #ced4ec;
      text-align: center;
      font-weight: bold;
      font-size: .15rem;
      color: #5f5460;
      padding: .06rem;
    }
  }
}
</style>
