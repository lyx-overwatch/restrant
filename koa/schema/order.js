/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('order', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    foods: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    prices: {
      type: DataTypes.INTEGER(12),
      allowNull: true
    }
  }, {
    tableName: 'order'
  })
}
