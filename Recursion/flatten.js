/*
 * 
 * flatten
 * Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
 * 
 */

/*
Core Understanding:
    return an array of integers. flatten the nested arrays and keep the same order of numbers
Devising a Plan:
    collect a new array
    loop through array input
        if array is found, flatten It
        else, push value to array
*/
function flatten(oldArr){
    let newArr = [] // [1, 2, 3, ]

    for(let i = 0; i < oldArr.length; i++){
        // if arr call recursive function and concate the two arrays
        if(Array.isArray(oldArr[i])){
            newArr = newArr.concat(flatten(oldArr[i]))
        }
        //else push to new Arr
        else{
            newArr.push(oldArr[i])
        }
    }

    return newArr;
}

console.log("flatten:", flatten([1, 2, 3, [4, 5] ]))
  // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3


  function flatten2(arr){
    let newArray = [];
    
    for(let num of arr){
        if(Array.isArray(num)){
            newArray = newArray.concat(flatten(num))
        } else{
            newArray.push(num)
        }
    }

    return newArray
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3


/*
Core Understanding:
    return an array of integers. flatten the nested arrays and keep the same order of numbers
Devising a Plan:
    collect a new array
    loop through array input
        if array is found, flatten It
        else, push value to array
*/