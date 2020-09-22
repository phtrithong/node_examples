const cluster = require("cluster");

if (cluster.isMaster) {
  console.log("Executing in master mode");
  // worker processes creation using fork() can only be done in master mode
  cluster.fork();
  cluster.fork();
  // creating 2 worker
} else {
  console.log("Executing in child mode");
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
}