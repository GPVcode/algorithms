//First, validate the input window size and create data structures to store our results.
//To validate the input, we first check if the array is empty and set the window size to the length of the input array if the window size is greater than the input array.
//Next, iterate through all the elements contained in the window. In each iteration, compare the current element of the window with the last element of the window. Next, remove the index of the current element at the end of the queue
const findMaxInSlidingWindow = function (nums, windowSize){
    //use window as a double-ended queue and perform push and pop
    let result = [],
    window = [];

    //Return empty list, if nums is empty
    if(nums.length == 0) return result;

    //if window_size is greater than the array size, set the window_size to nums.size()
    if(windowSize > nums.length) windowSize = nums.length;
    
    return windowSize;
};