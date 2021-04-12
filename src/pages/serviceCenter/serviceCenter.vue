<template>
  <div class="page-container q-pa-md">
    <div class="flex-row flex-jst-btw flex-ali-stretch ma-bt-1">
      <div class="width-6 self-stretch ma-split">
        <img src="~assets/img/service/kf1.png" alt="" class="display-block full-width full-height" @click="OPEN_KF_HANDLER">
      </div>
      <div class="flex-1 flex-col flex-jst-start flex-ali-end">
        <img src="~assets/img/service/pic_czwt.png" alt="" class="ma-bt-1 full-width" @click="toDetail(1)">
        <img src="~assets/img/service/pic_yxwt.png" alt="" class="ma-bt-1 full-width" @click="toDetail(3)">
        <img src="~assets/img/service/pic_zhwt.png" alt="" class="full-width" @click="toDetail(2)">
      </div>
    </div>
    <div class="flex-row flex-jst-btw flex-ali-center ma-bt-1">
      <div class="width-49 self-stretch">
        <img src="~assets/img/service/pic_tsjy.png" alt="" class="full-width full-height">
      </div>
      <img src="~assets/img/service/pic_bdss.png" alt="" class="width-49 display-block" @click="toDetail(4)">
    </div>
    <div class="full-width">
      <img src="~assets/img/service/pic_wgjb.png" alt="" class="full-width" @click="toDetail(5)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'serviceCenter',
  methods: {
    toDetail (type) {
      this.$router.push({ name: 'serviceDetail', params: { type: type } })
    },
    OPEN_KF_HANDLER () {
      window.open('https://url.cn/5O7aoiQ?_type=wpa&qidian=true')
    }
  }
}
</script>

<style lang="scss" scoped>
.display-block{
  display: block;
}
.ma-split{
  margin-right: .1rem;
}
.width-49{
  width: 49%;
}
.width-6{
  width: 60%;
  display: block;
}
.ma-bt-1{
  margin-bottom: .1rem;
}
</style>
