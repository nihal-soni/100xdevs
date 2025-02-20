let firstName = "nihal";
const num = 223;
var isStudent = true;

const favoriteColor = "black";
let heightInCm = 170;  // Fixed typo: "hightinCm" → "heightInCm"
const iLikePizza = true;  // Fixed variable name: "ilikePizza" → "iLikePizza"

// Logging variables
console.log(firstName);
console.log(num);
console.log(isStudent);
console.log(favoriteColor);
console.log(heightInCm);  // Fixed: console.los() → console.log()
console.log(iLikePizza);
function sum(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i; // Add each number to total
    }
    return total;
  }
  
  // Example usage:
  console.log(sum(5)); // Output: 15 (1+2+3+4+5)
  console.log(sum(70)); // Output: 55 (1+2+3+...+10)
  