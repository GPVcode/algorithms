/*
 * 
 * [Coding Exercise - Midpoint] - https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/learn/quiz/4996262#notes
 * 
 * Return the 'middle' node of a linked list.
 * If the list has an even number of elements return the node at the end of the first half of the list.
 * Do not use a counter variable.
 * Do not retrieve the size of the list.
 * Only iterate through the list one time.
 * 
 * Example:
 * 
 *   const l = new LinkedList();
 *   l.insertLast('a')
 *   l.insertLast('b')
 *   l.insertLast('c')
 *   midpoint(l); // returns { data: 'b' }
 * 
 */

/***
|||| Core Understanding:
||||     return middle, linked list. 
||||     if two are in middle, return the first half of two. 
||||     Don't use size, or counter variable.
|||| Devising a Plan:
||||    Use two pointers and while loop to check if fast.next.next is still truthy
||||        if not, slow must be at middle. Return this node.
||||  Coding it Out: Two-pointer
|||| 
***/

function midpoint(list) {

    //create slow and fast pointer;
    let slow = list.getHead();
    let fast = list.getHead();

    while(fast.next && fast.next.next){
        //if fast.next.next
        if(node.next.next){
            fast+=2;
            slow++;
            node = node.next;
        }
        return node;
    }
}

let l = new LinkedList();
l.insertLast('a')
l.insertLast('b')
l.insertLast('c')


console.log("midpoint:", midpoint(1));