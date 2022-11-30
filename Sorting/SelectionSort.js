// places small values into sorted position
// finding minimum value and swapping it to the front

function SelectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let lowest = arr[i];
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        } 
        if(i !== lowest){
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}

//Time complexity-wise sort selection is not so efficient as the length of the array grows.
//Selection should be used when you want to minimize the number of swaps that you are making.