"use strict";
const mongoose = require("mongoose");
const articleModel = require("../database/models/blogModel");

function addArticle(req, res) {
  const { newBlog } = req.body;
  const blog = new articleModel(newBlog);
  blog.save();

  res.status(201).json(blog);
}

module.exports = addArticle;
