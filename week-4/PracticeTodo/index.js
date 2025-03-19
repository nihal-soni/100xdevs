/* Question. Create a todo on your own HTTP server:
1.) Where you can perform the CRUD Operations
2.) Store the data of todos in json file example - todo.json
 */

import express from "express";

const app = express();
// Assignment to do
// Store the data in a file foundation for database
//add user logic

app.post("/", (req, res) => {
  todos.push({
    title,
    id,
  });
});

app.delete("/", function (req, res) {
  //extract the todo id
  //remove the todo from here
});

app.get("/", function (req, res) {
  res.json({
    
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
