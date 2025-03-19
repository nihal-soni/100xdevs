// const fs = require('fs');

// fs.readFile("a.txt, utf8", (err, data) => {
//    console.log(data);
// });

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/", function (req, res) {
  res.send("Hello world from the post endpoint");
});

app.get("/contact", function (req, res) {
  res.json({
    name: 'nihal soni',
    email: 'example@gmail.com'
  });
});

app.get("/about", function (req, res) {
  res.send("About Us");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
