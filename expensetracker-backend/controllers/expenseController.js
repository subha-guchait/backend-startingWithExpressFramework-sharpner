const Expense = require("../models/expense");

exports.addExpense = async (req, res, next) => {
  try {
    const expense = req.body;
    if (!expense.amount) {
      throw new Error("amount is mandatory");
    }
    const data = await Expense.create(expense);
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.getExpenses = async (req, res, next) => {
  try {
    const expenses = await Expense.findAll();
    res.status(200).json(expenses);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

exports.deleteExpense = async (req, res, next) => {
  try {
    const id = req.params.id;
    const expense = await Expense.findByPk(id);
    await expense.destroy();
    res.status(200).json({ message: "Expense deleted sucessfully" });
  } catch (err) {
    res.status(500).json({ Error: err });
  }
};

exports.updateExpense = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedExpense = req.body;

    const expense = await Expense.findByPk(id);

    if (!expense) {
      return res.status(404).json({ message: "expense not found" });
    }

    await expense.update(updatedExpense, { where: { id: id } });
    res.status(200).json({ message: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ Error: err });
  }
};
