const searchFoods = require('../models/food.js')

const search = async (cxt, next) => {
  let foodName = cxt.request.body.foodName
  let food = await searchFoods.searchFood(foodName)
  let res = {}
  res.code = '00000000'
  res.success = true
  res.data = [{
    imgurl: food.imgurl,
    name: food.name,
    price: food.price
  }]
  cxt.body = res
}

module.exports = {
  search
}
