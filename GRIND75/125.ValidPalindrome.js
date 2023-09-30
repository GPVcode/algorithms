/* 
 * [125. Valid Palindrome] - https://leetcode.com/problems/valid-palindrome/
 *  
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 * 
 * Example 1:
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 * 
 * Example 2:
 * Input: s = "race a car"
 * Output: false
 * Explanation: "raceacar" is not a palindrome.
 * 
 * Example 3:
 * Input: s = " "
 * Output: true
 * Explanation: s is an empty string "" after removing non-alphanumeric characters.
 * Since an empty string reads the same forward and backward, it is a palindrome.
 * 
 */

/**
 * @param {string} s
 * @return {boolean}
 */

/*
Core Understanding:
    out put true if input is the same backwords. leave out characters that arent alhanumeric
Devising a Plan:
    use regex to filter out character we dont need
    flip the string
    check if equal
Coding it Out
*/
function isPalindrome(s) {
    let newString = s.match(/[a-z]/gi).join('').toLowerCase();
    return newString === newString.split('').reverse().join('')
}
console.log("isPalindrome:", isPalindrome("A man, a plan, a canal: Panama"))


    // s = s.toLowerCase().replace(/[^a-z0-9]/g, '').split('').reverse().join('')
    // console.log(s)
    // //compar variable to input
    // return s === s.split('').reverse().join('');

    // // Convert the string to lowercase and remove all non-alphanumeric characters
    // s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    // // Check if the string is equal to its reverse
    // return s === s.split('').reverse().join('');


/*
Core Understanding:
    output true if input is the same backwords. leave out characters that arent alhanumeric
Devising a Plan:
    use regex to filter out character we dont need
    with 1 letter remaining return true
    with two letters remaining return if letter 1 and two are equal
    if first and last letters are equal return recursive function slicing from 1, -1
    return false if none of the if statements are triggered.
Coding it Out: Recursion
*/
function isPalindrome2(s) {
    let newString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log("newStr:", newString)
    if(newString.length === 1) return true;
    if(newString.length === 2) return newString[0] === newString[1];
    if(newString[0] === newString.slice(-1)) return isPalindrome(newString.slice(1, -1));
    return false;
}
console.log("isPalindrome2:", isPalindrome2("A man, a plan, a canal: Panama"))




/*
Core Understanding:
    check if str is palindrome true or false
Devising a Plan:
    create base case length of 1 and length of 2
    return recursive function getting rid of outer elements
Coding it Out: recursion
*/
function palindrome3(s){
    let str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    // base case
    if(str.length === 1) return true;
    if(str.length === 1) return true;
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
    return false;
}