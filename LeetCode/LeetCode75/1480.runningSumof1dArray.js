/**
 * [1480. Running Sum of 1d Array]
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * 
 * Return the running sum of nums.
 * 
 * 
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [1,3,6,10]
 * Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 * 
 * Example 2:
 * Input: nums = [1,1,1,1,1]
 * Output: [1,2,3,4,5]
 * Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
 * 
 * Example 3:
 * Input: nums = [3,1,2,10,1]
 * Output: [3,4,6,16,17]
 */

 /*
    Understand the Problem:
        recreate and return a new array that adds the next index value to sum of each iterated index
        ex: input: [1, 1, 1, 1] output: [1, 2, 3, 4]
    Devise a Plan:
        create empty array
        have a current number holder
        loop through array
            add current index value to num holder
            push new num holder to array
        return
    Code: Brute Force
        const results = [];
        let currentSum = 0;
        for(let i = 0; i < nums.length; i++){
            currentSum += nums[i]
            results.push(currentSum)
        }
        return results
    Refactor: new Array
*/

var runningSum = function(nums) {
    //set array length to match input length to create space for new updates
    let result = new Array(nums.length) 
    //first value is the same as first value in input
    result[0] = nums[0];
    // loop through starting at 1. Index 0 is already set.
    for(let i = 1; i < nums.length; i++){
        // result of array index is previous number plus current number.
        result[i] = result[i - 1] + nums[i] 
    }
    //return our answer
    return result;
};