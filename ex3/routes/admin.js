const express = require("express");

const router = express.Router();

router.use(express.urlencoded({ extended: false }));

router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action ="/admin/product" method="POST"><label for="title">Product Name: </label><input type="text" name="title" id="title"><label for="qnty">Quantity: </label><input type="number" name="qnty" id="qnty"><button type="submit">Add Product</button></form>'
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/shop");
});

module.exports = router;
