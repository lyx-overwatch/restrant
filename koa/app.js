const Koa = require('Koa')
const router = require('./routers/router.js')
const json = require('koa-json')

const app = new Koa()
app.use(require('koa-bodyparser')())
app.use(json())

app.on('error', function (err, ctx) {
  console.log('server error', err)
})

app.use(router.routes()) // 将路由规则挂载到Koa上。

app.listen(8484, () => {
  console.log('Koa is listening in 8484')
})

module.exports = app
