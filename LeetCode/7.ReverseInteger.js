/*
 *
 * 7. Reverse Integer || https://leetcode.com/problems/reverse-integer/
 * 
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * 
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 * 
 * Example 1:
 * Input: x = 123
 * Output: 321
 * 
 * Example 2:
 * Input: x = -123
 * Output: -321
 * 
 * Example 3:
 * Input: x = 120
 * Output: 21
 * 
 */

/*
Core Understanding:
    return the input integer reversed. Maintain if input is positive or negative after the reverse. numbers like 700 should return as 7.
Devise a Plan:
    To reverse each numeral, integer must be turned into array first
    turn interval into string and then split it. After splitting reverse and join. Turn that string into number. 
    if math.sign is negative, convert input to position number first. Then do the above and multiply by -1.
Code:
*/

function reverse(x) {
    //basecase to prevent turning 0 into negative 0;
    if(x===0) return 0;
    //get -1
    let state = Math.sign(x)
    //if-else conditions
    if(state === 1){
    // array variable reversed and joined and assigned to "arr"
       return Number(String(x).split("").reverse().join(""));
    } else{
        let convertedNum = x * state;
        return Number(String(convertedNum).split("").reverse().join("")) * -1
    }
};


console.log("reverse:", reverse(-00555))


const reverse2 = function(x) {
    const reversed = x.toString().split('').reverse().join('');

    return parseInt(reversed) * Math.sign(x);
};

console.log("reverse2:", reverse2(-00555))