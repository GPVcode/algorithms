/*
 * Coding Exercise - Anagrams
 * Check to see if two provided strings are anagrams of each other. One string is an anagram of another if it uses the same characters in the same quantity.
 * 
 * Only consider characters, not spaces or punctuation
 * 
 * Consider capital letters to be the same as lower case
 * 
 * Examples:
 * 
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

/*
Core Understanding:
    are the two inputs anagrams? Return true or false. An anagram is if two strings have the same characters used. Leave out space and punctuations.
Devise a Plan:
    create an empty map
    use following reg ex code on both inputs:
        reg ex method: replace(/[^\w]/g, "").toLowerCase();
    store each in a map
    return if maps are equal
Code it Out: hashmap
*/

function anagrams(stringA, stringB){
    let mapA = {};

    let strA = stringA.replace(/[^\w]/g, "").toLowerCase();
    let strB = stringB.replace(/[^\w]/g, "").toLowerCase();

    for(let char of strA){
        if(!mapA[char]) mapA[char] = 1
        else mapA[char]++
    }
    for(let char of strB){
        if(!mapA[char]) return false;
    }
    return true
}
console.log("anagrams:", anagrams('One One', 'Two two two')) 

/*
Core Understanding:
    are the two inputs anagrams? Return true or false. An anagram is if two strings have the same characters used. Leave out space and punctuations.
Devise a Plan:
    use helper function to create maps of both string inputs
    call helper function using both string inputs. Store each in its own variable
    use a basecase condition to make sure both variables are the same length. Check length of Keys using Object.keys
    loop through on of the map variables and if mapA of char does not equal mapB of char, the strings are not equal and return false
    after loop, return tru as false condition was not triggered meaning that the strings are anagrams.
Code it Out: Helper function and For Loop
*/
//using helper functions
function anagrams2(stringA, stringB){
    //call helper function with each string
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);
    // check for size equality (base case)
    if(Object.keys(aCharMap).length !== Object.keys(aCharMap).length) return false;
    //loop through one map and check element in each map. return false if match not found
    for(let char in aCharMap){
        if(aCharMap[char] !== bCharMap[char]) return false;
    }
    //false was not triggered, return true. We have an anagram.
    return true;
}
//helper function
function buildCharMap(str){
    //create empty map
    const charMap = {};
    // loop through string and replace characters we don't want. keep lowercase consistent also
    for(let char of str.replace(/[^\w]/g, "").toLowerCase()){
        //fill up map. Add 1 or set to 1 depending on map's substance
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}
console.log("anagrams2:", anagrams2('One One', 'Two two two'))

/*
Core Understanding:
    are the two inputs anagrams? Return true or false. An anagram is if two strings have the same characters used. Leave out space and punctuations.
Devise a Plan:
    turn each input into an array, then sort it then rejoin. Don't forget to get rid of characters we don't want and lowercase.
    return strA === strB and boolean will return
Code it Out: Built in methods
*/ 

function anagrams3(stringA, stringB){
    //create strings using helper function
    let strA = method(stringA)
    let strB = method(stringB)
    //reaturn while checking equality
    return strA === strB
}

function method(str){
    return str.replace(/[^\w]/g, '').split('').sort().join('').toLowerCase();
}

console.log("anagrams3:", anagrams3('One One', 'Two two two')) 