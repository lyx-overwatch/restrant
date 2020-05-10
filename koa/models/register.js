const db = require('../db/index.js')
const userModel = '../schema/user.js' // 引入user的表结构
const MyDataBase = db.MyDataBase // 引入数据库

const User = MyDataBase.import(userModel) // 用sequelize的import方法引入表结构，实例化了User。

const addUser = async (username, password) => {
  await User.create({
    username: username,
    password: password
  })
}

module.exports = {
  addUser
}
