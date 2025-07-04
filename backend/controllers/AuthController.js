const User = require("../model/userModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {
  try {
    console.log("Body received from form or JSON:", req.body);
    const { email, password, username, createdAt } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({ email, password: hashedPassword, username, createdAt });
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    return res.status(201).json({ message: "User signed up successfully", success: true, user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
    
  }

   
};


const jwt = require("jsonwebtoken");

module.exports.verifyUser = (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.json({ status: false });

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) return res.json({ status: false });
    const user = await User.findById(data.id);
    if (!user) return res.json({ status: false });
    return res.json({ status: true, user: user.username });
  });
};

