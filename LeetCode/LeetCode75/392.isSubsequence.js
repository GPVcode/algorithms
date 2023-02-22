/** 392. Is Subsequence
 * 
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 * 
 * A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 * 
 * Example 1:
 * Input: s = "abc", t = "ahbgdc"
 * Output: true
 * 
 * Example 2:
 * Input: s = "axc", t = "ahbgdc"
 * Output: false
 * 
 * 
 **/

/*
Understand:
    return boolean if string s is subsequence of string t
    
Plan:
    creete counters to check length
    cross check values in each string while pointer is less than length of string
    uneven lengths means false
Code: 
                                                                    i 
                                                            s = "abc", 
                                                                      j
                                                            t = "ahbgdc"
*/
const isSubsequence = function(s, t) {
    // create pointer variables   sPointer = 3    tPointer = 7
    let sPointer = 0, tPointer = 0;
    //loop while pointer is less than length
    while(sPointer < s.length && tPointer < t.length){
    // if match add 1 to one pointer
        if(s[sPointer] === t[tPointer]) sPointer++;
        tPointer++;
    // if no match add 1 to second pointer
    }
    return sPointer === s.length; 
};

console.log("isSubsequence:", isSubsequence("acb", "ahbgdc")) // output should be false
console.log("isSubsequence:", isSubsequence("abc", "ahbgdc")) // output should be true

/*
Understand:
    Return true or false if smaller string is subsequence of larger string.
    The subsequence inside larger string must retain the same order when nonequal letter are removed
Devise:
    Use counter to keep track of matches
    loop through while withing length criteria
    at the end check if counter matches length of small string. If not, return false, otherwise true
Code:
                                                              i
                                                        s = "axc"
                                                        t = "ahbgdc"
                                                                    j

*/
const isSubsequence2 = function(s, t) {
    //create pointer variables for s and t    
    let i = 0, j = 0;                                 // i = 1 j = 6
    //use while loop
    while( i < s.length && j < t.length ){
        //if match, move small pointer by 1
        if(s[i] === t[j])i++;
        //move long pointer by one
        j++
    }
    //when loop ends, length of s should equal stored pointer. return results/
    return i === s.length;
};

console.log("isSubSequence2:", isSubsequence2("axc", "ahbgdc"))