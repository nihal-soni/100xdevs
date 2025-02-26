// find sum from 1 to 0 number 

// 1 => n 
// 2 => 1 + 2 = 3
// 3 => 1 + 2 + 3 = 6
       
// ONE WAY OF DOING THIS 

 function sum(n) {
    return n * ( n + 1)/2 ;
 }

const ans = sum(10)
 console.log(ans);

// SECOND WAY OF DOING THIS 

function sum2(n) {
    let ans2 = 0;
    for(let i = 1; 1 <= n; i++) {
        ans2 = ans2 + i
    }
    return ans2;
}

const ans2 = sum2(10);
console.log(ans2);
