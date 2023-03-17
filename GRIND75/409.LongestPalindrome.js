/* [409. Longest Palindrome] - https://leetcode.com/problems/longest-palindrome/
 * 
 * Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
 * 
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 * 
 * Example 1:
 * Input: s = "abccccdd"
 * Output: 7
 * Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
 * 
 * Example 2:
 * Input: s = "a"
 * Output: 1
 * Explanation: The longest palindrome that can be built is "a", whose length is 1./**
 * @param {string} s
 * @return {number}
 * 
 */

/*
Core Understanding:
    Output the longest palindrome possible based on string given.
Devising a Plan:
    find duplicates and add one if extra letter exists
Coding it out: Hashmap  
*/
const longestPalindrome = function(s) {
    // create map
    let map = {};
    let counter = 0
    //loop
    for(let char of s){
        map[char] = (map[char] + 1) || 1;
        if(map[char] % 2 == 0) counter += 2;
    }

    //if extra letter is available add to counter
    if(s.length > counter) counter++;
    return counter;
};
console.log("longestPalindrome:", longestPalindrome("abccccdd"))

/*
Core Understanding:
    Output the longest palindrome possible based on string given.
Devising a Plan:
    sort string
    use while loop and two pointers to add to counter if matches are found.
    add 1 to the end.
Coding it out: Hashmap  
                                                        L
                                                ZZabccccdd
                                                         R
*/
const longestPalindrome2 = function(s) {

    //split then sort
    let sortedS = s.split('').sort().join('')
    console.log("sortedS:", sortedS)

    //counter
    let counter = 0, left = 0, right = left + 1; //counter = 8

    //use while loop with pointers
    while(left < s.length){
        if(sortedS[left] === sortedS[right]){
            counter += 2;
            left++;
            right++;
        }
        left++;
        right++;
    }
    return s.length > counter ? counter + 1 : counter
};
console.log("longestPalindrome2:", longestPalindrome2("abccZZccdd"))