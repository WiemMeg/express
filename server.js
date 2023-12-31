const express = require("express");
const app = express();
const port = 5000;
const check = require("./middlewares/checktime");
app.use(express.static("public"));
app.set("view engine", "pug");

app.get("/contact", check, (req, res) => {
  res.render("contact");
});
app.get("/Ourservices", check, (req, res) => {
  res.render("Ourservices");
});
app.get("/Home", (req, res) => {
  res.render("Home");
});
app.use((req, res) => {
  res.status(404).send("not found");
});
app.listen(port, (err) => {
  err ? console.log(err) : console.log("server running");
});
