/*
Anagrams:
Create a function that will check if the letters in two arrays match even if the letters in each array are not in the same order.

first of all, if the lengths are not equal, the answer is automatically false.
Then, initialize an empty acc object called lookup.
loop through first word and if the letter is in the acc object, add 1. If not, lookup[letter] = 1;
this i will fill up the empty acc object
create another loop and iterate through the second word. Check if the letter in current iteration is is a value in our acc object. If so, subtract 1. if not, return false and the two strings do not match. If the loop runs all the way through, return true.
*/



function anagrams(ex1, ex2){
    if(ex1.length !== ex2.length){
        return false;
    }
    let obj = {};
    for(let i = 0; i < ex1.length; i++){
        let letter = ex1[i];
        obj[letter] ? obj[letter] += 1 : obj[letter] = 1;
    }

    for(let i = 0; i < ex2.length; i++){
        let letter = ex2[i]
        if(!obj[letter]){
            return false
        }
        obj[letter] -=1;
    }
    return true;
}

anagrams('anagrams', 'nagarams');



function sameFrequency(num1, num2){
    let num1str = num1.toString();
    let num2str = num2.toString();

    if(num2str.length !== num1str.length) return false;

    let obj = {};
    for(let i = 0; i < num1str.length; i++){
        let value = num1str[i];
        obj[value] ? obj[value] += 1 : obj[value] = 1;
    }
    for(let i = 0; i < num2str.length; i++){
        let value = num2str[i];
        if(!obj[value]){
            return false
        } else{
            obj[value] -= 1;
        }
    }
    return true
}
sameFrequency(122, 12)