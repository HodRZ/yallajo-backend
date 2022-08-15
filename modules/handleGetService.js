"use strict";
// work Done!
const serviceModel = require("../database/models/serviceModel");

function handleGetService(req, res) {
  const searchQuery = req.query.searchQuery;

  serviceModel.find({ type: searchQuery, isAvailable: true }, (error, data) => {
    if (error) {
      console.log(`Can't find your search in the DB : ${error}`);
      res.status(500).send(err.message);
    } else res.status(200).send(data);
  });
}

module.exports = handleGetService;
