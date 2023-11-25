const express = require("express");
const newProduct = require("./routes/product");
const path = require("path");
const chalk = require("chalk")
const methodOverride = require('method-override')
const mongoose = require("./config/connection")


const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(methodOverride("_method"));

// Server Port
const PORT = 3000;

// Set Vies Engine
app.set("view engine", "ejs");
app.set("views", "views");

// Static file add
app.use(express.static(path.join(process.cwd(), "public")))

// db CONNECTION
const db = mongoose.connection;
db.on("error",console.error.bind( console, "Connection Error"));
db.once("open", function (){
  console.log(chalk.bgGreen("db Connected"));
})

app.use("/products", newProduct);





// Server Listen
app.listen(3000,() => {
console.log(`Server is running on PORT : ${PORT}`)
})