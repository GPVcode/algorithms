/*
 * Coding Exercise - Array Chunk
 * Given an array and chunk size, divide the array into many subarrays where each subarray is of the provided size.
 * 
 * Examples:
 * Chunk size two:
 * chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
 * Chunk size two:
 * chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
 * 
 * Chunk size 3:
 * chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
 * 
 * Chunk size 4:
 * chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
 * 
 * Chunk size 10:
 * chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
 * 
 */
/*
Core Understanding:
    There are two inputs. The first input is an array, the second is a number that reps size of sub arrays to be made
    return the new array of subarrays with lengths that match size input
    ex: input: [1,2,3,4], size: 2 output: [[1,2], [3,4]]
Devising and Plan:
    create empty array and set pointer to 0
    use while loop to iterate through
        use slice to isolate values in array
        push sliced values as array inside of new array
        move pointer by size
    return new array set with subsets
Code: While loops with pointer
*/
function chunk(array, size) {
    //create empty array
    let arr = []
    let pointer = 0;
    
    //loop through
    while(pointer < array.length){
        //use slice to isolate values
        let subArr = array.slice(pointer, pointer + size)
        arr.push(subArr)
        pointer += size
        // console.log("array:", array)
        // console.log("value of pointer:", array[pointer])
    }
    return arr;
}

// console.log("chunk:", chunk([1, 2, 3, 4, 5], 10))

/*
Core Understanding:
    return array of subarrays where subarrays have length of given input size.
Devising a Plan:
    create empty array to store our result
    loop through each element in input array
        create a variable that represents the last element in chunked
        if condition to check if last exists or if last. length equals size
        otherwise, just push the element into last
    return chunked.
Coding it Out: Array with for loop
*/

function chunk2(array, size) {
    //create empty array to hold chunks called "chunked"
    let chunked = [] //[[1]]
    
    //loop through each element in the unchunked array
    for(let element of array){
        //retrieve last element in 'chunked'
        const last = chunked[chunked.length - 1]; //2
        //if last element does not exist, or if its length is equal to chunk size
        if(!last || last.length === size){
            chunked.push([element]);
        } else{
            last.push(element);
        }
    }
    return chunked;
}

console.log("chunk2:", chunk2([1, 2, 3, 4], 2))