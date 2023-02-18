/**
 * 
 * [1. Two Sum]
 * 
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 * 
 */

 /*
    Understand problem:
        find first indices that have values adding to target
    Devise a plan:
        create map

        loop through array
            find x by subtracting target by index value
            if that value is in map, return the index values in an array format
            add to mapo if not currently in map
    Code:
 */

const twoSum1 = function(nums, target) { 
    //create map = {'3': 0, '4': 1, '': }
    let map = {};
    //loop through nums array;
    for(let i = 0; i < nums.length; i++){
        //create var for number to find
        let numToFind = target - nums[i]; // 6 - 4 = 2;
        if(nums[i] in map){ 
            return [map[nums[i]], i] //[1, 2]
        } else{  
            map[numToFind] = i; //map[4] = 1
        }
    }
};
console.log("twoSum1:", twoSum1);
                                                      //s
                                           // nums = [3,2,4], target = 6


    const twoSum2 = function(nums, target) { 
    //create map = {'3': 0, '4': 1, '': }
    let map = {};
    //loop through nums array;
    for(let i = 0; i < nums.length; i++){
        //create var for number to find
        let numToFind = target - nums[i]; // 6 - 4 = 2;
        if(nums[i] in map){ 
            return [map[nums[i]], i] //[1, 2]
        } else{  
            map[numToFind] = i; //map[4] = 1
        }
    }
};
console.log("twoSum2:", twoSum2);
    // //create empty map                                 f
    // const map = {}; // { '3': 0} 
    // //loop
    // for(let i = 0; i < nums.length; i++){
    //     let match = target - nums[i]; // match = 3
    //     //check if value in map
    //     if(match in map){
    //         //if so, return pair
    //         return [map[match], i] //map3, 1 >>>> [0, 1]
    //     }
    // map[nums[i]] = i;      // map[3] assigned value 0

    // //if value not in map, assign key value pair value in map
    // }





    //Understand the problem:
        //return the indices whose values add to target (in array format)

    //Devise a plan
        //create empty map to store values
        //loop through nums arr
            //set matching variable that will combine with another value to equal target
            //check if map in arr, if so return pair of indexes
        //if conditional doesnt trigger, set key value pair to map
                        //       s    
    //Code:            nums = [3,3], target = 6
    // //create map
    //     let map = {}; //map = {['3': 0]}
    // //loop
    // for(let idx = 0; idx < nums.length; idx++){
    //     //find matching pair(difference of target - nums[-])
    //     let match = target - nums[idx]; //target = 3;
    //     //check if map is in map
    //     if(match in map){ //true
    //         //return pair
    //         return [map[match], idx] //map[3], 1 >>> output: [0, 1]
    //     }
    //     //if match is not in map, set current value to map as the key with index number as value
    //     map[nums[idx]] = idx; // map[3] is assigned value index number i which is zero (0)
    // }
    //     //



    //answer                          
    // let map = {}; // {'3': 0}

    // for(let i = 0; i < nums.length; i++){
    //     let match = target - nums[i]; //match = 3
    //     if(match in map){
    //         return [map[match], i] // return map[3], 1 where map[3] key contains value pair 0
    //         //output: [0, 1] 
    //     }
    //     map[nums[i]] = i; // set map[3] to contain value i = 0
    //     console.log("map[nums[i]]: ", map[nums[i]])
    //     console.log("map: ", map)
    // }
    
    // let map = {};
    // for(let idx = 0; idx < nums.length; idx++){
    //     let diff = target - nums[idx];
    //     if(diff in map){
    //         return [map[diff], idx];
    //     }
    //     map[nums[idx]] = idx;
    // }


    /////////////////////////////////////////////////////////////////////////////////////////////
    //Understand: find two indices whose values add to target
    //Devise plan: use two pointers to iterate through array. Different outcomes depending on current sum of two pointers
    //Code:
        //initialize 
    // let slow = 0, fast = slow + 1;
    // let sum = nums[slow] + nums[fast], result = null;

    // while(true){
    //     sum = nums[slow] + nums[fast];
    //     if(sum === target){
    //         result = [slow, fast];
    //         break;
    //     } 
    //     fast++;
    //     if(fast >= nums.length){
    //         slow++;
    //         fast = slow +1;
    //     }
    //     if(slow >= nums.length) break;      // L       
    //                                         //[3,2, 4]  sum = 6 | target = 6 | results = [1, 2]
    //                                         //      R
    // }
    // return result

    /////////////////////////////////////////////////////////////////////////////////////////////////
    //Understand: find two indexes whose values sum to target.
    //Devise: iterate through array with two points. Perform different actions depending on sum of two index values
    //code:
                                            //   L       
                                            //[3,2, 4]  sum = 6 | target = 6 | results = [1, 2]
                                            //      R
    // let left = 0, right = left + 1;
    // let sum = nums[left] + nums[right], results = null;                                       
    // while(true){  
    //     sum = nums[left] + nums[right];
    //     if(sum === target){
    //         results = [left, right];
    //         break;
    //     };
    //     right++;
    //     if(right >= nums.length){
    //         left++;
    //         right = left +1;
    //     }
    //     if(left >= nums.length) break;
    // }
    // return results
    /////////////////////////////////////////////////////////////////////////////////////////////
    // let map = {};
    // for(let idx = 0; idx < nums.length; idx++){
    //     let diff = target - nums[idx];
    //     if(diff in map){
    //         return [map[diff], idx];
    //     }
    //     map[nums[idx]] = idx;
    // }



