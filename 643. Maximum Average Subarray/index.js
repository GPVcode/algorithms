/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * 643. Maximum Average Subarray I 
 * https://leetcode.com/problems/maximum-average-subarray-i/
 */
var findMaxAverage = function(nums, k) {
    let windowSum = 0;

    for(let i = 0; i < k; i++){
        windowSum += nums[i];
    };

    let maxSum = windowSum;

    for(let i = 0; i < nums.length - k; i++){
        windowSum = windowSum - nums[i] + nums[i + k]
        maxSum = Math.max(maxSum, windowSum)
    }

    return maxSum / k
};