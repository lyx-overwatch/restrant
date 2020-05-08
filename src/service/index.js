import Server from './server.js'

export default {
  queryList () {
    return Server.get('../../static/food.json')
  },
  register (params) { // 用户注册
    return Server.post('/api/user/register', params)
  }
}
