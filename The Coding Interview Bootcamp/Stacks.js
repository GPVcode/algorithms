/*
 * Coding Exercise - Implementing Stacks
 * Create a stack data structure. 
 * 
 * The stack should be a class with methods push, pop, and peek
 * Adding an element to the stack should store it until it is removed.
 * 
 * Example
 * const s = new Stack();
 * s.push(1);
 * s.push(2);
 * s.pop(); // returns 2
 * s.pop(); // returns 1
*/
class Stack {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.push(record);
    }

    remove() {
        return this.data.pop();
    }
}