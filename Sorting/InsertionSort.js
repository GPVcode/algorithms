// Insertion sort builds up the sort by gradually creating a larger left half which is always sorted.

function InsertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currValue = arr[i]
        for(let j = i - 1; j >= 0 && arr[j] > currValue; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

