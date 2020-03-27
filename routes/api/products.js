const express = require("express");
const router = express.Router();

const Product = require("../../models/Product");

router.get("/", async (req, res) => {
  await Product.find({})
    .then(products => {
      let productsArr = [...products];
      res.json(productsArr);
    })
    .catch(err => console.log(err));
});

module.exports = router;
