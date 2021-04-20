<template>
  <div class="page-container">
    <div class="title-container flex-col flex-jst-center flex-ali-center q-pa-md">
      <p class="title-font text-blk intro-tit font-18">福利待遇</p>
      <p class="title-en">FRINGE BENEFITS</p>
      <img src="~assets/img/pic_biaoti.png" alt="">
    </div>
<!--    福利待遇-->
    <div class="q-pa-md flex-row flex-wrap flex-jst-btw flex-ali-start">
      <div v-for="k in treatList" :key="k.icon" class="treat-item q-pa-md flex-col flex-jst-start flex-ali-center">
        <q-icon :name="`iconfont:${k.icon}`" style="color: #db2b28;font-size: .3rem;"></q-icon>
        <p class="treat-name font-16 font-bold text-blk">{{k.title}}</p>
        <p class="treat-en text-light-grey text-center full-width">{{k.sub}}</p>
        <p class="treat-cont">{{k.content}}</p>
      </div>
    </div>
    <div class="title-container flex-col flex-jst-center flex-ali-center q-pa-md">
      <p class="title-font text-blk intro-tit font-18">招聘岗位</p>
      <p class="title-en">RECRUITMENT</p>
      <img src="~assets/img/pic_biaoti.png" alt="">
    </div>
    <div class="q-pa-md">
      <div class="job-out">
        <div class="job-tit flex-row flex-jst-btw flex-ali-center job-item">
          <div class="flex-2 text-center">职位名称</div>
          <div class="flex-2 text-center">职位分类</div>
          <div class="flex-1 text-center">城市</div>
          <div class="flex-1"></div>
        </div>
<!--        职位列表-->
        <div class="job-item full-width" v-for="k in jobList" :key="k.id" @click="setJob(k.id)" :class="k.id === curJob ? 'job-cur' : ''">
          <div class="flex-row flex-jst-btw flex-ali-start job-list">
            <div class="flex-2 text-center">{{k.position}}</div>
            <div class="flex-2 text-center">{{k.category}}</div>
            <div class="flex-1 text-center">{{k.city}}</div>
            <div class="flex-1 flex-row flex-jst-center flex-ali-center iconContainer">
              <div class='iconRow'></div>
              <div class='iconCol'></div>
            </div>
          </div>
          <div class="job-content" v-html="k.detail"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'join',
  data () {
    return {
      curJob: null,
      treatList: [
        { icon: 'icon-baoxianxiang', title: '六险一金', sub: 'INSURANCE', content: '入职享受六险一金，并提供餐补、交通补贴以及全勤奖' },
        { icon: 'icon-rili', title: '上班时间', sub: 'OFFICE HOURS', content: '早10晚7工作制，完美避开上下班高峰时期' },
        { icon: 'icon-huodong', title: '团建活动', sub: 'TEAM BUILDING', content: '进了门，我们就是一家人，一同团建去旅行' },
        { icon: 'icon-yingxiaoguanhuai', title: '节庆关怀', sub: 'FESTIVAL GIFT', content: '传统节假日会有高标准的节日礼金或礼物' },
        { icon: 'icon-liwu', title: '加班福利', sub: 'OVERTIME BENEFITS', content: '让你的每一分付出都可 以得到收获' },
        { icon: 'icon-_jiatingguanxi', title: '和谐氛围', sub: 'ATMOSPHERE', content: '像在家一般温暖' },
        { icon: 'icon-Coffeecupfood', title: '下午茶', sub: 'HIGH TEA', content: '劳累一整天补充能量' },
        { icon: 'icon-qianbao', title: '绩效奖金', sub: 'PERFORMANCE BONUS', content: '优秀的你值得更多报酬' },
        { icon: 'icon-20jiankongguanli', title: '健康体检', sub: 'HEALTH EXAMINATION', content: '身体是革命的本钱' }
      ]
    }
  },
  preFetch ({ store }) {
    if (!store.state.jobList) {
      return store.dispatch('queryJobList')
    }
  },
  computed: {
    ...mapState(['jobList'])
  },
  created () {
    console.log(this.jobList)
  },
  methods: {
    setJob (id) {
      this.curJob = id
    }
  }
}
</script>

<style lang="scss" scoped>
.job-out{
  border-radius: .07rem;
  overflow: hidden;
  width: 100%;
  background: #ffffff;
  padding-bottom: .1rem;
  .job-item{
    box-sizing: border-box;
    padding-left: .1rem;
    padding-right: .1rem;
    &.job-tit{
      background: #e5e9f9;
      color: #5f5460;
      font-size: .16rem;
      padding-top: .1rem;
      padding-bottom: .1rem;
    }
    .job-content{
      padding: .1rem;
      display: none;
    }
    &.job-cur{
      .job-list{
        .iconContainer{
          .iconRow{
            transform: rotate(90deg);
          }
        }
      }
      .job-content{
        display: block;
      }
    }
    .job-list{
      border-bottom: 1px solid #e8e8e8;
      font-size: .13rem;
      font-weight: bold;
      color: #686868;
      padding-top: .1rem;
      padding-bottom: .1rem;
      .iconContainer{
        position: relative;
        .iconRow,.iconCol{
          width: 2px;
          height: 15px;
          background-color: #777;
          transition: all .3s linear;
        }
        .iconRow{
          transform: rotate(0deg);
        }
        .iconCol{
          position: relative;
          left: -2px;
          transform: rotate(90deg);
        }
      }
    }
  }
}
.treat-item{
  border-radius: .07rem;
  width: 49%;
  margin-bottom: .15rem;
  background-image: url("~assets/img/treatBg.png");
  background-size: 100% 100%;
  .treat-name{
    margin-top: .05rem;
  }
  .treat-en{
    width: 100%;
    font-size: .12rem;
    transform: scale(.8);
    white-space: nowrap;
    margin-top: .01rem;
    margin-bottom: .07rem;
  }
  .treat-cont{
    width: 100%;
    text-align: center;
    color: #929292;
    font-size: .12rem;
    height: .4rem;
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
</style>
