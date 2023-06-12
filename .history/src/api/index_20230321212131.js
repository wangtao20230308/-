import http from '../utils/requst'

//请求首页数据
export const getData = () => {
  //返回一个promise对象,/home/getData这个链接由后端提供的get(请求链接，请求参数)
  return http.get('/home/getData')
}
