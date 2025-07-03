const mongoose = require("mongoose");
const { OrderSchema } = require("../schemas/OrderSchema");



const OrderModel = mongoose.model("watchlist", OrderSchema);

module.exports ={OrderModel};
