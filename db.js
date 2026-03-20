const mongoose = require("mongoose");
require('dotenv').config();

//Define the MongoDB connection URL

// const mongoURL_local = process.env.MONGO_URL_LOCAL;

const mongoURL = process.env.MONGO_URL;

//Set up mongoDB connection
mongoose.connect(mongoURL);
const db = mongoose.connection;
db.on("connected", () => {
  console.log("Connected to MongoDB server");
});
db.on("error", (err) => {
  console.log("MongoDB connection error" + err);
});
db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});
module.exports = db;
