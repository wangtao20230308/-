<template>
  <div>
    <el-form :model="form">
      <h1>系统登入</h1>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        userName: '',
        password: '',
      },
    }
  },
}
</script>

<style lang="less" scoped></style>
