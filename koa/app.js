const Koa = require('Koa')
const router = require('./routers/router.js')
const json = require('koa-json')

const app = new Koa()
app.use(require('koa-bodyparser')())
app.use(json())

app.on('error', function (err, ctx) {
  console.log('server error', err)
})

// router.use('/auth', auth.routes()) // 挂载到koa-router上，同时会让所有的auth的请求路径前面加上'/auth'的请求路径。

app.use(router.routes()) // 将路由规则挂载到Koa上。

app.listen(8484, () => {
  console.log('Koa is listening in 8484')
})

module.exports = app
