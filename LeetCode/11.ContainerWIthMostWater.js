/* [Container With Most Water]
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
                                                         i
                                        Input: height = [1,8,6,2,5,4,8,3,7]
                                                             j
Output: 49
*/ 
const maxArea4 = function(height) {
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
console.log("maxArea4:", maxArea4([1,1]))

/*
Understand the Problem:

Devise a plan:

*/