'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Profiles_backyard";')
    await queryInterface.changeColumn('Profiles', 'backyard', {type: Sequelize.ENUM('open', 'fenced', 'none')})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Profiles', 'backyard', {type: Sequelize.STRING})
  }
};
