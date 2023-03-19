/*
 * [1021. Remove Outermost Parentheses] - https://leetcode.com/problems/remove-outermost-parentheses/
 * 
 * A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.
 * 
 * For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
 * A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.
 * 
 * Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.
 * 
 * Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s. 
 * 
 * Example 1:
 * 
 * Input: s = "(()())(())"
 * Output: "()()()"
 * Explanation: 
 * The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
 * After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
 * 
 * Example 2:
 * Input: s = "(()())(())(()(()))"
 * Output: "()()()()(())"
 * Explanation: 
 * The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
 * After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
 * 
 * Example 3:
 * Input: s = "()()"
 * Output: ""
 * Explanation: 
 * The input string is "()()", with primitive decomposition "()" + "()".
 * After removing outer parentheses of each part, this is "" + "" = "".
 * 
 */

/*
Core Understanding:
    peel the outside layer parentheses. Output only inner parentheses.
Devising a Plan:
    create counter and empty stack
    loop through array
        if conditions add to counter and check if counter greater than 1. if so push open paren 
        else decrement counter and check if counter 1 or greater. if so push closing paren
    return stack
Coding it Out:
*/
const removeOuterParentheses = function(s) {

    //crete stack
    let counter = 0;                   
    let stack = [];                   
    for(let el of s){
        //if ( add to counter and push to stack if counter exceeds 1
        if(el === '('){
            counter++;
            if(counter > 1){
                stack.push('(');
            }
        } 
        //otherwise decrement counter and push to stack if counter equals 1 or greater
        else{
            counter--;
            if(counter >= 1)stack.push(')')
        }
    }
    return stack.join('');  
};                                                        //            i
console.log("removeOuterParentheses:", removeOuterParentheses("(()())(())"))