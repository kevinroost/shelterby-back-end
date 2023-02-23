'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Dogs', 'familyId', 'ownerId', { type: Sequelize.STRING })
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Families', 'ownerId', 'familyId', { type: Sequelize.STRING })

  }
};
