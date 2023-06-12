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
      const length = this.tags.length
      //删除之后的跳转逻辑，1.删除非激活标签
      if (item.name !== this.$route.name) {
        return
      }
      //2.表示删除的最后一项激活标签
      if (index === length) {
        this.$router.push({ name: this.tags[index - 1].name })
      } else {
        this.$router.push({ name: this.tags[index].name })
      }
    },
  },
}
</script>

<style lang="less" scoped>
.tabs {
  margin: 20px;
  cursor: pointer;
}
</style>
