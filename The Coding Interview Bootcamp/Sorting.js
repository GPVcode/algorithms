/*
Core Understanding:

Devising a Plan:

Coding it Out: Bubble sort

*/

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i; j++){
            // if element j is greater than j+1
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr
}

console.log("bubbleSort:", bubbleSort([2,0,2,1,1,0]))


function selectionSort(arr){
    
    for(let i = 0; i < arr.length; i++){
        let indexOfMin = i;

        // check if we really have the lowest value in the array;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[indexOfMin]){
                indexOfMin = j;
            }
        }

        // swap if i is not equal to indexOfMin
        if(indexOfMin !== i){
            let temp = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = temp;        
        }
    }
    return arr 
}

console.log("selectionSort:", selectionSort([100, -40, 500, -124, 0, 21, 7]));
//     [-124, -40, 0, 7, 21, 100, 500]; 