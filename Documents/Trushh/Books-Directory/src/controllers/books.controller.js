const { Book } = require("../../models/");

// Controller functions for handling book requests
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    console.error("Error fetching all books:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, genre, no } = req.body;

    // Create a new book record using the Book model
    const newBook = await Book.create({
      title: title,
      author: author,
      genre: genre,
      available: no,
    });

    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params; // Assuming you are passing the book ID as a URL parameter
    const { title, author, genre, no } = req.body;

    // Find the book record by ID
    const bookToUpdate = await Book.findByPk(id);

    // If the book record is not found, respond with 404 Not Found
    if (!bookToUpdate) {
      return res.status(404).json({ error: "Book not found" });
    }

    // Update the book record with the new data
    bookToUpdate.title = title;
    bookToUpdate.author = author;
    bookToUpdate.genre = genre;
    bookToUpdate.available = no;

    // Save the updated book record to the database
    await bookToUpdate.save();

    // Respond with the updated book record
    res.json(bookToUpdate);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params; // Assuming you are passing the book ID as a URL parameter

    // Find the book record by ID
    const bookToDelete = await Book.findByPk(id);

    // If the book record is not found, respond with 404 Not Found
    if (!bookToDelete) {
      return res.status(404).json({ error: "Book not found" });
    }

    // Delete the book record from the database
    await bookToDelete.destroy();

    // Respond with a success message
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
};
