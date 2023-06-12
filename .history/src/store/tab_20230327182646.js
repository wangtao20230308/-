//用来缓存menu的数据，防止刷新页面数暂存在store的菜单数据清零
import Cookie from 'js-cookie'
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
    menu: [],
  },
  mutations: {
    //修改菜单展开收起的方法
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    //更新面包屑数据
    selectMenu(state, val) {
      //判断添加的数据是否为首页
      if (val.name !== 'home') {
        const index = state.tabsList.findIndex((item) => item.name === val.name)
        //如果不存在
        if (index === -1) {
          state.tabsList.push(val)
        }
      }
    },
    //删除指定的tag数据
    closeTag(state, item) {
      console.log(item, 'item')
      const index = state.tabsList.findIndex((val) => val.name === item.name)
      state.tabsList.splice(index, 1)
    },

    //设置菜单数据
    setMenu(state, val) {
      state.menu = val
      // cookie的数据必须为字符串
      Cookie.set('menu', JSON.stringify(val))
    },
    //动态注册路由
    addMenu(state, router) {
      //判断缓存中是否有数据
      if (!Cookie.get('menu')) return
      const menu = JSON.parse(Cookie.get('menu'))
      state.menu = menu
      //组装动态路由的数据
      const menuArray = []
    },
  },
}
