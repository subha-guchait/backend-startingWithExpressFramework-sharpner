const fs = require("fs");
const path = require("path");

const rootDir = require("../util/path");

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(rootDir, "data", "products.json"); //path for save products in file

    //reading file
    fs.readFile(p, (err, data) => {
      //note: If we don't use arrow function it will not work because in arrow function "this" keyworsd will refer to their surrounding lexical context(ex: here product) but in normal function "this" will refer to global in non strict mode and in strict mode undefined
      let products = [];
      if (!err) {
        products = JSON.parse(data);
      }

      products.push(this); // here this will refer to current product

      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }

  static fetchAll(cb) {
    const p = path.join(rootDir, "data", "products.json");
    fs.readFile(p, (err, data) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(data));
    });
  }
};
