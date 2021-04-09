<template>
  <div class="page-container flex-col flex-jst-start flex-ali-center">
    <div class="title-container flex-col flex-jst-center flex-ali-center q-pa-md full-width">
      <p class="title-font text-blk intro-tit font-18">员工风采</p>
      <p class="title-en">STAFF STYLE</p>
      <img src="~assets/img/pic_biaoti.png" alt="">
    </div>
    <div class="content-out flex-1 full-width flex-row flex-jst-center flex-ali-center">
      <div class="pic-col pic-col-1 flex-col flex-jst-start flex-ali-end">
        <img :src="k.img" alt="" v-for="k in list1" :key="k.name" @click="setCur(k.name)"
             :class="[k.cusClass ? k.cusClass : '', openPre ? 'pre-pic' : '', k.name === cur ? 'pre-cur' : 'pre-other'].join(' ')"
        >
      </div>
      <div class="pic-col pic-col-2 flex-col flex-jst-start flex-ali-end">
        <img :src="k.img" alt="" v-for="k in list2" :key="k.name" @click="setCur(k.name)"
             :class="[k.cusClass ? k.cusClass : '', openPre ? 'pre-pic' : '', k.name === cur ? 'pre-cur' : 'pre-other'].join(' ')"
        >
      </div>
      <div class="pic-col pic-col-3 flex-col flex-jst-start flex-ali-end">
        <img :src="k.img" alt="" v-for="k in list3" :key="k.name" @click="setCur(k.name)"
             :class="[k.cusClass ? k.cusClass : '', openPre ? 'pre-pic' : '', k.name === cur ? 'pre-cur' : 'pre-other'].join(' ')"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'employess',
  data () {
    return {
      cur: null,
      openPre: false,
      list1: [
        { img: require('src/assets/img/about/pic_ygfc_4.png'), name: 1 },
        { img: require('src/assets/img/about/pic_ygfc_6.png'), name: 2, cusClass: 'col-pic-7' },
        { img: require('src/assets/img/about/pic_ygfc_5.png'), name: 3 },
        { img: require('src/assets/img/about/pic_ygfc_9.png'), name: 4, cusClass: 'col-pic-8' }
      ],
      list2: [
        { img: require('src/assets/img/about/pic_ygfc_1.png'), name: 5 },
        { img: require('src/assets/img/about/pic_ygfc_2.png'), name: 6 },
        { img: require('src/assets/img/about/pic_ygfc_3.png'), name: 7 }
      ],
      list3: [
        { img: require('src/assets/img/about/pic_ygfc_7.png'), name: 8 },
        { img: require('src/assets/img/about/pic_ygfc_8.png'), name: 9 }
      ]
    }
  },
  methods: {
    setCur (idx) {
      const vm = this
      vm.cur = idx
      vm.openPre = !vm.openPre
    }
  }
}
</script>

<style lang="scss" scoped>
.page-container{
  .content-out{
    background-image: url("../../assets/img/about/pic_diwen.png");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    position: relative;
    .pic-col{
      &.pic-col-1{
        max-width: 28%;
      }
      &.pic-col-2{
        max-width: 37%;
      }
      &.pic-col-3{
        max-width: 25%;
      }
      +.pic-col{
        margin-left: 1%;
      }
      img{
        max-width: 100%;
        animation: imgIn .3s ease;
        transition: all .3s ease;
        &.pre-pic{
          &.pre-other{
            //width: 0;
            display: none;
          }
          &.pre-cur{
            max-width: 70vw;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
      .col-pic-6{
        max-width: 60%;
      }
      .col-pic-7{
        max-width: 70%;
      }
      .col-pic-8{
        max-width: 80%;
      }
    }
  }
}
.title-en{
  color: #686868;
  font-size: 0.13rem;
  margin: 0.02rem;
  +img{
    width: 40%;
  }
}
@keyframes imgIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
