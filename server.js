"use strict";

require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");
const addService = require("./modules/addService");
//partials imports
//Eyad-citySearchBackend
const { handleGetApiData } = require("./modules/handleGetApiData");
// Hod-blogSchema
const { handleGetBlogs } = require("./modules/handleGetBlogs");
//Malek-servicesBackend
const handleGetService = require("./modules/handleGetService");
// @Malek
const addBlog = require("./modules/addBlog");
// @Malek || To connect to the DataBase
const connectDB = require("./database/connection/connectDB");
// @Malek
const addNewUser = require("./modules/addNewUser");
// @Eyad
const findUserById = require("./modules/findUserById");
const editBlog = require("./modules/editBlog");
const findBlogById = require("./modules/findBlogById");
// --------------------------------------
const PORT = process.env.PORT || 8080;
// ---------------------------------------
//Paths
// Eyad-citySearchBackend
app.get("/city", handleGetApiData);
// Hod-blogSchema
app.get("/blog", handleGetBlogs);
app.get("/", (req, res) => {
  res.send("hello from my server!");
});
// edit the fuction name By Malek
app.get("/service", handleGetService);
// Eyad
app.get("/user/:id", findUserById);
// Add post new service By Malek
app.post("/service", addService);
// Add post new article By Malek
app.post("/blog", addBlog);
app.put('/blog/:id', editBlog)
app.get('/blog/:id', findBlogById)
// Add post new User// not used
app.post("/user", addNewUser);
// unknown routes
app.get("*", (req, res) => {
  res.status(404).json({ "error ": "Page Not Found!" });
});
app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT} Sucessfully!`);
});
