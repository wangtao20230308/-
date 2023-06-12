import Mock from 'mockjs'
import homeApi from './mockServeData/home'

//定义mock请求拦截
// Mock.mock('/api/home/getData', 'get', function () {
//   //拦截到请求后的处理逻辑
//   console.log('拦截到了')
//   return 1
// })
Mock.mock('/api/home/getData', 'get', homeApi.getStatisticalData)

//用户列表的数据
Mock.mock()
