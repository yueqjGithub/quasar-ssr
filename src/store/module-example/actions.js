import urls from 'src/api/urls'
import { httpGet } from 'boot/axios'
import { Loading } from 'quasar'

export async function queryIndex (context) { // 首页接口
  Loading.show()
  const { data } = await httpGet(urls.queryIndex)
  await context.dispatch('queryNewsInfo')
  Loading.hide()
  context.commit('setIndexInfo', data)
}

export async function queryNewsInfo (context) {
  Loading.show()
  const { data } = await httpGet(urls.queryNewsList)
  Loading.hide()
  context.commit('setNewsList', data.list)
}

export async function queryNewsDetail (ctx, payload) {
  Loading.show()
  const { data } = await httpGet(urls.newsDetail, { id: payload })
  Loading.hide()
  ctx.commit('setCurNews', data)
}

export async function queryJobList (ctx) {
  Loading.show()
  const res = await httpGet(urls.jobList)
  Loading.hide()
  ctx.commit('setJobList', res.data.list)
}

export async function queryService (ctx) {
  Loading.show()
  const res = await httpGet(urls.queryQuestions)
  Loading.hide()
  ctx.commit('setServiceList', res.data)
}
