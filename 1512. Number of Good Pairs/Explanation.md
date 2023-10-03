# Objective
Identify pairs in a list that match a given criteria. Through this exercise, we can gain an appreciation for nested loops and counting strategies. We'll further our adventure by learning a more efficient method to solve the same problem, introducing the concept of a hashmap/dictionary for counting.

# Engage
Have you ever paired socks from a laundry pile? Imagine trying to find pairs that are identical. That's what we are going to do. but with numbers. Then, we'll get even smarter about it by sorting or grouping the socks in such a way that beats comparing every sock with every other sock. 

# Understanding the Problem
- We have an array of numbers.
- We want to count pairs of numbers that are identical, but the second number must come after the first in the list.

# Approach
### Solution 1: 
- Use two loops. the outer loop picks the first number of the pair, and the inner loop picks the second number
- For each combination, check if the two numbers are the same.
- If the are, count it as a good pair
### Solution 2:
- As we go through our list of numbers, keep count of how many times each number appears using a dictionary.
- If a number appears n times, the number of pairs we can form with that number is (n(n-1)) / 2. This is because the first item can pair with n-1 items, the next with n - 2, and so on down to 1.


# Time Complexity
### Solution 1: 
0(n^2), n is the length of nums array. Nested loops worst case have to compare almost every pair.
### Solution 2: 
0(n), Go through list twice - once to count numbers and once to calculate pairs.
# Space complexity:
### Solution 1: 
0(1), fixed amount of space used (just "count" variable)
### Solution 2: 
0(n), In worst case, every number is unique and dictionary/hashmap store them all.
# Code
```
Solution 1

JavaScript
function numIdenticalPairs(nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
    }

    return count;
}

Solution 1
Python
def numIdenticalPairs(nums):
    count = 0

    for i in range(len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] == nums[j]:
                count += 1
                
    return count
```
```
Solution 2

JavaScript
var numIdenticalPairs = function(nums) {
    let numCount = {};
    for(let num of nums){
        numCount[num] = (numCount[num] || 0) + 1;
    }

    let count = 0;
    for(let key in numCount){
        let n = numCount[key];
        count += (n * (n-1))/2
    }

    return count
};

Python
def numIdenticalPairs(nums):
    # Step 1: Count the occurrences of each number
    num_count = {}
    for num in nums:
        if num in num_count:
            num_count[num] += 1
        else:
            num_count[num] = 1

    # Step 2: Calculate the number of pairs for each number
    count = 0
    for key in num_count:
        n = num_count[key]
        count += n * (n-1) // 2
                
    return count

```

# Extended Engagement
WIth these approaches, we efficiently kept track of numbers and made our calculations. Imagine trying to sort a big basket of multi-colored balls. Instead of comparing every ball with every ball, we first count how many balls of each color we have. Then we can easily say how many pairs we can make of each color!

# Summary:
Today, we leaned that with a bit of strategy, we can improve our methods and solve problems more efficiently. It's like the difference between searching for a book in an unsorted pile versus a well-organized shelf. Always remember: it's not just about finding the answer, it's about finding it in the smartest way!
