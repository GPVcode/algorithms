/*
 *
 * [1614. Maximum Nesting Depth of the Parentheses] - https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
 * 
 * A string is a valid parentheses string (denoted VPS) if it meets one of the following:
 * 
 * It is an empty string "", or a single character not equal to "(" or ")",
 * It can be written as AB (A concatenated with B), where A and B are VPS's, or
 * It can be written as (A), where A is a VPS.
 * We can similarly define the nesting depth depth(S) of any VPS S as follows:
 * 
 * depth("") = 0
 * depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
 * depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
 * depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
 * For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.
 * 
 * Given a VPS represented as string s, return the nesting depth of s.
 * 
 * Example 1:
 * Input: s = "(1+(2*3)+((8)/4))+1"
 * Output: 3
 * Explanation: Digit 8 is inside of 3 nested parentheses in the string.
 * 
 * Example 2:
 * Input: s = "(1)+((2))+(((3)))"
 * Output: 3
 * 
 */

const maxDepth = function(s) {
    let maxCount = 0, count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            maxCount = Math.max(maxCount, ++count);
        } else if (s[i] === ')') {
            count--;
        }
    }
    return maxCount;
};

/*
Core Understanding:
    output the number inside of the most parenthesis
Devising a plan:
    create map of parenthesis
    create empty stack
    loop through and check for parenthesis
    if its a number, log the number and the current out
    keep going until you find another number with a higher count

Coding It Out: Stacks (lifo)
*/

const maxDepth2 = function(s) {
    //create empty stack
    let stack = []; // [ '(', '(', '(' ]

    // create counter
    let max = 0;

    // loop through input
    for(let i = 0; i < s.length; i++){
        // if map
        if(s[i] === '('){
            stack.push(s[i])
        }
        if(s[i] === ')'){
            stack.pop();
        }
        if(stack.length > max){
            max = stack.length;
        }
    }
    return max;  
};

console.log("maxDepth2:", maxDepth2("(1+(2*3)+((8)/4))+1"))

