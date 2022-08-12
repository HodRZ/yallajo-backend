'use strict'
require('dotenv').config()
const express = require("express")
const app = express()
const cors = require('cors');
app.use(cors());
app.use(express.json())
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://backlog:9Wv0YEAqVwKIzJ5K@cluster0.ne4hply.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

app.listen(3001, () => {
    console.log('welcome to radio 3001')
})