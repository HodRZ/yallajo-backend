"use strict";
const mongoose = require("mongoose");
const blogSchema = require("../schemas/blogSchema");
const blogModel = mongoose.model("blogModel", blogSchema);

module.exports = blogModel;
