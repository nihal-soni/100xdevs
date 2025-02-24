import fs from "fs";

// const contents = fs.readFileSync("a.txt", "utf8");
// console.log(contents);


// Let;s try reading two file

// so basically this code is running synchronously
const data1 = fs.readFileSync("a.txt", "utf8");
const data2 = fs.readFileSync("b.txt", "utf8");

console.log(data1);
console.log(data2);

// and this code will run aynchronous 

// Asynchronous reading using fs.readFile
fs.readFile("a.txt", "utf8", (err, data3) => {
    if (err) {
        console.error("Error reading a.txt:", err);
        return;
    }
    console.log("Async a.txt content:", data3);
});

fs.readFile("b.txt", "utf8", (err, data4) => {
    if (err) {
        console.error("Error reading b.txt:", err);
        return;
    }
    console.log("Async b.txt content:", data4);
});

