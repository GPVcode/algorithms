/**
 * 35. Search Insert Position
 * 
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * 
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Example 1:
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 * 
 * Example 2:
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 * 
 * Example 3:
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 * 
*/

/*
    Understand the Problem:
        find location(index) of target value. If target does not exist in array, return the index it would be found at if it did exist.
    Devise a Plan:
        loop through array
            use conditionals to check greater than, less than, or equal to value
            return index as appropriate
    Code it Out:
*/

const searchInsert1 = function(nums, target) {
    // don't think I will need accumulator

    //loop
    for(let i = 0; i < nums.length; i++){
        // if condition
        if(nums[i] === target) return i;
        if(target < nums[i]) return i;
        if(target > nums[i] && target < nums[i + 1]){
            return i + 1
        } 
    }
        // return index
        return nums.length
};

console.log("searchInsert1:", searchInsert1([1,3,5,6], 7)) // output: 4

// Teddy's code
const searchInsert2 = function(nums, target) {
    for(let idx = 0; idx < nums.length; idx++) {
        if (nums[idx] >= target) {
            return idx;
        } else if (idx === nums.length - 1) {
            return idx + 1;
        }
    }
};

console.log("searchInsert2:", searchInsert2([1,3,5,6], 0)) // output: 0


const searchInsert3 = function(nums, target) {
    let i = 0
    //loop
    while(i < nums.length){
        // if target less than current value
        if(nums[i] >= target) return i;
        //otherwise target should be placed at end
        else if(i === nums.length - 1)return i + 1
        //keep it moving
        i++;
    }
};

console.log("searchInsert3:", searchInsert1([1,3,5,6], 0)) // output: 0