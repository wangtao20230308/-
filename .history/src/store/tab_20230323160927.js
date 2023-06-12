//用来管理菜单的数据
export default {
  state: {
    isCollapse: false, // 控制菜单的展开还是收起
    tabsList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 's-home',
        url: 'Home/Home',
      },
    ], //面包屑数据
  },
  mutations: {
    //修改菜单展开收起的方法
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    //更新面包屑数据
    selectMenu() {},
  },
}
