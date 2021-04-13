<template>
  <div class="page-container q-pa-md">
    <div class="bg-white">
      <div class="flex-row flex-jst-start flex-ali-center fed-tit q-pa-sm">
        <p class="font-bold font-18 text-blk">问题类型</p>
        <div class="flex-1 flex-row flex-jst-ard flex-ali-center">
          <q-radio keep-color v-model="type" :val="1" label="投诉" color="red" class="font-bold font-15"/>
          <q-radio keep-color v-model="type" :val="2" label="建议" color="red" class="font-bold font-15" />
        </div>
      </div>
      <q-input
        v-model="content"
        type="textarea"
        borderless
        placeholder="请具体描述您的问题..."
        class="q-pa-sm"
        :disable="loading"
      />
    </div>
    <div class="q-pa-sm"></div>
    <div class="bg-white">
      <q-input v-model="address" borderless placeholder="请输入您的联系方式" style="padding-left: .08rem" :disable="loading"></q-input>
    </div>
    <div class="q-pa-sm"></div>
    <q-btn label="提交" unelevated class="full-width" style="background: #be2431;color: #ffffff" size="lg" @click="doSub" :loading="loading" :disable="loading"></q-btn>
  </div>
</template>

<script>
import { httpPost } from 'src/boot/axios'
import urls from 'src/api/urls'
export default {
  name: 'feedback',
  data () {
    return {
      loading: false,
      type: 1,
      content: '',
      address: ''
    }
  },
  methods: {
    async doSub () {
      const vm = this
      if (vm.content === '') {
        vm.$q.notify({
          type: 'negative',
          position: 'top',
          message: '请描述您的问题'
        })
        return false
      }
      const reg = /^[0-9a-zA-Z@.]{5,}$/
      if (!reg.test(vm.address)) {
        vm.$q.notify({
          type: 'negative',
          position: 'top',
          message: '请留下您的联系方式'
        })
        return false
      }
      try {
        const obj = {
          type: vm.type,
          content: vm.content,
          address: vm.address
        }
        vm.loading = true
        const { data } = await httpPost(urls.commitFeedback, obj)
        vm.loading = false
        if (data.status === 200) {
          vm.$q.dialog({
            title: '',
            class: 'font-12',
            message: '请耐心等待回复',
            ok: {
              label: '确定',
              color: 'negative'
            }
          })
        } else {
          vm.$q.dialog({
            title: '',
            class: 'font-12',
            message: '请稍后再试',
            ok: {
              label: '确定',
              color: 'negative'
            }
          })
        }
      } catch {
        vm.$q.dialog({
          title: '',
          class: 'font-12',
          message: '请稍后再试',
          ok: {
            label: '确定',
            color: 'negative'
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fed-tit{
  border-bottom: 1px solid #e8e8e8;
}
</style>
