'use strict'
const blogModel = require("../database/models/blogModel");

function findBlogById(req, res) {
    const id = req.params.id;
    blogModel.findById(id, (error, data) => {
        if (error) console.log(`Blog not found ${error}`);
        else {
            res.send(data)
        };
    })
}

module.exports = findBlogById