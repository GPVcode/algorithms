/*
 * 
 * [Coding Exercise - Node Implementation] - https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/learn/quiz/4995318#learning-tools
 * Note: I recommend you watch the next two following videos as you implement this!
 * 1) Create a node class. 
 * 2) The constructor should accept an argument that gets assigned to the data property and initialize an empty array for storing children
 * 3) The node class should have methods add and remove
 * 
 */ 


class Node {
    constructor(data){
        this.data = data;
        this.children = [];
    }

    add(data){
        this.children.push(new Node(data));
    }

    remove(data){
        this.children = this.children.filter(node => {
            return node.data !== data;
        });
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    traverseBF(fn){
        const arr = [this.root]; // this is like this.head
        while(arr.length){
            const node = arr.shift(); // stores parent into node and takes parent data out of array
            arr.push(...node.children);
            fn(node);
        }
    }

    traverseDF(fn){
        const arr = [this.root]; // start arr with root
        while(arr.length){
            //take out first element from array and store into node
            const node = arr.shift();

            //push node's children to the front (unshift?)
            arr.unshift(...node.children)
            /*
            for(let child of node.children){
                arr.unshift(child)
            }
            */
            fn(node)
        }
    }

}

//Can you go straight to the node?