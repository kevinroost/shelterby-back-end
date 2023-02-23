'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Family extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Family.belongsTo(models.User, { foreignKey: 'userId' })
      Family.hasMany(models.Dog, {
        foreignKey: 'familyId',
        as: 'dogs'
      })
    }
  }

  Family.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Family',
  })
  return Family
}
