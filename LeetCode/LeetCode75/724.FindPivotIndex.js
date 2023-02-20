/** [724. Find Pivot Index]
 * 
 * 
 *
 * Given an array of integers nums, calculate the pivot index of this array.
 * 
 * The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
 * 
 * If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
 * 
 * Return the leftmost pivot index. If no such index exists, return -1.
 * 
 * 
 * 
 * Example 1:
 * Input: nums = [1,7,3,6,5,6]
 * Output: 3
 * Explanation:
 * The pivot index is 3.
 * Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
 * Right sum = nums[4] + nums[5] = 5 + 6 = 11
 * 
 * Example 2:
 * Input: nums = [1,2,3]
 * Output: -1
 * Explanation:
 * There is no index that satisfies the conditions in the problem statement.
 * 
 * Example 3:
 * Input: nums = [2,1,-1]
 * Output: 0
 * Explanation:
 * The pivot index is 0.
 * Left sum = 0 (no elements to the left of index 0)
 * Right sum = nums[1] + nums[2] = 1 + -1 = 0
 * 
 */

/*
    Understand the Problem:
        return the index in between values whose sum equal each other
        return -1 is index is not found
    Devise a Plan:
        Create variables that store numbers to help solve problem
        Get the sum off all numbers
        Loop through array
            subtract from sum and track that as rightNum
            add value to keep track of left number
                when left and right equal, perhaps we have found our index?
    Code: 
                                                     i
                                Input: nums = [1,7,3,6,5,6]
                            * Output: 3
*/

const pivotIndex = function(nums) {
    // create Left and Right
    let leftSum = 0, rightSum = 0; // leftSum = 11, rightSum = 11;

    //store total sum to right sum
    nums.forEach(n => rightSum += n)
    // console.log("rightSum:", rightSum)
    
    //loop through array
    for(let i = 0; i < nums.length; i++){
        //subtract curr value from total sum
        rightSum -= nums[i];
        //if rightSum === leftSum return index
        if(rightSum === leftSum){
            return i;
        } 
        //otherwise add current value to left sum
        else {
            leftSum += nums[i];
        }
    }
    //return -1 if index not found
    return -1;
};

console.log("pivotIndex:", pivotIndex([1,7,3,6,5,6]))