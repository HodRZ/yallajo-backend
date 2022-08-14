'use strict';
const userModel = require('../database/models/userModel')
function addNewUser(req, res){
    
    const {newUser}= req.body;
    const user = new userModel(newUser);
    user.save();
    res.status(201).json(user);
}

module.exports = addNewUser;