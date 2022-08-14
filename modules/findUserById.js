'use strict';
const mongoose = require('mongoose');
const userModel = require('../database/models/userModel');

function findUserById(req, res) {
    const id = req.params.id;
    userModel.find({ _id: id }, (error, data) => {
      if (error) console.log(error);
      else res.send(data[0]);
    });
  }
  
  module.exports = findUserById;