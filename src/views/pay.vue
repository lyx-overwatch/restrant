<template>
  <div id='contain'>
    <div class="head">
      <div @click="back">
        <i class="el-icon-arrow-left icon">
        </i>
        <span>返回</span>
      </div>
    </div>
    <div class="main">
      <p>购物车</p>
      <ul class="foods"
          v-infinite-scroll
          style="overflow:auto">
        <li class="li-item"
            v-for="(fd,index) of this.food"
            :key="index">
          <span class="info">{{fd + '* 1'}}</span>
          <i class='el-icon-remove-outline'
             @click="handleDel(fd)"></i>
        </li>
      </ul>
      <p>共计:{{this.prices}}元</p>
    </div>
    <div class="footer">
      <el-button type="primary"
                 class="bnt"
                 @click="addOrder">提交订单</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'pay',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['food', 'prices', 'list', 'chooseNum'])
  },
  methods: {
    ...mapMutations({
      delfood: 'del_food',
      delprice: 'del_price'
    }),
    back () {
      this.$router.push('/index')
    },
    handleDel (food) { // 从购物车删除
      let name = food.split(',')[0]
      let price = parseInt(food.split(',')[1])
      this.delprice(price)
      this.delfood(name)
      this.delnum(name)
    },
    delnum (name) {
      for (let i = 0; i < this.list.length; i++) {
        for (let j = 0; j < this.list[i].foods.length; j++) {
          if (this.list[i].foods[j].name === name) {
            if (this.list[i].foods[j].num > 0) {
              this.list[i].foods[j].num -= 1
            }
          }
        }
      }
    },
    addOrder () { // 添加订单
      this.$service.addOrder({
        username: sessionStorage.getItem('account'),
        foods: this.food.toString(),
        prices: this.prices
      }).then((res) => {
        if (res.success) {
          this.$message.success('提交订单成功')
          this.$router.push('/index')
        } else {
          this.$message.error('提交订单失败')
        }
      })
    }
  }
}
</script>

<style scoped>
.bnt {
  float: right;
  padding: 10px;
  height: 40px;
}
.el-icon-remove-outline {
  color: rgba(56, 56, 78, 0.89);
  font-size: 1.2rem;
}
</style>
<style lang="scss" scoped>
@import "@/assets/styles/pay.scss";
</style>
