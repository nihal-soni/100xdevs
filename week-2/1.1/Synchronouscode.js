// function sum(n) {
//     let ans =  0;
//     for(let i = 1; i <= n; i++) {
//     ans = ans + i;
// }
//  return ans;
// }

// const ans1= sum(10);
// console.log(ans1)
// const ans2= sum(100);
// console.log(ans2)
// const ans3= sum(1000);
// console.log(ans3);


// In synchronous execution, the program executes line by line. Each operation blocks the execution until it completes.

import fs from "fs";

console.log("Start reading file...");
const content = fs.readFileSync("a.txt", "utf-8"); // Blocking operation
console.log("File content:", content);
console.log("End of script.");


// ✅ Simple to understand and use.
// ❌ Blocks execution, which slows down performance if reading large files or waiting for I/O operations.