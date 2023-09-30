/**
 * 
 * [383. Ransom Note] - https://leetcode.com/problems/ransom-note/
 * 
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
 * 
 * Each letter in magazine can only be used once in ransomNote.
 * 
 * Example 1:
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 * 
 * Example 2:
 * Input: ransomNote = "aa", magazine = "ab"
 * Output: false
 * 
 * Example 3:
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true
 * 
 */

/*
Core Understanding:
    return true or false if you can use the letter in the given magazine string  to create the given ransomNote
Devising a Plan:
    create map
    fill up map
    while index is less than ransom note length, check if letter in map
        if so, decrement value in map
        otherwise return false
    return true
Coding it Out: Hashmap
*/
const canConstruct = function(ransomNote, magazine) {
    let map = {};
    for(let char of magazine){
        map[char] = map[char] + 1 || 1;
    }
    
    for(let char of ransomNote){
        if(map[char]) map[char]--;
        else return false
    }
    return true
};

console.log("canConstruct:", canConstruct("a","b"))

/*
Core Understanding:
    return true or false if you can use the letter in the given magazine string  to create the given ransomNote
Devising a Plan:
    loop through magazine
        replace char from magazine inside ransome note with ""
    if ransomNote no longer exists, return true
    otherwise false
Coding it Out: Loop using replace
*/

const canConstruct2 = function(ransomNote, magazine) {
    //loop through each element of magazine and replace that char in ransomNote with empty string
    for(const char of magazine){
        ransomNote = ransomNote.replace(char, "")
        console.log("ransomNote:", ransomNote)
    }
    //if ransomNote is empty, return true
    return !ransomNote ? true : false;
    //otherwise return false
};
console.log("canConstruct2:", canConstruct2("ab","ba"))