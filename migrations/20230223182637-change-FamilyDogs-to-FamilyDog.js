'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameTable('FamilyDogs', 'FamilyDog')
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.renameTable('FamilyDog', 'FamilyDogs')    
  }
};
