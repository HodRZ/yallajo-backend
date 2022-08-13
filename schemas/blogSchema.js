'use strict'
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: String,
    keyword: String,
    content: String,
    image: String
})

const blogModel = mongoose.model('Blog', blogSchema)


exports.blogSchema = blogSchema
exports.blogModel = blogModel