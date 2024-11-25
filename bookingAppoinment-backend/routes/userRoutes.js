const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

router.get("/users", userController.getUsers);

router.post("/users", userController.postUser);

router.delete("/users/:id", userController.deleteUser);

router.put("/users/:id", userController.updateUser);

module.exports = router;
