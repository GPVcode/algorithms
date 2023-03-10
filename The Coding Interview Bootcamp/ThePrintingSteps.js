/*
 * Coding Exercise - Steps
 * Write a function that accepts a positive number N. The function should console log a step shape with N levels using the # character.  Make sure the step has spaces on the right hand side!
 * 
 * Examples
 * steps(2);
 *     '# '
 *     '##'
 *  
 * steps(3)
 *     '#  '
 *     '## '
 *     '###'
 *  
 * steps(4)
 *     '#   '
 *     '##  '
 *     '### '
 *     '####'
 */

/*
Core Understanding:
    console.log steps using characters "#" and " " based on number input
Devise a Plan:
    use counter to keep count of hash characters
    creat an array of spaces with length of n
    loop though this array
        with each iteration, update the array with new hash and console.log in string format
Code it out: Array
*/

function steps(n) {
    //create empty array called stairs
    let stairs = []

    //create array of spaces
    for(let i = 0; i < n; i++){
        stairs.push(" ")
    }
    //iterate through empty array
    for(let j = 0; j < stairs.length; j++){
        //update the element in current index
        stairs[j] = "#"
        console.log(stairs.join(''))
    }
}

console.log("steps:", steps(4)) 