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
      tableData: [],
      cloneArr: [],
      delArr: [], // 管理员删除的用户
      addArr: [] // 管理员添加的用户
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
            this.cloneArr = [].concat(this.tableData)
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
      console.log(this.tableData, this.cloneArr)
      for (let item of this.cloneArr) {
        if (this.tableData.indexOf(item) === -1) {
          this.delArr.push(item) // 保存被删除的用户
        }
      }
      for (let item of this.tableData) {
        if (this.cloneArr.indexOf(item) === -1) {
          this.addArr.push(item) // 保存新添加的用户
        }
      }
      this.$service.updateUserInfo({
        delData: this.delArr,
        addData: this.addArr
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
