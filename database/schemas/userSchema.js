'use strict';
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  name: String,
  image: String,
  email: String,
  blogs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'blogModel'
  }],
  services: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'serviceModel'
  }]
}, { timestamps: true });

module.exports = userSchema;