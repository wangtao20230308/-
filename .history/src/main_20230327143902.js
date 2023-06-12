import Vue from 'vue'
import App from './App.vue'
// //element-ui全局引入
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// //element-ui转换成一个插件
// Vue.use(ElementUI);

//ele按需导入
import {
  Pagination,
  MessageBox,
  DatePicker,
  Select,
  Option,
  Form,
  FormItem,
  Input,
  Dialog,
  Tag,
  Breadcrumb,
  BreadcrumbItem,
  Table,
  TableColumn,
  Col,
  Row,
  Card,
  Button,
  Radio,
  Container,
  Aside,
  Header,
  Main,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from 'element-ui'
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
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(Pagination)

Vue.component(MessageBox.name, MessageBox) // 全局注册组件， 若使用Vue.use()会再初始时候执行一次，有bug
Vue.prototype.$message = MessageBox // 挂载到vm实例上
Vue.prototype.$confirm = MessageBox // 挂载到vm实例上

//路由引入
import router from './router'
import store from './store'
import './api/mock'

Vue.config.productionTip = false

new Vue({
  router,
  store, //把store挂载到vue实例上
  render: (h) => h(App),
}).$mount('#app')
