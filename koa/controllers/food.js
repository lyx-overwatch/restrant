const allFoods = require('../models/food.js')

const getFood = async (cxt, next) => {
  let foods = await allFoods.getFood()
  let res = {}
  res.code = '00000000'
  res.data = {}
  res.data.list = []

  let foodType = []
  for (let food of foods) {
    if (foodType.indexOf(food.type) < 0) {
      foodType.push(food.type) // 保存菜品的各种套餐
    }
  }

  // 处理数据库中的数据，返回合适的json格式
  for (let type of foodType) {
    let listItem = {
      type,
      foods: []
    }
    for (let food of foods) {
      if (food.type === type) {
        let obj = {
          imgurl: food.imgurl,
          name: food.name,
          type: food.type,
          num: food.num,
          price: food.price,
          id: food.id
        }
        listItem.foods.push(obj)
      }
    }
    res.data.list.push(listItem)
  }
  cxt.body = res
}

const update = async (cxt, next) => { // 更新当前菜品信息
  let params = cxt.request.body.params
  let res = await allFoods.update(params)
  let resp = {
    success: true
  }
  if (res) {
    cxt.body = resp
  }
}

module.exports = {
  getFood,
  update
}
