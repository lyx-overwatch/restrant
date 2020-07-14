<template>
  <div>
    <div class='input'>
      <p class="text"><strong>欢迎来到我的在线点餐系统</strong></p>
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
    <div class="button">
      <el-button type="primary" round @click="login" style="width:40%">用户登录</el-button>
      <el-button type="info" round @click="register" style="width:25%">注册</el-button>
    </div>
     <div class="button">
      <el-button type="primary" round @click="managerLogin" id='manage'>管理员登录</el-button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['userLogined', 'managerLogined']),
    login () { // 普通用户登录
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
          this.userLogined('u_t') // 登录状态保存到vuex
          this.$router.push({ path: '/index' })
        } else {
          this.$message({
            message: '登录失败,账号或密码有误',
            type: 'error'
          })
        }
      })
    },
    managerLogin () { // 管理员登录
      if (this.account === '' || this.password === '') {
        this.$message({
          message: '请输入完整的账号密码',
          type: 'info'
        })
        return
      }
      this.$service.managerLogin({
        account: this.account,
        password: this.password
      }).then((res) => {
        if ((res.success)) {
          this.$message({
            message: '登录成功',
            type: 'success'
          })
          this.managerLogined('m_t') // 登录状态保存到vuex
          this.$router.push({ path: '/m_index/user_m' })
        } else {
          this.$message({
            message: '登录失败,账号或密码有误',
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

<style scoped>
.button >>> #manage {
  width: 50%
}
</style>>

<style lang="scss" scoped>
@import "@/assets/styles/login.scss";
</style>
