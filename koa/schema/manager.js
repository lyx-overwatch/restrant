/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('manager', {
    account: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'manager'
  });
};
