/*
 * 
 * 217. Contains Duplicate - https://leetcode.com/problems/contains-duplicate/
 * 
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct. 
 * 
 * Example 1:
 * Input: nums = [1,2,3,1]
 * Output: true
 * 
 * Example 2:
 * Input: nums = [1,2,3,4]
 * Output: false
 * 
 * Example 3:
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 * 
 */

/*
Understand:
    return true if dupes exist, otherwise return false
Plan:
    use nested loops. 
        find pairs and if count becomes greater than 1 return false
Code: Brute Force
*/
 
const containsDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++){
        let count = 0;
        for(let j = i; j < nums.length; j++){
            if(nums[j] === nums[i]) count++;
            if(count > 1) return true;
        }
    }
    return false
};

console.log("containsDuplicate:", containsDuplicate([1,2,3,1]))


/*
Understand:
    return true if dupes exist, otherwise return false
Plan:
    create map
    loop through
        if in map return true
        else add to map
Code: hashmap
*/
 
const containsDuplicate2 = function(nums) {
    let map = {};

    for(let char of nums){
        if(map[char]) return true;
        else map[char] = 1
    }

    return false
};

console.log("containsDuplicate:", containsDuplicate([1,2,3,4]))