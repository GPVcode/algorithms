/**
 * @param {string} s
 * @return {boolean}
 */

function isPalindrome(s) {
      // Convert the string to lowercase and remove all non-alphanumeric characters
        s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
      // Check if the string is equal to its reverse
        return s === s.split('').reverse().join('');
  }
  
  /*
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

  */



/*
Understand the problem
Devise a plan
Code it out

Refactor
*/







// Convert the string to lowercase and remove all non-alphanumeric characters

// Check if the string is equal to its reverse
