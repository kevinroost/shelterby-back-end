'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Profiles', 'children', { type: Sequelize.INTEGER })
    await queryInterface.addColumn('Profiles', 'backyard', { type: Sequelize.ENUM('None', 'Open', 'Fenced') })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Profiles', 'children')
    await queryInterface.removeColumn('Profiles', 'backyard', { type: Sequelize.ENUM('None', 'Open', 'Fenced') })
  }
};
