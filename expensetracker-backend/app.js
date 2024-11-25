const express = require("express");
const cors = require("cors");

const expenseRoutes = require("./routes/expenseRoutes");

const sequelize = require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());

app.use(expenseRoutes);

sequelize
  .sync()
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
