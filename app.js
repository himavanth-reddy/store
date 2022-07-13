const express = require("express");
require("dotenv").config();
const app = express();

//middleware
app.use(express.static("public"));
// set the view engine to ejs
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello");
});

module.exports = app;
