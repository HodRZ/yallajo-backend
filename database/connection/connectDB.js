"use strict";
const mongoose = require("mongoose");
// work Done!
mongoose
  .connect(`${process.env.DATABASE_SERVER_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conneceted To The Database Successfully!");
  })
  .catch((err) => {
    console.log("Can't connect to the Database, check your code!");
    console.log(err);
  });

module.exports = mongoose;
