// Import necessary modules and utilities
const User = require("../model/userModel"); // Mongoose model for user
const { createSecretToken } = require("../util/SecretToken"); // Function to create JWT token
const bcrypt = require("bcryptjs"); // For hashing and comparing passwords
const jwt = require("jsonwebtoken"); // JWT library

// ===================== Signup Controller =====================
module.exports.Signup = async (req, res) => {
  try {
    console.log("Body received from form or JSON:", req.body);
    const { email, password, username, createdAt } = req.body;

    // Check if a user with the given email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Create a new user
    const user = await User.create({ email, password, username, createdAt });
    console.log(user);

    // Generate a JWT token using the user ID
    const token = createSecretToken(user._id);

    // Set the token in cookies
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false, // Usually should be true for better security
    });

    // Send success response
    return res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// ===================== Login Controller =====================
module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "User not found" });

    // Compare provided password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch, password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Incorrect password" });

    // Generate JWT token for valid user
    const token = createSecretToken(user._id);

    // Set token in HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      withCredentials: true,
    });

    // Send login success response
    return res.status(200).json({
      message: "Login successful",
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

// ===================== Verify User Controller =====================
module.exports.verifyUser = (req, res) => {
  // Retrieve token from cookies
  const token = req.cookies.token;
  if (!token) return res.json({ status: false });

  // Verify the token using secret key
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) return res.json({ status: false });

    // Find the user by ID extracted from the token
    const user = await User.findById(data.id);
    if (!user) return res.json({ status: false });

    // If all checks pass, return user data
    return res.json({ status: true, user: user.username });
  });
};
