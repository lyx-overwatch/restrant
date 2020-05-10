<template>
  <div class='main'>
    <div @click="addUser">
      <i class="el-icon-circle-plus-outline"></i>
      <span style="fontSize:.8rem">添加新用户</span>
    </div>
    <el-table :data="tableData"
              max-height="18rem"
              style="width: 350;margin-left:.5rem;margin-top:1rem;height:18rem;overflow-y:auto;"
              :row-style="{padding:'0',height:'2rem !important'}">
      <el-table-column label="用户"
                       width="140"
                       align='center'>
        <template slot-scope="scope">
          <el-input v-model="scope.row.username"></el-input>
        </template>
      </el-table-column>
      <el-table-column width="140"
                       label="密码"
                       align='center'>
        <template slot-scope="scope">
          <el-input v-model="scope.row.password"></el-input>
        </template>
      </el-table-column>
      <el-table-column width="90"
                       label="操作"
                       align='center'>
        <template slot-scope="scoped">
          <el-button style="width:3rem"
                     type="primary"
                     size="mini"
                     @click="deleteRow(scoped.$index,tableData)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary"
               style="margin-left:.5rem;margin-top:1rem;width:25%"
               @click="submit()">
      提交</el-button>
  </div>
</template>

<script>
export default {
  name: 'user_m',
  data () {
    return {
      tableData: []
    }
  },
  mounted () {
    this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      this.$service.getUserInfo()
        .then((res) => {
          if (res.success) {
            this.tableData = [].concat(res.data)
          }
        })
    },
    addUser () {
      this.tableData.push({
        username: '',
        password: ''
      })
    },
    deleteRow (index, arr) {
      arr.splice(index, 1)
    },
    submit () {
      this.$service.updateUserInfo({
        tableData: this.tableData
      }).then((res) => {
        if (res.success) {
          this.$message.success('提交成功')
        }
      })
    }
  }
}
</script>

<style scoped>
.main >>> .el-input__inner {
  padding: 0;
}
</style>

<style lang="scss" scoped>
</style>
