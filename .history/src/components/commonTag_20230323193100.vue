<template>
  <div class="tabs">
    <el-tag v-for="(item, index) in tags" :key="item.path" :effect="$route.name === item.name ? 'dark' : 'plain'" :closable="item.name !== 'home'" @click="changeMenu(item)" @close="handleClose(item, index)">
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
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
  methods: {
    ...mapMutations(['closeTag']),
    //点击tag跳转的功能
    changeMenu(item) {
      this.$router.push({ name: item.name })
    },
    //点击tag删除的功能
    handleClose(item, index) {
      // 调用store中的mutations
      this.closeTag(item)
      const length = this.tags.length - 1
      //删除之后的跳转逻辑，1.删除非激活标签
      if (item.name !== this.$router.name) {
        return
      }
      //表示删除的最后一项
      if (index === length) {
      }
    },
  },
}
</script>

<style></style>
