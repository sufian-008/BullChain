const User = require("../model/userModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


module.exports.Signup = async (req, res) => {
  try {
    console.log("Body received from form or JSON:", req.body);
    const { email, password, username, createdAt } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }


    const user = await User.create({ email, password, username, createdAt });
    console.log(user)
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


module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch,password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Incorrect password" });

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      withCredentials: true,
    });

    return res.status(200).json({
      message: "Login successful",
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error" });
  }
};


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


