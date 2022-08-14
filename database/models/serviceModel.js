'use strict';
const serviceSchema = require('../schemas/serviceSchema');
const mongoose = require("mongoose");
const serviceModel = mongoose.model("serviceModel", serviceSchema);

module.exports = serviceModel;