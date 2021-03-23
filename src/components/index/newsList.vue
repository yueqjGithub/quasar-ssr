<template>
  <div>
    <div v-for="k in curList" :key="k.id" class="list-item flex-row flex-jst-btw flex-ali-center q-pa-sm">
      <div class="left-container flex-col flex-jst-start flex-ali-start">
        <p class="ellipsis item-title text-blk font-16">{{k.title}}</p>
      </div>
      <div class="right-container"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'newsList',
  props: {
    list: {
      default: function () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  computed: {
    firstLine () {
      return this.list[0] ? this.list[0] : null
    },
    curList () {
      return this.list.slice(1, 5)
    }
  }
}
</script>

<style lang="scss" scoped></style>
