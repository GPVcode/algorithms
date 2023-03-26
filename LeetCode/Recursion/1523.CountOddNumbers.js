/*
 * 
 * [1523. Count Odd Numbers in an Interval Range] - https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/description/
 * 
 * Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).
 * 
 * Example 1:
 * Input: low = 3, high = 7
 * Output: 3
 * Explanation: The odd numbers between 3 and 7 are [3,5,7].
 * 
 * Example 2:
 * Input: low = 8, high = 10
 * Output: 1
 * Explanation: The odd numbers between 8 and 10 are [9].
 * 
 */

/*
Understand the Problem:
    return the count of numbers that are odd between low and high
Devise a Plan:
    create base case, stopping when high is less than low
    if high is odd, return recursive function decrementing high
    if low is odd, return recursive function with low incremented
    if triggers don't happen, return high minus low divided by 2
Code: Recursion                   
*/
const countOdds = function(low, high) {
    if(high < low)
        return 0;
    
    // if high number is odd, 1 plus recursive function decrementing high
    if(high % 2 === 1){
        return 1 + countOdds(low, high - 1);
    }
    // if low number is odd, 1 plus recursive function incrementing low
    if(low % 2 === 1){
        // console.log("low:", low)
        return 1 + countOdds(low + 1, high);

    }
    return (high - low) / 2;
};


/*
Understand the Problem:
    return the count of numbers that are odd between low and high
Devise a Plan:
    set empty variable for count
    loop through and see if value modulus 3 equals zero if so count++
Code: Brute Force   
*/
const countOdds2 = function(low, high) {
    //create counter
    let result = 0;   //result =

    //loop
    while(low <= high){
        //if modulus of 1 equals zero count++ and then low++
        if(low % 2 === 1) result++, low++;
        else low++;
    }

    return result;
};

