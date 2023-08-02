// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const { getAllBooks, createBook, updateBook, deleteBook } = require('../controllers/books.controller');

// GET all books
router.get('/', getAllBooks);

// POST a new book
router.post('/add', createBook);

router.put('/edit/:id', updateBook);

router.delete('/remove/:id', deleteBook);


module.exports = router;
