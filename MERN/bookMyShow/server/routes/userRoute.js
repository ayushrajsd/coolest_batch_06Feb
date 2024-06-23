const express = require("express");
const {
  register,
  login,
  getCurrentUser,
} = require("../controllers/userControllers");
const auth = require("../middlewares/authMiddleware");

const userRouter = express.Router();

// register a user
userRouter.post("/register", register);

// login for user
userRouter.post("/login", login);

userRouter.get("/get-current-user", auth, getCurrentUser);

module.exports = userRouter;
