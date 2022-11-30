/*
Create an empty Array, take a look at the smallest values in each input array.
While values exist that we havent looked at, compare the first values in each respective array and push the smaller value into our empty array and move to the next value in the array.
If we exhaust all arrays in one of our arrays, concat the remainin array as it is already sorted.
*/

//the following code requires that both arrays are sorted first.
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i])
            i++;
        } else{
            results.push(arr2[j])
            j++;
            }
        }
    
        while(i < arr1.length){
            results.push(arr1[i])
            i++;
        }

        while(j < arr2.length){
            results.push(arr2[j])
            j++;
        }

        return results;
}

merge([ 1, 4, 7, 9, 25,], [2, 5, 89, 54])

/*
Break up array into halves until you have arrays that are empty or have one element
Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
Once array has been merged back together, return merged( and sorted) array.
*/

function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;

    while( i < arr1.length && j < arr2.length ){
        if( arr1[i] < arr2[j]){
            results.push(arr1[i])
            i++;
        } else{
            results.push(arr2[j])
            j++
        }
    }
    while( i < arr1.length ){
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        results.push(arr2[j]);
        j++;
    }
    return results
}


function MergeSort(arr){
    if(arr.length <= 1) return arr;

    let middle = Math.floor(arr.length / 2);
    let sortedLeft = MergeSort(arr.slice(0, middle));
    let sortedRight = MergeSort(arr.slice(middle));

    return merge(sortedLeft, sortedRight)
}

MergeSort([10, 24, 76, 73])


// time complexity for mergeSort is O(nlogn) at worst to best