<template>
  <div>
    <div>
      <i class="el-icon-arrow-left" @click="back"></i>
       <div class="input-box">
        <el-input v-model="r_phone"
                  placeholder="手机号"
                  show-password
                  class='lay'></el-input>

      </div>
      <div class="input-box">
        <el-input v-model="r_account"
                  placeholder="用户名"
                  clearable
                  class='lay'></el-input>
      </div>
      <div class="input-box">
        <el-input v-model="r_password"
                  placeholder="密码"
                  show-password
                  class='lay'></el-input>

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
      this.$message({
        message: '注册成功',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/login.scss";
</style>
