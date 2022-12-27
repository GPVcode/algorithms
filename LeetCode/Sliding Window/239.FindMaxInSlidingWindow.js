
var maxSlidingWindow = function(nums, k) {

    if( nums.length === 0 || k < 1 || k > nums.length) return [];

    const result = [];
    const deque = [];
 
    for(let i = 0; i < nums.length; i++){
        while( deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]){
            deque.pop(); 
        }
        deque.push(i);
        if(deque[0] < i - k + 1){
            deque.shift();
        }
        if(i >= k - 1){
            result.push(nums[deque[0]]);
        }
    }
        
    return result
}; 
/*                   i=4
nums = [1, 3, -1, -3, 5] 
k = 2
expectedOutput = [3, 3, -1, 5] 
result = [3, 3, -1, 5]
deque = [4]
*/
/* 
if
nums: [1, 3, -1, -3, 5, 3, 6, 7] 
k: 3, 
then 
the sliding windows of size k are [1, 3, -1], [3, -1, -3], [-1, -3, 5], [-3, 5, 3], [5, 3, 6], and [3, 6, 7]. 
The maximum values of these windows are 3, 3, 5, 5, 6, and 7
Therefore
the function should return [3, 3, 5, 5, 6, 7].
*/


// Understand the problem

// Devise a plan

// code it out 

// refactor


    //Edge cases:return empty array if window size is invalid or if array is empty

    //Initialze the result array and the deque

    //slide the window throught the array

    //For loop
        //Step 1: remove all elements from deque that are smaller than the current element
        //use a while loop

        //Step 2: add the current index to the deque

        //Step 3: remove the first element from the deque if its out of the current window

        //Step 4: if current window is of the size k, append the maximum element (i.e., the elements at the fron of the deque) to the result array
        
        //return result

































// //First, validate the input window size and create data structures to store our results.
// //To validate the input, we first check if the array is empty and set the window size to the length of the input array if the window size is greater than the input array.
// //Next, iterate through all the elements contained in the window. In each iteration, compare the current element of the window with the last element of the window. Next, remove the index of the smaller element from the window. Lastly, add the index of the current element at the end of the queue
// //After processing the first window, the steps above are repeated for all possible windows and the max of each window is appended to the result array. Next, the result array containing the max element of each window is returned.

// const findMaxInSlidingWindow = function (nums, windowSize){
//     //use window as a double-ended queue and perform push and pop
//     let result = [],
//     window = [];

//     //Return empty list, if nums is empty
//     if(nums.length == 0) return result;


//     //if window_size is greater than the array size, set the window_size to nums.size()
//     if(windowSize > nums.length) windowSize = nums.length;
    
//     for(let i = 0; i < windowSize; i++){
//         //For every element, remove the previous smaller elements from window
//         while(window.length && nums[i] > nums[window[window.length - 1]]){
//             window.pop();
//         }
//         //Add current element at the back of the queue
//         window.push(i);
//     }
//  // Appending the larget element in the window to the result
// result.push(nums[window[0]]);

//     for(let i = windowSize; i < nums.length; i++){
//         // Remove the first index from the window deque if it doesn't fall in the current window anymore
//         if(window.length && window[0] <= i - windowSize) window.shift();
//         // Remove all numbers that are smaller than current number from the tail of list
//         while(window.length && nums[i] >= nums[window[window.length - 1]]){
//             window.pop();
//         }

//         window.push(i);
//         result.push(nums[window[0]]);
//     }

//     return result;
// };



// input: -4, 2, -5, 1, -1, 6

// window: 5

// result: 2, 2, 1, 6



// /*


// Gabriel Villaruel
// Write a script explaining how to solve the following algorithm export function findMaxSlidingWindow(nums, w) {
//     // your code will replace this placeholder return statement
//     return [];
// }
// Sure! Here is a script that explains how to solve the findMaxSlidingWindow function:

// Purpose

// The findMaxSlidingWindow function takes in an array of numbers nums and an integer w, and returns an array of the maximum values of all the sliding windows of size w in the given array.

// For example, if nums is [1, 3, -1, -3, 5, 3, 6, 7] and w is 3, then the sliding windows of size w are [1, 3, -1], [3, -1, -3], [-1, -3, 5], [-3, 5, 3], [5, 3, 6], and [3, 6, 7]. The maximum values of these windows are 3, 3, 5, 5, 6, and 7, respectively. Therefore, the function should return [3, 3, 5, 5, 6, 7].

// Approach

// We can solve this problem using a sliding window approach, where we keep track of the maximum value in the current window as we slide the window through the array.

// To do this, we can use a double-ended queue (also known as a deque) to store the indices of the elements in the current window. The deque should be maintained such that the elements are in decreasing order from front to back, with the maximum element at the front of the deque.

// Then, as we slide the window through the array, we can follow these steps:

// If the current index is greater than the last index in the deque, we remove all elements from the deque that are smaller than the current element. This is because these elements will no longer be part of any future sliding window that includes the current element.

// We add the current index to the deque.

// If the first element in the deque is out of the current window (i.e., its index is less than i - w), we remove it from the deque.

// If the current window is of size w, we append the maximum element (i.e., the element at the front of the deque) to the result array.

// Implementation

// Here is how we can implement the findMaxSlidingWindow function in JavaScript:

// Copy code

// */
// Sure! Here is how you can implement the findMaxSlidingWindow function:

// Copy code
// function findMaxSlidingWindow(nums, w) {
//   // Edge case: if the array is empty or the window size is invalid, return an empty array
//   if (nums.length === 0 || w < 1 || w > nums.length) return [];

//   // Initialize the result array and the deque
//   const result = [];
//   const deque = [];

//   // Slide the window through the array
//   for (let i = 0; i < nums.length; i++) {
//     // Step 1: remove all elements from the deque that are smaller than the current element
//     while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
//       deque.pop();
//     }

//     // Step 2: add the current index to the deque
//     deque.push(i);

//     // Step 3: remove the first element from the deque if it is out of the current window
//     if (deque[0] < i - w + 1) {
//       deque.shift();
//     }

//     // Step 4: if the current window is of size w, append the maximum element (i.e., the element at the front of the deque) to the result array
//     if (i >= w - 1) {
//       result.push(nums[deque[0]]);
//     }
//   }

//   return result;
// }
// // This function should work correctly for any valid input array nums and window size w. Let me know if you have any questions or if you'd like to see some examples of how to use this function.