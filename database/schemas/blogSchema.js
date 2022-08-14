"use strict";
const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  title: String,
  keyword: String,
  content: String,
  image: String,
});

module.exports = blogSchema;
