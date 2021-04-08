<template>
  <div class="page-container q-pa-sm bg-white">
    <div class="news-tit font-18 font-bold text-blk">{{curNewsDetail.title}}</div>
    <div class="news-time flex-row flex-jst-start flex-ali-center">
      <q-icon name="iconfont:icon-time" style="color: #8dc189;margin-right: .05rem"></q-icon>
      <span class="font-14 text-light-grey">{{curNewsDetail.created_at}}</span>
    </div>
    <div class="news-detail-container" v-html="curNewsDetail.content"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'newsDetail',
  data () {
    return {}
  },
  preFetch ({ store, currentRoute, redirect }) {
    if (!currentRoute.params.id) {
      redirect('/news')
    } else {
      return store.dispatch('queryNewsDetail', currentRoute.params.id)
    }
  },
  computed: {
    ...mapState(['curNewsDetail'])
  }
}
</script>

<style lang="scss" scoped>
.news-tit{
  margin-top: .1rem;
}
.news-time{
  padding: .1rem 0;
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  margin: .1rem 0;
}
</style>
