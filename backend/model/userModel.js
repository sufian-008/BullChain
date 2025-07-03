const mongoose = require("mongoose");
const { userSchema } = require("../schemas/UserSchema");

const userModel = mongoose.model("User", userSchema);

module.exports = userModel; 
