<template>
  <div>
    <div class="manage">
      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
        <!-- 用户的表单信息 -->
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <div class="manage-header">
      <el-button type="primary" @click="dialogVisible = true">+新增</el-button>
    </div>
  </div>
</template>
// { model: 'name', label: '姓名', type: 'input' }, { model: 'age', label: '年龄', type: 'input' }, { model: 'sex', label: '性别', type: 'select', opts: [ { label: '男', value: 1 }, { label: '女', value: 0 } ] }, { model: 'birth', label: '出生日期', type: 'date' }, { model: 'addr', label: '地址',
type: // 'input' }

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
    }
  },
}
</script>

<style></style>
