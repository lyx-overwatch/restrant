const Sequelize = require('sequelize') // 引入sequelize

// 使用url连接的形式进行连接
const MyDataBase = new Sequelize('mysql://root:root@localhost/restrant', {
  define: {
    timestamps: false // 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
  }
})

module.exports = {
  MyDataBase
}
