<template>
  <div class="menu-container flex-col flex-jst-start flex-ali-center">
    <q-toolbar class="bg-white cus-header">
      <q-toolbar-title>
        <q-img src="~assets/img/logo.png" style="width: 35vw"></q-img>
      </q-toolbar-title>
      <q-btn dense flat round icon="iconfont:icon-baseline-close-px" v-close-popup/>
    </q-toolbar>
    <div class="flex-1 flex-col full-width flex-jst-start flex-ali-center">
      <div class="menu-item flex-col flex-jst-start flex-ali-center" v-for="k in menuList" :key="k.icon" v-ripple :class="{'cur-router': curRouterName === k.name}"
      @click="toPage(k.name)"
      >
        <img :src="k.icon" alt="">
        <p>{{k.menuName}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'menuModule',
  data () {
    return {
      menuList: [
        { icon: require('../assets/img/icon_shouye_dh.png'), name: 'index', menuName: '首页' },
        { icon: require('../assets/img/icon_youxi_dh.png'), name: 'index1', menuName: '游戏中心' },
        { icon: require('../assets/img/icon_xinwen_dh.png'), name: 'index2', menuName: '新闻中心' },
        { icon: require('../assets/img/icon_guanyu_dh.png'), name: 'about', menuName: '关于我们' },
        { icon: require('../assets/img/icon_jiaru_dh.png'), name: 'index3', menuName: '加入我们' },
        { icon: require('../assets/img/icon_kefu_dh.png'), name: 'index4', menuName: '客服中心' }
      ]
    }
  },
  computed: {
    curRouterName () {
      return this.$route.name
    }
  },
  methods: {
    toPage (name) {
      this.$router.push({ name: name })
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-container{
  width: 100%;
  min-height: 100%;
  background: rgba(255,255,255,.8);
  .cus-header{
    width: 100%;
    position: sticky;
    top: 0;
  }
  .menu-item{
    position: relative;
    margin-top: .3rem;
    color: #909090;
    &.cur-router{
      p{
        font-family: 'title-font';
        color: #db2a25;
      }
    }
    img{
      width: 15vw;
      display: block;
    }
    p{
      font-size: .16rem;
      margin-top: .04rem;
      text-align: center;
    }
  }
}
</style>
