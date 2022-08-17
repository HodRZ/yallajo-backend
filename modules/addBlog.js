"use strict";
const mongoose = require("mongoose");
const blogModel = require("../database/models/blogModel");

function addBlog(req, res) {
  const { newBlog } = req.body;
  const blog = new blogModel(newBlog);
  blog.save();

  res.status(201).json(blog);
}

module.exports = addBlog;
