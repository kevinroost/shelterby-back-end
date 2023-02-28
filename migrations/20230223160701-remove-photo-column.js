'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Profiles', 'photo')
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('Profiles', 'photo')

  }
};
