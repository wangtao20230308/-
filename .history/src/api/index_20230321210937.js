import http from '../utils/requst'

//请求首页数据
export const getData = () => {
  return http.get('/home/getData')
}
