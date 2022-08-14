'use strict';
const serviceModel = require('../database/models/serviceModel');

function addService(req,res){
    
    console.log(req.body)
    const {newService} = req.body;
    const service = new serviceModel(newService);
    service.save(); 
    res.status(201).json(service);
}

module.exports = addService;