// const mockUrl = 'https://www.fastmock.site/mock/c4a9191b46d02bfc455e710d4f53419e/api/gameDateManage'
// quasar 分环境打包配置，直接使用cross-env，执行dev和build时无法注入自定义变量
// 先在quasar.conf.js  build下声明env: { REQ_HOST: process.env.CUS_ENV === ‘PROD_ENV’ ? '生产host' : '测试host' // }，此处REQ_HOST为需要注入的env，CUS_ENV为执行npm命令时设定的env，
// 在package.json中设定好命令  "build:prod": "cross-env CUS_ENV=PROD_ENV quasar build"
const baseUrl = process.env.REQ_HOST
const downloadPage = 'https://test.sdk.chaoyi.cn'

const urls = {
  baseUrl: baseUrl,
  downloadPage: downloadPage,
  queryIndex: '/api/home', // 请求首页数据
  queryNewsList: '/api/home/news', // 新闻列表
  newsDetail: '/api/home/news/detail', // 新闻详情
  jobList: '/api/home/job', // 职位列表
  jobDetail: '/api/home/job/detail', // 职位详情
  queryQuestions: '/api/home/service', // 客服中心问题列表
  commitFeedback: '/api/feedback'
  // test: 'https://gamedatemanageapi.8xgame.cn/gameDateManage/loginOut/loginBms?loginName=admin&loginPassword=Cdcyi@2407'
}

export default urls
