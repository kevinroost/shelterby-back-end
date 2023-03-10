'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    static associate(models) {
      Dog.belongsTo(models.Profile, {
        as: 'listedDogs',
        foreignKey: 'ownerId'
      })
      Dog.belongsToMany(models.Profile, {
        as: 'futureFamilies',
        foreignKey: 'dogId',
        through: models.FamilyDog
      })
    }
  }
  Dog.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    breed: DataTypes.STRING,
    about: DataTypes.STRING,
    photo: DataTypes.STRING,
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Dog',
  });
  return Dog;
};