<template>
  <div class='main'>
    <el-table :data="tableData"
              max-height="27rem"
              style="width: 370;padding-top:1rem;height:27rem;overflow-y:auto;"
              :row-style="{padding:'0',height:'3rem !important'}">
      <el-table-column label="菜品类型"
                       width="100"
                       align='center'>
        <template slot-scope="scope">
          <el-input v-model="scope.row.type"></el-input>
        </template>
      </el-table-column>
      <el-table-column width="130"
                       label="名称"
                       align='center'>
        <template slot-scope="scope">
          <el-input v-model="scope.row.name"></el-input>
        </template>
      </el-table-column>
       <el-table-column width="70"
                       label="价格"
                       align='center'>
        <template slot-scope="scope">
          <el-input v-model="scope.row.price"></el-input>
        </template>
      </el-table-column>
      <el-table-column width="70"
                       label="操作"
                       align='center'>
        <template slot-scope="scoped">
          <el-button style="width:3rem;display:block;"
                     type="primary"
                     size="mini"
                     @click="updateRow(scoped)">更新</el-button>
        </template>
      </el-table-column>
    </el-table>
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
    this.getFoodInfo()
  },
  methods: {
    getFoodInfo () {
      this.$service.queryFood()
        .then((res) => {
          if (res.code === '00000000') {
            let array = res.data.list
            for (let arr of array) {
              for (let food of arr.foods) {
                this.tableData.push(food)
              }
            }
          }
        })
    },
    updateRow (scoped) {
      this.$service.updateFoodInfo({
        params: scoped.row
      }).then((res) => {
        if (res.success) {
          this.$message.success('更新成功')
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
.main >>> .el-table .cell {
  padding: 0
}
.main >>> .el-button{
  margin: 0
}
</style>

<style lang="scss" scoped>
</style>
