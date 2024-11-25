const Sequelize = require("sequelize");

const sequelize = require("../config/database");

const Expense = sequelize.define("expense", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  amount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  desc: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  cat: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Expense;
