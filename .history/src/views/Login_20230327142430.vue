<template>
  <div>
    <el-form :model="form"> </el-form>
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
