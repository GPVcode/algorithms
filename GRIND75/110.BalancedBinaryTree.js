/*
 * 110. Balanced Binary Tree
 * 
 * Given a binary tree, determine if it is height-balanced
 * 
 * Example 1:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: true
 * 
 * Example 2:
 * Input: root = [1,2,2,3,3,null,null,4,4]
 * Output: false
 * 
 * Example 3:
 * Input: root = []
 * Output: true
 * 
*/

/*
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

/*
Core Understanding:
    find height. The abolute difference between height of left and height or right must be equal to or less than 1;
Devising a Plan:

Coding It Out: 
*/
const isBalanced = function(root) {
    if(!root) return true;

    // get height 
    let height = function(node){
        if(!node) return 0;
        return 1 + Math.max(height(node.left), height(node.right))
    }
    // check if left and right are balanced
    return Math.abs(height(root.left) - height(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right);
};

    return Math.abs(height(root.left) - height(root.right)) < 2 && isBalanced(root.left) && isBalanced(root.right);


const isBalanced2 = function(root) {
    
    let dfs = function(node) {
        if (!node) return 0;
        let left = 1 + dfs(node.left);
        let right = 1 + dfs(node.right);
        if (Math.abs(left - right) > 1) return Infinity;
        return Math.max(left, right);
        }
        
    return dfs(root)==Infinity?false:true;
};