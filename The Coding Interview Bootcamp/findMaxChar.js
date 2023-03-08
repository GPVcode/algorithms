/*
 * Coding Exercise - Max Chars || https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/learn/quiz/4990668#notes
 *
 * Given a string, return the character that is most commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 * 
 */

/*
Core Understanding:
    Return the character with the most commonly used string. Ex: input: "aabc" output: a
Devising a Plan:
    create a map and count the amount of time the character appears in string.
    return the key of max of map values
Code: Hashmap Solution
*/

function maxChar(str) {
    //create map
    let map = {};
    //loop through string
    for(let char of str){
        if(!map[char]) map[char] = 1;
        else map[char]++;
    }
    //return the key of highest value in map. To identify the highest value, use reduce method.
    return Object.keys(map).reduce((a, b) => map[a] > map[b] ? a : b);
}

console.log("maxChar:", maxChar("abcccccccd")) //output: "c"
console.log("maxChar:", maxChar("apple 1231111")) //output: "1"'

/*
Core Understanding:
    Return the character that appears the most frequently
Devise a Plan:
    Create a map to store keys and vales
    use two variables to store the highest value and the key of highest value. The highest key is what we'll return.
    loop through string to fill up map object with keys and values
    loop through key value pairs of map to find highest value. 
        once highest value gets updated, updated the highest key also. 
    after loop is done, return the latest updated key.
Code: Hashmap and key value solution
*/
function maxChar2(str) {
    //empty variables for map, maxKey, and maxValue
    let map = {};
    let maxKey, maxValue = 0;

    //fill up map
    for(let char of str){
        if(!map[char]) map[char] = 1;
        else map[char]++;
    }

    //loop through string
    for(const [key, value] of Object.entries(map)){
        if(value > maxValue){
            maxValue = value;
            maxKey = key;
        }
    }
    //return the key of highest value in map. To identify the highest value, use reduce method.
    return `maxKey is: ${maxKey}`;
}

console.log("maxChar2:", maxChar2("abcccccccd")) //output: "c"
console.log("maxChar2:", maxChar2("apple 1231111")) //output: "1"

/*
Core Understanding:
    Return the character that appears the most frequently
Devise a Plan:
    Create a map to store keys and values
    use two variables to store the highest value and the key of highest value. The highest key is what we'll return.
    loop through string to fill up map object with keys and values
    loop through characters inside our map. 
        if map of char is freater than current max value, set max value to map of current char
        update max key to current char 
    after loop is done, return key.
Code: Hashmap and character in map solution
*/

function maxChar3(str) {
    //empty variables for map, maxKey, and maxValue
    let map = {};
    let maxKey, maxValue = 0;

    //fill up map
    for(let char of str){
        if(!map[char]) map[char] = 1;
        else map[char]++;
    }

    //loop through string
    for(let char in map){
        //if map of char array is greater than maxValue, update maxValue and maxKdey
        if(map[char] > maxValue){
            maxValue = map[char];
            maxKey = char;
        }
    }
    //return the key of highest value in map. To identify the highest value, use reduce method.
    return `maxKey is: ${maxKey}`;
}

console.log("maxChar3:", maxChar3("abcccccccd")) //output: "c"
console.log("maxChar3:", maxChar3("apple 1231111")) //output: "1"