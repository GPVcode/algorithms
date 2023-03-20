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
        // const node = new Node(data, this.head);
        // Update this.head's reference
        // this.head = node; 
        // Refactored: this.head = new Node(data, this.head);
        this.insertAt(data, 0);
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
        // return this.head;
        return this.getAt(0)
    }

    getLast(){
        // base case
        // if(!this.head) return null;
        // establish the first node
        // let node = this.head
        
        // loop while node is true
        // while(node){
            // test for proving last node.
            // if(!node.next) return node;
            // make sure to update node to next if above test is not triggered.
            // node = node.next
        // }
        return this.getAt(this.size() - 1);
    }

    clear(){
        //sever the snake by the head;
        this.head = null;
    }

    // set head to second node.
    removeFirst(){
        // let node = this.head
        // this.head = node.next;
        this.removeAt(0);
    }

    removeLast(){
        // base case
        // if(!this.head) return;

        // takes care of 1 linked list instances
        // if(!this.head.next){
            // this.head = null;
            // return null;
        // }
        // pointers 1 & 2;
        // let previous = this.head;
        // let node = this.head.next;

        // as long as next is true
        // while(node.next){
            // keep pointers 1 & 2 moving
            // previous = node;
            // node = node.next;
        // }

        // crush last node
        // previous.next = null;
        this.removeAt(this.size() - 1);
    }

    insertLast(data){
        let lastNode = this.getLast();

        if(lastNode){
            lastNode.next = new Node(data);
        }
        else{
            this.head = new Node(data);
        }
    }
    
    // get node at index
    getAt(index){
    // keep track of index
        let counter = 0;
    // establish head
        let node = this.head;
        
        while(node){
        // find note matching n
            if(counter === index) return node;
            counter++;
        // keep node moving;
            node = node.next;
        }
        return null;
    }
    
    removeAt(index){
        if(!this.head) return;
        
    // remove first element;
        if(index === 0){
            this.head = this.head.next;
            return;
        }

        let previous = this.getAt(index - 1)
        if(!previous.next) return;
        previous.next = previous.next.next;
        
    }
    
    insertAt(data, index){
    // if not this.head, node is at index 0
        if(!this.head){
            this.head = new Node(data);
            return;
        }
    // if index is 0, set node.next this head and change this.head to node
        if(index === 0){
            this.head = new Node(data, this.head);
            return;
        }
        
    // if get at runs falsy value, set previous to last value;
        let previous = this.getAt(index - 1) || this.getLast();
        let node = new Node(data, previous.next)
        previous.next = node;

    }

    forEach(fn){
        let node = this.head;
        let counter = 0;
        while(node){
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator](){
        let node = this.head;
        while(node){
            yield node;
            node = node.next;
        }
    }
}
