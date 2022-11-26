/*
This function returns a count of each unique value.
We will use multiple pointer technique.
First, if the array is empty, then return 0 as thatr is the count of unqiue values.
then, intiialize i = 0 as the initial starting point of index i.
Next, initailze for loop for j starting at index 1. We'll compare i and j.
if j !== i, move i up one array spot and set arr[i] to what j was. We have now identified two unique values. If i and j are equal do noting, and the for loop will increment j up one spot.

*/
function countUniqueValues(arr){
    if(arr.length === 0){
        return 0
    }

    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[j] !== arr[i]){
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

countUniqueValues([1, 2])
