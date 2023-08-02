const { DataTypes } = require('sequelize');
const sequelize = require('../src/db');
const Book = require('./books');

const Issue = sequelize.define('Issue', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  book_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Book,
      key: 'book_id'
    },
  },
  student_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  branch: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  semester: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  enrollment_no: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_of_issue: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  date_of_return: {
    type: DataTypes.DATEONLY,
  },
  penalty: {
    type: DataTypes.DECIMAL(10, 2),
  }
});

module.exports = Issue;
