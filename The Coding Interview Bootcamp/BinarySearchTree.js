/*
 * 
 * Coding Exercise - Binary Search Tree
 * Note: I recommend you watch the following four videos as you implement this!
 * 
 * Implement the Node class to create a binary search tree.  The constructor should initialize values 'data', 'left', and 'right'.
 * Implement the 'insert' method for the Node class.  Insert should accept an argument 'data', then create an insert a new node at the appropriate location in the tree.
 * Implement the 'contains' method for the Node class.  Contains should accept a 'data' argument and return the Node in the tree with the same value.
 * 
 */

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data){
        if(data < this.data && this.left){
            // insert data if this.left exists
            this.left.insert(data);  
        } 
        else if(data < this.data){
            // set new node with new data to this.left if this.left doesn't exists
            this.left = new Node(data); 
        } // if data is greater than this.data and right
        else if(data > this.data && this.right){
            // insert this data to the right node exists
            this.right.insert(data); 
        } 
        else if(data > this.data){ 
            // create new node to the right is this.right is null;
            this.right = new Node(data);
        }
    }

    constains(data){
        if(this.data === data){
            return this;
        }

        if(this.data < data && this.right){
            return this.right.contains(data);          
        }
        else if(this.data > data && this.left){
            return this.left.contains(data);
        }

        return null;
    }
}

// Retrieved this after lesson.
// contains(data){
//     //check if data is already at the top 
//     if(data === this.data){
//         return this;
//     }
    
//     //check if greater and if left exists
//     if(data < this.data && this.left){
//         return this.left.contains(data);
//     }
//     //check if less than
//     else if(data > this.data && this.right){
//         return this.right.contains(data);
//     }
    
//     return null;
// }








// find number in array using recursion

function FindNum(data, target){
    console.log(data)
    if(data === target){
        return 8;
    } 

    FindNum(data+1, 8)
}

console.log("FindNum:", FindNum(1, 8))
