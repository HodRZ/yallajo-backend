"use strict";

require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");
const addService = require('./modules/addService');
///partials imports
///////////////////// Eyad-citySearchBackend
const { handleGetApiData } = require("./modules/handleGetApiData");
///////////////////// Hod-blogSchema
const { handleGetBlogs } = require('./modules/handleGetBlogs');
/////////////////////Malek-servicesBackend
const handleGetService = require("./modules/handleGetService");
// @Malek 
const addArticle = require('./modules/addArticle')
// @Malek || To connect to the DataBase
const connectDB = require("./database/connection/connectDB");
// @Malek
const addNewUser = require('./modules/addNewUser');
// @Eyad
const findUserById = require('./modules/findUserById');
// --------------------------------------
const PORT = process.env.PORT || 8080;
// ---------------------------------------
//Paths
///////////////////// Eyad-citySearchBackend
app.get("/city", handleGetApiData);

///////////////////// Hod-blogSchema
app.get('/blog', handleGetBlogs);

/////////////////////Malek-servicesBackend
app.get("/", (req, res) => {
  res.send("hello from my server!");
});
// edit the fuction name By Malek
app.get("/service", handleGetService);

// Add post new service By Malek
app.post('/service',addService);
// Add post new article By Malek
app.post('/article',addArticle);
// Add post new User
app.post('/user',addNewUser);
// Eyad
app.get('/user/:id', findUserById);
app.get("*", (req, res) => {
  res.status(404).json({ "error ": "Page Not Found!" });
});
app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT} Sucessfully!`);
});