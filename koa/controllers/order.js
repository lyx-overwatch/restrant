const order = require('../models/order.js')

const addOrder = async (cxt, next) => {
  const username = cxt.request.body.username
  const foods = cxt.request.body.foods
  const prices = cxt.request.body.prices
  if (username == null || foods == null || prices == null) {
    let message = {
      success: false,
      message: '参数不完整'
    }
    cxt.body = message
  } else {
    await order.add(username, foods, prices)
    let success = {
      success: true,
      message: ''
    }
    cxt.body = success
  }
}

module.exports = {
  addOrder
}
