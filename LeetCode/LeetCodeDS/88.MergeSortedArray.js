/**
 * 
 * 88. Merge Sorted Array
 * 
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * 
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * 
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 * 
 * 
 * Example 1:
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 * Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
 * The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
 * 
 * Example 2:
 * Input: nums1 = [1], m = 1, nums2 = [], n = 0
 * Output: [1]
 * Explanation: The arrays we are merging are [1] and [].
 * The result of the merge is [1].
 * 
 * Example 3:
 * Input: nums1 = [0], m = 0, nums2 = [1], n = 1
 * Output: [1]
 * Explanation: The arrays we are merging are [] and [1].
 * The result of the merge is [1].
 * Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 * 
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/*
Understand the Problem:
    merge the two arrays sorted.
    parameters m and n represent length of each array
Devise a Plan:
    use three pointers to move through each input array
    while loops with if conditions to compare values
    iterate backwards and use if conditions to trigger certain actions
    return answer once loops end
Code: Two Pointer  

                                                                       [1,2,3,0,0,0] 
                                                                       [2,5,6]                                  

*/
const merge = function(nums1, m, nums2, n) {
    //create three pointers
    let i = nums1.length - 1, j = nums2.length - 1, combined = m + n - 1;

    //iterate backwards while i and j are grater than zero
    while(i < 0 && j < 0){
        //if statement
    }
};

console.log("merge1:", merge([1,2,3,0,0,0], 3, [2,5,6], 3))  //Output: [1,2,2,3,5,6]
console.log("merge2:", merge([1], 1, [], 0))  //Output: [1]
console.log("merge3", merge([0], 0, [1], 1))
















// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var merge = function(nums1, m, nums2, n) {

//     const nums1Arr = nums1.slice(0, m);// 123 O(n)
//     const nums2Arr = nums2.slice(0, n);// 256 O(n)
//     let combined = 0;
// //     nums1 = merge(nums1Arr, nums2Arr);
// // }

//     while(nums1Arr.length > 0 && nums2Arr.length > 0){
//         // if(nums1Arr <= nums2Arr) { // 1 <= 2
//         //     console.log("nums1: ", nums1Arr <= nums2Arr)
//         //     nums1[combined++]; 
//         // } else {
//         //     nums1[combined++];
//         // }
//         const comparison = nums1Arr[0] - nums2Arr[0];// 1 -2
//         if(comparison <= 0){
//             nums1[combined] = nums1Arr[0];
//             nums1Arr.shift()
//             console.log("arr length: ", nums1Arr.length)
//             console.log("arr : ", nums1Arr)
//             combined++
//         } else{
//             nums1[combined] = nums2Arr[0];
//             nums2Arr.shift();
//             combined++
//         }
//     }
//     while(nums2Arr.length > 0){
//         nums1[combined] = nums2Arr[0];
//         nums2Arr.shift();
//         combined++;
//     }
//     while(nums1Arr.length > 0){
//         nums1[combined] = nums1Arr[0];
//         nums1Arr.shift();
//         combined++;
//     }
// }
//     // let nums1Arr = nums1.slice(0, m)
//     // let nums2Arr = nums2.slice(0, n);
//     // let combined = 0;

//     // while(nums1Arr.length > 0 && nums2Arr.length > 0){
//     //     const comparison = nums1Arr[0] - nums2Arr[0];
//     //     if(comparison <= 0){
//     //         nums1[combined] = nums1Arr[0];
//     //         nums1Arr.shift()
//     //         console.log("arr length: ", nums1Arr.length)
//     //         console.log("arr : ", nums1Arr)
//     //         combined++
//     //     } else{
//     //         nums1[combined] = nums2Arr[0];
//     //         nums2Arr.shift();
//     //         combined++
//     //     }
//     // }
//     // while(nums2Arr.length > 0){
//     //     nums1[combined] = nums2Arr[0];
//     //     nums2Arr.shift();
//     //     combined++;
//     // }
//     // while(nums1Arr.length > 0){
//     //     nums1[combined] = nums1Arr[0];
//     //     nums1Arr.shift();
//     //     combined++;
//     // }


//     //nums1 = sorted.concat( left < m ? nums1.slice(left) : nums2.slice(right))
//    // console.log("second sorted: ", sorted)
//     // console.log("nums2 sliced: ", nums2.slice(right))
//     // console.log(left)
//     // console.log(sorted.concat(nums2.slice(right)))
//     // console.log("nums1: ", nums1)
// // //Merge4 FAILED ATTEMPT
// //     let p1 = 0;
// //     let p2 = 0;
// //     let combined = 0
// //     console.log(nums1[combined])
// //     //iterate comparing p1 and p2
// //     while( p1 < m && p2 < n){       
// //         if(nums1[p1] <= nums2[p2]){ 
// //             nums1[combined] = nums1[p1];
// //             p1++;
// //         } else{
// //             let temp = nums1[p1]
// //             nums1[combined] = nums2[p2];
// //             combined++
// //             nums1[combined] = temp;
// //             p2++;
// //             p1++;
// //         }
// //         combined++;
// //     console.log(p1, p2, combined, nums1)
// //     }
    

// //     while(p2 < n){
// //         nums1[combined] = nums2[p2];
        
// //         p2++;
// //         combined++
// //     console.log(p1, p2, combined, nums1)
// //     }
    
// //Merge3 cheating
//     // nums1.length = m;
//     // nums2.length = n;
//     // nums1.push(...nums2);
//     // nums1.sort((a,b) => a-b);
// //Merge 2
//     // let p1 = m - 1;
//     // let p2 = n - 1; 
//     // let combined = m + n - 1; 
//     // while (p1 >= 0 || p2 >= 0) {
//     //     if (p2 < 0 || nums1[p1] > nums2[p2]) {
//     //         nums1[combined] = nums1[p1];
//     //         p1--;
//     //     } else {
//     //         nums1[combined] = nums2[p2];
//     //         p2--;
//     //     }
//     //     combined--;
//     // }

// //Merge1
//     // get the amount of val's from m === nums1.length  ex. m = 4, nums1 = [2,3,4,5,6,7]... nums1 = [2,3,4,5]
//     // get the amount of val's from n === nums2.length

// //     let p1 = m - 1;  // nums1.length = m + n ....becomes nums1 has a length of m + n,
// //     let p2 = n - 1; // nums2.length = n ....nums2 has a length of n
// //     let combined = m + n - 1; // nums1.length = m + n                            p1
// //                                                                     //[1,2,3,0,0,0]
// //                                                                     //[2,5,6]
// //     // iterate comparing start & end                                        p2
// //     while (p1 >= 0 && p2 >= 0) { 
// //         if (nums1[p1] > nums2[p2]) {
// //             nums1[combined] = nums1[p1]; 
// //             p1--;
// //         } else {
// //             nums1[combined] = nums2[p2];
// //             p2--;
// //         }
// //         combined--;
// //     }
// //     while (p2 >= 0) {
// //         nums1[combined] = nums2[p2];
// //         p2--;
// //         combined--;
// //     }
// //};


// /*
// Understand problem:
//     return array in nondecreasing order from given input arrays. Array length of nums1 should be n + m;

// */