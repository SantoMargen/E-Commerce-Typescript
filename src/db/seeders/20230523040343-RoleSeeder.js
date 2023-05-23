'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles',
      [
        {
          roleName: 'Superadmin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roleName: 'Admin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roleName: 'Buyer',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roleName: 'Seller',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});

  }
};
