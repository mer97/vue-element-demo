<template>
    <h1 id="data"></h1>
</template>

<script>
export default {
  mounted () {
    this.getQualityManagePrincipal()
  },
  methods: {
    getQualityManagePrincipal () {
      this.$http({
        url: 'http://localhost:8082/qualityManage/api/v1/principal',
        method: 'GET',
        headers: {
          'Authorization': localStorage.getItem('token'), // 资源令牌
          'X-Requested-With': 'XMLHttpRequest' // ajax请求标识
        }
      }).then(function (response) {
        if (response && response.status === 200) {
          document.getElementById('data').innerHTML = JSON.stringify(response.data)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
