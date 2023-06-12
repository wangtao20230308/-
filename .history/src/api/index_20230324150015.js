import http from '../utils/requst'

//请求首页数据
export const getData = () => {
  //返回一个promise对象,/home/getData这个链接由后端提供的get(请求链接，请求参数)
  return http.get('/home/getData')
}

//获取用户user页的列表、新增、编辑、删除数据
export const getUser = (params) => {
  return http.get('/user/getUser', params)
}

export const addUser = (data) => {
  return http.post('/user/add', data)
}

export const editUser = (data) => {
  return http.get('/user/edit', data)
}

export const delUser = (data) => {
  return http.get('/user/del', data)
}
