//import { hasOwnMetadata } from 'core-js/fn/reflect'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  //主路由
  {
    path: '/',
    name: 'Main',
    //按需引入组件
    //原型：component: import()
    component: Main,
    redirect: '/home',
    children: [],
  },
  //登入页面Login
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
]

// new VueRouter({
//   mode: 'history',
// })
const router = new VueRouter({
  mode: 'history',
  routes,
})

//导出路由
export default router
