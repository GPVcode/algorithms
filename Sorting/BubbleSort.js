// Many sorting methods, some best for niche use cases 
// Bubble sort is not an efficient algorithm but good to know either way.
// Pass through the entire array and swap if lower index has a higher value. Start over again and over again, until true sort is confirmed.
// Places large values into sorted position
// Bubble sort works well for a nearly sorted array

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

// console.log("bubbleSort:", bubbleSort([2,0,2,1,1,0]))

/*
Core Understanding:
    reorder input using bubblesort
Devising a Plan:
    use nested loops
    in second nested loop, make sure to subtract iteration length by i;
Coding it Out: Bubble Sort
                                                       i
                                                    [0,1,1,0,2,2]
                                                           j
                                                             k 
                                                    nums[j] = 0
                                                  nums[j+1] = 2
                                                    nums[i] = 2
                                                     length = 5
                                                    
*/
const sortColors = function(nums) {
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length - i; j++){
            if(nums[j] > nums[j + 1]){
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
            }
        }
    }
    return nums;
};
                                    //     j
console.log("sortColors:", sortColors([2,0,2,1,1,0]))
                                    // i
