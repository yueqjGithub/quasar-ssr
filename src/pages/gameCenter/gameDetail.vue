<template>
  <div class="page-container q-pa-md" v-if="target">
    <div class="games-item">
      <q-img :src="target.poster" width="100%" :ratio="73/35" height="100%" :img-style="{borderRadius: '.07rem'}"></q-img>
      <div class="full-width flex-row flex-jst-btw flex-ali-center q-pa-sm">
        <div class="flex-row flex-jst-start flex-ali-center">
          <q-img :src="target.logo" width=".6rem" :ratio="1/1" :img-style="{borderRadius: '.07rem'}"></q-img>
          <div class="name-out flex-col flex-jst-ard flex-ali-start self-stretch">
            <p class="game-name font-15 font-bold text-blk">《{{target.name}}》</p>
            <p class="game-intro font-14 text-light-grey ellipsis">{{target.subtitle}}</p>
          </div>
        </div>
        <q-btn unelevated color="negative" size="small" style="border-radius: .07rem;font-weight: bold" @click="download">下载游戏</q-btn>
      </div>
    </div>
    <div>
      <div class="title-container flex-col flex-jst-center flex-ali-center">
        <p class="title-font text-blk intro-tit">游戏介绍</p>
        <p class="title-en">INTRODUCTION</p>
        <img src="~assets/img/pic_biaoti.png" alt="">
      </div>
      <div class="game-des">{{target.description}}</div>
      <div class="qr-container">
        <img src="~assets/img/qrcode.png" alt="">
      </div>
      <p class="text-center qr-tips">关注公众号</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'gameDetail',
  data () {
    return {}
  },
  preFetch ({ store }) {
    if (!store.state.indexInfo) {
      return store.dispatch('queryIndex')
    }
  },
  created () {
    const gameId = this.$route.params.id
    if (!gameId) {
      this.$router.back()
    }
  },
  computed: {
    ...mapState(['indexInfo']),
    target () {
      if (this.$route.params.id) {
        const gameId = this.$route.params.id
        const target = this.indexInfo.games.list.find(item => item.id === gameId)
        const packages = this.indexInfo.packages.find(item => item.game_id === target.id)
        target.description = packages.description
        target.download_link = packages.download_link
        target.android_link = packages.android_link
        return target
      } else {
        return null
      }
    }
  },
  methods: {
    download () {
      const vm = this
      const link = this.$q.platform.is.ios ? vm.target.download_link : vm.target.android_link
      if (link) {
        const a = document.createElement('a')
        a.download = link
        a.href = link
        a.target = '_blank'
        a.click()
      } else {
        vm.$q.dialog({
          title: '',
          message: '当前游戏没有您的设备可用版本',
          ok: {
            label: '知道了',
            color: 'negative'
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.games-item{
  background: #ffffff;
  border-radius: .07rem;
  overflow: hidden;
  margin-bottom: .15rem;
  +.games-item{
    margin-top: .2rem;
  }
  .name-out{
    margin-left: .07rem;
    .game-intro{
      max-width: 40vw;
    }
  }
}
.intro-tit{
  font-size: .23rem;
  letter-spacing: .02rem;
}
.title-en{
  color: #686868;
  font-size: 0.13rem;
  margin: 0.02rem;
  +img{
    width: 40%;
  }
}
.game-des{
  color: #686868;
  font-size: .13rem;
  text-indent: .2rem;
  margin: .25rem 0;
  max-height: 1.5rem;
  position: relative;
}
.qr-container{
  width: 40%;
  margin: 0 auto .1rem auto;
  border-radius: .07rem;
  padding: .05rem;
  box-sizing: border-box;
  background: #ffffff;
  img{
    width: 100%;
  }
}
.qr-tips{
  color: #5f5460;
  font-size: .16rem;
}
</style>
