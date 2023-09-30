/*
    https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

    This time no story, no theory. The examples below show you how to write function accum:
    Examples:
    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"
    The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

/*
Core Understanding:
  Based on its index place, make the letter show up that many times 
  separate the letters by '-'
  uppercase first letter
Devising a Plan:
  Create an array to store new elements
    loop through
    repeat the letter by its index place
    make sure the first letter in each element is uppercase
  join the array with '-'
Coding it Out:plti
*/

function accum(s) {
    // arr acc
    let arr = [];
    // loop thourgh
    for(let i = 0; i < s.length; i++){
        let element = [];
        element = s[i].repeat(i + 1).toLowerCase();
        let newElement = element.charAt(0).toUpperCase() + element.substring(1);
        arr.push(newElement)
    }
    return arr.join("-")
}