<template>
  <div class="page-container q-pa-md">
    <div class="games-item" v-for="k in gameList" :key="k.id">
      <q-img :src="k.poster" width="100%" :ratio="73/35" height="100%" :img-style="{borderRadius: '.07rem'}"></q-img>
      <div class="full-width flex-row flex-jst-btw flex-ali-center q-pa-sm">
        <div class="flex-row flex-jst-start flex-ali-center">
          <q-img :src="k.logo" width=".6rem" :ratio="1/1" :img-style="{borderRadius: '.07rem'}"></q-img>
          <div class="name-out flex-col flex-jst-ard flex-ali-start self-stretch">
            <p class="game-name font-15 font-bold text-blk">《{{k.name}}》</p>
            <p class="game-intro font-14 text-light-grey ellipsis">{{k.subtitle}}</p>
          </div>
        </div>
        <q-btn unelevated color="negative" size="small" style="border-radius: .07rem" @click="toDetail(k.id)">了解更多</q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'gameCenter',
  data () {
    return {}
  },
  preFetch ({ store }) {
    if (!store.state.indexInfo) {
      return store.dispatch('queryIndex')
    }
  },
  computed: {
    ...mapState(['indexInfo']),
    gameList () {
      return this.indexInfo.games ? [...this.indexInfo.games.list].reverse() : []
    }
  },
  methods: {
    toDetail (id) {
      this.$router.push({ name: 'gameDetail', params: { id: id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.games-item{
  background: #ffffff;
  border-radius: .07rem;
  overflow: hidden;
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
</style>
