// app.js
const express = require('express');
const app = express();
const db = require('./db');
const Book = require('./models/books');

// Middleware to parse JSON
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Automatically sync the database
db.sync()
  .then(() => {
    console.log('Database synced.');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
