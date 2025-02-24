import fs from "fs";

// const contents = fs.readFileSync("a.txt", "utf8");
// console.log(contents);


// Let;s try reading two file


const data1 = fs.readFileSync("a.txt", "utf8");
const data2 = fs.readFileSync("b.txt", "utf8");

console.log(data1);
console.log(data2);