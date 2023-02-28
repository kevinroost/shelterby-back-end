'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Profile.belongsTo(models.User, { foreignKey: 'userId' })
      Profile.hasMany(models.Dog, {
        as: 'listedDogs',
        foreignKey: 'ownerId'
      })
      Profile.belongsToMany(models.Dog, {
        as: 'futureDogs',
        foreignKey: 'familyId',
        through: models.FamilyDog
      })
    }
  }

  Profile.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    children: {
      type: DataTypes.INTEGER,
      min: 0
    },
    backyard: {
      type: DataTypes.ENUM('none', 'open', 'fenced'),
    },
    about: {
      type: DataTypes.STRING
    },
    phoneNumber: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: 'Profile',
  })
  return Profile
}
