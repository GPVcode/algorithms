# Objective
understand the concept of subarrays and implement a solution to find the maximum average subarray of a fixed size.

# Engage
Remember when you played a game and kept a record of your scores in different rounds? What if you wnated to find out the best sequence of rounds based on the average of scores? Today, we'll tackle this using a really cool technique.

# Understanding the Problem
Given a list of scores, we want to find the highest average score over a sequence of k rounds.

# Approach
- Calculate the sum of first k numbers. This is our starting window.
- Move this window throughout the array by subtracting the first number and adding the next number in sequence. This gives us the sum for the next window of 'k' numbers.
- Track the maximum sum as you slide the window.
- The maximum average will be the maximum sum divided by 'k'

# Complexity
- Time complexity: 0(n), n is the length of nums i list and we traverse the list once.

- Space complexity: 0(1), we only use a fixed amount of extra space.
- 
# Code
```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let windowSum = 0;

    for(let i = 0; i < k; i++){
        windowSum += nums[i];
    };

    let maxSum = windowSum;

    for(let i = 0; i < nums.length - k; i++){
        windowSum = windowSum - nums[i] + nums[i + k]
        maxSum = Math.max(maxSum, windowSum)
    }

    return maxSum / k
};
```

```
def findMaxAverage(nums, k):
    # Initial sum for the first k elements
    window_sum = sum(nums[:k])
    max_sum = window_sum

    # Slide the window
    for i in range(len(nums) - k):
        window_sum = window_sum - nums[i] + nums[i + k]
        max_sum = max(max_sum, window_sum)

    return max_sum / k
```

# Extended Engagement
Imagine this like finding the beat streak in the game. You played multiple rounds and want to know your best performance over 'k' continuous rounds. This skill can be used in many scenarios, like analyzing stock market performance over 'k' days.

## Summary:
Today, we've explored the magic of sliding windows in arrays to find the best segment of scores. Always remember that there's an algorithmic way to solve many of the problems you encounter. Think about other scenarios where the "sliding window" concept might be applicable. Can you measure performance in sports over 'k' games, or track health metrics over a set number of days?

