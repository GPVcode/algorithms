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

/*
Core Understanding:
    return the fibonacci number at the location of n
Devising a Plan:
    use if logic to return n if n is less than 2
    return recursive function of fib(n-1) + recursive function of fib(n-2)
Coding it Out: Recursion!
*/
function fib3(n){
    if(n < 2) return n
    return fib3(n-1) + fib3(n-2)
}

console.log("fib3:", fib3(2))

/*
Core Understanding:
    return the fibonacci number at the location of n
Devising a Plan:
    use if logic to return n if n is less than 2
    return recursive function of fib(n-1) + recursive function of fib(n-2)
Coding it Out: Memoization
*/

function memoize(fn){
    const cache = {};
    return function(...args){
        if(cache[args]){
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    };
}

function fib1(n){
    if(n<2){
        return n;
    }
    return fib1(n-1) + fib1(n-2);
}

fib1 = memoize(fib1);


