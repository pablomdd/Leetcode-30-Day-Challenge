// Given a non-empty array of integers, every element appears twice except for one. 
// Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. 
// Could you implement it without using extra memory?

var singleNumber = function(nums) {
    
    nums = nums.sort((a, b) => a - b);
    
    for( let  i = 0; i < nums.length; i+= 2 ){
        if(nums[i] == nums[i+1]){
            continue
        }else{
            return nums[i]
        }
    }
};

// coolest solution I found:
// var singleNumber = function(nums) {
//     let r = 0;
//     for(let i = 0; i < nums.length; i += 1) {
//         r ^= nums[i];
//     }
//     return r;
// };

input = [4,1,2,1,2];

console.log(singleNumber(input));