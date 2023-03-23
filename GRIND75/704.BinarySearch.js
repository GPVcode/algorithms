/*
 * 
 * [704. Binary Search] - https://leetcode.com/problems/binary-search/
 * 
 * Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * Example 1:
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 * 
 * Example 2:
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 * 
 */

 /*
Understand the question
    output index of target using BFS
Devise a plan
    create index variable
    while nums.length
        shift first element
        compare to target, return index if truthy
        increment index
        return -1;
Code: Binary Search

 */
const search = function(nums, target) {
    // create arr
    let index = 0;

    while(nums.length){
        let node = nums.shift();
        if(node === target){
            return index;
        }
        index++;
    }
    return -1
};

console.log("search:", search([-1,0,3,5,6,12], 9));


 /*
Understand the question
    return index of target
Devise a plan
    loop through until match is found
    set index as result
    return result
Code

 */
const search2 = function(nums, target) {

    for(let i = 0; i < nums.length; i++){

        if(nums[i] === target) return i;
        
    };
    return -1;
};