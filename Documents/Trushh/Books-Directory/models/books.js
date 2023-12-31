const { DataTypes } = require('sequelize');
const sequelize = require('../src/db');

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  book_id: {
    type: DataTypes.UUID,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4, 
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  available: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = Book;
