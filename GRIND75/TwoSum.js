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
/*
Understand the question:
    return the indices who values sum to target  input: [1, 1] target = 2 output: [0, 1]
Devise a plan:
    Use nested loops to find pair of target. return the indexes when pair is found
Code:
    Brute force
*/

var twoSum = function(nums, target) { 
    //brute force
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] + nums[i] === target) return [i,j]
        }
    }
}

// console.log(twoSum([2, 7, 11, 15], 9))

/*
Understand the question:
    return the indices who values sum to target  input: [1, 1] target = 2 output: [0, 1]
Devise a plan:
    create map to store values
        loop through array to fill up man and set value of key value pair to index
        find difference between two numbers. This difference is what we'll loop for. If the difference exists, return the appropriate indexes
Code:
    >>Hashmap Solution<<
*/

var twoSum = function(nums, target) { 
    //create map {}
    let map = {};

    //loop through array
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        //if i is not in map store the value
        if(diff in map) return [map[diff], i]
        else map[nums[i]] = i;
    }
    console.log(map)
}

console.log(twoSum([2, 7,11,15], 9))