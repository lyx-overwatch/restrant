const Router = require('koa-router')
const router = new Router()

const register = require('../controllers/register.js')
const user = require('../controllers/user.js')
const managerLogin = require('../controllers/managerLogin.js')
const food = require('../controllers/food.js')
const searchFood = require('../controllers/searchFood.js')
const order = require('../controllers/order.js')

router
  .post('/user/register', register.add) // 注册
  .post('/user/login', user.check) // 用户登录
  .post('/manager/login', managerLogin.check) // 用户登录
  .post('/query/foods', food.getFood) // 获取所有食品信息
  .post('/query/search', searchFood.search) // 搜索特定食品信息
  .post('/addOrder', order.addOrder) // 提交订单
  .post('/searchOrder', order.searchOrder) // 搜索历史订单
  .post('/user/userInfo', user.getInfo) // 用户信息
  .post('/user/update', user.update) // 管理员更新用户信息
  .post('/food/update', food.update) // 管理员更新菜单信息

router.use('/api', router.routes()) // 每个路由前添加一个api

module.exports = router
