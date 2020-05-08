const register = require('../models/register.js')

const add = async (cxt, next) => {
  cxt.body = cxt.request.body
  /* req.query与req.params的区别
  req.params包含路由参数(在URL的路径部分)，而req.query包含URL的查询参数(在URL的？后的参数)
  前端使用post请求时，用cxt.request.body来获取参数主体
  */
  const username = cxt.request.body.username
  const password = cxt.request.body.password
  const phone = cxt.request.body.phone
  console.log(cxt.request.body)
  if (username == null || password == null || phone == null) {
    let message = {
      success: false,
      message: '参数不完整'
    }
    cxt.body = message
  } else {
    await register.addUser(username, password, phone)
    let success = {
      success: true,
      message: ''
    }
    cxt.body = success
  }
}

module.exports = {
  add
}
