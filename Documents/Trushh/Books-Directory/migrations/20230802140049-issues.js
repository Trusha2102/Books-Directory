'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Issues', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      book_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Books', // Make sure to use the exact table name (plural) here
          key: 'book_id',
        },
      },
      student_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      branch: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      semester: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      enrollment_no: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date_of_issue: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      date_of_return: {
        type: Sequelize.DATEONLY,
      },
      penalty: {
        type: Sequelize.DECIMAL(10, 2),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Issues');
  },
};
