<template>
  <div class="page-container q-pa-md relative-position">
    <div v-for="(k, idx) in curList" :key="k.id" class="service-item bg-white" :class="idxList[idx] ? 'open-list' : ''" >
      <div class="service-tit flex-row flex-jst-btw flex-ali-center">
        <p>{{k.title}}</p>
        <div class="flex-row flex-jst-center flex-ali-center iconContainer" @click="setOpen(idx)">
          <div class='iconRow'></div>
          <div class='iconCol'></div>
        </div>
      </div>
      <div class="service-content" v-html="k.content"></div>
    </div>
    <div class="kf-container" @click="OPEN_KF_HANDLER">
      <img src="~assets/img/service/icon_kefu_xf.png" alt="">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'serviceDetail',
  data () {
    return {
      idxList: []
    }
  },
  preFetch ({ store }) {
    if (!store.state.serviceList) {
      return store.dispatch('queryService')
    }
  },
  computed: {
    ...mapState(['serviceList']),
    curList () {
      const vm = this
      const type = vm.$route.params.type || 1
      return vm.serviceList ? vm.serviceList.filter(item => item.type === type) : []
    }
  },
  created () {
    this.curList.forEach(item => {
      this.idxList.push(false)
    })
  },
  methods: {
    OPEN_KF_HANDLER () {
      window.open('https://url.cn/5O7aoiQ?_type=wpa&qidian=true')
    },
    setOpen (idx) {
      const vm = this
      this.$set(vm.idxList, idx, !vm.idxList[idx])
    }
  }
}
</script>

<style lang="scss" scoped>
.kf-container{
  width: .6rem;
  position: fixed;
  right: .2rem;
  bottom: 1rem;
  img{
    width: 100%;
  }
}
.service-item{
  overflow: hidden;
  border-radius: .07rem;
  width: 100%;
  padding: 0 .16rem;
  box-sizing: border-box;
  max-height: .45rem;
  transition: max-height 2.3s linear;
  &.open-list{
    max-height: 200vh;
    .service-tit{
      .iconContainer{
        .iconRow{
          transform: rotate(90deg);
        }
      }
    }
  }
  .service-tit{
    padding: .16rem 0;
    border-bottom: 1px solid #e8e8e8;
    height: .48rem;
    box-sizing: border-box;
    color: #5f5460;
    font-weight: bolder;
    font-size: .16rem;
    .iconContainer{
      position: relative;
      .iconRow,.iconCol{
        width: 2px;
        height: 15px;
        background-color: #777;
        transition: all .3s linear;
      }
      .iconRow{
        transform: rotate(0deg);
      }
      .iconCol{
        position: relative;
        left: -2px;
        transform: rotate(90deg);
      }
    }
  }
  .service-content{
    padding: .12rem 0;
    color: #686868;
  }
}
</style>
