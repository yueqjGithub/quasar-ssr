<template>
  <div class="news-container" ref="contain">
    <q-infinite-scroll @load="onLoad" :offset="100" :disable="cur > totalPage" :scroll-target="$refs.contain">
      <div>
        <div v-for="(k, idx) in curList" :key="idx" class="news-item bg-white relative-position" v-ripple @click="openDetail(k.id)">
          <div class="news-content flex-row flex-jst-btw flex-ali-start">
            <div class="news-icon flex-col flex-jst-center flex-ali-center" :style="{backgroundColor: typeList.find(item => item.value === k.type).color}">
              <p class="news-icon-word text-white">{{typeList.find(item => item.value === k.type).label}}</p>
              <q-icon name="iconfont:icon-sanjiaoshang" style="color: #ffffff;font-size: .18rem;margin: -0.05rem 0 -0.01rem 0"></q-icon>
            </div>
<!--            文字内容-->
            <div class="flex-2 flex-col flex-jst-start flex-ali-center">
              <div class="news-tit full-width flex-row flex-jst-btw flex-ali-center">
                <p class="text-blk font-14 font-bold ellipsis tit-words">{{k.title}}</p>
                <div class="flex-row flex-jst-end flex-ali-center">
                  <q-icon name="iconfont:icon-time" style="color: #8dc189;margin-right: .05rem"></q-icon>
                  <span class="news-time">{{k.created_at | timeShow}}</span>
                </div>
              </div>
<!--              详情-->
              <div class="text-light-grey">{{filterNewsContent(k.content, 50)}}...</div>
            </div>
          </div>
        </div>
        <div class="tips-content flex-col flex-jst-center flex-ali-center" v-if="!loading">
          <q-icon name="iconfont:icon-jiantou3" style="transform: rotate(90deg)" v-if="cur <= totalPage"></q-icon>
          <span class="q-pa-sm text-light-grey">{{cur > totalPage ? '这是人家底线' : '下拉加载更多'}}</span>
        </div>
      </div>
      <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="negative" size="40px" />
        </div>
      </template>
    </q-infinite-scroll>
  </div>
</template>

<script>
import { filterNewsContent } from 'src/utils/utils'
export default {
  name: 'item',
  props: {
    list: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      loading: false,
      cur: 1,
      pageSize: 20,
      curList: [],
      typeList: [
        { label: '新闻', value: 1, color: '#be2431' },
        { label: '公告', value: 2, color: '#2477be' },
        { label: '活动', value: 3, color: '#F2C037' }
      ]
    }
  },
  filters: {
    timeShow (target) {
      return target.substr(0, 10)
    }
  },
  computed: {
    totalPage () {
      const vm = this
      return Math.ceil(vm.list.length / vm.pageSize)
    }
  },
  watch: {
    cur: {
      immediate: true,
      handler: function (val) {
        const vm = this
        const start = (val - 1) * vm.pageSize
        const end = val * vm.pageSize
        const pushList = [...vm.list].slice(start, end)
        vm.curList.push(...pushList)
      }
    }
  },
  methods: {
    filterNewsContent,
    openDetail (id) {
      this.$router.push({ name: 'newsDetail', params: { id: id } })
    },
    onLoad (index, done) {
      const vm = this
      vm.loading = true
      setTimeout(() => {
        vm.loading = false
        if (vm.cur <= vm.totalPage) {
          vm.cur++
          done()
        } else {
          done('stop')
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.news-container{
  height: calc(100vh - 170px);
  overflow-y: scroll;
  background: #f6f7fb;
}
.news-item{
  padding: 0 .12rem;
  .news-content{
    padding: .12rem 0;
    border-bottom: 1px solid #e8e8e8;
    .news-tit{
      margin-bottom: .05rem;
      .tit-words{
        max-width: 2rem;
      }
      .news-time{
        color: #8a8a8a;
        font-size: .13rem;
      }
    }
    .news-icon{
      padding: .02rem .02rem 0 .02rem;
      border-radius: 0 0 .02rem .02rem;
      overflow: hidden;
      margin-right: .1rem;
      .news-icon-word{
        font-size: .12rem;
        width: .12rem;
        line-height: .15rem;
      }
    }
  }
}
</style>
