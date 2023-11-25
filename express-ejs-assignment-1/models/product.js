const mongoose = require("mongoose");
const productSchema = require("../schemas/product");
const Product = mongoose.model("Product", productSchema);
module.exports = Product;