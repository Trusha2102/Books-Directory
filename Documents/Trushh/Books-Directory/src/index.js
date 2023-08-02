const express = require('express');
const app = express();
const db = require('./db');
const bookRoutes = require('./routes/books.routes');
// const issueRoutes = require('./routes/issues.routes')
// const userRoutes = require('./routes/user.routes')

// Middleware to parse JSON
app.use(express.json());


// Routes
app.use('/books', bookRoutes);
// app.use('/issue', issueRoutes);
// app.use('/user', userRoutes);

const PORT = process.env.PORT || 3000;

// Automatically sync the database
db.sync({ alter: true })
  .then(() => {
    console.log('Database synced.');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
