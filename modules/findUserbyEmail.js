'use strict';
const userModel = require('../database/models/userModel');

function findUserByEmail(req, res) {
    const userEmail = req.query.email;
    userModel.find({ 'email': userEmail }, (error, data) => {
        if (error) console.log(error);
        else {
            res.send(data[0])
        };
    });
}

module.exports = findUserByEmail;