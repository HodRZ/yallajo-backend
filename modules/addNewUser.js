'use strict';
const userModel = require('../database/models/userModel')
function addNewUser(req, res) {

    const user = req.body;
    if (userModel.find({ email: user.email }).length === 0) {
        const newUser = new userModel(user);
        newUser.save();
        res.status(201).json(user);
    } else res.status(200)
}

module.exports = addNewUser;