import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import MyHttpServer from './plugins/http'
import echarts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/base.css'

Vue.use(ElementUI)
Vue.use(MyHttpServer)

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
