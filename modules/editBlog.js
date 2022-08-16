'use strict';
const blogModel = require("../database/models/blogModel");

function editBlog(req, res) {
    const id = req.params.id;
    const { data } = req.body;

    blogModel.findByIdAndUpdate(id, data, { new: true }).then(record => {
        res.send(record);
    }).catch(err => {
        console.log(err)
        res.status(500).send(err.message);
    })
}
module.exports = editBlog;


