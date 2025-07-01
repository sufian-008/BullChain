// model/HoldingModel.js

const mongoose = require("mongoose");
const { HoldingsSchema } = require("../schemas/HoldingsSchema");

const HoldingsModel = mongoose.model("holding", HoldingsSchema); // ✅ Correct usage

module.exports = { HoldingsModel };