const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  loginWithOTP,
} = require("../controllers/user.controller");

// Route to get all users
router.get("/", getAllUsers);

// Route to create a new user
router.post("/add", createUser);

// Route to update a user by ID
router.put("/update/:id", updateUser);

// Route to delete a user by ID
router.delete("/delete/:id", deleteUser);

// Route for login with OTP
router.post("/login-otp", loginWithOTP);

module.exports = router;
