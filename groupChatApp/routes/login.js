const express = require("express");

const router = express.Router();

router.use(express.urlencoded({ extended: false }));

router.get("/login", (req, res, next) => {
  res.send(
    '<form onSubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)" action = "/user" method="POST"><input id="username" type="text" name ="username" placeholder="username"><button type="submit">login</button></form>'
  );
});

//

router.use("/user", (req, res, next) => {
  //   console.log(req.body.username);
  //   localStorage.setItem("username", req.body.username);
  res.redirect("/");
});

module.exports = router;
