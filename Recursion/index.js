/* 
How to recursive functions work

Recursions invoke the same function with a DIFFERENT INPUT until you reach your BASE CASE.
The most important concept with recursions: The BASE CASE is the condition when the recursion stops.


*/

// No recursion
function countDown(num){
    for(let i = num; i > 0; i--){
        console.log(i)
    }
    console.log("All done!")
}

countDown(5)

// With recursion

function recursiveCountdown(num){
    if(num <= 0){
        console.log("All done!")
        return;
    }
    console.log(num);
    num--;
    recursiveCountdown(num)
}
countDown(3)

//recursive sumRange function example
function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num-1);
}
sumRange(3) //round 1: return 3 + sumRange(2) + sumRange(1) = 6 because 3 + 2 + 1 = 6.
sumRange(4) //round 1: return 4 + sumRange(3) + sumRange(2) + sumRange(1) = 10 because 4 + 3 + 2 + 1 = 10.
sumRange(5) //round 1: return 5 + sumRange(4) + sumRange(3) + sumRange(2) + sumRange(1) = 15 because 5 + 4 + 3 + 2 + 1 = 15.

//4! (4*3*2*1)
//without recursion
function factorial(num){ 
    let total = 1;
    for(let i = num; i > 0; i--){
        total *= i
    } return total;
}

factorial(4)

//recursive factorial
function recursiveFactorial(num){
    if(num === 1) return 1;
   return num * recursiveFactorial(num - 1);
}
recursiveFactorial(4)

//EXTRACT ONLY ODD NUMBERS
//helper method recursion - assign outer function to hold external accumulator.
function collectOddValues(arr){
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])

//PURE RECURSIONS - 
function recursiveCollectOddValues(arr){
    let newArr = [];

    if(arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(recursiveCollectOddValues(arr.slice(1)));
    return newArr;
}

recursiveCollectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])