<template>
  <div class="page-container">
    <q-img src="~assets/img/about/banner_gywm.png" width="100%"></q-img>
    <div class="q-pa-md">
      <div class="about-item relative-position" v-for="k in aboutList" :key="k.img" @click="toDetail(k.path)">
        <q-img :src="k.img" width="100%" v-ripple></q-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      aboutList: [
        { img: require('../../assets/img/about/about1.png'), path: '/introduce' },
        { img: require('../../assets/img/about/about2.png'), path: '/history' },
        { img: require('../../assets/img/about/about3.png'), path: '/culture' },
        { img: require('../../assets/img/about/about4.png'), path: '' },
        { img: require('../../assets/img/about/about5.png'), path: '' }
      ]
    }
  },
  methods: {
    toDetail (path) {
      this.$router.push({ path: path })
    }
  }
}
</script>

<style lang="scss" scoped>
.about-item{
  +.about-item{
    margin-top: .1rem;
  }
}
</style>
