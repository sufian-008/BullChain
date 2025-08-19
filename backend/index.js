// ========================= Load Environment Variables =========================
// Load environment variables from .env file (e.g., MONGO_URL, PORT)
require('dotenv').config();

// ========================= Required Libraries =========================
const express = require("express");
const mongoose = require("mongoose"); // MongoDB ODM
const cookieParser = require("cookie-parser"); // To parse cookies
const cors = require("cors"); // To handle Cross-Origin requests

// ========================= Import Mongoose Models =========================
const { HoldingsModel } = require('./model/HoldingModel');
const { PositionModel } = require('./model/PositionModel');
const { OrderModel } = require('./model/OrderModel');

// ========================= Configuration =========================
// Define server port from environment or fallback to 3002
const PORT = process.env.PORT || 3002;

// MongoDB URI from environment variables
const uri = process.env.MONGO_URL;

// ========================= Initialize Express App =========================
const app = express();

// ========================= Middleware Setup =========================
// To handle URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// To handle JSON data
app.use(express.json());

// Parse cookies from the incoming requests
app.use(cookieParser());

// Configure CORS to allow requests from frontend domains
app.use(cors({
    origin: ["https://bull-chain-tau.vercel.app", "https://bullchain-1.onrender.com"],
    credentials: true, // Allow cookies to be sent with requests
}));

// ========================= Routes =========================
// Import Auth Routes (Signup, Login, Verification)
const authRouteSignUp = require("./routes/AuthRoutes");
app.use("/api", authRouteSignUp);

const authROuteLogin = require("./routes/AuthRoutes");
app.use("/api", authROuteLogin);

const verifyUser = require("./routes/AuthRoutes");
app.use("/api", verifyUser);

// ========================= API Endpoints =========================

// -------- Fetch all holdings from the database --------
app.get('/allHoldings', async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings); // Respond with the holdings data as JSON
});

// -------- Fetch all positions from the database --------
app.get('/allPositions', async (req, res) => {
    let allPositions = await PositionModel.find({});
    res.json(allPositions); // Respond with the positions data as JSON
});

// -------- Add new order to the database --------
app.post('/newOrder', async (req, res) => {
    let newOrder = new OrderModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        model: req.body.model,
    });

    await newOrder.save(); // Save the new order document
    res.status(201).json({ message: "Order created successfully" });
});

// ========================= Start Server & Connect DB =========================
app.listen(PORT, () => {
    console.log("App started");

    // Connect to MongoDB using Mongoose
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("DB Connected"))
        .catch((err) => console.error("MongoDB connection error:", err));
});
