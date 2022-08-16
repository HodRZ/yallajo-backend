'use strict'
const blogModel = require("../database/models/blogModel");

function findBlogById(req, res) {
    const id = req.params.id;
    console.log(id)
    blogModel.findById(id, (error, data) => {
        if (error) console.log(`Book not found ${error}`);
        else {
            res.send(data)
        };
    })
}

module.exports = findBlogById