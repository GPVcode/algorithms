/*
 * Coding Exercise - FizzBuzz || https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/learn/quiz/5026826#notes
 * Write a program that console logs the numbers from 1 to n.
 * 
 * For multiples of three print 'fizz' instead of the number 
 * For the multiples of five print 'buzz'
 * For numbers which are multiples of both three and five print 'fizzbuzz'
 * 
 * Example:
 * fizzBuzz(5);
 * Output from console.log:
 * 1
 * 2
 * fizz
 * 4
 * buzz
 */

/*
Core Understanding:
    console log numbers from 1 to n. 
    If the number is divisible by 3, console.log('fizz'). 
    If the number is divisible by 5, console.log('buzz').
    If the number is divisible by 15, console.log('fizzbuzz').
    Output shall be a list of numbers with the words fizz, buzz and fizzbuzz included where appropriate.
Devising a Plan:
    create empy array to store our values.
    loop through input. 
        use if conditions to check if the value in current iteration triggers fizz, buzz, and fizzbuzz requirements.
    console log the array.
Coding it Out: Arrays
*/

function fizzBuzz(n) {
    //create empty Array
    let arr = [];
    
    //loop through n
    for(let idx = 1; idx <= n; idx++){
        if(idx % 3 === 0 && idx % 5 === 0) console.log('fizzbuzz')
        else if(idx % 3 === 0) console.log('fizz')
        else if(idx % 5 === 0) console.log('buzz')
        else console.log(idx);
    }
  }