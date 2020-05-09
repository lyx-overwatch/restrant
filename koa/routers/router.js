const Router = require('koa-router')
const router = new Router()

const auth = require('../controllers/user.js')
const register = require('../controllers/register.js')
const login = require('../controllers/login.js')
const food = require('../controllers/food.js')
const searchFood = require('../controllers/searchFood.js')
const order = require('../controllers/order.js')

router.get('/user/login/:id', auth.login)
  .post('/user/register', register.add) // 注册
  .post('/user/login', login.check) // 登录
  .post('/query/foods', food.getFood) // 获取所有食品信息
  .post('/query/search', searchFood.search) // 搜索特定食品信息
  .post('/addOrder', order.addOrder) // 提交订单

router.use('/api', router.routes()) // 每个路由前添加一个api
module.exports = router
