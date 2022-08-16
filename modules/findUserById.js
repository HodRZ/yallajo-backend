'use strict';
const userModel = require('../database/models/userModel');

function findUserById(req, res) {
  const id = req.params.id;
  userModel.find({ _id: id }, (error, data) => {
    if (error) console.log(error);
    else console.log(data[0]);
  });
}

module.exports = findUserById;