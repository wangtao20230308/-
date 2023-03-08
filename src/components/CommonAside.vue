<template>
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
    <h3>这是一份离别信</h3>
    <el-menu-item @click="clickMenu(item)" v-for="item in noChildrenMenu" :key="item.name" :index="item.name">
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildrenMenu" :key="item.label" :index="item.label">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
        <el-menu-item @click="clickMenu(subItem)" :index="subItem.path">{{ subItem.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<style lang="less">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100vh;
  h3 {
    color: #fff;
    // height: 48px;
    text-align: center;
    line-height: 60px;
    font-size: 24px;
    font-weight: 700;
    //喜欢哈哈哈
  }
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      menuData: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home',
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage',
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage',
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting',
              url: 'Other/PageOne',
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
              url: 'Other/PageTwo',
            },
          ],
        },
      ],
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
    clickMenu(item) {
      console.log('======', item)
      this.$router.push(item.path)
    },
  },
  computed: {
    //没有子菜单的导航栏
    noChildrenMenu() {
      return this.menuData.filter((item) => !item.children)
    },
    //有子菜单的导航栏-->其他
    hasChildrenMenu() {
      return this.menuData.filter((item) => item.children)
    },
  },
}
</script>
