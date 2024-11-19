const express = require("express");

const contactController = require("../controller/contact");

const router = express.Router();

router.use(express.urlencoded({ extended: false }));

router.get("/contactus", contactController.getContactUsForm);

router.post("/contactus", contactController.postContactUs);

router.get("/sucess", contactController.sucessForm);
module.exports = router;
