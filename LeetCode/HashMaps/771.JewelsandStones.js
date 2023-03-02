/**
 * [771. Jewels and Stones]
 * 
 * You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
 * 
 * Letters are case sensitive, so "a" is considered a different type of stone from "A".
 * 
 * Example 1:
 * Input: jewels = "aA", stones = "aAAbbbb"
 * Output: 3
 * 
 * Example 2:
 * Input: jewels = "z", stones = "ZZ"
 * Output: 0
 *
 * Constraints:
 * 
 * 1 <= jewels.length, stones.length <= 50
 * jewels and stones consist of only English letters.
 * All the characters of jewels are unique.
 * 
 */

/*
Understand the Problem:
    Find how many of the jewels are in stones. Example: jewels = "aA" stones = "aA" output: 2
Devise a Plan:
    loop through stones and check is each character is in stones. Add to counter if match is found. Do this until loop ends.
Code it Out: Brute Force
*/
var numJewelsInStones = function(jewels, stones) {
    //create counter
    let counter = 0;
    //nested loops
    for(let i = 0; i < jewels.length; i++){
        for(let j = 0; j < stones.length; j++){
            if(jewels[i] === stones[j]) counter++;
        }
    }
    //return counter
    return counter
};

console.log("numJewelsInStones in Brute Force:", numJewelsInStones("aA", "aAAbbbb"))


/*
Understand the Problem:
    Find how many of the jewels are in stones. Example: jewels = "aA" stones = "aA" output: 2
Devise a Plan:
    use map to store letter in key
    loop through first input
        check if value in map, if not then add to map
    loop through another input and then if char in map
        if in map add to counter
    return counter
Code it Out: Hashmap

                                                                jewels: aA 
                                                                stones: aAAbbbb

*/
var numJewelsInStones2 = function(jewels, stones) {
    //create map object
    let map = {};
    //counter
    let counter = 0;
    for(let i = 0; i < jewels.length; i++){
        //if cond
        if(!map[jewels[i]]) map[jewels[i]] = 1;
    }
    console.log("map:", map)
    for(let j = 0; j < stones.length; j++){
        console.log("char in stones", stones[j])
        if(stones[j] in map) counter++;
    }
    //return counter
    return counter
};

console.log("numJewelsInStones Hashmap:", numJewelsInStones2("aA", "aAAbbbb"))