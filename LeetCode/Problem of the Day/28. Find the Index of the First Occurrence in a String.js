

/**
 * [28. Find the Index of the First Occurrence in a String]
 * 
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 * 
 * Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * 
 * Example 1:
 * Input: haystack = "sadbutsad", needle = "sad"
 * Output: 0
 * Explanation: "sad" occurs at index 0 and 6.
 * The first occurrence is at index 0, so we return 0.
 * 
 * Example 2:
 * Input: haystack = "leetcode", needle = "leeto"
 * Output: -1
 * Explanation: "leeto" did not occur in "leetcode", so we return -1.
 * 
 */

/*
Understand:
    return the index in haystack where needle starts. ex: inputs: "abcdefg", "abc"; output: 0
Devise a Plan:
    set up basecase, (if needle arlready equals haystack)
    get length of needle.
    slice length of needle to start of hasystack. 
    move pointer until match is found.
Code: two-pointer
*/

const strStr1 = function(haystack, needle) {
    //basecase
    if(needle === haystack) return 0;

    //length of needle
    let needleLength = needle.length, haystackLength = haystack.length;

    //pointer
    let left = 0;

    //use while loop
    while(left <= haystackLength - needleLength){
        //slice haystack 
        let newStr = haystack.slice(left, left + needleLength)
        console.log("newStr:", newStr)
        //check if new string equals needle string, if so, return left
        if(newStr === needle) return left;
        //if not, move left pointer by one
        else left++;
        console.log("left:", left)
    }

    //return -1 if not found
    return -1
};

console.log("strStr1:", strStr1("abc", "c"))

/*
Understand:
    return the index in haystack where needle starts. ex: inputs: "abcdefg", "abc"; output: 0
Devise a Plan:
    set up basecases, (if needle arlready equals haystack)
    logic check, return -1 if needle length is greater than haystack length
    loop through haystack until haystack.length - needle.length + 1
        find letter match and loop through needle to see if a full match is found. If so, return i. If not, then break the loop.
    return i after all loops
Code: Brute Force
*/

    const strStr2 = (haystack, needle) => {
        //base case
        if (needle === '' || needle === haystack) return 0;    
        //logic check. Needle length must be less than haystack length
        if (haystack.length < needle.length) return -1;       
        // start looping through haystack until the remaining substring is shorter than needle
        for (let i = 0; i < haystack.length - needle.length + 1; i++) {    
          // loop through needle as soon as we see a character that matches the first character of needle
          if (haystack[i] === needle[0]) {      
            for (let j = 0; j < needle.length; j++) { 
              // break as soon as characters don't match    
              if (needle[j] !== haystack[i + j]) {   
                // break out of the loop and return to looping through haystack    
                break;                                    
              } else if (j === needle.length - 1){        // otherwise, if  looped through the entire needle and all of the characters matched
                return i;                                 // return the index of the first character of haystack with which we started the loop
              }
            }
          }
        }
        return -1;     
};

console.log("strStr2:", strStr2("abc", "c"))

//Teddy's solution
// time complexity: O(mn) where m is the length of haystack and n is the length of needle
// space complexity: O(1) since we only use constant space
const strStr3 = function(haystack, needle) {
    if (needle === "") return 0;
    for (let idx = 0; ; idx++) {
      for (let j = 0; ; j++) {
        if (j === needle.length) return idx;
        if (idx + j === haystack.length) return -1;
        if (haystack.charAt(idx + j) !== needle.charAt(j)) {
          break;
        }
      }
    }
  };