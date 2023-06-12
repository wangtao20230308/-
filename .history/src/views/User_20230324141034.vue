<template>
  <div>
    <div class="manage">
      <el-dialog title="提示" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
        <!-- 用户的表单信息 -->
        <el-form ref="form" :model="form" label-width="80px" :inline="true" :rules="rules">
          <el-form-item label="姓名" prop="name">
            <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input placeholder="请输入年龄" v-model="form.age"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-select v-model="form.sex" placeholder="请选择">
              <el-option label="男" value="1"></el-option>
              <el-option label="女" value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出生日期" prop="birth">
            <el-date-picker v-model="form.birth" type="datetime" placeholder="选择日期时间"> </el-date-picker>
          </el-form-item>
          <el-form-item label="地址" prop="addr">
            <el-input placeholder="请输入地址" v-model="form.addr"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <div class="manage-header">
      <el-button type="primary" @click="dialogVisible = true">+新增</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'User',
  data() {
    return {
      dialogVisible: false,
      form: {
        name: '',
        age: '',
        sex: '',
        birth: '',
        addr: '',
      },
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        age: [{ required: true, message: '请输入年龄', trigger: 'blur' }],
        sex: [{ required: true, message: '请选择性别', trigger: 'blur' }],
        birth: [{ required: true, message: '请输入出生日期', trigger: 'blur' }],
        addr: [{ required: true, message: '请输入地址', trigger: 'blur' }],
      },
    }
  },
  methods: {
    //提交用户表单
    submit() {
      this.$refs.form.validate((valid) => {
        //判断是否校验，参数valid为boolean值
        if (valid) {
          //校验成功，后续对表单的处理
          console.log(valid, 'valid')
          console.log(this.form, '拿到表单提交后的form数据')
          this.dialogVisible = false
        }
      })
    },
    handleClose() {
      this.$refs.form.resetfie
    },
  },
}
</script>

<style></style>
