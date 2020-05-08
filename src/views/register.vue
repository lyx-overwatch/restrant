<template>
  <div>
    <div>
      <i class="el-icon-arrow-left" @click="back"></i>
       <div class="input-box">
          <form>
        <el-input v-model="r_phone"
                  placeholder="手机号"
                  show-password
                  class='lay'></el-input>
          </form>

      </div>
      <div class="input-box">
        <el-input v-model="r_account"
                  placeholder="用户名"
                  clearable
                  class='lay'></el-input>
      </div>
      <div class="input-box">
        <form>
        <el-input v-model="r_password"
                  placeholder="密码"
                  show-password
                  class='lay'></el-input>
        </form>
      </div>
    </div>
     <div id="button">
      <el-button type="primary" round @click="r_register">注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      r_phone: '',
      r_account: '',
      r_password: ''
    }
  },
  methods: {
    back () {
      this.$router.push('/')
    },
    r_register () {
      const qs = require('qs')
      this.$service.register(qs.stringify({ // 请求参数以form data的形式发送，而不是request payload
        'username': this.r_account,
        'password': this.r_password,
        'phone': parseInt(this.r_phone)
      })).then((res) => {
        if (res.success) {
          this.$message({
            message: '注册成功',
            type: 'success'
          })
          this.$router.push('/')
        } else {
          this.$message({
            message: '注册失败，请填写完整信息',
            type: 'error'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/login.scss";
</style>
