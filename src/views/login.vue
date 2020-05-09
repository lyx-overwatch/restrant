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
        <form>
        <i class="el-icon-lock lay"></i>
        <el-input v-model="password"
                  placeholder="请输入密码"
                  show-password
                  class='lay'></el-input>
          </form>
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
      if (this.account === '' || this.password === '') {
        this.$message({
          message: '请输入完整的账号密码',
          type: 'info'
        })
        return
      }
      this.$service.login({
        account: this.account,
        password: this.password
      }).then((res) => {
        if ((res.success)) {
          this.$message({
            message: '登录成功',
            type: 'success'
          })
          sessionStorage.setItem('account', this.account) // 将用户名字保存到sessionStorage
          this.$router.push({ path: '/index' })
        } else {
          this.$message({
            message: '登录失败',
            type: 'error'
          })
        }
      })
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
