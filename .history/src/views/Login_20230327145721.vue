<template>
  <div>
    <el-form :model="form" :rules="rules" :inline="true" class="login_container" label-width="70px">
      <h3 class="login_title">系统登入</h3>
      <el-form-item label="用户名" prop="userName">
        <el-input placeholder="请输入账号" v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="passWord">
        <el-input placeholder="请输入密码" v-model="form.passWord" type="password"></el-input>
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

<style lang="less" scoped>
.login_container {
  width: 350px;
  border: 1px solid #eaeaea;
  margin: 180px auto;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 25px #cacac6;
  padding: 35px 35px 15px 35px;
  box-sizing: border-box;
  .el-input {
    width: 198px;
  }
}
</style>
