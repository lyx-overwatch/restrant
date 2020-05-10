<template>
  <div>
    <i class="el-icon-arrow-left"
       @click="back"></i>
    <span style="fontSize:.8rem">管理员选项</span>
    <div class='main'>
      <el-menu
               class="el-menu-demo"
               mode="horizontal"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b"
               :router=true>
        <el-menu-item index="user_m">用户管理</el-menu-item>
        <el-menu-item index="food_m">菜单管理</el-menu-item>
      </el-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm_index',
  data () {
    return {

    }
  },
  methods: {
    back () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.main >>> .el-menu-item {
  width: 50%;
  text-align:center
}
</style>

<style lang="scss" scoped>
@import "@/assets/styles/m_index.scss";
</style>
