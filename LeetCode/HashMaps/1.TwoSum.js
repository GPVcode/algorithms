/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 * 
 * Example 1:
 *   Input: nums = [2,7,11,15], target = 9
 *   Output: [0,1]
 *   Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *   
 * Example 2:
 *   Input: nums = [3,2,4], target = 6
 *   Output: [1,2]
 * 
 * Example 3:
 *   Input: nums = [3,3], target = 6
 *   Output: [0,1]
 * 
 */
var twoSum = function(nums, target) {   // nums = [3,3] target 6
    //create map
        const map = {};  // {'3': 0, }

    for(let idx = 0; idx < nums.length; idx++){
        // second value is found by subtracting target by nums[i]
        let matchingPair = target - nums[idx]; // matchingPair >>>>>>> 6 - 3 = 3
        // if condition. Check if value in map
        if(matchingPair in map){
            // if so return value
            return [map[matchingPair], idx]// [0, 1] some array with indices
        }
        // otherwise set value into map
        map[nums[idx]] = idx;
    }

};

console.log(twoSum([3,3], 6))
/*
Understand the question:
    return the indices who values sum to target  input: [1, 1] target = 2 output: [0, 1]
Devise a plan:
    use map to store key value pairs to help find answer
    use for loop to iterate
    if conditions
    return array of indices
Code:

*/