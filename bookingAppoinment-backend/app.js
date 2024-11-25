const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const sequelize = require("./config/database");

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

app.use(userRoutes);

sequelize
  .sync()
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
