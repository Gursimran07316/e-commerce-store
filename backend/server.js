const express = require("express");
const products = require("./data/products.js");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config();
const app = express();

connectDB();
app.get("/", (req, res) => {
  res.json("hlo");
});
app.get("/products", (req, res) => {
  res.json(products);
});
app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
app.listen(5000, console.log("Running on port 5000"));
