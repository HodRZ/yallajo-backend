"use strict";
const mongoose = require("mongoose");
const connectDB = require("./connectDB");

const serviceSchema = new mongoose.Schema({
  title: String,
  description: String,
  type: String,
  image: String,
  price: Number,
  isAvailable: Boolean,
});

const serviceModel = mongoose.model("serviceModel", serviceSchema);

const tour = new serviceModel({
  title: "lara",
  description: "your tour guide in wadi-rum",
  type: "tour",
  image: "",
  price: 230,
  isAvailable: true,
});
const carRental = new serviceModel({
  title: "white car",
  description: "4x4 car to explore the desert in Jordan",
  type: "car",
  image: "",
  price: 230,
  isAvailable: true,
});

const roomRental = new serviceModel({
  title: "apartment 3",
  description: "4x4 car to explore the desert in Jordan",
  type: "room",
  image: "",
  price: 230,
  isAvailable: true,
});

module.exports = serviceModel;