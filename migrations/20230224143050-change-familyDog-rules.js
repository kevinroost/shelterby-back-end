'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('FamilyDog', 'dogId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Dogs',
        key: 'id'
      }
    })
    await queryInterface.changeColumn('FamilyDog', 'familyId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Profiles',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('FamilyDog', 'familyId', {type: Sequelize.INTEGER})
    await queryInterface.changeColumn('FamilyDog', 'dogId', {type: Sequelize.INTEGER})
  }
};
