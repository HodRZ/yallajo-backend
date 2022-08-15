"use strict";
const blogModel = require("../database/models/blogModel");

function handleGetBlogs(req, res) {
  blogModel.find({}, (err, data) => {
    if (err) console.log(`error reading from the database: ${err}`);
    else res.send(data);
  });
}

exports.handleGetBlogs = handleGetBlogs;
