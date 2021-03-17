<template>
  <q-page class="flex flex-center">
    <div>{{indexInfo}}</div>
  </q-page>
</template>

<script>
// import { httpGet } from 'boot/axios'
import { mapState } from 'vuex'
export default {
  name: 'PageIndex',
  preFetch ({ store }) {
    return store.dispatch('queryIndex')
  },
  data () {
    return {
      info: null
    }
  },
  computed: {
    ...mapState(['indexInfo'])
  },
  methods: {
  }
}
</script>
