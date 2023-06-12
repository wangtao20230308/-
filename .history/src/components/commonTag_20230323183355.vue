<template>
  <div class="tabs">
    <el-tag v-for="item in tags" :key="item.path" :effect="$route.name === item.name ? 'dark' : 'plain'" :closable="item.name !== 'home'">
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
