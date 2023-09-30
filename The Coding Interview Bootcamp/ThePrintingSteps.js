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

// console.log("steps:", steps(4)) 

/*
Core Understanding:
    return stairs using "#" character while maintaining length;
Devising a Plan:
    Think of the solution as a matrix
     jjjj
    i#___ 
    i##__
    i###_
    i####
    use nested loops to fill up matrix
    start with an empty string
        if j is equal to or less than i, add "#"
        otherwise " ""
    console.log the now not so empty string
Code it Out: Brute Force
*/
function steps2(n) {
    //use nested loops
    for(let i = 0; i < n; i++){
        // create empty string
        let stair = "";
        for(let j = 0; j < n; j++){
            //if condition to trigger adding "#"
            if(j <= i) stair += "#";
            // else add space
            else stair += " ";
        }
        console.log("stair:", stair)
    } 
}

// console.log("steps2:", steps2(4))

/*
Core Understanding:
    return stairs using "#" character while maintaining length;
Devising a Plan:
    set row to 0 and stair to empty string as paramenters
    set base case where row equals n input
    to move row, check if length of stair string equals n
        use recursion to rerun function and add 1 row
    use another if condition to check if space or '#' should be added
    call recursive function again
Code it Out: Recursion
*/
function printNumber(n, row = 0, stair = '') {
    // set base case
    if(n === row)return; //if(row === n) then we have hit the end of our problem

    //if the 'stair' string has a length === n then we are at the end of a row
    if(stair.length === n){
        console.log(stair);
        return printNumber(n, row + 1);
    } 
    //if the length of the stair string is less than or equal to the row number we're working on, we add a '#'
    if(stair.length <= row ){
        stair += "#";
    } else{ //otherwise add space
        stair += ' '; 
    }
    printNumber(n, row, stair);
}

printNumber(4);
/*
Core Understanding:
    return stairs using "#" character while maintaining length;
Devising a Plan:
    Think of the solution as a matrix
     jjjj
    i#___ 
    i##__
    i###_
    i####
    first use loop to create empty array
    use two pointers to fill up matrix
    use while loop to iterate
        if poointer 1 is equal to or less than pointer 2, add "#"
        otherwise " "
        console.log array as string
Code it Out: Two-Pointer
*/
// function steps3(n) {
//     // create empty array
//     let stair = "";

//     //x and y matrix
//     let x = 0, y = 0; // x = 4 y = 3
//     while(y < n){
//         if(x <= y){
//             stair += "#";
//         } if(x > y){
//             stair += "space";
//             x++;
//         } if(x === n){
//             console.log("stairs:", stair)
//             y++;
//             x = 0;
//             stair = ""
//         }
//         x++
//     }
    
// }

// console.log("steps3:", steps3(4)) 