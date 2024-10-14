/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 283. Move Zeroes - https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75
*/
var moveZeroes = function(nums) {
    let position = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[position] = nums[i]
            position++
        }
    }

    for(let i = position; i < nums.length; i++){
        nums[i] = 0;
    }
};