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
  const { data } = await httpGet(urls.queryNewsList)
  context.commit('setNewsList', data.list)
}
