/*
 *  Valid Parentheses
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * 
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 * 
 * Example 1:
 * Input: s = "()"
 * Output: true
 * 
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 * 
 * Example 3:
 * Input: s = "(]"
 * Output: false
 * 
 */

/*
Core Understanding:
    Input should contain it's partner to return true, otherwise return false;
Devising a Plan:
    set base case. if input length is odd, return false
    create empty stack.
    create parens to cross check strings in the future
    set up i to 0 to track index

    while index is less than length of s
        push current element to stack
        increments
        store previous two elements in their own variables representing open and close
        add both elements and assign to their own variable
        check if this combined string is included in parents, if so, pop the stack twice.
        at the end length of stack should be zero. 
Coding it Out: Stack
*/

var isValid = function(s) {
    if(s.length % 2 !== 0) return false;

    const stack = [];                              
    const parens = '() {} []';
    let i = 0;

    while(i < s.length){
        stack.push(s[i]);
        i++;

        let open = stack[stack.length - 2];
        let closed = stack[stack.length - 1];  
        let potParens = open + closed

        if(parens.includes(potParens)){
            stack.pop();
            stack.pop();
        }
    }
    return stack.length === 0;
};

// console.log("isValid:", isValid("{({(())})}"));


/*
Core Understanding:
    Input should contain it's partner to return true, otherwise return false;
Devising a Plan:
    set base case. if input length is odd, return false
    create stack to sotre values
    set up map object with symbol as key and its opposite as its value
    loop through string
        assign current elemnt to variable
        if 
Coding it Out: Stack with Map
*/
var isValid2 = function(s) { 
    if(s.length % 2 !== 0) return false;

    const stack = [];
    const map = {
      '(': ')',
      '[': ']',
      '{': '}'
    }
    
    for (let i = 0 ; i < s.length ; i++) {
        let c = s[i];
        console.log("map[c]", map[c])
        if (map[c]) {
          stack.push(map[c])
          console.log("stack:", stack)
        } else if (c !== stack.pop()) {
          return false;
        } 
    }
    
    return !stack.length;
};

// console.log("isValid2:", isValid2("{()}"));
