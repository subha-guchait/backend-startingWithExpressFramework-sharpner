const express = require("express");

const expenseController = require("../controllers/expenseController");

const router = express.Router();

router.post("/add-expense", expenseController.addExpense);
router.get("/expenses", expenseController.getExpenses);
router.delete("/delete-expense/:id", expenseController.deleteExpense);
router.put("/update-expense/:id", expenseController.updateExpense);

module.exports = router;
