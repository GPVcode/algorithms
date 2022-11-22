//Log all pairs of array
const boxes = ['a', 'b', 'c', 'd', 'e',]

function logAllPairsOfArray(array){
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            console.log(array[i], array[j])
        }
    }
}

//ES5 Version
function logAllPairsOfArray(boxes){
    boxes.forEach(function(firstBox){
        boxes.forEach(function(secondBox){
            console.log(firstBox, secondBox);
        });
    });
}
logAllPairsOfArray(boxes)
//0(n^2) (Quadratic Time)

////////////////////////////////////////////////////

//Example 2
function printAllNumberThenAllPairSums(numbers){
    console.log('there are the numbers:');
    numbers.forEach(function(number){
        console.log(number);
    });

    console.log('and these are their sums:');
    numbers.forEach(function(firstNumber){
        numbers.forEach(function(secondNumber){
            console.log(firstNumber + secondNumber);
        });
    });
}

printAllNumberThenAllPairSums([1,2,3,4,5])
//0(n + n^2)
//RUle number 4 states to drop the non-dominant terms (we are about the most important term)
//0(n^2)