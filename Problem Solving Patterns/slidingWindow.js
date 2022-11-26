/*This section is regarding the sliding Window approach.
Creates a window that increases or closes (and a new window is created) depending on a certain condition
Useful for keeping track of a subset of data in ana rray or string.
*/

//maxSubarraySum: function that calculates the maximum sum of n consecutive elements in the array.


function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }
    console.log(maxSum)
    return maxSum
}
                                        
maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)

num = 3;
maxSum = 19; //answer
tempSum = 14;

//O(N)