<template>
  <div id='contain'>

    <div class="head">
      <i class="el-icon-arrow-left icon"
         @click="back">
      </i>
      <div class="search">
        <el-input placeholder="请输入菜名"
                  v-model="input">
          <el-button slot="append"
                     icon="el-icon-search"
                     @click="foodSearch"></el-button>
        </el-input>
      </div>
    </div>

    <div class="search-res" v-show='this.filterFoodResult.length > 0'>
      <ul class="ul-main"
      v-infinite-scroll
      style="overflow:auto">
        <li class="li-item"
            v-for="(item,index) of this.filterFoodResult"
            :key='index'
            @click="searchFoodDetail(item)"
            >{{item}}
            </li>
      </ul>
    </div>

    <div class='img-contain'>
      <img src='https://goss.veer.com/creative/vcg/veer/800water/veer-151142960.jpg' />
    </div>

    <div class="main">
      <el-tabs type="border-card"
               @tab-click='searchOrder'
               :stretch=true>
        <el-tab-pane label="商品">
          <el-menu default-active="2"
                   class="el-menu-vertical-demo"
                   background-color="#545c64"
                   active-text-color="#ffd04b"
                   text-color="#fff">
            <el-menu-item index="1"
                          @click='checkScroll(1)'>
              <span slot="title">热销菜</span>
            </el-menu-item>
            <el-menu-item index="2"
                          @click='checkScroll(2)'>
              <span slot="title">套餐</span>
            </el-menu-item>
            <el-menu-item index="3"
                          @click='checkScroll(3)'>
              <span slot="title">木桶饭</span>
            </el-menu-item>
            <el-menu-item index="4"
                          @click='checkScroll(4)'>
              <span slot="title">手工面</span>
            </el-menu-item>
            <el-menu-item index="5"
                          @click='checkScroll(5)'>
              <span slot="title">特色鱼</span>
            </el-menu-item>
            <el-menu-item index="6"
                          @click='checkScroll(6)'>
              <span slot="title">烧腊</span>
            </el-menu-item>
          </el-menu>
          <div class='center-show'>
            <div class="wrapper"
                 ref="wrapper">
              <ul class="ul-content">
                <li v-for="(item,index) of list"
                    :key='index'>
                  <p class="li_title"
                     ref='pitem'>{{item.type}}</p>
                  <ul>
                    <li v-for="(food,i) of item.foods"
                        :key='i'>
                      <div class="food-contain">
                        <template>
                          <img :src="food.imgurl" @click="viewDetail(food)" />
                        </template>
                        <strong>
                          <i class='el-icon-remove-outline'
                             @click="handleDel(food)"></i>
                          {{food.name}}{{' '+food.price}}元
                          <div class="num">
                            <span v-if='food.num !== 0'>{{food.num}}</span>
                          </div>
                          <i class='el-icon-circle-plus-outline'
                             @click="handleAdd(food)"></i>
                        </strong>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="历史订单">
          <div class="home">
            <template v-if="this.history.length">
            <ul class="ul-main"
              v-infinite-scroll
              style="overflow:auto">
                <li class="li-item"
                    v-for="(item,index) of this.history"
                   :key='index'>
                  用户:{{item.username}}
                  总价:{{item.prices}}元
                  套餐:{{item.foods}}
                </li>
            </ul>
            </template>
            <p v-else style='width:100%;text-align:center;margin-top:1rem'>无历史订单</p>
          </div>
        </el-tab-pane>

      </el-tabs>

      <div class="footer">
        <span class="chooseNum">{{ chooseNum }}</span>
        <el-button type="primary"
                   class="bnt"
                   @click="handlePay()">选好了</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      list: [],
      input: '',
      searchFoodResult: [],
      filterFoodResult: [],
      history: []
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, { click: true, taps: true })
    })
    this.handleList()
  },
  watch: {
    input () {
      this.foodFliter()
    }
  },
  computed: {
    ...mapGetters(['food', 'prices', 'chooseNum'])
  },
  methods: {
    ...mapMutations({
      listinit: 'listinit',
      addfood: 'add_food',
      addprice: 'add_price',
      delfood: 'del_food',
      delprice: 'del_price',
      setFoodDetailUrl: 'setUrl',
      setFoodDetailName: 'setName',
      setFoodDetailPrices: 'setPrices'
    }),
    back () {
      this.$router.push('/')
    },
    foodSearch () { // 菜品搜索,保存所有菜品
      this.$service.queryFood().then((res) => {
        if (res.code === '00000000') {
          let arr = res.data.list
          // 将所有的菜品保存
          for (let items of arr) {
            for (let item of items.foods) {
              if (this.searchFoodResult.indexOf(item.name) < 0) {
                this.searchFoodResult.push(item.name)
              }
            }
          }
          this.foodFliter()
          if (this.filterFoodResult.length === 0) {
            this.$message.info('找不到与此相关的菜哟')
          }
        }
      })
    },
    foodFliter () {
      // 筛选符合条件的菜品
      let str = this.input
      if (str === '') {
        this.filterFoodResult = []
        return
      }
      let result = []
      for (let item of this.searchFoodResult) {
        if (item.includes(str)) {
          result.push(item)
        }
      }
      this.filterFoodResult = result
    },
    searchFoodDetail (item) {
      this.$service.searchFoodDetail({
        foodName: item
      }).then((res) => {
        if (res.success) {
          let data = res.data[0]
          this.setFoodDetailUrl(data.imgurl)
          this.setFoodDetailName(data.name)
          this.setFoodDetailPrices(data.price)
          this.$router.push('/foodDetail')
        }
      })
    },
    handleList () {
      this.$service.queryFood()
        .then((res) => {
          if (res.code === '00000000') {
            this.list = res.data.list
            this.listinit(res.data.list)
          }
        })
    },
    viewDetail (food) { // 查看食品详情
      this.setFoodDetailUrl(food.imgurl)
      this.setFoodDetailName(food.name)
      this.setFoodDetailPrices(food.price)
      this.$router.push('/foodDetail')
    },
    checkScroll (key) {
      let height = this.$refs['pitem'][key - 1].offsetTop
      let X = 0
      this.scroll.scrollTo(X, -height, 1500, 'easing')
    },
    handleAdd (param) { // 添加至购物车
      this.addprice(param.price)
      this.addfood(param.name + ',' + param.price + '元')
      this.addAction()
      this.addnum(param.name)
    },
    handleDel (param) { // 从购物车删除
      this.delprice(param.price)
      this.delfood(param.name)
      this.delnum(param.name)
    },
    addAction () { // 添加至购物车的动画
    },
    addnum (name) { // 选中菜品时增加数目
      for (let i = 0; i < this.list.length; i++) {
        for (let j = 0; j < this.list[i].foods.length; j++) {
          if (this.list[i].foods[j].name === name) {
            this.list[i].foods[j].num += 1
          }
        }
      }
      this.listinit(this.list)
    },
    delnum (name) { // 减少数目
      for (let i = 0; i < this.list.length; i++) {
        for (let j = 0; j < this.list[i].foods.length; j++) {
          if (this.list[i].foods[j].name === name) {
            if (this.list[i].foods[j].num > 0) {
              this.list[i].foods[j].num -= 1
            }
          }
        }
      }
      this.listinit(this.list)
    },
    handlePay () {
      if (this.chooseNum === 0) {
        this.$message.info('请先添加喜欢的菜到购物车吧')
      } else {
        this.$router.push({ path: '/pay' })
      }
    },
    searchOrder (el) {
      if (el.label === '历史订单') {
        this.$service.searchOrder({
          username: sessionStorage.getItem('account')
        }).then((res) => {
          if (res.success) {
            this.history = res.data
            for (let item of this.history) {
              let paidFoods = item.foods.split(',')
              let food = ''
              // 利用正则表达式过滤返回json字符串中含数字的字符
              let reg = /[0-9]+/
              for (let str of paidFoods) {
                if (!reg.test(str)) {
                  str += '*1'
                  food += str + ' '
                }
              }
              item.foods = food
            }
          }
        })
      }
    }
  }
}

</script>
<style scoped>
.el-input,
.el-input-group,
.el-input-group--append {
  width: 15rem;
}
.el-tabs .el-tabs--top .el-tabs--border-card {
  height: 100%;
}
.main >>> .el-tabs__content {
  padding: 0;
}
.el-tab-pane {
  height: 40rem;
}
.bnt {
  float: right;
}
.el-icon-arrow-left {
  display: inline-block;
  margin-top: 0rem;
  font-size: 1.5rem;
  color: black;
}
.el-icon-remove-outline {
  color: rgba(17, 13, 228, 0.89);
  font-size: 1.2rem;
}
.el-icon-circle-plus-outline {
  color: rgba(17, 13, 228, 0.89);
  font-size: 1.2rem;
}
</style>
<style lang='scss' scoped>
@import "@/assets/styles/index.scss";
</style>
