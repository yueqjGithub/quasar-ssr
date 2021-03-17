<template>
  <q-layout view="hHr lpR ffr">
    <q-header reveal class="bg-white text-normal" :reveal-offset="1">
      <q-toolbar>
        <q-toolbar-title>
          <q-img src="~assets/img/logo.png" style="width: 35vw" @click="toIndex"></q-img>
        </q-toolbar-title>
        <q-btn dense flat round icon="iconfont:icon-caidan" @click="right = !right" />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-dialog
        v-model="right"
        maximized
        transition-show="slide-down"
        transition-hide="slide-up"
        content-class="transparent-dialog"
      >
        <menuModule></menuModule>
      </q-dialog>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import menuModule from '../components/menu.vue'
export default {
  components: {
    menuModule
  },
  data () {
    return {
      right: false
    }
  },
  methods: {
    toIndex () {
      this.$router.push({ name: 'index' })
    }
  }
}
</script>
