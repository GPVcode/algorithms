/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 * 
 * Example 1:
 *   Input: nums = [2,7,11,15], target = 9
 *   Output: [0,1]
 *   Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *   
 * Example 2:
 *   Input: nums = [3,2,4], target = 6
 *   Output: [1,2]
 * 
 * Example 3:
 *   Input: nums = [3,3], target = 6
 *   Output: [0,1]
 * 
 */
/*
Understand the question:
    return the indices whose values sum to target  input: [1, 1] target = 2 output: [0, 1]
Devise a plan:
    Use nested loops to find pair of target. return the indexes when pair is found
Code:
    Brute force
*/

const twoSum = function(nums, target) { 
    //brute force
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] + nums[i] === target) return [i,j]
        }
    }
}

// console.log(twoSum([2, 7, 11, 15], 9))

/*
Understand the question:
    return the indices who values sum to target  input: [1, 1] target = 2 output: [0, 1]
Devise a plan:
    create map to store values
        loop through array to fill up man and set value of key value pair to index
        find difference between two numbers. This difference is what we'll loop for. If the difference exists, return the appropriate indexes
Code:
    >>Hashmap Solution<<
*/

const twoSum2 = function(nums, target) { 
    //create map {}
    let map = {};

    //loop through array
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        //if i is not in map store the value
        if(diff in map) return [map[diff], i]
        else map[nums[i]] = i;
    }
    console.log(map)
}

// console.log("twoSum2:", twoSum2([2, 7,11,15], 9))


/*
Understand the question:
    Use recursion return the indices who values sum to target  input: [1, 1] target = 2 output: [0, 1]
Devise a plan:
    what if you used recursion inside of a loop? This would negate need for nested loops. It worked for the first iteration. Let's see if it fails other tests.
    loop through
        find diff between target and current num[i]
        inside loop set up recursive helper to find the matching index
        call and store recursive function with input i + 1 into var name of choice. I chose "finder" and assigned the helper call to it.
        use if statement to check diff and num[finder], if true return i and finder in an array.
Code: Recursion
*/

const twoSum3 = function(nums, target) { 

    // Loop 
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        let helper = function(j){
            if(diff === nums[j]) return j;
            if(j === nums.length) return null;
            return helper(j+1)
        }
        // let recursion do the task
        let finder = helper(i + 1)
        if(diff === nums[finder]){
            return [i, finder]
        }
    }
}

console.log("twoSum3:", twoSum3([3,2], 6))



/*
Understand the question:
    Use recursion return the indices who values sum to target  input: [1, 1] target = 2 output: [0, 1]
Devise a plan:
    set base case of when arr no longer has stored value
    get current value using pop method
    set diff of target and current value
    use if conditions to get answer or call recursive function
Code: Recursion
*/

const twoSum4 = function(nums, target) { 
    // base case
    if(!nums.length) return;
    // get current value using pop. Can't use shift!
    let value = nums.pop();
    // get diff or number to look for in array
    let diff = target - value;

    // when triggered, we have our answer
    if(nums.indexOf(diff) >= 0){
        return [nums.indexOf(diff), nums.length]
    } else{ 
        // keep moving through array
        return twoSum(nums, target)
    }
}

console.log("twoSum3:", twoSum3([3,2], 6))