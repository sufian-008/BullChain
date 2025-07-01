const {Schema} = require("mongoose");

const HoldingSchema = new Schema({

    name: String,
    qty: Number,
    avg: float,
    price: float,
    net: "+0.58",
    day: "+2.99",
    
});

module.exports ={HoldingSchema};