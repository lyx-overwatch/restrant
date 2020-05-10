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

const update = async (params) => {
  let res = await Foods.findOne({
    where: {
      id: params.id
    }
  })
  res.type = params.type
  res.name = params.name
  res.price = params.price
  console.log(res)
  await res.save()
  return true
}
module.exports = {
  getFood,
  searchFood,
  update
}
