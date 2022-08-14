"use strict";

const user = require("../database/user");
const profileModel = require("../database/user");

function findById(req, res) {
  const id = req.params.id;
  profileModel.find({ _id: id }, (error, data) => {
    if (error) console.log(error);
    else res.send(data[0]);
  });
}

module.exports = findById;
