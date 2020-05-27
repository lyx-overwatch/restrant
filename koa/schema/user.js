/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('user', {
    username: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.CHAR(50),
      allowNull: true
    }
  }, {
    tableName: 'user'
  })
}
