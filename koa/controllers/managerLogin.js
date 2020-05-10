const login = require('../models/managerLogin.js')

const check = async (cxt, next) => {
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
    let record = await login.checkAcconut(account, password)
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

module.exports = {
  check
}
