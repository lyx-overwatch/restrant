// controllers/user.js

const user = require('../models/user.js')

const login = async (cxt, next) => {
  const id = cxt.params.id // 获取url里传过来的参数里的id
  const result = await user.getUserById(id) //
  cxt.body = result // 将请求的结果放到response的body里返回
}

module.exports = {
  login
}
