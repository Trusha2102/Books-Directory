// models/index.js
import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } from '../dotenv'; // Ensure you have the correct import path for your dotenv config
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
});

// Load all models dynamically
const models = {};
const modelsDir = path.join(__dirname, './');

fs.readdirSync(modelsDir)
  .filter((file) => file !== 'index.js' && file.endsWith('.js'))
  .forEach((file) => {
    const modelDef = require(path.join(modelsDir, file));
    const model = modelDef(sequelize, DataTypes);
    models[model.name] = model;
  });

// Define associations between models
models.Book.hasMany(models.Issue, { foreignKey: 'book_id' });
models.Issue.belongsTo(models.Book, { foreignKey: 'book_id' });

// Sync all models and update the database
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    await sequelize.sync({ alter: true });

    console.log('All models have been synced.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

export default sequelize;
