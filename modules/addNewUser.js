'use strict';
const userModel = require('../database/models/userModel')
function addNewUser(req, res) {

    const user = req.body;
    userModel.find({ email: user.email }, (error, data) => {
        if (error) console.log(`Blog not found ${error}`);
        else {
            if (Object.keys(data).length === 0) {
                const newUser = new userModel(user);
                newUser.save();
                res.status(201).json(user);
            } else res.status(500)
        };
    })

}
module.exports = addNewUser;