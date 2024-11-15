const express = require("express");

const app = express();

const loginRoutes = require("./routes/login");
const chatRouter = require("./routes/chat");

app.use(loginRoutes);
app.use(chatRouter);

app.listen(3000);
