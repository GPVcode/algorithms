// given array of indices, find pair that syum to target. Return indices.
//BRUTE FORCE solution
// numberToFind = target - nums[p1]

const numsArray = [10];
const target = 10;

function twoPairSum(nums, target){
    //initialize p1 at zero
    for(let p1 = 0; p1 < nums.length; p1++){ 
        //calculate and initialize number to find
        const numberToFind = target - nums[p1]; 
        //initialize p2 at 1;
        for(let p2 = p1 + 1; p2 < nums.length; p2++){ 
            if(numberToFind === nums[p2]){ //          
                return [p1, p2]; 
            }
        }
    }
    return null;
}

console.log(twoPairSum(numsArray, target))





















const targetToFind = 11;
const findTwoSum = function (nums, target){

    //create two for loops
    for(let p1 = 0; p1< nums.length; p1++){
        const numberToFind = target - nums[p1];
    

        //initialize p2 with another for loop
        for(p2 = p1 + 1; p2 < nums.length; p2++){
            if(numberToFind === nums[p2]){
                return [p1, p2]
            }
        }
    }      

    return null; //no solution
}

console.log(findTwoSum(numsArray, targetToFind))