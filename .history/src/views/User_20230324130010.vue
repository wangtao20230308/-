<template>
  <div>
    <div class="manage">
      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
        <!-- 用户的表单信息 -->
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
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

<script>
export default {
  name: 'User',
  data() {
    return {
      dialogVisible: false,
    }
  },
}
</script>

<style></style>
