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
  managerLogin (params) { // 管理员登录
    return Server.post('/api/manager/login', params)
  },
  queryFood () { // 获取所有菜品信息
    return Server.post('/api/query/foods')
  },
  searchFoodDetail (params) { // 搜索菜品信息
    return Server.post('/api/query/search', params)
  },
  addOrder (params) { // 提交订单
    return Server.post('/api/addOrder', params)
  },
  searchOrder (params) { // 历史订单
    return Server.post('/api/searchOrder', params)
  },
  getUserInfo () { // 获取所有用户信息
    return Server.post('/api/user/userInfo')
  },
  updateUserInfo (params) { // 更新用户信息
    return Server.post('/api/user/update', params)
  },
  updateFoodInfo (params) { // 更新菜单信息
    return Server.post('/api/food/update', params)
  }
}
