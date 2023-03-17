/*
 * 
 * [242. Valid Anagram] - https://leetcode.com/problems/valid-anagram/description/
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * 
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 */

/*
Core Understanding:
    Check if both strings have the same number of characters regardless of arrangement
Devising a Plan:
    split each string into an array and use sort method. Join back and check for equality.
Coding it Out: Sort Function
*/

const isAnagram = function(s, t) {
    let sortS = s.split('').sort().join('');
    let sortT = t.split('').sort().join('');
    
    return sortS === sortT;
};
console.log("isAnagram", isAnagram("anagram", "nagaram"))

/*
Core Understanding:
    Check if both strings have the same number of characters regardless of arrangement
Devising a Plan:
    create map to store characters as keys and count as values
    add up values in object and check if that sum equals the length of other string
Coding it Out: Hashmap
*/

const isAnagram2 = function(s, t) {
    //base case
    if(s.length !== t.length) return false;
    // createMap
    let map = {};

    // fill up map
    for(let char of s){
        map[char] = (map[char] || 0) + 1;
        console.log("map:", map)
    }

    for(let char of t){
        if(!map[char]) return false;
        map[char]--;
    }

    return true
};
console.log("isAnagram2", isAnagram2("aacc", "ccac"));
