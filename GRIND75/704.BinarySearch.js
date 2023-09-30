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

/*
Core Understanding:
    find target in array
Devising a Plan:
    start with two pointers left and right
    while left is less than right
        finding middle cut iteration in half
        check if target is greater than or less than middle
        update left and right pointers depening on target's comparison with middle
    return -1 after while loop ends and middle never equals target
Coding it Out:
                                              
*/
const search3 = function(nums, target) {
    // create pointer
    let left = 0, right = nums.length - 1;

    while(left < right){
        // get middle
        let middle = left + Math.floor((right - left + 1) / 2);
        if( target < nums[middle] ){
            right = middle - 1;
            // update left and right accordingly
        } else{
            left = middle;
        }
    }
    return nums[left] === target ? left : -1;
}

console.log("search3:", search3([-1,0,3,5,9,12], 0));


/*
Core Understanding:
    Use recursion to find number in array, return -1 if not found
Devising a Plan:
    create base case 
        if nums length is zero return -1
    check if target is greater or less than middle
    return recursive function 
Coding it Out:
*/
const search4 = function(nums, target){

    const recursionHelper = function(start, end){
        // base 
        if( start > end ) return -1;
        const middle = Math.floor((start + end) / 2);
        if(target === nums[middle]) return middle;
        console.log("start:", start)
        console.log("end:", end)

        //check if target is less than or greater than middle number
        if(target > nums[middle]) return recursionHelper(middle + 1, end)
        return recursionHelper(0, middle - 1)
    }

    return recursionHelper(0, nums.length - 1)
}

console.log("search4:", search4([-1,0,3,5,9,12], 12));

/*
Core Understanding:
    use Binary search to find target
Devising a Plan:
    find low and high
    check if middle equals target 
        if target less than middle, update high
        if target greater than middle, update low
        if target equals middle, return
    m = (lo + (hi - lo) / 2) 
    v = arr[m]
Coding it Out:
*/
const search5 = function(nums, target){

    let low = 0, high = nums.length - 1;
    // console.log("middle:", middle)
    
    while(low < high){
        let middle = low + Math.floor((high - low) / 2)
        if(target === nums[middle]) return middle;
        else if(target < nums[middle]) high = middle;
        else low = middle + 1;
    }

    return nums[low] === target ? low : -1
}

console.log("search5:", search5([-1,0,3,5,9,12], 3));

 
console.log("search6:", search6([-1,0,3,5,9,12], 12));
