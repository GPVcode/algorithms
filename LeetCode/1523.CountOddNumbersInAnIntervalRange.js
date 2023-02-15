/**
 * [1523. Count Odd Numbers in an Interval Range]
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
 */
 
/*
Understand the Problem:
    return the count of numbers that are odd between low and high
Devise a Plan:
    set empty variable for count
    loop through and see if value modulus 3 equals zero if so count++

Code: Brute Force   
                            low = 3, high = 10
*/
const countOdds = function(low, high) {
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


const countOdds2 = function(low, high) {
    //create counter
    let result = 0;   //result =
    const isOdd = num => num % 2 === 1;
    if(isOdd(low)) result++;

    const num = Math.floor((high - low) / 2);
    result += num;

    if(high > low + 2 * num && isOdd(high)) result++;

    return result

};
