"use strict";
const mongoose = require("mongoose");
// work Done!
const serviceSchema = new mongoose.Schema({
  title: String,
  description: String,
  type: String,
  image: String,
  price: Number,
  isAvailable: Boolean,
});

module.exports = serviceSchema;
