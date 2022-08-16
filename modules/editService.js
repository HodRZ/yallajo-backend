'use strict';
const serviceModel = require("../database/models/serviceModel");

function editService(req, res) {
    const id = req.params.id;
    const { data } = req.body;
    console.log(data)
    serviceModel.findByIdAndUpdate(id, data, { new: true }).then(record => {
        res.send(record);
    }).catch(err => {
        console.log(err)
        res.status(500).send(err.message);
    })
}
module.exports = editService;


