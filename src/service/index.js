import Server from './server.js'

export default {
  queryList () {
    return Server.get('../../static/food.json')
  }
}
