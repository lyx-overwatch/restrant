const db = require('../db/index.js')
const orderModel = '../schema/order.js' // 引入order的表结构
const MyDataBase = db.MyDataBase // 引入数据库

const Order = MyDataBase.import(orderModel) // 用sequelize的import方法引入表结构，实例化了Order。

const add = async (username, foods, prices) => {
  await Order.create({
    username,
    foods,
    prices
  })
}

const search = async (username) => {
  let res = await Order.findAll({
    where: {
      username
    }
  })
  return res
}

module.exports = {
  add,
  search
}
