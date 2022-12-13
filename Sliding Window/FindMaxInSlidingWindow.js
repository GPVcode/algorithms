//First, validate the input window size and create data structures to store our results.
//To validate the input, we first check if the array is empty and set the window size to the length of the input array if the window size is greater than the input array.
//Next, iterate through all the elements contained in the window. In each iteration, compare the current element of the window with the last element of the window. Next, remove the index of the smaller element from the window. Lastly, add the index of the current element at the end of the queue
//After processing the first window, the steps above are repeated for all possible windows and the max of each window is appended to the result array. Next, the result array containing the max element of each window is returned.

const findMaxInSlidingWindow = function (nums, windowSize){
    //use window as a double-ended queue and perform push and pop
    let result = [],
    window = [];

    //Return empty list, if nums is empty
    if(nums.length == 0) return result;


    //if window_size is greater than the array size, set the window_size to nums.size()
    if(windowSize > nums.length) windowSize = nums.length;
    
    for(let i = 0; i < windowSize; i++){
        //For every element, remove the previous smaller elements from window
        while(window.length && nums[i] > nums[window[window.length - 1]]){
            window.pop();
        }
        //Add current element at the back of the queue
        window.push(i);
    }
 // Appending the larget element in the window to the result
result.push(nums[window[0]]);

    for(let i = windowSize; i < nums.length; i++){
        // Remove the first index from the window deque if it doesn't fall in the current window anymore
        if(window.length && window[0] <= i - windowSize) window.shift();
        // Remove all numbers that are smaller than current number from the tail of list
        while(window.length && nums[i] >= nums[window[window.length - 1]]){
            window.pop();
        }

        window.push(i);
        result.push(nums[window[0]]);
    }

    return result;
};



input: -4, 2, -5, 1, -1, 6

window: 5

result: 2, 2, 1, 6