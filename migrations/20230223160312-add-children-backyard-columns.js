'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Families', 'children', { type: Sequelize.STRING })
    await queryInterface.addColumn('Families', 'backyard', { type: Sequelize.ENUM('None', 'Open', 'Fenced') })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Families', 'children')
    await queryInterface.removeColumn('Families', 'backyard', { type: Sequelize.ENUM('None', 'Open', 'Fenced') })
  }
};
