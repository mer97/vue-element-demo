<template>
  <div class="login-warp">
    <el-form class="login-form" label-position="top" label-width="80px" :model="formData">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input type="text" v-model="formData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="formData.password"></el-input>
      </el-form-item>
      <el-button @click="handleLogin" class="login-btn" type="primary">登录</el-button>
    </el-form>
  </div>
</template>
<script>
import qs from 'qs'

export default {
  data () {
    return {
      formData: {
        username: 'lisi',
        password: '123456'
      }
    }
  },
  methods: {
    handleLogin () {
      const e = this
      this.$http({
        url: 'http://localhost:8080/api/v1/login',
        method: 'post',
        data: qs.stringify(this.formData),
        headers: {
          // 固定的（sso-server配置的）
          'Authorization': 'Basic cXVhbGl0eURhdGE6JDJhJDEwJGZDOU40WUxOWUlCLzgyM3ZQcjd2b2U3dWtndUtHSkRNYzdya210UmkxeHVCQ0lZZUcwMkJX'
        }
      }).then(function (response) {
        if (response && response.status === 200) {
          localStorage.setItem('access_token', 'bearer ' + response.data['access_token'])
          e.$router.push({name: 'home'})
          e.$message.success('登录成功')
        }
      })
    }
  }
}
</script>

<style scoped>
  .login-warp{
    height: 100%;
    background-color: #324152;
    /* 弹性盒布局 */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-warp .login-form{
    width: 400px;
    background-color: #fff;
    border-radius: 5px;
    padding: 30px;
  }
  .login-warp .login-btn{
    width: 100%;
  }
</style>
