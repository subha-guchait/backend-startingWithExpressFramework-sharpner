const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action ="/product" method="POST"><label for="title">Product Name: </label><input type="text" name="title" id="title"><label for="qnty">Quantity: </label><input type="number" name="qnty" id="qnty"><button type="submit">Add Product</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("Another middleware");
  res.send("<h1>hello from express<h1>");
});

app.listen(3000);
