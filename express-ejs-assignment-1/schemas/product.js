const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = new Schema ({
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        min: [1, 'Nuksan hojaega soch lo'],
    },
    category:{
        type: String,
        enum: ['Shoes', 'T-Shirt', "Jewellery"],
        required: true
    }
})

module.exports = productSchema;