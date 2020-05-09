const db = require('../db/index.js')
const foodModel = '../schema/foods.js' // 引入food的表结构
const MyDataBase = db.MyDataBase // 引入数据库

const Foods = MyDataBase.import(foodModel) // 用sequelize的import方法引入表结构，实例化了User。

const getFood = async () => { // 所有食品信息
  let res = await Foods.findAll()
  return res
}
const searchFood = async (name) => { // 搜索特定食品信息
  let res = await Foods.findOne({
    where: {
      name
    }
  })
  return res
}

module.exports = {
  getFood,
  searchFood
}
