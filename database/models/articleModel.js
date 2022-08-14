"use strict";
// work Done!
const mongoose = require("mongoose");
const articleSchema = require("../schemas/articleSchema");
const articleModel = mongoose.model("articleModel", articleSchema);

module.exports = articleModel;
