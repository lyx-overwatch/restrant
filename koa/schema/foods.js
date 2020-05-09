/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('foods', {
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    imgurl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    num: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    price: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'foods'
  })
}
