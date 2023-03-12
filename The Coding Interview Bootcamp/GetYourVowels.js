/*
 * 
 * Coding Exercise - Finding Vowels
 * Write a function that returns the number of vowels used in a string.
 * 
 * Vowels are the characters a, e, i, o, and u
 * 
 * Examples
 * vowels('Hi There!'); --> 3
 * vowels('Why do you ask?'); --> 4
 * vowels('Why?'); --> 0 
 * 
 */

/*
Core Understanding:
    Output the number of vowels found in input
Devising a Plan:
    loop through and check vowel match with brute force
        if cond to check for vowels.
Coding it Out: Brute force emphasis on if condition
*/
function vowels(str) {
    //counter variable
    let counter = 0;
    //for loop
    for(let i = 0; i < str.length; i++){
        //if condition for vowel
        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
            counter++;
        }
    }
    return counter
}

console.log("vowels:", vowels('Hi There!'))

/*
Core Understanding:
    Output the number of vowels found in input
Devising a Plan:
    create array for vowels and name it vowels
    loop nested loops and check vowel match with brute force
        if cond to check for vowels.
Coding it Out: Brute force nested loops
*/
function vowels2(str) {
    //create vowels array
    const vowels = ["a", "e", "i", "o", "u"]
    //counter
    let counter = 0;
    //nested loops
    for(let i = 0; i < vowels.length; i++){
        for(let j = 0; j < str.length; j++){
            if(vowels[i] === str[j]){
                counter++
            }
        }
    }
    return counter;
}

console.log("vowels2:", vowels2('Hi There!'))

/*
Core Understanding:
    Output the number of vowels found in input
Devising a Plan:
    create counter
    loop through str and check 
        if char matches regex of vowels
        if so, add to counter
    return counter
Coding it Out: for loop
*/

function vowels3(str) {
    let counter = 0;
    
    for(let char of str){
        if(char.match(/[aeiou]/gi))
        counter++
    }
    return counter
}

console.log("vowels3:", vowels3('Hi There!'))

/*
Core Understanding:
    Output the number of vowels found in input
Devising a Plan:
    create map
    loop through str and check 
        if char matches regex of vowels
        add to map. add 1 if already there, set to one if not
    
    reduce object to singular number by adding the values in map. set this to variable
    return this variable
Coding it Out: hashmap
*/
function vowels4(str) {
    //create object
    let map = {};
    //loop through str
    for(let char of str){
        //check if match
        if(char.match(/[aeiou]/gi)){
            //is vowel in map? add 1 otherwise set to one
            map[char] = map[char] ? map[char] + 1 : 1;
        }
    }
    let vowelCount = Object.values(map).reduce((a, b) => a + b, 0)

    return vowelCount
}

console.log("vowels4:", vowels4('Why do you ask?'))


/*
Core Understanding:
    Output the number of vowels found in input
Devising a Plan:
    get just elements that match vowels in regex. Store in vowelsOnly
    if not vowelsOnly and return 0 
    otherwise, return vowelsOnly length
Coding it Out: Match regex function
*/
function vowels5(str) {
    let vowelsOnly = str.match(/[a,e,i,o,u]/gi)
    if(!vowelsOnly) return 0;
    else return vowelsOnly.length;
}

console.log("vowels5:", vowels5('bb ddd!'))

/*
Core Understanding:
    Output the number of vowels found in input
Devising a Plan:
    use pointer to check each element 
    set counter variable and pointer
    move pointer from the end down while right pointer is greater or equal to zero
        add to counter if match is found
Coding it Out: countdown with pointer 
*/
function vowels6(str) {
    // counter, left and right variables
    let counter = 0, right = str.length - 1;
    //while loop
    while(right >= 0){ 
        //if array of left element matches regex, add to counter, add to left
        if(str[right].match(/[a,e,i,o,u]/gi)){
            counter++;
        }
        right--;
    }
    return counter;
}                         
console.log("vowels6:", vowels6('aeiou'))
    