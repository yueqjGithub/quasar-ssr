<template>
  <q-layout view="hHr lpR ffr">
    <q-header reveal class="bg-white text-normal" :reveal-offset="1">
      <div class="cus-tool-bar flex-row flex-jst-btw q-pa-sm relative-position">
        <div>
          <q-img src="~assets/img/logo.png" style="width: 30vw" @click="toIndex" v-if="!showBack"></q-img>
          <q-btn dense flat round style="color: #3c3f41;" icon="iconfont:icon-arrow1" size="md" v-else @click="$router.back()"/>
        </div>
        <div class="flex-row flex-jst-center flex-ali-center font-16 title-show font-bold">
          <span v-if="titleName">{{titleName}}</span>
        </div>
        <div class="text-right">
          <q-btn dense flat round :icon="!right ? 'iconfont:icon-caidan' : 'iconfont:icon-baseline-close-px'" @click="right = !right" />
        </div>
      </div>
<!--      <q-toolbar>-->
<!--        <q-toolbar-title>-->
<!--          <q-img src="~assets/img/logo.png" style="width: 35vw" @click="toIndex"></q-img>-->
<!--        </q-toolbar-title>-->
<!--        <q-btn dense flat round :icon="!right ? 'iconfont:icon-caidan' : 'iconfont:icon-baseline-close-px'" @click="right = !right" />-->
<!--      </q-toolbar>-->
    </q-header>
    <q-page-container>
      <q-dialog
        v-model="right"
        maximized
        transition-show="slide-down"
        transition-hide="slide-up"
        content-class="transparent-dialog"
      >
        <menuModule></menuModule>
      </q-dialog>
      <router-view />
      <div class="full-width q-pa-md flex-col flex-jst-center flex-ali-center foot-cont" v-if="showFoot">
        <p class="font-14 text-white">抵制不良游戏，拒绝盗版游戏。</p>
        <p class="font-14 text-white">《网络文化经营许可证》</p>
        <p class="font-14 text-white text-center">川网备案号</p>
        <div class="font-14 text-center flex-row flex-jst-center flex-ali-center">
          <img src="~/assets/img/police_ba.png" alt="" class="ma-rt-02">
          <span class="font-14 text-white">xxxxxxxxx</span>
        </div>
      </div>
    </q-page-container>

  </q-layout>
</template>

<script>
import menuModule from '../components/menu.vue'
export default {
  components: {
    menuModule
  },
  data () {
    return {
      right: false
    }
  },
  computed: {
    titleName () {
      return this.$route.meta.title || ''
    },
    showBack () {
      return this.$route.meta?.showBack
    },
    showFoot () {
      return !this.$route.meta?.hideFoot
    }
  },
  methods: {
    toIndex () {
      this.$router.push({ name: 'index' })
    }
  }
}
</script>

<style lang="scss" scoped>
.cus-tool-bar{
  height: 50px;
  z-index: +5;
  border-bottom: 1px solid #e8e8e8;
  .title-show{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #5f5460;
  }
}
</style>
