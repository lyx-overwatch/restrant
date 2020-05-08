/* 数据库中的user表模型结构 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    password: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'user'
  })
}
