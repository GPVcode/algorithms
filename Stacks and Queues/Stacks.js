//What is a stack -- abstract data collections. LIFO


/* This following is a stack implementation of LINKED LISTS */
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedListStack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
        return this.top;
    }
    push(value){
        const newNode = new Node(value);
        if (this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        } else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this; //returns linked list
    }
    pop(){
        if(!this.top){
            return null;
        }
        if(this.top === this.bottom){
            this.bottom = null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next; //set top to equal null
        this.length--; //decrease list length
        return this //return linked list.
    }

}


const myLinkedListStack = new LinkedListStack();
console.log("add value to list:", myLinkedListStack.push('google'))
console.log("add another value to list:", myLinkedListStack.push('udemy'))
console.log("add one more value to list:", myLinkedListStack.push('discord'))
console.log("what's at the top of my stack? Answer:", myLinkedListStack.peek())
console.log("delete top", myLinkedListStack.pop())


/*The following is a stack implementation of arrays */
class ArrayStack {
    constructor(){
        this.array = [];
    }
    peek(){
        return this.array[this.array.length - 1];
    }
    push(value){
        this.array.push(value);
        return this;
    }
    pop(){
        this.array.pop();
        return this;
    }
}

const myArrayStack = new ArrayStack();
console.log("add value to list:", myArrayStack.push('google'))
console.log("add another value to list:", myArrayStack.push('udemy'))
console.log("add one more value to list:", myArrayStack.push('discord'))
console.log("what's at the top of my stack? Answer:", myArrayStack.peek())
console.log("delete top", myArrayStack.pop())


