"use strict";

require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
// @Malek Hamdan
const handleService = require("./modules/handleService");
// @Malek Hamdan
const PORT = process.env.PORT || 8080;
// @Malek Hamdan
app.get("/", (req, res) => {
  res.send("hello from my server!");
});

// @Malek Hamdan
app.get("/service", handleService);
// @Malek Hamdan
app.get("*", (req, res) => {
  res.status(404).json({ "error ": "Page Not Found!" });
});

app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT} Successfully!`);
});