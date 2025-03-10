const express = require("express");

const app = express();

app.post("/user/signup", function (req, res) {
  res.json({
    message: "signup endpoint",
  });
});

app.post("/user/signin", function (req, res) {
  res.json({
    message: "signin endpoint",
  });
});

app.post("/user/purchase", function (req, res) {
  res.json({
    message: "purchase endpoint",
  });
});

app.get("/course/purchases", function (req, res) {
    // i 
  res.json({
    message: "purchases endpoint",
  });
});

app.get("/courses", function (req, res) {
  res.json({
    message: "courses endpoint",
  });
});

app.listen;
