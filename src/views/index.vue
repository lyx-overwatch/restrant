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
                     icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>

    <div class='img-contain'>
      <img src='https://goss.veer.com/creative/vcg/veer/800water/veer-151142960.jpg' />
    </div>

    <div class="main">
      <el-tabs type="border-card"
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
                          <img :src="food.imgurl" />
                        </template>
                        <strong>{{food.name}}{{' '+food.price}}元<i class='el-icon-circle-plus-outline'></i></strong>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </el-tab-pane>

        <el-tab-pane label="商家">
          <div class="home">
              <img src='http://img1.qunarzz.com/travel/d2/1701/91/bd6a291cc3f38bb5.jpg_r_720x480x95_3815576f.jpg' />
              <img src='http://hbimg.b0.upaiyun.com/2d380a8476dab9bc529883159c7061073c0d1d091d8c3-ePu5Zc_fw658' />
              <img src='http://b-ssl.duitang.com/uploads/blog/201510/20/20151020193932_uBAmZ.jpeg' />
              <img src='http://img1.juimg.com/161119/330761-16111914125165.jpg' />
          </div>
        </el-tab-pane>

      </el-tabs>

      <div class="footer">
        <el-button type="primary"
                   class="bnt">选好了</el-button>
      </div>
    </div>

  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      list: [],
      input: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {})
    })
    this.handleList()
  },
  methods: {
    back () {
      this.$router.push('/')
    },
    handleList () {
      this.service.queryList()
        .then((res) => {
          if (res.code === '00000000') {
            this.list = res.data.list
          }
        })
    },
    checkScroll (key) {
      let height = this.$refs['pitem'][key - 1].offsetTop
      let X = 0
      this.scroll.scrollTo(X, -height, 1500, 'easing')
    }
  }
}

</script>
<style>
.el-input,
.el-input-group,
.el-input-group--append {
  width: 15rem;
}
.el-tabs .el-tabs--top .el-tabs--border-card {
  height: 100%;
}
.el-tabs--border-card > .el-tabs__content {
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
.el-icon-circle-plus-outline {
  color: rgba(17, 13, 228, 0.89);
  font-size: 1.2rem;
}
</style>
<style lang='scss' scoped>
@import "@/assets/styles/index.scss";
</style>
