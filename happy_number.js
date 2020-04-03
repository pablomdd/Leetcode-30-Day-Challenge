// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: 
// Starting with any positive integer, replace the number by the sum of the squares 
// of its digits, and repeat the process until the number equals 1 (where it will stay), 
// or it loops endlessly in a cycle which does not include 1. Those numbers for which this 
// process ends in 1 are happy numbers.

var isHappy = function(n) {
    let happy = false;
    let counter = 0;
    let digits = [];

    digits = n.toString();

    while(!happy){
        digits = digits.split('');
        // console.log(digits)

        let accum = 0;


        for (let i in digits) {
            console.log(`i = ${digits[i]}`)
            accum += parseInt(digits[i]) * parseInt(digits[i]);
            // console.log(accum);
        }
        
        if (accum === 1) {
            return true;
        }
        if(accum === accum && counter < 10){
            counter++;
        }else{
            return false;
        }
        digits = accum.toString();
        accum = 0;
    }
};


// other way cooler code, not mine, by uknown

// const numToArray = num => `${num}`.split('').map(n => +n);
/**
  @param {number} n
  @return {boolean}
 */
// var isHappy = function(n) {
//   let counter = 0;
//   let nums = numToArray(n);
  
//   while (counter < 6) {
//     const sum = nums.reduce((acc, curr) => {
//       return acc + Math.pow(curr, 2); 
//     }, 0);
    
//     if (sum === 1) return true;
    
//     nums = numToArray(sum);
//     counter++;
//   }
  
//   return false;
// }; 

console.log(isHappy(2));