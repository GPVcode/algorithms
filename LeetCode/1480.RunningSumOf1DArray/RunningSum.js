/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function(nums) {
    const results = [];
    let currentSum = 0;
    for(let i = 0; i < nums.length; i++){
        currentSum += nums[i]
        results.push(currentSum)
    }
    return results
};

/*
Understand the Problem:
    Iterate through each index and for each passing index value, store the sum to an array.
Devise a Plan:
    Have an empty array to store results
    Have another var to store current sum
    loop through index and push a sum value
    return once loop is finished.
Code It Out:

Refactor:
*/


var runningSum2 = function(nums) {
    const results = [];
    let counter = 1;
    let currentCount = 0;
    for(let i = nums.length - 1; i >= 0; i--){
        currentCount += counter*nums[i];
        results.push(currentCount);
        counter++;
    }
    return results.reverse();
}