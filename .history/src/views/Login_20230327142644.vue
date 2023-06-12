<template>
  <div>
    <el-form :model="form" :rules="rules">
      <h1>系统登入</h1>
      <el-form-item label="用户名" prop="name">
        <el-input placeholder="请输入账号" v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="name">
        <el-input placeholder="请输入账号" v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="name">
        <el-input placeholder="请输入账号" v-model="form.userName"></el-input>
      </el-form-item>
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
