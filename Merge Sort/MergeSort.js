// /*
//  * 
//  * 88. Merge Sorted Array
//  * 
//  * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
//  * 
//  * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
//  * The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
//  * 
//  * Example 1:
//  * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//  * Output: [1,2,2,3,5,6]
//  * Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
//  * The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
//  * 
//  * Example 2:
//  * Input: nums1 = [1], m = 1, nums2 = [], n = 0
//  * Output: [1]
//  * Explanation: The arrays we are merging are [1] and [].
//  * The result of the merge is [1].
//  * 
//  * Example 3:
//  * Input: nums1 = [0], m = 0, nums2 = [1], n = 1
//  * Output: [1]
//  * Explanation: The arrays we are merging are [] and [1].
//  * The result of the merge is [1].
//  * Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
//  * 
//  *
//  * Create an empty Array, take a look at the smallest values in each input array.
//  * While values exist that we havent looked at, compare the first values in each respective array and push the smaller value into our empty array and move to the next value in the array.
//  * If we exhaust all arrays in one of our arrays, concat the remainin array as it is already sorted.
//  * 
//  */

// /*
// Core Understanding:
//     sort and merge both given arrays.
// Devising A Plan:
//     push the first element in nums2 array and so forth to the following element after nums1 array
//     after array 1 is filled, use sort method to reorder the array
//     return sorted array
// Coding it Out: Recursion
// */
// const merge = function(nums1, m, nums2, n) {
//     for(let i = 0; i < n; i++){
//         nums1[i + m] = nums2[i];
//     }

//     return nums1.sort((a, b) => a - b)
// };

// console.log("merge:", merge([1,2,3,0,0,0], 3, [2,5,6], 3))

// //the following code requires that both arrays are sorted first.
// function merge2(arr1, arr2){
//     let results = [];
//     let i = 0;
//     let j = 0;

//     while(i < arr1.length && j < arr2.length){
//         if(arr2[j] > arr1[i]){
//             results.push(arr1[i])
//             i++;
//         } else{
//             results.push(arr2[j])
//             j++;
//             }
//         }
    
//         while(i < arr1.length){
//             results.push(arr1[i])
//             i++;
//         }

//         while(j < arr2.length){
//             results.push(arr2[j])
//             j++;
//         }

//         return results;
// }

// merge2([ 1, 4, 7, 9, 25,], [2, 5, 89, 54])

// /*2
// Break up array into halves until you have arrays that are empty or have one element
// Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// Once array has been merged back together, return merged( and sorted) array.
// */

// /*
// Core Understanding:
//     sort two given arrays into one merged array
// Devising a Plan:
//     sort both arrays first then use a helper function to sort and merge both arrays together.
// Coding it Out: Recursion and two pointers
// */

// function merge3(arr1, arr2){
//     let results = [];
//     let i = 0;
//     let j = 0;

//     while( i < arr1.length && j < arr2.length ){
//         if( arr1[i] < arr2[j]){
//             results.push(arr1[i])
//             i++;
//         } else{
//             results.push(arr2[j])
//             j++
//         }
//     }
//     while( i < arr1.length ){
//         results.push(arr1[i]);
//         i++;
//     }
//     while(j < arr2.length){
//         results.push(arr2[j]);
//         j++;
//     }
//     return results
// }

// // 
// function MergeSort(arr){
//     if(arr.length <= 1) return arr;

//     let middle = Math.floor(arr.length / 2);
//     let sortedLeft = MergeSort(arr.slice(0, middle));
//     let sortedRight = MergeSort(arr.slice(middle));


//     return merge3(sortedLeft, sortedRight)
// }

// console.log("mergeSort:", MergeSort([10, 24, 76, 73]))


// // time complexity for mergeSort is O(nlogn) at worst to best


function mergeSort(arr) {
    if(arr.length === 1) return arr;
    // find middle 
    let middle = Math.floor(arr.length / 2);
    // get left and right
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    // return merge using 
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    // create sorted array starting with empty arr 
    let results = [];

    // use while loop 
    while(left.length && right.length){
        if(left[0] < right[0]) results.push(left.shift());
        else results.push(right.shift());
    }

    return [...results, ...left, ...right]
}

console.log("mergeSort:", mergeSort([100, -40, 500, -124, 0, 21, 7]))