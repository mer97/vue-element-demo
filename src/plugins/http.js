// 插件模块
import axios from 'axios'
import { Message } from 'element-ui'

const MyHttpServer = {}

MyHttpServer.install = (Vue) => {
  // 请求拦截器
  axios.interceptors.request.use(config => {
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    if (config.url !== 'http://localhost:8080/api/v1/login') {
      config.headers['Authorization'] = localStorage.getItem('token')
    } else {
      config.headers['Authorization'] = 'Basic cXVhbGl0eURhdGE6JDJhJDEwJGZDOU40WUxOWUlCLzgyM3ZQcjd2b2U3dWtndUtHSkRNYzdya210UmkxeHVCQ0lZZUcwMkJX'
    }
    return config
  }, error => {
    return Promise.reject(error)
  })

  // 响应拦截器
  axios.interceptors.response.use(response => {
    return response
  },
  error => {
    Message.error(error.response.data.message)
  })

  // 添加实例方法
  Vue.prototype.$http = axios
}

export default MyHttpServer
