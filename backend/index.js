// Load environment variables from .env file
require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");


const cors = require("cors");

// Importing Mongoose models for Holdings and Positions
const { HoldingsModel } = require('./model/HoldingModel');
const { PositionModel } = require('./model/PositionModel');
const { OrderModel } = require('./model/OrderModel');


// Set up server port from environment or default to 3002
const PORT = process.env.PORT || 3002;

// Get MongoDB connection string from .env
const uri = process.env.MONGO_URL;




// Initialize Express application
const app = express();





app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  }));

const authRouteSignUp = require("./routes/AuthRoutes");
app.use("/api", authRouteSignUp);

const authROuteLogin = require("./routes/LoginAuth");
app.use("/api",authROuteLogin);

const verifyUser = require("./routes/AuthRoutes");
app.use("/api", verifyUser);





// Route to add dummy holdings to the database
// app.get('/addHoldings', async (req, res) => {
//     let tempHoldings = [ /* array of holding data objects */ ];

//     // Iterate through each item and save to DB
//     tempHoldings.forEach((item) => {
//         let newHolding = new HoldingsModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//         });

//         newHolding.save(); // Save to MongoDB
//     });

//     res.send("Holdings data inserted successfully!");
// });

// Route to add dummy positions to the database
// app.get("/addPositions", async (req, res) => {
//     let tempPositions = [ /* array of position data objects */ ];

//     tempPositions.forEach((item) => {
//         let newPosition = new PositionModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         });

//         newPosition.save(); // Save to MongoDB
//     });

//     res.send("Positions data inserted successfully!");
// });



// Fetch all holdings from the database
app.get('/allHoldings', async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings); // Send data as JSON
});

// Fetch all positions from the database
app.get('/allPositions', async (req, res) => {
    let allPositions = await PositionModel.find({});
    res.json(allPositions); // Send data as JSON
});

app.post('/newOrder', async(req, res) =>{
   let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    model: req.body.model,
   });

   newOrder.save();

});



app.listen(PORT, () => {
    console.log("App started");

    // Connect to MongoDB using Mongoose
    mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
        .then(() => console.log("DB Connected"))
        .catch((err) => console.error("MongoDB connection error:", err));
});