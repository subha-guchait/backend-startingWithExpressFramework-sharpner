const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("in the middleware");
  next(); // this allows the request to continue to the next middleware in line without it it willl never go to next middleare
});
app.use((req, res, next) => {
  console.log("Another middleware");
  res.send("<h1>hello from express<h1>"); // this allow us to send body
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000); //listnen is provided by express it internally doing same thing
