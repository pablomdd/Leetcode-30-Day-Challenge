var moveZeroes = function(nums) {
    let zeroesCounter = 0;
    for(let i = 0; i < nums.length; i++){ 
        if(nums[i] === 0){
            zeroesCounter++;
        }else if(zeroesCounter > 0){
            nums[i - zeroesCounter] = nums[i];
            nums[i] = 0;
        }
        
    }
    return nums;
};

let input = [1];

console.log(moveZeroes(input));