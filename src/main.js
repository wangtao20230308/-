import Vue from 'vue'
import App from './App.vue'
// //element-ui全局引入
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// //element-ui转换成一个插件
// Vue.use(ElementUI);

//ele按需导入
import { Button, Radio, Container, Aside, Header, Main, Menu, Submenu, MenuItemGroup, MenuItem, Dropdown, DropdownMenu, DropdownItem } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/less/index.less'
Vue.use(Button)
Vue.use(Radio)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

//路由引入
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store, //把store挂载到vue实例上
  render: (h) => h(App),
}).$mount('#app')
