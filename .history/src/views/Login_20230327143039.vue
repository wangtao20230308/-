<template>
  <div>
    <el-form :model="form" :rules="rules">
      <h1>系统登入</h1>
      <el-form-item label="用户名" prop="userName">
        <el-input placeholder="请输入账号" v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input placeholder="请输入账号" v-model="form.passWord"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
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
        passWord: '',
      },
      rules: {
        userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        passWord: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    }
  },
}
</script>

<style lang="less" scoped></style>
