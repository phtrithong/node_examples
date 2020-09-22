const express = require("express");
const app = express();

app.get("/slow", (req, res) => {
  load(5000);
  res.send("I took 5 seconds");
});

app.get("/fast", (req, res) => {
  res.send("I am fast");
});

function load(time) {
  const start = Date.now();
  while (Date.now() - start < time) {}
}
app.listen(5000);