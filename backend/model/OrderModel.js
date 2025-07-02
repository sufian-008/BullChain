const model = require("mongoose");
const { OrderSchema } = require("../schemas/OrderSchema");



const OrderModel =  model("watchlist", OrderSchema);

module.exports ={OrderModel};
