<template>
  <div class="manage">
    <div>
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
              <el-option label="男" :value="1"></el-option>
              <el-option label="女" :value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出生日期" prop="birth">
            <el-date-picker v-model="form.birth" type="datetime" placeholder="选择日期时间" value-format="yyyy-DD-MM"> </el-date-picker>
          </el-form-item>
          <el-form-item label="地址" prop="addr">
            <el-input placeholder="请输入地址" v-model="form.addr"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <div class="manage-header">
      <el-button type="primary" @click="handleAdd">+新增</el-button>
      <!-- form搜索区域 -->
    </div>
    <el-table :data="tableData" style="width: 100%" height="90%">
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="sex" label="性别">
        <template slot-scope="scope">
          <span>{{ scope.row.sex === 1 ? '男' : '女' }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="birth" label="出生日期"> </el-table-column>
      <el-table-column prop="addr" label="地址"> </el-table-column>
      <el-table-column prop="action" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEidt(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-pagination layout="prev, pager, next" :total="total" @current-change="handlePage"> </el-pagination>
    </div>
  </div>
</template>
<script>
import { getUser, addUser, editUser, delUser } from '../api'
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
      tableData: [],
      modalType: 0, //通过该字段管理弹窗是新增还是删除，0表示新增，1表示删除
      total: 0, //当前总条数，默认为0
      pageData: {
        page: 1,
        limit: 10,
      }, //分页参数
    }
  },
  methods: {
    //点击确定，提交用户表单
    submit() {
      this.$refs.form.validate((valid) => {
        //判断是否校验，参数valid为boolean值
        if (valid) {
          //校验成功，后续对表单的处理
          console.log(valid, 'valid')
          console.log(this.form, '拿到表单提交后的form数据')
          if (this.modalType === 0) {
            //如果·为0，调用新增接口addUser
            addUser(this.form).then(() => {
              //重新获取列表数据
              this.getList()
            })
          } else {
            editUser(this.form).then(() => {
              //重新获取列表数据
              this.getList()
            })
          }
          this.$refs.form.resetFields()
          //关闭弹窗
          this.dialogVisible = false
        }
      })
    },
    handleClose() {
      this.$refs.form.resetFields()
      this.dialogVisible = false
    },
    cancel() {
      this.handleClose()
    },
    // cancel() {
    //   this.$refs.form.resetFields()
    //   this.dialogVisible = false
    // },
    handleAdd() {
      this.modalType = 0
      this.dialogVisible = true
    },
    handleEidt(rowData) {
      this.modalType = 1
      console.log(rowData)
      this.dialogVisible = true
      //需要深拷贝，不然会直接修改会改变tableData里面的数据，会报错
      this.form = JSON.parse(JSON.stringify(rowData))
    },
    handleDelete(rowData) {
      console.log(rowData)
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          delUser({ id: rowData.id }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!',
            })
            //重新获取列表数据
            this.getList()
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          })
        })
    },
    //选择页码回调,val是获取的页码值1、2、3、4、5....
    handlePage(val) {
      console.log(val, 'val')
    },
    //公共，获取列表数据
    getList() {
      // 获取列表数据
      getUser().then(({ data }) => {
        console.log(data, 'data')
        this.tableData = data.list
        this.total = data.count || 0
      })
    },
  },
  mounted() {
    //每次加载重新刷新列表数据
    this.getList()
  },
}
</script>

<style lang="less" scoped>
.manage {
  height: 90%;
}
</style>
