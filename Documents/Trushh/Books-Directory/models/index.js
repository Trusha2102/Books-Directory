const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');

// Load environment variables using dotenv (if needed)
require('dotenv').config();

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
});

const Book = require('./books');
const Issue = require('./issues');
const Users = require('./user');

// Define associations between models
Book.hasMany(Issue, { foreignKey: 'book_id' });
Issue.belongsTo(Book, { foreignKey: 'book_id' });

// Export models and sequelize instance
module.exports = {
  Book,
  Issue,
  Users,
  sequelize,
};
