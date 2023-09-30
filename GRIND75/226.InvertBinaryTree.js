/*
 * 
 * [226. Invert Binary Tree] - https://leetcode.com/problems/invert-binary-tree/
 * 
 * 
 * Given the root of a binary tree, invert the tree, and return its root.
 * 
 * Example 1:
 * Input: root = [4,2,7,1,3,6,9]
 * Output: [4,7,2,9,6,3,1]
 * 
 * Example 2:
 * Input: root = [2,1,3]
 * Output: [2,3,1]
 * Example 3:
 * 
 * Input: root = []
 * Output: []
 * 
 */

/*
Coding it Out: BFS
*/
const invertTree = function(root) {
    // start at root;
    const queue = [root];

    // iterate while queue is true
    while(queue.length){
        const node = queue.shift();
        if(node !== null){
            [node.left, node.right] = [node.right, node.left];
            queue.push(node.left, node.right);
        }
    }
    return root
}

// console.log("invertTree:", invertTree([4,2,7,1,3,6,9]));

// Coding it Out: DFS
const invertTree2 = function(root) { // root []
    // start at root;
    const stack = [root]; // root = [4,2,7,1,3,6,9]

    // iterate while queue is true
    while(stack.length){
        const node = stack.pop();
        if(node !== null){
            [node.left, node.right] = [node.right, node.left];
            stack.push(node.left, node.right);
        }
    }
    return root
}

// console.log("invertTree2:", invertTree2([4,2,7,1,3,6,9]));


// Coding it Out: Recursion
const invertTree3 = function(root) { 
    if(root == null) return root;
    [root.left, root.right] = [invertTree3(root.right), invertTree3(root.left)];

    return root;
}

console.log("invertTree3:", invertTree3([4,2,7,1,3,6,9]));