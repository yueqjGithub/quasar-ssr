<template>
  <div class="page-container">
    <div class="title-container flex-col flex-jst-center flex-ali-center q-pa-md">
      <p class="title-font text-blk intro-tit font-18">发展历程</p>
      <p class="title-en">DEVELOPMENT COURSE</p>
      <img src="~assets/img/pic_biaoti.png" alt="">
    </div>
    <div class="hisContainer flex-col flex-jst-start flex-ali-center">
      <div class="listFirst listItem">
        <div class="titCircle">
          <div></div>
       </div>
      </div>
<!--      安全绳-->
      <div class="flex-row flex-jst-center flex-ali-center full-width" v-for="(k, idx) in list" :key="idx">
        <div :class="idx % 2 === 1 ? 'flex-row rightSide' : 'flex-row-reverse leftSide'" class="listItem flex-jst-start flex-ali-start">
          <div class="titCircle">
            <div></div>
          </div>
          <div :class="idx%2===1?'flex-ali-start':'flex-ali-end'" class="listWord flex-1 flex-col flex-jst-start">
            <h2 class='title-font font-16 text-normal'>{{k.year}}</h2>
            <p class='font-14 text-normal'>{{k.word}}</p>
          </div>
          <div></div>
        </div>
      </div>
<!--      安全绳-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'history',
  data () {
    return {
      list: [
        { year: '至今', word: '目前有多款游戏产品上线' },
        { year: '2021年3月', word: '阿古朵广州分公司成立' },
        { year: '2020年2月', word: '成都阿古朵七象科技有限公司成立' },
        { year: '2019年12月', word: '成都阿古朵八项科技有限公司成立，致力于游戏研发' },
        { year: '2018年', word: '北京应用互联有限公司 后更名为：成都阿古朵八项科技有限公司北京分公司' },
        { year: '2015年9月', word: '四川佐耳科技有限公司成立' },
        { year: '2015年2月', word: '成都超亿科技有限公司成立' }
      ]
    }
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
.hisContainer{
  box-sizing: border-box;
  padding: 0 .12rem .2rem .12rem;
  h2{
    line-height: 1;
  }
  .listItem{
    width: 50%;
    padding-bottom: .4rem;
    box-sizing: border-box;
    position: relative;
    // opacity: 0;
    transition: all .5s linear;
    // animation-name: FadeInAni;
    // animation-duration: .5s;
    // animation-timing-function: linear;
    // animation-fill-mode: forwards;
    &.listFirst{
      height: .6rem;
      width: 50%;
      transform: translate(50%, 0);
      border-left: 1px solid #dcdcdc;
      .titCircle{
        border:1px solid #e7e7e7;
        padding: 0;
        transform: translate(-50%, 0);
        div{
          background: #eeeeee;
        }
      }
    }
    &.leftSide{
      transform: translate(calc(-50% + 1px), 0);
      transform: translate(-50%, 0)\0;
      border-right: 1px solid #dcdcdc;
      .titCircle{
        transform: translate(50%, 0);
      }
    }
    &.rightSide{
      transform: translate(50%, 0);
      border-left: 1px solid #dcdcdc;
      .titCircle{
        transform: translate(-50%, 0);
      }
    }
    .titCircle{
      width: .2rem;
      height: .2rem;
      padding: .02rem;
      box-sizing: border-box;
      border-radius: 50%;
      border: 1px solid #db2a25;
      text-align: center;
      line-height: .2rem;
      div{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #db2a25;
      }
    }
    .listWord{
      margin: 0 0.05rem;
    }
    .itemImg{
      width: .9rem;
      height: .9rem;
      border-radius: 50%;
      overflow: hidden;
      align-self: flex-end;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
