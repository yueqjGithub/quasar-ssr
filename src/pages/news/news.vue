<template>
  <div class="page-container">
    <div class="tit-bar flex-row flex-jst-center flex-ali-center">
      <span v-for="k in typeList" :key="k.value" @click="changeCurrent(k.value)">{{k.label}}</span>
      <img src="~assets/img/icon_bar_xuanzhong.png" alt="" class="choose-icon"
      :style="{transform: `translate(${(current - 2) * 100}%, 0)`}"
      >
    </div>
    <q-tab-panels
      v-model="current"
      animated
      swipeable
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-tab-panel v-for="k in typeList" :key="k.value" :name="k.value" style="padding: 0">
        <item :list="k.list"></item>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import item from './item'
export default {
  name: 'news',
  components: {
    item
  },
  data () {
    return {
      current: 0,
      couldLoad: true,
      pageIndex: 1,
      pageSize: 50,
      typeList: [
        { label: '综合', value: 0, list: [] },
        { label: '新闻', value: 1, list: [] },
        { label: '公告', value: 2, list: [] },
        { label: '活动', value: 3, list: [] }
      ]
    }
  },
  preFetch ({ store }) {
    if (!store.state.newsList) {
      return store.dispatch('queryNewsInfo')
    }
  },
  computed: {
    ...mapState(['newsList'])
  },
  created () {
    const vm = this
    this.typeList.forEach(item => {
      const resultList = item.value === 0 ? [...vm.newsList] : [...vm.newsList].filter(ele => ele.type === item.value)
      item.list = [...resultList]
    })
  },
  methods: {
    changeCurrent (cur) {
      this.current = cur
    }
  }
}
</script>

<style lang="scss" scoped>
.tit-bar{
  border-bottom: 2px solid #be2431;
  position: relative;
  background: #ffffff;
  span{
    color: #3c3f41;
    font-size: .16rem;
    font-family: 'title-font';
    display: block;
    padding: .1rem 0;
    box-sizing: border-box;
    margin: 0 .2rem;
  }
  .choose-icon{
    width: .72rem;
    height: .04rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    transition: all .2s linear;
  }
}
</style>
