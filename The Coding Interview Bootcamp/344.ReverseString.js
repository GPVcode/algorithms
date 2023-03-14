/**
 * 
 * [344. Reverse String]
 * 
 * Write a function that reverses a string. The input string is given as an array of characters s.
 * 
 * You must do this by modifying the input array in-place with O(1) extra memory.
 * 
 * Example 1:
 * Input: s = ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 * 
 * Example 2:
 * Input: s = ["H","a","n","n","a","h"]
 * Output: ["h","a","n","n","a","H"]
 * 
 * 
 * */

/**
Understand:
    return the input reversed
    input already in array format
Plan:
    return array reverse using reverse function
Code: Use reverse function
 */
const reverseString1 = function(s) {
    return s.reverse()
};

console.log("reverseString:", reverseString1(["h","e","l","l","o"]))

/**
Understand:
    return the input reversed
    input already in array format
Plan:
    loop through array starting from end
    push value into new array until index is less than 0
Code: Brute Force
 */
const reverseString2 = function(s) {
    let newArr = [];
    for(let i = s.length - 1; i >= 0; i--){
        newArr.push(s[i]);
    }
    return newArr.join('')
};

console.log("reverseString2:", reverseString2(["h","e","l","l","o"]))

/**
Understand:
    return the input reversed
    input initially array format
Plan:
    create pointers to examine values
    iterate while left is less than right
        switch the values while iterating thorugh with left and right pointers
Code: Two-Pointer
 */
const reverseString3 = function(s) {
    //create elft and right pointers
    let left = 0, right = s.length - 1;
    //while lef is less than right
    while(left < right){
        //switch values until left equals right
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        //keep pointers moving
        left++;
        right--;
    }
    return s.join('')
};

console.log("reverseString3:", reverseString3(["h","e","l","l","o"]))
    //////////////////////////////////////////////////////
    // answer variable
    // let left = 0, right = s.length - 1;
    // while(left < right){
    //     let temp = s[left];
    //     s[left] = s[right];
    //     s[right] = temp;
    //     left++;
    //     right--;
    // }
    // return s

/*
Core Understanding:
    return input reversed as a string
Devising a Plan:
    set up empty string called reversed
    loop through input
        set reversed to current elemt plus existing reversed string
    return reversed string after loop is over
Coding it Out: Brute Force, string manipulation.
*/
const reverseString4 = function(s) {
    //create empty string
    let reversed = ""
    //loop through
    for(let char of s){
        reversed = char + reversed
    }
        //set current character plus string to string

    return reversed
};

console.log("reverseString4:", reverseString4(["h","e","l","l","o"]))




