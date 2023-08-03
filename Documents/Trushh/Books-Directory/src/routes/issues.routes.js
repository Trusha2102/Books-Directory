const express = require("express");
const router = express.Router();
const {
  getAllIssues,
  createIssue,
  updateIssue,
  deleteIssue,
} = require("../controllers/issues.controller");

// Route to get all issues
router.get("/", getAllIssues);

// Route to create a new issue
router.post("/add", createIssue);

// Route to update an issue by ID
router.put("/update/:id", updateIssue);

// Route to delete an issue by ID
router.delete("/delete/:id", deleteIssue);

module.exports = router;
