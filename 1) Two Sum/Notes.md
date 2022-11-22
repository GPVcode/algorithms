Question: Given an array of integers, return the indices of the two numbers that add up to a given target

    -This question helps us understand how arrays can show up inside of our interviews and gives us a good chance to walk through the process of how to tackle and answer algorithm questions
    -First, lets walk through how these questions are set up and understand what the questions is asking me to accomplish.

Given an array of integers, return the indices of the two numbers that add up to a given target.
    -first we'll receive an array of integers(whole numbers)
    -the second argument we'll recieve is a target. We need to figure out what pairs add up to our target values and return the indices of the two numbers.

Step 1: Verify the contraints
 
    - Are all the numbers positive or can there be negatives? Guarantees all values are positive.
    - Are there duplicates? Ensures numbers don't occur more than once.
    - Will there always be a solution? Code solution needs to figure out whether or not two numbers exist in the array that add up to the target.
    - Ask what to do if there is no solution. (Just return null)
    - Can there be multiple pairs that will add up to the target value?

Summary: Work with interviewer to verify the contraints. Clever questions to ask are: Are there negative integers in this array? Are there duplicates? Is there always going to be a pair in the array? If not, simply return null. Can there be multiple pairs?
Step 2: Write out some test cases