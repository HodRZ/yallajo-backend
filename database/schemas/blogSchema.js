"use strict";
const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  title: String,
  keyword: String,
  content: String,
  image: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userModel'
  }
}, { timestamps: true });

module.exports = blogSchema;
