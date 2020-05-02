const Koa = require('koa') // 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示
// const route = require('koa-route')// 配置路由
const koaBody = require('koa-bodyparser')// 解析post请求会用到koa-body
let app = new Koa()

app.use(koaBody())

// 连接数据库
let connection = require('./db/index')
connection.connect()

app.listen(3000)
