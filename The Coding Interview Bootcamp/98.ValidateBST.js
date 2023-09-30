/* 
 * 
 * [98. Validate Binary Search Tree] - https://leetcode.com/problems/validate-binary-search-tree/
 * 
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * 
 * A valid BST is defined as follows:
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 *  
 * Example 1:
 * Input: root = [2,1,3]
 * Output: true
 * 
 * Example 2:
 * Input: root = [5,1,4,null,null,3,6]
 * Output: false
 * Explanation: The root node's value is 5 but its right child's value is 4.
 * 
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/*
Core Understanding:
    Traverse through Binary Search Tree and check if tree is valid
Devising a Plan:
    Set up conditionals to ensure node is valid
        if not valid return false
    Use recursive function to continue finding unvalid node
Coding it Out: Recursion
 */
const isValidBST = function(root, min = null, max = null) {
    // if statement - check if min is not null and data is less than min
    if(min !== null && root.val <= min){
        return false;
    }
    // if max is not false and data is more than max return false
    if(max !== null && root.val >= max){
        return false;
    }

    // if node.left exists and doesnt pass conditional when recursively called
    if( root.left && !isValidBST(root.left, min, root.val)){
        return false
    }
    // if node.right xists and doesnt pass recursive condition
    if(root.right && !isValidBST(root.right, root.val, max)){
        return false
    }

    return true
};