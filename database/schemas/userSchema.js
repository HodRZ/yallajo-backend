'use strict';
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: String,
    image: String,
    email: String,
    //blog: [blog_id]
    //services:[service_id] 
  });
  module.exports = userSchema;