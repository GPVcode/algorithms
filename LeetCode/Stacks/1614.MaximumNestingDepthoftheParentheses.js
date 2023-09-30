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

/*
    Core Understanding:
        return the deepest perenthesis level
    Devising a Plan:
        create variables maxNumber and counter
        loop through array
            if ( found get the max between maxValue and counter + 1
            if ) found subtract 1 from counter
        return max
    Coding it Out:
*/
const maxDepth = function(s) {
    //create max number;
    let maxNumber = 0, counter = 0;

    for(let num of s){
        if(num === '('){
            // counter++;
            // maxNumber = Math.max(maxNumber, counter)
            maxNumber = Math.max(maxNumber, ++counter) //use preincrement to to refactor into 1 line
        }
        if(num === ')'){
            counter--;
        }
    }
    return maxNumber;
};

console.log("maxDepth:", maxDepth("(1+(2*3)+((8)/4))+1"))

 /*
    Core Understanding:
        return the number that represents the deepest parenthesis nesting ex: ((1)) output: 2
    Devising a Plan:
        loop through array
            if i is (, add to max number, if its ) return max value
    Coding it Out: For Loop
 */
    const maxDepth2 = function(s) {
        //create stack;
        let stack = [];
        //create max number;
        let maxNumber = 0;
    
    
        for(let num of s){
            if(num === '('){
                stack.push(num);
            }
            if(num === ')'){
                stack.pop();
            }
            if(stack.length > maxNumber){
                maxNumber = stack.length;
            }
        }
    
        return maxNumber;
    };
console.log("maxDepth2:", maxDepth2("(1+(2*3)+((8)/4))+1"))


