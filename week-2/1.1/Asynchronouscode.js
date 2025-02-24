// Asynchronous Execution (Non-Blocking)
// In asynchronous execution, the program does not wait for an operation to finish before moving to the next line. 
// Instead, it continues executing and runs the operation in the background.




// import fs from "fs";

// console.log("Start reading file...");

// fs.readFile("a.txt", "utf-8", (err, content) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log("File content:", content);
// });

// console.log("End of script.");



// ✅ Does not block execution (improves performance).
// ❌ More complex because you need callbacks or Promises.


function timeout() {
  console.log("click me button !");

}
console.log("hi");

setTimeout(timeout, 1000);

console.log("welcome to loupe");

let c = 0;
for (let i = 0; i<100000; i++) {
  c = c + 1;
}
console.log(c)