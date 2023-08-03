const { Users } = require("../../models/");

// Controller function for getting all users
const getAllUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller function for creating a new user
const createUser = async (req, res) => {
  try {
    const { name, role, email, password } = req.body;
    const newUser = await Users.create({ name, role, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params; // Extract the user ID from the URL parameter
    const { name, role, email, password } = req.body;

    // Find the user by its ID
    const user = await Users.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update the user's properties
    user.name = name;
    user.role = role;
    user.email = email;
    user.password = password;

    // Save the updated user to the database
    await user.save();

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params; // Extract the user ID from the URL parameter

    // Find the user by its ID
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Delete the user from the database
    await user.destroy();

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const loginWithOTP = async (req, res) => {
  try {
    const { email } = req.body;

    // Generate a random OTP (for demonstration purposes, you can use a library to generate a secure OTP)
    const otp = Math.floor(1000 + Math.random() * 9000);

    // Send the OTP to the user's email (you can use a third-party library or service for this)
    console.log(`OTP for ${email}: ${otp}`);

    res.json({ message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Export the controller functions
module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  loginWithOTP,
};
