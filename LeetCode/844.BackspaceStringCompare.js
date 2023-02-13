/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 
 * 
 * 
 * Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
 * 
 * Note that after backspacing an empty text, the text will continue empty.
 * 
  * 
 * 
 * Example 1:
 * Input: s = "ab#c", t = "ad#c"
 * Output: true
 * Explanation: Both s and t become "ac".
 * 
 * Example 2:
 * Input: s = "ab##", t = "c#d#"
 * Output: true
 * Explanation: Both s and t become "".
 * 
 * Example 3:
 * Input: s = "a#c", t = "b"
 * Output: false
 * Explanation: s becomes "c" while t becomes "b".
 */

 /*
Understand the Problem:
    return true or false after comparing outcome of two strings once vetted for backspaces. If equal return true, otherwise false.
Devise a Plan:
    create array with s
    create array with t

    compare s and t
        return true or false.
Code: Brute Force Technique
*/
//Helper function

const newArr = (str) => {
    let strArr = str.split('');

    let newArr = []
     for(let i = 0; i < strArr.length; i++){
        if(strArr[i] !== "#") newArr.push(strArr[i]);
        else newArr.pop();
    }
    return newArr
}

var backspaceCompare = function(s, t) {

    let newArr1 = newArr(s);
    let newArr2 = newArr(t);

    console.log("newArr1:", newArr1, "newArr2:", newArr2)

    if(newArr1.join('') === newArr2.join('')) return true;
    else return false;

};

console.log("backspaceCompare:", backspaceCompare("ab#c", "ad#c"))

//////////////REFACTOR//////////////////

/*
Understand the problem:
    delete letter before # entry and return what remains
Devise a plan:

Code: Hashmap
*/
var backspaceCompare2 = function(s, t) {
    

};
console.log("backspaceCompare2:", backspaceCompare2("ab#c", "ad#c"))