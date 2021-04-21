<template>
  <div class="page-container">
    <div class="title-container flex-col flex-jst-center flex-ali-center q-pa-md">
      <p class="title-font text-blk intro-tit font-18">公司文化</p>
      <p class="title-en">COMPANY CULTURE</p>
      <img src="~assets/img/pic_biaoti.png" alt="">
    </div>
    <div class="content-out">
      <p>精神：诚信立足，创新致远；团结拼搏，高效创收。</p>
      <p>愿景：成为行业的标杆和方向标。</p>
      <p>使命：让用户在游戏中收获快乐，让员工在快乐工作中实现梦想。</p>
      <p>价值观：团结、诚实、学习、创新。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'culture'
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
    font-size: .14rem;
    color: #686868;
    margin: .1rem 0;
  }
}
</style>
