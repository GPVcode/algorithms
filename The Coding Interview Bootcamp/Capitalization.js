/*
 * 
 * Coding Exercise - Capitalization
 * Write a function that accepts a string. The function should capitalize the first letter of each word in the string and return the result.
 * 
 * Examples:
 * capitalize('a short sentence') --> 'A Short Sentence'
 * capitalize('a lazy fox') --> 'A Lazy Fox'
 * capitalize('look, it is working!') --> 'Look, It Is Working!'
 * 
 */

/*
Core Understanding:
    Capitalize the first letter in each word of the input
Devise a Plan:
    create empty array and two pointers. One pointer to track first letter, and another for index
    use while loop 
        push each element into empty array
        look for space character
            if found, capitalze first letter and next letter
            move index
        move index again to avoid double letter
    return result as a string.
Coding it Out: Two-Pointer
*/

function capitalize(str) {
    //empty array and index set to 0
    let results = []; 
    let firstLetter = 0;
    let index = 0; 

    //use while loop
    while(index < str.length){
        //push current element to results
        results.push(str[index]);
        //find space character
        if(str[index] === " "){
            //update first letter (capitalize it)
            results[firstLetter] = results[firstLetter].toUpperCase();
            //push next letter and update its capitalization
            results.push(str[index + 1]);
            results[index + 1] = results[index + 1].toUpperCase();
            //increment to avoid pushing next element twice
            index++;
        }
        index++;
    }
    //convert resulting array to string
    return results.join('');
}

console.log("capitalize:", capitalize('a short sentence'))


/*
Core Understanding:
    Capitalize the first letter in each word of the input
Devise a Plan:
    create empty array
    loop through string and split string by the spaced
        uppercase first letter and add remainder of string by slicing from the second element of string. Push this to array
    return result as a string. Use join with space character.
Coding it Out: Array
*/

function capitalize2(str) {
    const words = [];

    for(let word of str.split(' ')){
        words.push(word[0].toUpperCase() +  word.slice(1)) //update first letter and add the remainder of string starting from index 1
    }

    return words.join(" ");
}

console.log("capitalize2:", capitalize2('a short sentence'))


/*
Core Understanding:
    Capitalize the first letter in each word of the input
Devise a Plan:
    create string starting with already capitalize first letter
    loop through string a
        if space to the left of character, uppercase and add to string
        else add to string
    return result
Coding it Out: String and Loop
*/

function capitalize3(str) {
    //start result string with uppercase first letter of string
    let result = str[0].toUpperCase();
    //loop starting from second letter
    for(let idx = 1; idx < str.length; idx++){
        if(str[idx - 1] === " "){
            let firstLetter = str[idx].toUpperCase();
            result += firstLetter;
        } else{
            result += str[idx];
        }
    }
    return result;
}

console.log("capitalize3:", capitalize3('a short sentence'))