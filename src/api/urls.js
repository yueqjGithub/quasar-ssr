// const mockUrl = 'https://www.fastmock.site/mock/c4a9191b46d02bfc455e710d4f53419e/api/gameDateManage'
let baseUrl = 'https://wwwadminapi.agdgame.cn'
const downloadPage = 'https://test.sdk.chaoyi.cn'
// let baseUrl = '/'
// const baseUrl = '/gameDateManage'

if (process.env.CUS_ENV === 'PROD_ENV') {
  baseUrl = 'https://wwwadminapi.agdgame.cn'
}

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
}

export default urls
