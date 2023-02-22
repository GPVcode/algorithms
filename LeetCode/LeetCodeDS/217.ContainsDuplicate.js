/**
 * [217. Contains Duplicate]
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
    iterate through array store value
    check if next iteration is in our stored values
    return true or false depending on value check
Code:
*/
 
const containsDuplicate = function(nums) {
    //create map
    let map = {};

    //loop through map
    for(let i = 0; i < nums.length; i++){
        //if in map, return false
        if(nums[i] in map){
            return true;
        }
        map[nums[i]] = i;
        //if not in map, store value
    }
    return false
};

console.log("Does this array contain duplicates? Answer:",containsDuplicate([1,2,3,4])) // output should say false
console.log("Does this array contain duplicates? Answer:",containsDuplicate([1,2,3,1])) // output should say true


/*
Understand:
    return true if dupes exist, otherwise return false
Plan:
    create set with array which automatically gets rid of duplicate numbers and returns an array
    check if length of nums input and size of new set is the same. If not, then return true because duplicates were present.
Code:
*/
 
const containsDuplicate2 = function(nums) {
    //create new set using input array
    let s = new Set(nums);
    console.log(s)
    return s.size !== nums.length
};

console.log("containsDuplicate2:", containsDuplicate2([1,2,3,4])) 