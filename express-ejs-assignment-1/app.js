const express = require("express");


const PORT = 3000;
const app = express();
app.listen(() => {
console.log(`Server is running on PORT : ${PORT}`)
})