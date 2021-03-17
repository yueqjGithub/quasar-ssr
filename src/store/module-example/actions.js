import urls from 'src/api/urls'
import { httpGet } from 'boot/axios'
import { Loading } from 'quasar'

export async function queryIndex (context) { // 首页接口
  Loading.show()
  const { data } = await httpGet(urls.queryIndex)
  Loading.hide()
  context.commit('setIndexInfo', data)
}
