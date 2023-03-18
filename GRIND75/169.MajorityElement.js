/* 
 * 
 * [169. Majority Element] - https://leetcode.com/problems/majority-element/
 * Given an array nums of size n, return the majority element.
 * 
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 * 
 * Example 1:
 * Input: nums = [3,2,3]
 * Output: 3
 * 
 * Example 2:
 * Input: nums = [2,2,1,1,1,2,2]
 * Output: 2
 * 
 */

/*
Core Understanding:
    return the element that appear in the array more than 50% of the time
Devising a Plan:
    use brute force to compare values.
        use counter to store count
        if counter > n/2 return that value
Coding it Out: Brute Force
*/
const majorityElement = function(nums) {
    //loop through
    for(let i = 0; i < nums.length; i++){
        let counter = 0;
        for(let j = 0; j < nums.length; j++){
            if(nums[i] === nums[j]) counter++;
            if(counter > nums.length / 2) return nums[i]
        }
    }
};

console.log("majorityElement:", majorityElement([3,2,3]))


/*
Core Understanding:
    return the element that appear in the array more than 50% of the time
Devising a Plan:
    create map to store value
    loop through and fill up map
    return key of highest value in map
Coding it Out: Hashmap
*/
const majorityElement2 = function(nums) {
    //create map
    let map = {};

    for(let num of nums){
        map[num] = (map[num] + 1) || 1;
    }
    let answer = Object.keys(map).reduce((a,b) => map[a] > map[b] ? a : b)

    return answer;
};

console.log("majorityElement2:", majorityElement2([3,2,3]))

