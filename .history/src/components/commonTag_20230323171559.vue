<template>
  <div class="tabs">
    <el-tag v-for="item in items" :key="item.label" :type="item.type" effect="dark">
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CommonTag',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
}
</script>

<style></style>
