"use strict";

require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");

///partials imports
///////////////////// Eyad-citySearchBackend
const { handleApi } = require("./modules/testLocation");

///////////////////// Hod-blogSchema
const { handleGetBlogs } = require('./routes/handleGetBlogs');

/////////////////////Malek-servicesBackend
const handleService = require("./modules/handleService");
--------------------------------------

mongoose
  .connect(process.env.MONGO_PORT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO ERROR!!!!");
    console.log(err);
  });

app.listen(3001, () => {
  console.log("welcome to radio 3001");
});
---------------------------------------
//Paths
///////////////////// Eyad-citySearchBackend
app.get("/city", handleApi);

///////////////////// Hod-blogSchema
app.get('/blog', handleGetBlogs)

/////////////////////Malek-servicesBackend
app.get("/", (req, res) => {
  res.send("hello from my server!");
});
app.get("/service", handleService);
app.get("*", (req, res) => {
  res.status(404).json({ "error ": "Page Not Found!" });
});
