const User = require("../model/userModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

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
