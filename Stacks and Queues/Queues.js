//Queue - first in first out

/* The following is a Queue implementation */

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek(){
        return this.first;
    }
    enqueue(value){
        const newNode = new Node(value);
        if (this.length === 0){
            this.first = newNode;
            this.last = newNode;
        } else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this; //returns linked list
    }
    dequeue(){
        if(!this.first){
            return null;
        }
        if(this.first === this.last){
            this.bottom = null;
        }
        let holder = this.first;
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

const myQueue = new Queue();
console.log("who's first in queue? Answer:", myQueue.peek())
console.log("add to queue1:", myQueue.enqueue('Joy'))
console.log("add to queue2:", myQueue.enqueue('Jimmy'))
console.log("add to queue3:", myQueue.enqueue('Esmerelda'))
console.log("who's first in queue? Answer:", myQueue.peek())
console.log("delete first", myQueue.dequeue())
