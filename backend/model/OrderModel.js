const {model} = require("mongoose");
const { OrderSchema } = require("../schemas/OrderSchema");



const OrderModel = new model("watchlist", OrderSchema);

module.exports ={OrderModel};
