/**
 * 125. Valid Palindrome
 * 
 * 
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * 
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

/*
Understand the problem:
  True or false? The input is the exact same if you reversed it. Return the your answer.
Devise a plan:
  reverse input and store in variable. Return answer of if our variable is strictly equal to input.
Code:
*/

function isPalindrome1(s) {
    // Convert the string to lowercase and remove all non-alphanumeric characters
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    // Check if the string is equal to its reverse
    return s === s.split('').reverse().join('');
}

console.log("isPalindrome1:", isPalindrome1("A man, a plan, a canal: Panama"))
// function isPalindrome2(s) {
//       // Convert the string to lowercase and remove all non-alphanumeric characters
//         s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
//       // Check if the string is equal to its reverse
//         return s === s.split('').reverse().join('');
//   }


function isPalindrome2(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '').split('').reverse().join('')
  console.log(s)
  //compar variable to input
  return s === s.split('').reverse().join('');

}
  
console.log("isPalindrome2:", isPalindrome2("A man, a plan, a canal: Panama"))


/*
Understand the problem:
  True or false? The input is the exact same if you reversed it. Return the your answer.
Devise a plan:
  use two pointers to check if values are the same
  iterate while left is less than right
    if equal, continue, else return false
Code: Two-Pointer
*/

function isPalindrome3(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '')
  console.log(s)
  //create two pointers, left and right
  let left = 0, right = s.length - 1;
  //while loop
  while( left < right ){
    //check if two letters are the same, if not, then return false
     if(s[left] === s[right]){
      left++;
      right--;
     } else{
      return false
     }
  }
  return true;
}

console.log("isPalindrome3:", isPalindrome3("A man, a plan, a canal: Panama"))
