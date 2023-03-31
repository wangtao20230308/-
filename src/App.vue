<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
  },
}
</script>

<style lang="less">
html,
body,
h3,
p {
  padding: 0;
  margin: 0;
}
#app {
  height: 100vh;
}
</style>
