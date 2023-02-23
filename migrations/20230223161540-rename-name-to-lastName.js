'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Families', 'name', 'lastName', { type: Sequelize.STRING })
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Families', 'lastName', 'name', { type: Sequelize.STRING })

  }
};
