<template>
  <div>
    <q-icon name="iconfont:icon-caidan"></q-icon>
    <div>
      {{indexInfo}}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'about',
  computed: {
    ...mapState(['indexInfo'])
  }
}
</script>
