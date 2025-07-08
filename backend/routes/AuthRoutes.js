// ========================= Import Controllers =========================
// Import the Signup, Login, and verifyUser functions from the AuthController
const { Signup, Login, verifyUser } = require("../controllers/AuthController");

// Create a new Express router instance
const router = require("express").Router();

// ========================= Authentication Routes =========================

// Route to verify if the user's token is valid (used for auto-login or protected routes)
router.post("/verifyUser", verifyUser);

// Route to handle user registration
router.post("/signup", Signup);

// Route to handle user login
router.post("/login", Login);

// ========================= Export Router =========================
// Export the router so it can be used in the main server file
module.exports = router;
