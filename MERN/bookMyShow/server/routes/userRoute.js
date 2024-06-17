const express = require('express');
const {
    register,
    login
} = require("../controllers/userControllers");

const userRouter = express.Router();

// register a user
userRouter.post("/register",register)

// login for user
userRouter.post("/login",login)

module.exports = userRouter;