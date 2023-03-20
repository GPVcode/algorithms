class Node {
    constructor (data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }   

    insertFirst(data){
        // Create a new node. We will insert this node. Pass in our data and this.head as its "next".
        const node = new Node(data, this.head);
        // Update this.head's reference
        this.head = node; 
        // Refactored: this.head = new Node(data, this.head);
    }

    size(){
        let counter = 0;
        let node = this.head;
        // if this.head does not exists, this while loop will not run!
        while(node){ 
            counter++;
            // look at the next property! This will tell us if while loop should continue.
            node = node.next;
        }
        return counter
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        // base case
        if(!this.head) return null;
        // establish the first node
        let node = this.head
        
        // loop while node is true
        while(node){
            // test for proving last node.
            if(!node.next) return node;
            // make sure to update node to next if above test is not triggered.
            node = node.next
        }
    }

    clear(){
        //sever the snake by the head;
        this.head = null;
    }

    // set head to second node.
    removeFirst(){
        let node = this.head
        this.head = node.next;
    }

    removeLast(){
        // base case
        if(!this.head) return;

        // takes care of 1 linked list instances.
        if(!this.head.next){
            this.head = null;
            return null;
        }
        // pointers 1 & 2;
        let previous = this.head;
        let node = this.head.next;

        // as long as next is true.
        while(node.next){
            // keep pointers 1 & 2 moving.
            previous = node;
            node = node.next;
        }

        // crush last node.
        previous.next = null;
    }

    insertLast(data){
        // retrieve the last node.
        let lastNode = this.getLast();

        // if there is a last node, this last node's next equals new Node with incoming data.
        if(lastNode){
            lastNode.next = new Node(data);
        }
        // otherwise, there isn't a last node, and we can set this new Node containing incoming data as our head.
        else{
            this.head = new Node(data);
        }
    }

    // get node at index
    getAt(n){
        // establish head
        let node = this.head;
        // keep track of index
        let counter = 0;
        
        while(node){
            // find note matching n
            if(index === n) return node;
            // update index 
            counter++;
            // keep node moving;
            node = node.next;
        }
        return null;
    }
}

const nodeOne = new Node(5);
const list = new LinkedList();
list.head = nodeOne;
list.insertFirst(15);
list.insertLast(05);
list.getAt(2);

console.log("list:", list)

