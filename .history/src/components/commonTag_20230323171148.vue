<template>
  <div class="tabs">
    <el-tag v-for="item in items" :key="item.label" :type="item.type" effect="dark">
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
