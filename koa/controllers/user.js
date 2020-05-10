const user = require('../models/user.js')

const check = async (cxt, next) => { // 登录检查账号
  const account = cxt.request.body.account
  const password = cxt.request.body.password
  console.log(cxt.request.body)
  if (account == null || password == null) {
    let message = {
      success: false,
      message: ''
    }
    cxt.body = message
  } else {
    let record = await user.checkAcconut(account, password)
    if (record) {
      let success = {
        success: true,
        message: ''
      }
      cxt.body = success
    } else {
      let fail = {
        success: false,
        message: '数据库无记录'
      }
      cxt.body = fail
    }
  }
}

const getInfo = async (cxt, next) => { // 查询所有用户信息
  let res = await user.getInfo()
  let resp = {
    success: true,
    data: res
  }
  cxt.body = resp
}

const update = async (cxt, next) => { // 更新用户信息
  let arr = cxt.request.body.tableData
  let res = await user.update(arr)
  let resp = {
    success: true
  }
  if (res) {
    cxt.body = resp
  }
}

module.exports = {
  check,
  getInfo,
  update
}
