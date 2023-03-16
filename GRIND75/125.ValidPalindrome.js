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
