<template>
  <div>
    <div class='input'>
      <p class="text"><strong>欢迎来到我的自助点餐系统</strong></p>
      <div class="input-box">
        <i class="el-icon-user-solid lay"></i>
        <el-input v-model="account"
                  placeholder="请输入账号"
                  clearable
                  class='lay'></el-input>
      </div>
      <div class="input-box">
        <i class="el-icon-lock lay"></i>
        <el-input v-model="password"
                  placeholder="请输入密码"
                  show-password
                  class='lay'></el-input>

      </div>
    </div>
    <div id="button">
      <el-button type="primary" round @click="login">登录</el-button>
      <el-button type="info" round @click="register">注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$router.push({ path: '/index' })
    },
    register () {
      this.$router.push({ path: '/reg' })
    }
  }
}

</script>
<style lang="scss" scoped>
@import "@/assets/styles/login.scss";
</style>
