// This is an implementation of Kadane's algorithm
var maxSubArray = function(nums) {
    let max = nums[0];
    let maxSoFar = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let current = nums[i];
        // Here it's a doubt to check, if the comprasion in
        // --max (current, current + maxSoFar) or
        // --max (0, current + maxSoFar) 
        maxSoFar = Math.max(current, current + maxSoFar);
        max = Math.max(max, maxSoFar);
    }

    return max;
};

// Implemention 2
var maxSubArrayAlt = function(nums) {
    let max = nums[0];
    for(let i=1;i<nums.length;i++){
        nums[i] = nums[i-1]>0 ? (nums[i-1]+nums[i]) : nums[i];
        max = Math.max(nums[i], max);
    }
    return max;
};

// let input = [-2,1,-3,4,-1,2,1,-5,4];
let input = [-10, -3, -5];

console.log(maxSubArrayAlt(input))