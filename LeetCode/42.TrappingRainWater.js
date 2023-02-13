

/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 * Example 1:
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
 * 
 * Example 2:
 * Input: height = [4,2,0,3,2,5]
 * Output: 9
 * 
 * @param {number[]} height
 * @return {number}
 */

/*
Understand the Problem:
    Find the total area of spaces between array values that wiould hold water like a cup. Ends do not count as a "wall"
Devise a Plan:
    base case is if array is less than three. Need three values to create a cup
    create total to hold value
    iterate through array
        use logic to figure out when to store value
    return total

Code:Brute Force
      Formula: total = (Math.min(height[p1], height[p2])) - CH'
                                                                                                         p
                                                                            * Input: height = [4,2,0,3,2,5]
                                                                            * Output: 9                    r                   
                                                                            *                l       
*/ 
const trap = function(height) {
    //create answeer holder
    let totalWater = 0;

    //loop through array
    for(let p = 0; p < height.length; p++){
        //create variables to track walls
        let leftP = p, rightP = p, maxLeft = 0, maxRight = 0;   // leftP = 2, rightP = 2, maxLeft = 4, maxRight = 5;
            //while loops for pointers
            while(leftP >= 0){
                maxLeft = Math.max(maxLeft, height[leftP]);  // maxLeft = 4 
                leftP--;
            }
            while(rightP < height.length){
                maxRight = Math.max(maxRight, height[rightP]);  //maxRight =  5, 
                rightP++;
            }
        const currentWater = Math.min(maxLeft, maxRight) - height[p]; // min of (4, 5) minus 2 =2

        if(currentWater >= 0){
            totalWater += currentWater; // 0 + 2 + 4 + 1 + 2= 9
        }
    }
    //return total
    return totalWater; //totalWater = 2
};

console.log("Trap:", trap([0,1,0,2,1,0,1,3,2,1,2,1])); //output: 6


/*
Understand the Problem:
    Get the total number of squares that will fill with water.

Devise a Plan:
    Use variable to store total number.
    use two pointers to compare your values starting from the outside in.
    while your pointers are away from each other, check if water can be filled in and update total number as certain conditions are met.
    return total number once array is iterated through fully.

Code: Two Pointer Solution
                                                                                  L
                                                            input: [0,1,0,2,1,0,1,3,2,1,2,1] output: 6
                                                                            R
*/
const trap2 = function(height) {
    //create answer holder and pointers (maxLeft, maxRight, left, and right)
    let totalWater = 0, maxLeft = 0, maxRight = 0, left = 0, right = height.length -1;

    //use while loop
    while(left < right){
        if(height[left] <= height[right]){                              //totalWater = 1
            if(height[left] >= maxLeft){
                maxLeft = height[left] // maxleft = 2
            } else{
                totalWater += maxLeft - height[left] // + 1 + 1 + 2 + 1  + 1
            }
            left++;
        } else{
            if(height[right] >= maxRight){
                maxRight = height[right];  //maxRight = 2
            } else{
                totalWater += maxRight - height[right]; // + 1
            }
            right--;
        }
    }
    //return totalWater
    return totalWater; //totalWater = 1
};

console.log("Trap2:", trap2([4,2,0,3,2,5])); //output: 9
