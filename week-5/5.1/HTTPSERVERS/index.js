import express from "express";
const app = express();

app.get("/sum", (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
});
/*
 I can also make it dynamic by using params instead of query .

 app.get("/sum/:a/:b", (req, res) => {
     const a = parseInt(req.params.a);  
      const b = parseInt(req.params.b);

    res.json({
      ans: a + b 
    })
  
 */
app.get("/multiply", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;

  res.json({
    ans: a * b,
  });
});
app.get("/divide", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;

  res.json({
    ans: a / b,
  });
});
app.get("/subtract", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;

  res.json({
    ans: a - b,
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
