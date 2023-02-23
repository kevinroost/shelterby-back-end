'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    static associate(models) {
      Dog.belongsTo(models.Family, {
        foreignKey: 'familyId'
      })
    }
  }
  Dog.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    breed: DataTypes.STRING,
    about: DataTypes.STRING,
    familyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Families',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Dog',
  });
  return Dog;
};