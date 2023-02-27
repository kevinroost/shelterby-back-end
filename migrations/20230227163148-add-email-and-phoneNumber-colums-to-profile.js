'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Profiles', 'phoneNumber', { type: Sequelize.STRING })
    await queryInterface.addColumn('Profiles', 'email', { type: Sequelize.STRING })
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Profiles', 'phoneNumber')
    await queryInterface.removeColumn('Profiles', 'email')

  }
};
