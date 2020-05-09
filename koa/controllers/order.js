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

const searchOrder = async (cxt, next) => {
  const username = cxt.request.body.username
  if (username == null) {
    let message = {
      success: false,
      message: ''
    }
    cxt.body = message
  } else {
    let res = await order.search(username)
    let success = {
      success: true,
      message: '成功搜索历史订单',
      data: res
    }
    cxt.body = success
  }
}

module.exports = {
  addOrder,
  searchOrder
}
