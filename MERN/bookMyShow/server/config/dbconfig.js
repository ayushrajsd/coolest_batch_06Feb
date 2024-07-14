const mongoose = require("mongoose");

const dbURL = process.env.DB_URL;
console.log(dbURL);

const connectDB = async () => {
  try {
    await mongoose.connect(dbURL);
    console.log("Connected to the database");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;