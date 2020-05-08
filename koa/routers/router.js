const Router = require('koa-router')
const router = new Router()

const auth = require('../controllers/user.js')
const register = require('../controllers/register.js')

router.get('/user/login/:id', auth.login)
  .post('/user/register', register.add)

router.use('/api', router.routes()) // 每个路由前添加一个api
module.exports = router
