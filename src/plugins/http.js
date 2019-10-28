// 插件模块
import axios from 'axios'
import { Message } from 'element-ui'

const MyHttpServer = {}

MyHttpServer.install = (Vue) => {
  // 统一拦截器
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
