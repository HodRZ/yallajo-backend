'use strict';
const userSchema = require('../schemas/userSchema');
const mongoose = require('mongoose');
const userModel = mongoose.model('userModel',userSchema);

module.exports = userModel;