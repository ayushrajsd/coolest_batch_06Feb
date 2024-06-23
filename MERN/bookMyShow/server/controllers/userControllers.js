const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res.send({
        success: false,
        message: "User already exists",
      });
    }

    const newUser = new User(req.body);
    await newUser.save();

    res.send({
      success: true,
      message: "User registered successfully, Please Login",
    });
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    console.log("token", token);
    if (!user) {
      return res.send({
        success: false,
        message: "User not found. Please register",
      });
    }
    if (req.body.password !== user.password) {
      return res.send({
        success: false,
        message: "Sory, Invalid password",
      });
    }
    res.send({
      success: true,
      message: "Login Successful",
      user: user,
      data: token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getCurrentUser = async (req, res) => {
  const user = await User.findById(req.body.userId).select("-password");
  console.log("found user", user);
  res.send({
    success: true,
    data: user,
    message: "You are authorized to go the protected route",
  });
};

module.exports = {
  register,
  login,
  getCurrentUser,
};
