## Question: Given an array of integers, return the indices of the two numbers that add up to a given target

    - This question helps us understand how arrays can show up inside of our interviews and gives us a good chance to walk through the process of how to tackle and answer algorithm questions
    - First, lets walk through how these questions are set up and understand what the questions is asking me to accomplish.

Given an array of integers, return the indices of the two numbers that add up to a given target.
    - first we'll receive an array of integers(whole numbers)
    - the second argument we'll recieve is a target. We need to figure out what pairs add up to our target values and return the indices of the two numbers.

### Step 1: Verify the contraints.
Why should I verify the constraints? To figure out potential edge cases in the algorithm
 
    - Are all the numbers positive or can there be negatives? Guarantees all values are positive.
    - Are there duplicates? Ensures numbers don't occur more than once.
    - Will there always be a solution? Code solution needs to figure out whether or not two numbers exist in the array that add up to the target.
    - Ask what to do if there is no solution. (Just return null)
    - Can there be multiple pairs that will add up to the target value?

Summary of "Verify the contraints": Work with interviewer to verify the contraints. Clever questions to ask are: Are there negative integers in this array? Are there duplicates? Is there always going to be a pair in the array? If not, simply return null. Can there be multiple pairs?

### Step 2: Write out some test cases.
[1, 3, 7, 9, 2] t = 11 solution: [3, 4]
[1, 3, 7, 9, 2] t = 25 solution: null
[] t = 1 solution: null
[5] t = 5 solution: null
[1, 6] t = 7 solution: [0, 1]

Summary of "Write out some test cases": finding regular solution; no solution = null; no array = null; only one value = null, only two value add up to solution [0, 1] are sufficient tests to filter out our edge cases.

### Step 3: Write out a solution without code.
Think of a working logical solution that works for all the test cases I just came up with.
At this stage Idon't even want to think about the optimal solution. A working solution is our priority over a non-working optimal solution.

How do I make sure that I know there exists a pair that adds up to the target?
    - A sensible way is to try every single possible combination of pairs using a common technique called the "two-pointer" technique. Compare P1 to P2
How do we know that we have the correct pair?
    - I'll need to come up with some kind of formula. The number to find is equal to our target minus the value at P1. 
    - NumToFind[P2](10) = target(11) - nums[p1](1)

Smumary of "write a solution without Code": At this point, I won't think about optimal solutions. Working code is better than non-working optimal code. First ask, how will I find out if a pair exists in the array which adds to the target? A logical solution is to check every single pair in the array using the two pointer technique. The next question is - how do I know I have the right pair? I have the right pair when numToFind[p2] = target - nums[p1]

### Step 4: Write out the solution we came up with in code.
See BruteForceSOlution.js

### Step 5: Double check for errors
Summary: do the due diligence on code to make sure code runs perfectly in IDE

### Step 6: Test our code with test cases
Summary: Test our code against our test cases. Have the ability to explain the code line for line.

Here: the link to excercise on leet code. Check your code here.5
https://leetcode.com/problems/two-sum/

### Step 7: Space and Time Complexity
Summary: Analyze Space and Time complexity. Because I used two loops to find the pair that adds to target, the time complexity of my code is O(N^2). The space complexity is as goo as it gets. Can We optimize our code further? Since the time complexity is O(N^2), we certainly can!

### Step 8: Optimize Solution
Can I utilize more space to bring down the time complexity?
What's taking up this time complexity?
Is there a way to remove code, merge my two, or multiple pieces of code for more efficient code?

### Step 9: Code the optimal solution

### Step 10: Run through test cases using our optimal solution
With the new optimal code, our time complexity improves to O(N), slightly more space is used at O(N)