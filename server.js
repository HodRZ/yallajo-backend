"use strict";
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");
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

//// by Eyad branch name city search backend

const { handleApi } = require("./modules/testLocation");
app.get("/city", handleApi);

/// by Eyad branch name city search backend

app.listen(3001, () => {
  console.log("welcome to radio 3001");
});
