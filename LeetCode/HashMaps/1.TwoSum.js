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
    use map to store key value pairs to help find answer
    use for loop to iterate
    if conditions
    return array of indices
Code:
    >>Hashmap Solution<<
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
console.log("twoSum:", twoSum([3,3], 6))



/*
Understand the problem:
    There is exactly one solution. Find the indices whose values add to target
Devise a plan:
    use nested loops to compare values. If sum of two values equals target, return the index.
Code:
    >>Brute Force Solution<<
*/
                            
var twoSum2 = function(nums, target) {   // nums = [3,3,3,4,5,6,7] target 6
    // create empty array                               1
    let result = [];
    //use nested loops to compare two values
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                result.push(i)
                result.push(j)
            }
        }
    }
    //return array after loop is finished
    return result
};

console.log("twoSum2:", twoSum2([2,7,11,15], 9)) //target = 9 output: [0, 1]



/*
Understand the problem:
    There is exactly one solution. Find the indices whose values add to target
Devise a plan:
    create empty array, and two points we'll use to compare values
    loop through and check sum values of numbers at two points
        decrement end point to continue finding values that add to target
Code:
    >>Two-Pointer Solution<<
*/
var twoSum3 = function(nums, target) {   // nums = [2,7,11,15] target = 9
    //create empty array, start and end
    let slow = 0, fast = slow + 1;
    let results = null;

        //while loop?
        while(true){ 
            let sum = nums[slow] + nums[fast]; // 17
            if(sum === target){
                results = [slow, fast];
                break;
            };
            fast++;
            if(fast >= nums.length){
                slow++;
                fast = slow + 1;
            };
            if(slow >= nums.length) break;
        };
        return results
};

console.log("twoSum3:", twoSum3([3, 2, 4], 6)) //target = 6 output: [1, 2] 

/*
Understand the problem
    find the first indices that sum to our target. Return these indices in array form.
Devise a plan
    use map to store key value pairs.
    use key value pairs to check if number to find is stored
    use the numToFind as key in map and the index as it's value
    if stored, we found our indices to find and return its value and the current i in array

Code:
*/
//Hashmap storing number to find as Key
var twoSum4 = function(nums, target) {   // nums = [3, 2, 4] target = 6
    //create map = {'3': 0, '4': 1, '': }
    let map = {};
    //loop through nums array;
    for(let i = 0; i < nums.length; i++){
        //create var for number to find
        let numToFind = target - nums[i]; // 6 - 4 = 2;
        if(nums[i] in map){ 
            return [map[nums[i]], i] //[1, 2]
        } else{
            map[numToFind] = i; //map[4] = 1
        }
    }
};

console.log("twoSum3:", twoSum4([3, 2, 4], 6)) //target = 6 output: [1, 2] 
