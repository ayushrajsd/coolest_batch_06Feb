const express = require("express");
const {
  register,
  login,
  getCurrentUser,
} = require("../controllers/userControllers");
const auth = require("../middlewares/authMiddleware");
const UserModel = require("../model/userModel");
const EmailHelper = require("../utils/emailHelper");

const userRouter = express.Router();

// register a user
userRouter.post("/register", register);

// login for user
userRouter.post("/login", login);

userRouter.get("/get-current-user", auth, getCurrentUser);

// function to generate token

const otpGenerator = () => {
  return Math.floor(100000 + Math.random() * 900000); // six digit otp: 0 -> 899999 + 100000 => ( 100000 - 999999)
};

userRouter.patch("/forgetpassword", async (req, res) => {
  /**
   *1. ask for email
   2. check if the email exists in the database
   3. if email is present, generate otp
    4. save otp in the database
    5. send otp to the email 
   */
  try {
    if (req.body.email === undefined) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }
    const user = await UserModel.findOne({ email: req.body.email }); // AYush
    if (user === null) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const otp = otpGenerator(); // give me a six digit otp
    user.otp = otp;
    user.otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
    await user.save();
    // sending email
    await EmailHelper("otp.html", user.email, { name: user.name, otp: otp });
    res.status(200).json({
      success: true,
      message: "OTP sent to your email",
    });
  } catch (err) {
    console.log(err);
  }
});

userRouter.patch("/resetpassword/:email", async (req, res) => {
  try {
    const resetDetails = req.body;
    if (!resetDetails.password || !resetDetails.otp) {
      return res.status(400).json({
        success: false,
        message: "Password and OTP is required",
      });
    }

    const user = await UserModel.findOne({ email: req.params.email });
    if (user === null) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    // if otp is expired
    if (user.otpExpiry < new Date()) {
      return res.status(400).json({
        success: false,
        message: "OTP expired",
      });
    }
    // if otp is not matched
    if (user.otp !== resetDetails.otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    user.password = resetDetails.password;
    user.otp = undefined;
    user.otpExpiry = undefined;
    await user.save();
    res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = userRouter;
