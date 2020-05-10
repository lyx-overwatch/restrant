const db = require('../db/index.js')
const managerModel = '../schema/manager.js' // 引入manager的表结构
const MyDataBase = db.MyDataBase // 引入数据库

const Manager = MyDataBase.import(managerModel) // 用sequelize的import方法引入表结构，实例化了User。

const checkAcconut = async (account, password) => {
  let res = await Manager.findAll({
    where: {
      account,
      password
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
