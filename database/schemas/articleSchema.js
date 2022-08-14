'use strict';
const mongoose = require("mongoose");

// work Done!
const articleSchema = new mongoose.Schema({
    title: String,
    keyword: String,
    text: String,
    image: String
  });
  module.exports = articleSchema;