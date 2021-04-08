<template>
  <div class="page-container">
    <div class="title-container flex-col flex-jst-center flex-ali-center q-pa-md">
      <p class="title-font text-blk intro-tit font-18">公司介绍</p>
      <p class="title-en">COMPANY PROFILE</p>
      <img src="~assets/img/pic_biaoti.png" alt="">
    </div>
    <div class="content-out">
      <p>成都阿古朵网络科技有限公司简称阿古朵游戏，是一家以游戏研发、发行与联运为主营的游戏公司。</p>
      <q-img src="~assets/img/about/intro-1.png" width="100%"></q-img>
      <p>成都为研发中心，以北京、广州两地为运营中心，向全国扩展游戏业务。阿古朵游戏汇集国内外一线游戏人才，公司人才本科率高达百分之八十以上，为阿古朵的未来发展提供了多元化的人才储备。</p>
      <q-img src="~assets/img/about/intro-2.png" width="100%"></q-img>
      <p>公司与国内各大知名游戏开发商、渠道、保持密切良好的合作关系。公司运营超过百款手机游戏及html5游戏，已成为集代理、运营、服务于一体的移动互联网游戏服务商。公司成立之后，不断推出新产品，品类涵盖传奇、仙侠、三国、魔幻、武侠、二次元、休闲等多个题材，运营的游戏持续排名app store榜单前列。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'introduce',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.title-en{
  color: #686868;
  font-size: 0.13rem;
  margin: 0.02rem;
  +img{
    width: 40%;
  }
}
.content-out{
  padding: 0 .12rem;
  p{
    text-indent: .2rem;
    font-size: .14rem;
    color: #686868;
    margin: .1rem 0;
  }
}
</style>
