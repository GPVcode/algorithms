/*
 * [876. Middle of the Linked List] - https://leetcode.com/problems/middle-of-the-linked-list/
 * 
 * Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
 * 
 * Example 1:
 * Input: head = [1,2,3,4,5]
 * Output: [3,4,5]
 * Explanation: The middle node of the list is node 3.
 * 
 * Example 2:
 * Input: head = [1,2,3,4,5,6]
 * Output: [4,5,6]
 * Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 */

/**
Core Understaning:
    find the middle of linked list and return the list from that node onward. Return first half of middle if list is even numbered.
Devising a Plan:
    use two pointers, slwo and fast, starting at the head.
    use while loops to iterate.
        move fast and slow variables accordingly
    return slow
Coding it Out:
 **/

const middleNode = function(head) {
    //create fast and slow pointers
    let slow = head;
    let fast = head;
    //while head
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};

//Ask teddy hwo to test linked list
console.log("middleNode:", middleNode(head));

/*
Core Understanding:
    output list from the middle
Devising a Plan:
    start with two pointers at head
    while loop is true
        check status of fast as they move
        move slow
    return slow
Coding it Out:

*/
const middleNode2 = function(head) {
    //create fast and slow pointers
    let slow = head;
    let fast = head;

    //while head
    while(fast){
        fast = fast.next;
        if(fast){
            fast = fast.next;
        } else{
            break;
        }
        slow = slow.next;
    }
    return slow;
};


/*
Core Understanding:
    output list from the middle
Devising a Plan:
    start with two pointers at head
    while loop is true
        check status of fast as they move
        move slow
    return slow
Coding it Out:

*/
const middleNode3 = function(head) {
    //create fast and slow pointers
    let slow = head;
    let fast = head;

    //while head
    while(fast !== null){
        fast = fast.next;
        if(fast === null) break;
        else fast = fast.next;
        
        slow = slow.next;
    }
    return slow;
};