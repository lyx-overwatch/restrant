<template>
  <div>
    <div>
      <i class="el-icon-arrow-left" @click="back"></i>
      <div class='main'>
        <img :src=this.foodUrl>
        <p>{{this.foodName}}</p>
        <p>{{this.foodPrices}}元</p>
         <el-button type="primary" @click="handleAdd" class="bnt">添加至购物车</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  name: 'foodDetail',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['list', 'foodUrl', 'foodPrices', 'foodName'])
  },
  methods: {
    ...mapMutations({
      addfood: 'add_food',
      addprice: 'add_price'
    }),
    back () {
      this.$router.push('/index')
    },
    handleAdd (param) {
      param = this.foodName
      this.addprice(this.foodPrices)
      this.addfood(param + ',' + this.foodPrices + '元')
      this.addnum(this.foodName)
      this.$message.success('添加成功')
      this.$router.push('/index')
    },
    addnum (name) { // 选中菜品时增加数目
      for (let i = 0; i < this.list.length; i++) {
        for (let j = 0; j < this.list[i].foods.length; j++) {
          if (this.list[i].foods[j].name === name) {
            this.list[i].foods[j].num += 1
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.main >>> .bnt {
  width: 8rem;
  margin-left:50%;
  transform: translateX(-4rem);
}
</style>
<style lang="scss" scoped>
@import "@/assets/styles/foodDetail.scss";
</style>
