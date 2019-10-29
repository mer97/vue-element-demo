<template>
    <h1 ref="principal"></h1>
</template>

<script>
export default {
  mounted () {
    this.getQualityManagePrincipal()
  },
  methods: {
    async getQualityManagePrincipal () {
      const res = await this.$http.get('http://localhost:8082/qualityManage/api/v1/principal');
      if (res && res.status === 200) {
        this.$refs.principal.innerHTML = JSON.stringify(res.data)
      }
    }
  }
}
</script>

<style scoped>

</style>
