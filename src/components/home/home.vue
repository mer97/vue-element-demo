<template>
<!--  <div>-->
<!--    <el-button @click="updateReferenceValue" type="primary">修改kpi基准值</el-button>-->
<!--  </div>-->
  <el-container class="container">
    <el-header class="header">
      <el-menu
        default-active="1"
        class="el-menu-demo header-menu"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item><a @click="logout">退出</a></el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <el-menu
          class="el-menu-vertical-demo aside-menu"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>质量数据</span>
            </template>
            <el-menu-item index="quality_data_principal">当前登录用户信息</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>质量数据</span>
            </template>
            <el-menu-item index="quality_manage_principal">当前登录用户信息</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  // 校验是否登录（通过判断是否存在token）
  beforeCreate () {
    // 获取token
    const token = localStorage.getItem('token')
    if (!token) {
      this.$router.push({ name: 'login' })
    }
  },
  methods: {
    // updateReferenceValue () {
    //   const e = this
    //   this.$http({
    //     url: 'http://localhost:8082/qualityManage/api/v1/kpi_setting/reference_value',
    //     method: 'PATCH',
    //     headers: {
    //       'Authorization': localStorage.getItem('token'), // 资源令牌
    //       'X-Requested-With': 'XMLHttpRequest' // ajax请求标识
    //     },
    //     data: {
    //       'id': 1,
    //       'reference_value': 100
    //     }
    //   }).then(function (response) {
    //     if (response && response.status === 200) {
    //       e.$message.success('修改成功')
    //     }
    //   })
    // },
    logout () {
      localStorage.removeItem('token')
      this.$router.push({name: 'login'})
      this.$message.success('退出成功')
    }
  }
}
</script>

<style scoped>
  .container{
    height: 100%;
  }
  .header{
    padding: 0px;
  }
  a {
    text-decoration: none;
  }
  .header-menu {
    width: 100%;
  }
  .aside-menu {
    height: 100%;
  }
</style>
