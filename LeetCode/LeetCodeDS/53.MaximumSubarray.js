/**
 * [53. Maximum Subarray]
 * 
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
 * 
 * Example 1:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 * 
 * Example 2:
 * Input: nums = [1]
 * Output: 1
 * Explanation: The subarray [1] has the largest sum 1.
 * 
 * Example 3:
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 * Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 * 
**/

/*
Understand:
    return the largest sum found inside of array

Plan:
    use nested loops to get sum of each subarray
    update new largest sum with each iteration

Code: BRUTE FORCE
                                                                    i
                                                                [-2,1]
                                                                    j
 */

const maxSubArray = function(nums) {
    //create largest sum
    let largestSum = -Infinity; // largestSum = 1

    for(let i = 0; i < nums.length; i++){     
        //tempSum
        let tempSum = 0  //tempSum = 1
        for(let j = i; j < nums.length; j++){
            //add to temp sum
            tempSum += nums[j];
            //compare temp sum to largest sum. Update if tempsum > largestSum
            if(tempSum > largestSum) largestSum = tempSum;
        }
    }
    return largestSum;
};

console.log("maxSubArray:", maxSubArray([-2,1]))  //largestSum = 1;

/*
Understand:
    return the largest sum found inside of array
Plan:
    //initialize max variableto first value
    //create sum variable to hold sum

    //loop thorugh array
        // add current value to sum
        // if sum greater than max, set new max
        // if sum < 0, reset sum to 0;
                                                                                                   i
                                                                       nums = [-2,1,-3,4,-1,2,1,-5,4]

Code:
 */
var maxSubArray2 = function(nums) {
    //initialize max to first number
    let max = nums[0];   // 6
    let sum = 0;         // 5
    //loop through nums
    for (let i = 0; i < nums.length; i++) {
        //add value to sum
        sum += nums[i];
        if (sum > max) {
            max = sum;
        }
        //reset to zero if sum is less than 0
        if (sum < 0) {
            sum = 0;
        }
    }
    return max;
};

console.log("maxSubArray2:", maxSubArray2([-2,1,-3,4,-1,2,1,-5,4])) //output: 6