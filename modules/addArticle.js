'use strict';
const mongoose = require("mongoose");
const articleModel = require('../database/models/articleModel');


function addArticle(req,res){

    console.log(req.body)
    const {newArticle} = req.body;
    const article = new articleModel(newArticle);
    article.save();
    res.status(201).json(article);

}

module.exports = addArticle;