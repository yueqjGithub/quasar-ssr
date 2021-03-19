<template>
  <div class="swiper-out">
    <div class="detail-out">
      <q-btn unelevated style="background-color: #db2a25;color: #ffffff;font-size: .18rem;" :to="{name: 'gameCenter'}">
        <span class="font-18 text-white">查看详情</span>
      </q-btn>
    </div>
    <q-carousel
      height="3.5rem"
      v-model="current"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      autoplay
      swipeable
      infinite
      keep-alive
      navigation
    >
      <template v-slot:navigation-icon="{ active, onClick }">
<!--        <q-btn v-if="active" size="lg" icon="home" color="yellow" flat round dense @click="onClick" />-->
<!--        <q-btn v-else size="sm" :icon="btnProps.icon" color="white" flat round dense @click="onClick" />-->
        <div v-if="active" class="swiper-active-control swiper-control" @click="onClick" v-ripple></div>
        <div v-else class="swiper-inactive-control swiper-control" @click="onClick" v-ripple></div>
      </template>
      <q-carousel-slide class="swiper-item" v-for="(k, idx) in list" :key="idx" :name="idx" :img-src="k">
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  name: 'indexSwiper',
  props: {
    list: {
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      current: 0
    }
  },
  created () {
    console.log(this.list)
  }
}
</script>

<style lang="scss" scoped>
.swiper-out{
  width: 100vw;
  position: relative;
  .detail-out{
    position: absolute;
    bottom: .9rem;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: +1;
  }
  .swiper-item{
    background-color: #999999;
    .swiper-img{
      width: 100vw;
    }
  }
  .swiper-control{
    margin: 0 .05rem;
    width: .15rem;
    height: .15rem;
    border: .02rem solid #ffffff;
    box-sizing: border-box;
    border-radius: 50%;
    background: #ffffff;
    &.swiper-active-control{
      background: #db2a25;
    }
  }
}
</style>
