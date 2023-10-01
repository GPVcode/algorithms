# Objective
Understand and implement the logic behind moving all zeroes in a list to its end while maintaining the relative order of the non-zero elements.

# Engage
Imagine you have a magic wand, and with a flick, you can push all obstacles out of your way. In today's algorithm world, these 'obstacles' are the number '0', and we'll move them all to the end of the list.
 
# Understanding the Problem
- Move all zeroes in the list to the end withut changing the order of other numbers.
- if there are 'n' zeroes, then at the end of the operation, the last 'n' numbers in the array should be zeroes. 

# Approach
- Create a pointer called position initialized to 0.
- iterate through the 'nums' list. When non-zero element is found, place it at nums[position] and icrement 'position.
- After iterating through list, loop again starting from 'position' and turn all values to zero.

# Complexity
- Time complexity:  0(n), n is the length of nums list and we are traversing the list twice.

- Space complexity: 0(1), We only use a fixed amount of extra space(the 'position' variable).

# Code
```
/* JavaScript */
var moveZeroes = function(nums) {
    let position = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[position] = nums[i]
            position++
        }
    }

    for(let i = position; i < nums.length; i++){
        nums[i] = 0;
    }
};
```
```
/* Python */
def moveZeroes(nums):
    position = 0  # Position to place the next non-zero element

    for num in nums:
        if num != 0:
            nums[position] = num
            position += 1

    # Fill the rest of the array with zeros
    for i in range(position, len(nums)):
        nums[i] = 0
```

# Extended Engagement
This of this like cleaning up your room. All toy (non-zero element) have their own special place, but empty boxes(zeroes) are all stacked together at the end. This skill helps in many real-world scenarios where we need organized data.

# Summary
Fantastic work! Today, we've learned to organize our list by moving zeroes to the end. Keey practicing and try to think of situations where organizing can be handy! Where are other scenarioes where a similar "organizing" or "separating" principle might be used?
