/* 
 * 
 * 235. Lowest Common Ancestor of a Binary Search Tree
 * 
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
 * 
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 * 
 * Example 1:
 * Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
 * Output: 6
 * Explanation: The LCA of nodes 2 and 8 is 6.
 * 
 * Example 2:
 * Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
 * Output: 2
 * Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
 * 
 * Example 3:
 * Input: root = [2,1], p = 2, q = 1
 * Output: 2
 * 
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
Core Understanding:
    find the lowest node that both p and q share
    node can be the same as p or q
Devising a Plan:
    check if p and q are bigger, run recusive function with right node
    recursive function to the left if p and q are smaller than root
    else, common parent ancestry is found so return root

Coding it Out: Recursion
*/
const lowestCommonAncestor = function(root, p, q) {
    // if p and q smaller than node, traverse left
    if(root.val > p.val && root.val > q.val){
        return lowestCommonAncestor(this.left, p, q);
    }
    else if(root.val < p.val && root.val < q.val){
        return lowestCommonAncestor(this.right, p, q);
    }
    else {
        return root;
    }
};

/*
Core Understanding:
    find the lowest node that both p and q share
    node can be the same as p or q
Devising a Plan:
    while root is true,
        if p and q are less than root, this. left is new root
        if p and q are greater than root, this.right is new root
        else break
    return root

Coding it Out: Iterative S0lution
*/
const lowestCommonAncestor2 = function(root, p, q){
    while(root){
        if(root.val > p.val && root.val > q.val){
            root = root.left;
        }
        else if(root.val < p.val && root.val < q.val){
            root = root.right;
        }
        else{ break;
        }
    }
    return root;
}