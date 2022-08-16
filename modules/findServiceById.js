'use strict'
const serviceModel = require("../database/models/serviceModel");

function findServiceById(req, res) {
    const id = req.params.id;
    serviceModel.findById(id, (error, data) => {
        if (error) console.log(`Service not found ${error}`);
        else {
            res.send(data)
        };
    })
}

module.exports = findServiceById