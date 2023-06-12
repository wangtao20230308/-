import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import user from './mockServeData/user'

//定义mock请求拦截
// Mock.mock('/api/home/getData', 'get', function () {
//   //拦截到请求后的处理逻辑
//   console.log('拦截到了')
//   return 1
// })
Mock.mock('/api/home/getData', 'get', homeApi.getStatisticalData)

//用户列表的数据
Mock.mock('/api/user/add', 'post', user.createUser) //新增
Mock.mock('/api/user/edit', 'post', user.updateUser) //编辑
Mock.mock('/api/user/edit', 'post', user.updateUser) //编辑
