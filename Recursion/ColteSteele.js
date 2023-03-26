/*
Core Understanding:
    Write a countdown function that counts down from n;
Devising a Plan:
    start loop at n. console log i until n is not greater than 0;
    after the loop console log "all done!"
Coding it Out:
*/
function forLoopCountdown(n){
    for(let i = n; i > 0; i--){
        console.log(i)
    }
    console.log("all done!")
}
console.log("forLoop:", forLoopCountdown(10))

/*
Core Understanding:
    Write a countdown function that counts down from n using recursion;
Devising a Plan:
    ask for base case of n = 0
    otherwise console log n and call recursive function n minus 1;
Coding it Out:*/
function recursiveCountdown(n){
    if(n <= 0){
        // console.log("All done!")
    } else{
        // console.log(n)
        return recursiveCountdown(n - 1)
    }
}
console.log("recursiveCount:", recursiveCountdown(10))

/*
    Core Understanding:
        write function that adds to number as count builds to n
    Devising a Plan:
        ask for base can n === 1
        call recursive function to add current sum to the next call stack's n
    Coding it Out: Recursion
 */
const recursiveSumRange = function(n){
    // base case
    if(n === 1) return 1;
    return n + recursiveSumRange(n-1);
}
console.log("recursiveSumRange:", recursiveSumRange(5))

/*
    Core Understanding:
        write function that adds to number as count builds to n
    Devising a Plan:
        ask for base can n === 1
        call recursive function to add current sum to the next call stack's n
    Coding it Out: Recursion
 */
const sumRange = function(n){
    let count = 0;
    for(let i = n; i > 0; i--){
        count += i;
    }
    return count;
}
console.log("sumRange:", sumRange(5))

/*
    Core Understanding:
        write function that multiplies a number with the following number until n
    Devising a Plan:
        set counter
        Loop through and add to counter using product sign
    Coding it Out: Iterative
 */
const factorial = function(n){
    let count = 1;
    for(let i = n; i > 0; i--){
        count *= i;
    }
    return count;
}
console.log("factorial:", factorial(5))

/*
Core Understanding:
    write function that multiplies a number with the following number until n
Devising a Plan:
    ask for base can n === 1
    otherwise reutn n times recursive function with n decrementing
Coding it Out: Recursion
 */
const recursiveFactorial = function(n){
    // base
    if(n === 1) return 1;
    return n * recursiveFactorial(n - 1);
}     
console.log("recursiveFactorial:", recursiveFactorial(5))