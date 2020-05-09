import Server from './server.js'

export default {
  queryList () {
    return Server.get('../../static/food.json')
  },
  register (params) { // 用户注册
    return Server.post('/api/user/register', params)
  },
  login (params) { // 用户登录
    return Server.post('/api/user/login', params)
  },
  queryFood () { // 获取所有菜品信息
    return Server.post('/api/query/foods')
  },
  searchFoodDetail (params) { // 搜索菜品信息
    return Server.post('/api/query/search', params)
  },
  addOrder (params) { // 提交订单
    return Server.post('/api/addOrder', params)
  }
}
