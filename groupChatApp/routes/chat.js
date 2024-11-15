const fs = require("fs");

const express = require("express");

const router = express.Router();

router.use(express.urlencoded({ extended: false }));

router.get("/", (req, res, next) => {
  fs.readFile("msg.txt", (err, data) => {
    if (err) {
      console.log(err);
    }
    res.send(
      `<p>${data}</p><form action="/" onSubmit="document.getElementById('username').value = localStorage.getItem('username') " method ="POST"><input id="username" name ="username" type="hidden"><input name="msg" type = "text" name=""><button type="submit">Send</button></form>`
    );
  });
});

router.post("/", (req, res, next) => {
  console.log(req.body);
  const msg = `${req.body.username}: ${req.body.msg}\n`;
  console.log(msg);
  fs.writeFile("msg.txt", msg, { flag: "a" }, (err) => {
    // we can use fs.appendFile() also
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
