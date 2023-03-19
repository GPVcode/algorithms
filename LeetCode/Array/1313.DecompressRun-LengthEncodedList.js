/*
 * 
 * [1313. Decompress Run-Length Encoded List] - https://leetcode.com/problems/decompress-run-length-encoded-list/description/
 * 
 * We are given a list nums of integers representing a list compressed with run-length encoding.
 * 
 * Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.
 * 
 * Return the decompressed list.
 * 
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [2,4,4,4]
 * Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
 * The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
 * At the end the concatenation [2] + [4,4,4] is [2,4,4,4].
 * 
 * Example 2:
 * Input: nums = [1,1,2,3]
 * Output: [1,3,3]
 * 
 */

/*
Core Understanding:
    look at two elements. Take left as frequency and right as value. Push that right value left many times in new array and output when finished
Devising a Plan:
    use two pointers
    set left as part of forumula something like --> * [left]
    use right as value to push into new array
    keep pointers moving
Coding it out:
*/
const decompressRLElist = function(nums) {
    //empty array
    let arr = [];
    let left = 0, right = 1;

    while(left <= nums.length - 2){
        let value = nums[right];
        let freq = nums[left];
        for(let i = 0; i < freq; i++){
            arr.push(value)
        }
        left+=2
        right+=2
    }

    return arr;
};

console.log("decompressRElist:", decompressRLElist([1,2,3,4]))

//come back to this
const decompressRLElist2 = function(nums) {
    //empty array
    let arr = [];
    
    for(let i = 1; i < nums.length; i += 2){
            arr.push(...new Array(nums[i - 1]).fill(nums[i]));
    }
    return arr;
};

console.log("decompressRElist:", decompressRLElist2([1,2,3,4]))