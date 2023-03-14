/*
 * 
 * Coding Exercise - Fibonacci Series
 * Print out the n-th entry in the fibonacci series. The fibonacci series is an ordering of numbers where each number is the sum of the preceeding two.
 * 
 * For example, the sequence:
 * 
 * [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
 * forms the first ten entries of the fibonacci series.
 * 
 * Example
 * fib(4) === 3;
 * fib(7) === 13;
 * 
 */

/*
Core Understanding:
    Return the nth entry of the fibonacci sequence.
Devising a Plan:
    create empty array that will hold fibonacci sequence
    Loop until nth element
        create formula for fibonacci
        push number to array
    return the last element of array
Coding it Out:
 */

function fib(n){
    //create empty array called fibonacci
    let fibonacci = [];

    let target = n;
    let counter = 0;
    let fibNumber = 0;

    while(counter <= target){
        if(fibonacci.length === 0){
            fibonacci.push(fibNumber);
            fibNumber++;
            counter++;
            fibonacci.push(fibNumber);
            counter++;
        } 
        //fib formula
        else{
            fibNumber = (fibonacci[counter - 2]) + (fibonacci[counter -1])
            fibonacci.push(fibNumber)
            counter++;
        }
    }
    return fibonacci[target]
}
console.log("fib:", fib(7))


function fib2(n){
    //create empty array called fibonacci
    let fibonacci = [];
    let fibNumber = 0;
    let target = n;

    for(let i = 0; i <= n; i++){
        if(fibonacci.length < 2){
            fibonacci.push(fibNumber);
            fibNumber++;
            // console.log("fibonacci checkpoint:", fibonacci)
        } 
        else{
            fibNumber = (fibonacci[i - 2]) + (fibonacci[i - 1])
            fibonacci.push(fibNumber)
            // console.log("fibonacci checkpoint2:", fibonacci)
        }
    }
    return fibonacci[n]
}
console.log("fib2:", fib2(7))