// /*
//     Understand the Problem:
//         find indices whose values add to target. return indices in array format.
//     Devise a Plan:
//         Use map to store values
//         loop through array
//             use logical formula to identify the number we are searching for in map
//             if sum of two numbers < target, consider the combination for answer
//             if conditions to find the three values that add to target.
//     Code it Out:
// */
//     const threeSum = function(nums, target) { 
//         //create map = {'3': 0, '2': 1, '': }
//         let map = {};
//         //loop through nums array;
//         for(let i = 0; i < nums.length; i++){
//             //create var for number to find
//             let numToFind = target - nums[i]; // 6 - 4 = 2;
//             if(nums[i] in map){ 
//                 return [map[nums[i]], i] //[1, 2]
//             } else{  
//                 map[numToFind] = i; //map[4] = 1
//             }
//         }
//     };
//     console.log("threeSum:", threeSum);
//     // nums = [3,2,4], target = 6
//     //if sum < target add to map




/*
    Understand the Problem:
        find three indices whose values add to target. return indices in array format.
    Devise a Plan:
        use nested loops to compare values
        loop through array
            if conditions to find the three values that add to target.
            return the indices that trigger conditional
            note - keep in end of loop in mind as three pointers are involved
    Code it Out: Brute Force 
        Time Complexity: O(n^3) as we have used three nested loops
        Space: 0(1) No data structures used to store values.
    Refactor: See below
*/
// Prints all triplets in arr[] with given sum
function findThreeSum(nums, target){
    // loop through array
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                //if condition
                if (nums[i] + nums[j] + nums[k] === target) {
                    //return indices
                    return [i, j, k]
                }
            }
        }
    }
}
 
/*
    Understand the Problem:
        find three indices whose values add to target. return indices in array format.
    Devise a Plan:
        use nested loops to compare and add values to check for conditions
        set empty map inside first loop
        use second loop to find value that completes three sum of target
            if value found in map, return in array format
            if value not found in map, store value as key and index as value
    Code it Out: HASHMAP SOLUTION
        Time Complexity: O(n^2) as we have used two nested loops
        Space: 0(n) unordered map data structures used to store values.
                                                            i
                                                    nums = [3,2,4] target = 9
                                                                j
*/
// Prints all triplets in arr[] with given sum       

function findThreeSum2(nums, target){
    // loop through array
    for (let i = 0; i < nums.length - 2; i++) {
        //find pairs that equal to target - nums[i]
       let map = {};                                // map = {"4": 1, }
       for(let j = i + 1; j < nums.length; j++){
        let sum = target - (nums[i] + nums[j]);   // 9 - ( 3+4 ) = 2
        if(nums[j] in map) return [i, map[nums[j]], j]  // [0, 1, 2 ]
        else map[sum] = j
       }
    }
}


// Test case
 
    let nums = [2,7,11,15];
    // let n = arr.length;
    console.log("findThreeSum:", findThreeSum(nums, 24)) //findThreeSum: [ 0, 1, 3 ]
    console.log("findThreeSum2:", findThreeSum2(nums, 24)) // findThreeSum2: [ 0, 1, 3 ]
    
   