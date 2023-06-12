<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <!-- aside -->
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <!-- Header -->
        <common-header></common-header>
      </el-header>
      <el-main>
        <!-- 路由出口，匹配到的组件都渲染在这里 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
export default {
  name: 'Main',
  components: {
    CommonAside,
    CommonHeader,
  },
  data() {
    return {}
  },
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}
// .el-main {
//   padding-top: 0;
// }
</style>
