const db = require('../db/index.js')
const userModel = '../schema/user.js' // 引入user的表结构
const MyDataBase = db.MyDataBase // 引入数据库

const User = MyDataBase.import(userModel) // 用sequelize的import方法引入表结构，实例化了User。

const checkAcconut = async (account, password) => {
  let res = await User.findAll({
    where: {
      username: account,
      password: password
    }
  })
  if (res.length !== 0) {
    return true
  } else {
    return false
  }
}

module.exports = {
  checkAcconut
}
