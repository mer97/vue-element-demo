<template>
  <div>
    <h1>首页</h1>
    <el-button @click="getQualityDataPrincipal" type="primary">获取质量数据模块登录用户</el-button>
    <el-button @click="getQualityManagePrincipal" type="primary">获取质量管理模块登录用户</el-button>
    <el-button @click="updateReferenceValue" type="primary">修改kpi基准值</el-button>
    <el-button @click="logout" type="primary">退出登录</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    getQualityDataPrincipal () {
      const e = this
      this.$http({
        url: 'http://localhost:8081/qualityData/api/v1/principal',
        method: 'GET',
        headers: {
          'Authorization': localStorage.getItem('access_token'), // 资源令牌
          'X-Requested-With': 'XMLHttpRequest' // ajax请求标识
        }
      }).then(function (response) {
        if (response && response.status === 200) {
          e.$alert(JSON.stringify(response.data), '登录用户信息', {
            confirmButtonText: '确定',
            callback: action => {
            }
          })
        }
      })
    },
    getQualityManagePrincipal () {
      const e = this
      this.$http({
        url: 'http://localhost:8082/qualityManage/api/v1/principal',
        method: 'GET',
        headers: {
          'Authorization': localStorage.getItem('access_token'), // 资源令牌
          'X-Requested-With': 'XMLHttpRequest' // ajax请求标识
        }
      }).then(function (response) {
        if (response && response.status === 200) {
          e.$alert(JSON.stringify(response.data), '登录用户信息', {
            confirmButtonText: '确定',
            callback: action => {
            }
          })
        }
      })
    },
    updateReferenceValue () {
      const e = this
      this.$http({
        url: 'http://localhost:8082/qualityManage/api/v1/kpi_setting/reference_value',
        method: 'PATCH',
        headers: {
          'Authorization': localStorage.getItem('access_token'), // 资源令牌
          'X-Requested-With': 'XMLHttpRequest' // ajax请求标识
        },
        data: {
          'id': 1,
          'reference_value': 100
        }
      }).then(function (response) {
        if (response && response.status === 200) {
          e.$message.success('修改成功')
        }
      })
    },
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push({name: 'login'})
      this.$message.success('退出成功')
    }
  }
}
</script>

<style scoped>

</style>
