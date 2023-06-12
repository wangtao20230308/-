//import { hasOwnMetadata } from 'core-js/fn/reflect'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Mall from '../views/Mall.vue'
import PageOne from '../views/PageOne.vue'
import PageTwo from '../views/PageTwo.vue'
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
    children: [
      // //子路由（嵌套路由）
      // {
      //   //首页
      //   path: 'home',
      //   name: 'home',
      //   component: Home,
      // },
      // {
      //   //用户页
      //   path: 'user',
      //   name: 'user',
      //   component: User,
      // },
      // {
      //   //商品管理
      //   path: 'mall',
      //   name: 'mall',
      //   component: Mall,
      // },
      // {
      //   //页面1
      //   path: 'page1',
      //   name: 'page1',
      //   component: PageOne,
      // },
      // {
      //   //页面2
      //   path: 'page2',
      //   name: 'page2',
      //   component: PageTwo,
      // },
      // // {
      // //   path: '/user',
      // //   name: 'user',
      // //   //按需引入组件
      // //   //原型：component: import()
      // //   component: () => import('../views/User')
      // // }
    ],
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
