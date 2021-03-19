<template>
  <q-page class="page-container">
    <cus-swiper :list="indexInfo.banners"></cus-swiper>
    <div class="my-space"></div>
    <games-content :game-list="indexInfo.games.list"></games-content>
  </q-page>
</template>

<script>
// import { httpGet } from 'boot/axios'
import { mapState } from 'vuex'
import cusSwiper from '../components/index/swiper.vue'
import gamesContent from '../components/index/games'
export default {
  name: 'PageIndex',
  components: {
    cusSwiper,
    gamesContent
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
    ...mapState(['indexInfo'])
  },
  methods: {
  }
}
</script>
