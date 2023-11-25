const express = require("express");
const Product = require("../models/product");
const router = express.Router();


router.get("/new", (req, res) => {
    res.render("addProduct")
})
router.get("/", async(req, res) => {
    const allProduct = await Product.find();
    console.log(allProduct)
    res.render("products/index", {Products: allProduct});
})

router.get("/update/:id", (req, res) => {
    const { id } = req.params;
    res.render("products/update", { id });
  })

  router.patch("/:id", async(req, res) => {
    const { id } = req.params;
    const { updateName } = req.body;
  
    const product = await Product.findOneAndUpdate({_id:id}, {title:updateName});
    console.log(product);
  })

router.post("/", async(req, res) => {
    const {title, price, category} = req.body;
    const addProduct = new Product({
        title, price, category
    })
    const result = await addProduct.save();
    console.log(result);
    res.redirect("/products");
})

module.exports = router;