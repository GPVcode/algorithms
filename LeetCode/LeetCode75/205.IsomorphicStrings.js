/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * [205. Isomorphic Strings]
 * Given two strings s and t, determine if they are isomorphic.
 * 
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * 
 * All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 * 
 * 
 * Example 1:
 * Input: s = "egg", t = "add"
 * Output: true
 * 
 * Example 2:
 * Input: s = "foo", t = "bar"
 * Output: false
 * 
 * Example 3:
 * Input: s = "paper", t = "title"
 * Output: true
 * 
 * 
 */

/*
Understand the Problem:
    return true or false if strings are or are nto isomorphic. 
    Can you replace a character with another character and preseve the order of characters?
Devise a Plan:
    check base case for string lengths
    loop through string and check charachters at each index
        if not a match, return false
        fill out respective maps with key and values
    if false isn't triggered after loop, return true.
Code it Out: Hashmap solution
*/
const isIsomorphic = function(s, t) {
    //base case
    if(s.length !== t.length) return false;
    //                                              i
    //create two maps to store s & t strings    paper
    //                                          title
    const map1 = {}; // "p": 3, "a": 2, "e": 4, "r": 5
    const map2 = {}; // "t": 3, "i": 2, "l": 4, "e": 5
    
    for(let i = 0; i < s.length; i++){

        if(map1[s.charAt(i)] !== map2[t.charAt(i)]) return false;
        map1[s.charAt(i)] = i + 1, map2[t.charAt(i)] = i + 1;
    }
    
return true;
};

console.log(isIsomorphic("paper", "title"))