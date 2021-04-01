<template>
  <div class="q-pa-md">
    <div class="list-item">
      <div class="full-width content-out flex-row flex-jst-btw flex-ali-center q-pa-xs">
        <div class="left-container flex-3 flex-row flex-jst-start flex-ali-start">
          <img src="~/assets/img/icon_tuijian.png" alt="" class="tuijian-icon">
          <div class="flex-col flex-jst-start flex-ali-start">
            <p class="ellipsis item-title text-blk font-15 font-bold">{{firstLine.title}}</p>
            <span class="text-sub-grey pa-col-sm ellipsis first-sub">{{filterNewsContent(firstLine.content, 30)}}</span>
          </div>
        </div>
        <div class="right-container flex-1 text-right">
          <q-btn dense flat round style="color: #aeaeae;transform: rotate(180deg)" icon="iconfont:icon-arrow1" size="sm"/>
        </div>
      </div>
    </div>
    <div v-for="k in curList" :key="k.id" class="list-item">
      <div class="full-width content-out flex-row flex-jst-btw flex-ali-center">
        <div class="left-container flex-col flex-jst-start flex-ali-start flex-3 q-pa-xs">
          <p class="ellipsis item-title text-blk font-15">{{k.title}}</p>
          <div class="flex-row flex-jst-start flex-ali-center">
            <q-icon name="iconfont:icon-time" style="color: #8dc189;font-size: .13rem"></q-icon>
            <span class="q-pa-sm text-sub-grey">{{k.created_at | timeShow}}</span>
          </div>
        </div>
        <div class="right-container flex-1 text-right">
          <q-btn dense flat round style="color: #aeaeae;transform: rotate(180deg)" icon="iconfont:icon-arrow1" size="sm"/>
        </div>
      </div>
    </div>
    <div class="q-pa-md flex-row flex-jst-center">
      <q-btn unelevated style="background-color: #db2a25;color: #ffffff;font-size: .18rem;" :to="{name: 'news'}">
        <span class="font-16 text-white">查看更多</span>
      </q-btn>
    </div>
  </div>
</template>

<script>
import { date } from 'quasar'
import { filterNewsContent } from 'src/utils/utils'
const { formatDate } = date
export default {
  name: 'newsList',
  props: {
    list: {
      default: function () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  filters: {
    timeShow: function (target) {
      return formatDate(target, 'YYYY-MM-DD')
    }
  },
  computed: {
    firstLine () {
      return this.list[0] ? this.list[0] : null
    },
    curList () {
      return this.list.slice(1, 5)
    }
  },
  methods: {
    filterNewsContent
  }
}
</script>

<style lang="scss" scoped>
.list-item{
  .content-out{
    border-bottom: 1px solid #e8e8e8;
    .left-container{
      .tuijian-icon{
        width: .15rem;
        margin-right: .1rem;
      }
      p{
        max-width: 75vw;
        overflow: hidden;
        color: #5f5460;
      }
      .first-sub{
        max-width: 80vw;
      }
    }
  }
}
</style>
