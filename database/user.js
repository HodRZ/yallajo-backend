"use strict";

const connectDB = require("./connectDB");
const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: String,
  email: String,
  img: String,
});
const profileModel = mongoose.model("profileModel", profileSchema);

const eyad = new profileModel({
  name: "eyad mansour",
  email: "eyad.mansour.1997@gmail.com",
  img: "my img",
});
console.log(eyad);
eyad.save();

module.exports = profileModel;
