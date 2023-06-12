// axios的二次封装
import axios from 'axios'

//创建实列
axios.create({
  //通用请求地址的前缀
  baseURL: '/api',
})
