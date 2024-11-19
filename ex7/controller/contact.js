const path = require("path");

const rootDir = require("../util/path");

exports.getContactUsForm = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contactus.html"));
};

exports.postContactUs = (req, res, next) => {
  console.log(req.body);
  res.redirect("/sucess");
};

exports.sucessForm = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "formFilled.html"));
};
