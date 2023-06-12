// axios的二次封装
import axios from 'axios'

//创建实列
const http = axios.create({
  //通用请求地址的前缀
  baseURL: '/api',
  //超时时间，就是最大的请求时间是多少
  timeout: 10000,
})
