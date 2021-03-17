<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  created () {
    this.$q.iconMapFn = (iconName) => {
      // iconName is the content of QIcon "name" prop

      // your custom approach, the following
      // is just an example:
      if (iconName.startsWith('iconfont:') === true) {
        // we strip the "app:" part
        const name = iconName.substring(9)

        return {
          cls: 'iconfont ' + name
        }
      }

      // when we don't return anything from our
      // iconMapFn, the default Quasar icon mapping
      // takes over
    }
  }
}
</script>
