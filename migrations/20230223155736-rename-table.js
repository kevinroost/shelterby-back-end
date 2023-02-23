'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameTable('Profiles', 'Families', { type: Sequelize.STRING })
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.renameTable('Families', 'Profiles', { type: Sequelize.STRING })

  }
};
