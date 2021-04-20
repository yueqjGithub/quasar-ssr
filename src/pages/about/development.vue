<template>
  <div class="page-container">
    <div class="title-container flex-col flex-jst-center flex-ali-center q-pa-md full-width">
      <p class="title-font text-blk intro-tit font-18">员工发展</p>
      <p class="title-en">DEVELOPMENT</p>
      <img src="~assets/img/pic_biaoti.png" alt="">
    </div>
    <div class="content-out">
      <div v-for="(k, idx) in list" :key="idx" class="dev-item full-width flex-row flex-jst-btw flex-ali-center"
      :style="{animationDelay: `${idx * 0.3}s`}"
      >
        <div class="img-out" :style="{backgroundImage: `url(${k.imgSrc})`}"></div>
        <div class="flex-1 word-out q-pa-sm">
          <div class="word-tit flex-row flex-jst-start flex-ali-center">
            <div class="word-icon">NO.{{idx + 1}}</div>
            <div class="font-14 font-bold text-blk">{{k.title}}</div>
          </div>
          <p class="font-12 text-light-grey full-width">{{k.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'development',
  data () {
    return {
      list: [
        {
          title: '人才理念',
          imgSrc: require('src/assets/img/about/intro-1.png'),
          content: '招有理想抱负的人，给最大的空间，让优秀人才实现自身价值'
        },
        {
          title: '人才培养',
          imgSrc: require('src/assets/img/about/intro-2.jpg'),
          content: '成都阿古朵八项科技有限公司自成立以来就非常重视人才的培养。为了培养专业的管理人才，公司成立了“人才培养机制”'
        },
        {
          title: '人才发展',
          imgSrc: require('src/assets/img/about/intro-2.png'),
          content: '每一位负责人都会积极发现和培养有追求有激情的员工，帮助他们在技术上和团队管理上得以提升。'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.content-out{
  padding: 0 .12rem;
  .dev-item{
    animation: rotateIn 1s ease forwards;
    transform: rotateX(-90deg);
    +.dev-item{
      margin-top: .2rem;
    }
    .img-out{
      width: 32vmin;
      height: 32vmin;
      border-radius: .07rem;
      background-size: auto 100%;
      background-position: center;
    }
    .word-out{
      height: 28vmin;
      border-radius: 0 .1rem .1rem 0;
      background: #ffffff;
      .word-tit{
        margin-bottom: .1rem;
        .word-icon{
          background: #be2431;
          padding: .02rem .04rem;
          color: #ffffff;
          transform: skewX(-15deg);
          margin-right: .1rem;
        }
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
@keyframes rotateIn {
  from {
    transform: rotateX(-90deg);
  }
  to {
    transform: rotateX(0deg);
  }
}
</style>
