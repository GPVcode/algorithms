const numsArray = [1, 3, 7, 9, 2];  //numsMap = {10, 8, 4, 2}
const target = 11

function SumTwoPairs(nums, target){
    const numsMap = {};

    for(let p = 0; p < nums.length; p++){
        const currentMapVal = numsMap[nums[p]]; //p = 4
        if(currentMapVal >= 0){
            return [currentMapVal, p]; //[3, 4]
        } else{
            const numberToFind = target - nums[p]; 
            numsMap[numberToFind] = p;
        }
    }
    return null;
}


//one loop therefor the time efficiency for this is Big O(n), a vast improvement from big O(n^2)