"use strict";
const mongoose = require("mongoose");
const blogModel = require("../database/models/blogModel");
const userModel = require("../database/models/userModel");

function addBlogWithUser(req, res) {
    const id = req.params
    const user = userModel.findById(id)
    const { newBlog } = req.body;
    const blog = new blogModel(newBlog);
    user.blogs.push(blog)
    blog.author = user
    user.save()
    blog.save();
    res.status(201).json(blog);
}

module.exports = addBlogWithUser;
