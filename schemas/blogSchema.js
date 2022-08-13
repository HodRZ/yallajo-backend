'use strict'
const mongoose = require('mongoose')
const connectDB = require('./../database/connectDB')

const blogSchema = new mongoose.Schema({
    title: String,
    keyword: String,
    content: String,
    image: String
})

const blogModel = mongoose.model('Blog', blogSchema)

const testBlog = new blogModel({
    title: 'test Blog ya ghale',
    keyword: 'amman',
    content: 'amman ya amman ya ahla al boldan, feeke nas ktheer, ben7eb el barabeer',
    image: "https://images.unsplash.com/photo-1604157886233-08985afc49e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNTQ4ODV8MHwxfHNlYXJjaHwxfHxhbW1hbnxlbnwwfHx8fDE2NjA0MDY0NTg&ixlib=rb-1.2.1&q=80&w=1080"
})
// testBlog.save()
exports.blogSchema = blogSchema
exports.blogModel = blogModel