/* [Container With Most Water]
 * 
 * https://leetcode.com/problems/container-with-most-water/
 * 
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * 
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * 
 * Return the maximum amount of water a container can store.
 * 
 * Notice that you may not slant the container.
 * 
 * Example 1:
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
 * Example 2:
 * 
 * Example 2:
 * Input: height = [1,1]
 * Output: 1
 * 
 */

// BRUTE FORCE APPROACH
/* 
    Understand the Problem:
        Find the indices whose values create the largest area. Output the largest area.
    Devise a Plan:
        Brute Force
        Use nested loops to find area between two indexes and its values. 
        use Math.min and Math.max to find the value we are looking for to plug into area formulal
        return maxArea
    Code: Brute Force
                                                         l
                                        Input: height = [1,8,6,2,5,4,8,3,7]   Output: 49
                                                                         r
Output: 49
*/ 
const maxArea = function(height) {
    //create max area holder
    let maxArea = 0;
    //use nested loops to work with values
    for(let i = 0; i < height.length; i++){
        for(let j = i + 1; j < height.length; j++){
            const base = j - i;
            const useHeight = Math.min(height[i], height[j]);
            const area = base * useHeight;
            maxArea = Math.max(maxArea, area);
        }
    }
    //return max Area
    return maxArea;
};
console.log("maxArea:", maxArea([7,1,2,3,9]))

///////////////////////////////////////////////////////////////////////////////////////////////

/*
Understand the Problem:
    return the largest area in the array. Find combination of indices that create the largest area and return this largest area.

Devise a plan:
    Use two pointers to "scan" through entire array, and create logic to find and store maxArea.
    Repeat process until values in array are check and maxArea is found
    return maxArea   

Code: TWO-POINTER Style

                                                                     l
                                        Input: height = [1,8,6,2,5,4,8,3,7]   Output: 49
                                                                     r
*/
const maxArea2 = function(height) {
    //Create maxArea var and two pointers
    let maxArea = 0, left = 0, right = height.length - 1;

    //iterate while left pointer is less than right pointer
    while(left < right){
        let base = right - left                                                       // 6 - 5 = 1      | base = 1
        let minHeight = Math.min(height[left], height[right])                          // [4], [8]      | minHeight = 4
        //find area based on values of our pointers
        const area = base * minHeight;                                                 // 1 * 4 = 4     | area = 4
        //compare current area with maxArea. Update maxArea as appropriate.
        if(area > maxArea){                                                           // 49 > 4         | maxArea = 49
            maxArea = area; 
        }                    
        if(height[left] < height[right]) left++;
        else right--;
                           
    }   
        //return maxAreadsa
        return maxArea
};
console.log("maxArea2:", maxArea2([1,8,6,2,5,4,8,3,7]))            