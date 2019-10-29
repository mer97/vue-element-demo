import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login.vue'
import Home from '@/components/home/home.vue'
import QualityDataPrincipal from '@/components/quality_data/QualityDataPrincipal.vue'
import QualityManagePrincipal from '@/components/quality_manage/QualityManagePrincipal.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'quality_data_principal',
          name: 'QualityDataPrincipal',
          component: QualityDataPrincipal
        },
        {
          path: 'quality_manage_principal',
          name: 'QualityManagePrincipal',
          component: QualityManagePrincipal
        }
      ]
    }
  ]
})
