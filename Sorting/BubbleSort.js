// Many sorting methods, some best for niche use cases 
// Bubble sort is not an efficient algorithm but good to know either way.
// Pass through the entire array and swap if lower index has a higher value. Start over again and over again, until true sort is confirmed.

function bubbleSort(arr){
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i - 1; i++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
};

