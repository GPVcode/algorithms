
/*
 * Coding Exercise - Pyramids
 * Write a function that accepts a positive number N.
 * The function should console log a pyramid shape with N levels using the # character.  Make sure the pyramid has spaces on both the left *and* right hand sides.
 * 
 * Examples
 * pyramid(1);
 *        '#'
 *  
 * pyramid(2);
 *       ' # '
 *       '###'
  * 
 * pyramid(3);
 *       '  #  '
 *       ' ### '
 *       '#####'
 */

/*
Core Understanding:
    console.log a pyramid input n as the height. 
Devising a Plan:
    set up base and middle variables. We will use these in our logic.
    Use nested loops to iterate through matrix
        store values in empty string.
        in the nested loop use logic with if condition
            add " " to string if element is less than middle minus level or greater than middle plus leve
            other wilse add "#"
    console log string after each column iterates
Coding it Out: Brute force

level^2 + 2 / level
*/

function pyramid(n) {

    let base = (n * 2) - 1;
    let middle = Math.floor(base / 2);

    if(n === 0) return;

    // use nested loop
    for(let i = 0; i < n; i++){
        // empty string
        let string = '';
        for(let j = 0; j < base; j++){
            //check if element is less than middle - i or greater than middle plus i. if so add  " "
            if(j >= middle - i && j <= middle + i) string += "#";
            //otherwise add "#"
            else string += " ";
        }
        console.log(string)
    }
}
console.log("pyramid:", pyramid(5))

function pyramid2(n, row = 0, level = '') {
    // set base case
    if(n === row)return; //if(row === n) then we have hit the end of our problem

    let base = (n * 2) - 1;
    let middle = Math.floor(base / 2);
    let add;
    //if the 'stair' string has a length === n then we are at the end of a row
    if(level.length === base){
        console.log(level);
        return pyramid2(n, row + 1);
    } 
    //if the length of the stair string is less than or equal to the row number we're working on, we add a ' '
    if(middle + row >= level.length && middle - row <= level.length){
        add = '#';
    } else{ //otherwise add character
        add = ' '; 
    }
    pyramid2(n, row, level + add);
}

console.log("pyramid2:", pyramid2(4));


/*
Core Understanding:
    console log a pyramid with same level number as given input
Devising a Plan:
    set base cases
    use if condition to check if we are at end of array length
    use formulas to use for our logic triggers
    use if condition to decide if "#" or " "
    recursive calls to keep algorithm moving
Coding it Out: Recursion
*/

function recursivePyramid(n, row = 0, floor = ""){
    //set base case
    if(n === row) return;
    //formula for floor length
    let base = (n * 2) - 1
    //formula for middle of floor
    let middle = Math.floor(base / 2)
    //if condition to check array length
    if(floor.length === base){
        //console log something
        console.log(floor)
        return recursivePyramid(n, row + 1)
    }
    //set add variable to add to floor string (syntax purposes)
    let add;
    //if condition to check string
    if(floor.length >= middle - row && floor.length <= middle + row){
        add = "#";
    }else{

        add = " ";
    }

    //call recursively to keep algorithm moving
    recursivePyramid(n, row, floor + add)
}

console.log("recusivePyramid:", recursivePyramid(4))