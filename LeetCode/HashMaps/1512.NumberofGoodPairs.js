/*
 * @param {number[]} nums
 * @return {number}
 * 
 * 
 * Given an array of integers nums, return the number of good pairs.
 * 
 * A pair (i, j) is called good if nums[i] == nums[j] and i < j.
 * 
 * Example 1:
 * Input: nums = [1,2,3,1,1,3]
 * Output: 4
 * Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
 * 
 * Example 2:
 * Input: nums = [1,1,1,1]
 * Output: 6
 * Explanation: Each pair in the array are good.
 * 
 * Example 3:
 * Input: nums = [1,2,3]
 * Output: 0
 * 
 */
/*
Understand the problem:
    Count the number of valid unique pairs in the array. Ex: input: [1,1,1,4,5] output: 3
Devise a plan:
    use map to store values
    loop through array
        use if conditions to check map for values
        if value not in map set the value for future reference
    somehow use a counter as unique pairs are found.
    figure out a way to confirm uniqueness of pair
Code:
                                                                          i
                                                    Input: nums = [1,1,1,1]
                                                    * Output: 4
*/
//Hashmap Solution   >>>>>>>>>>>>>>>>>>>>>>>>>>>COULD NOT SOLVE TRY AGAIN LATER
var numIdenticalPairs = function(nums) {
    // create empty map and counter
    // map = {'1' : 4, '' : , '': , '' : } counter = 6
        let map = {}, counter = 0;
        
    // loop through array
        for(let num of nums){
            // if num is in map and value is not the same, counter++
            if(map[num]){  // map[1]
                counter += map[num];
                map[num] += 1;
            } 
            else{
                map[num] = (map[num] || 0) + 1; // map[] = 
            }

        }
    // return counter once loop stops
        return counter;
};

console.log("numIdenticalPairs:", numIdenticalPairs([1,1,1,1]))

//                                                 s
//                                  Input: nums = [1,2,3,1,1,3]
//                                  * Output: 4    e 
//

//Two Pointer Solution
var numIdenticalPairs2 = function(nums) {
    // create two pointers and counter   start = 2, end = 4, counter = 2
    let start = 0, end = nums.length - 1, counter = 0;   

    // loop through
    while(start <= end){
        let valueCheck = nums[start] - nums[end]  // -2, 0, 0, -2, -1, 
        if(start === end){
            end = nums.length - 1;
            start++;
        } 
        else if(start === nums.length - 1){
            break;
        }
        else if(valueCheck === 0){
            counter++;
            end--;  //does 1 - 1 = 0 ?
        } 
        else end--;
    }
    // return counter once loop stops
        return counter;
};

console.log("numIdenticalPairs2:", numIdenticalPairs2([1,1,1,1]))

//Brute Force Solution
var numIdenticalPairs3 = function(nums) {
    //create counter
    let counter = 0;

    //use nested loops to compare values
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j]) counter++;
        }
    }
    // return counter once loop stops
        return counter;
};

console.log("numIdenticalPairs3:", numIdenticalPairs3([1,1,1,4,5]))