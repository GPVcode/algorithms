/**
 * 
 * [141. Linked List Cycle] - https://leetcode.com/problems/linked-list-cycle/
 * 
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 * 
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 * 
 * Example 1:
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
 * 
 * Example 2:
 * Input: head = [1,2], pos = 0
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
 * 
 * Example 3:
 * Input: head = [1], pos = -1
 * Output: false
 * Explanation: There is no cycle in the linked list.
 * 
 **/

/*
Core Understanding:
    Return true if linked list is in a cycle, otherwise return false;
Devising a Plan:
    Use two pointers. If the pointers are ever ont he same node, return true;
    if fast pointer breaks loop before loop returns true, return false.
Coding it Out:
*/
const hasCycle = function(head) {
    //create fast and slow pointers;
    let slow = head;          
    let fast = head;          

    while(slow){
        if(fast){
            fast = fast.next;
            if(fast){
                fast = fast.next;
            } else{
                break;
            }
        }
        if(fast === slow){
            return true;
        }
        //keep slow moving
        slow = slow.next;
    }
    return false
};
console.log("hasCycle:", hasCycle([3,2,0,-4], 1))


/*
Core Understanding:
    Return true if linked list is in a cycle, otherwise return false;
Devising a Plan:
    Use two pointers. If the pointers are ever ont he same node, return true;
    Move fast while fast and fast next are true;
    if fast pointer breaks loop before loop returns true, return false.
Coding it Out:
*/
const hasCycle2 = function(head) {
    // create fast pointer;
    let fast = head;          
    // iterate while curent and next fast are true
    while(fast && fast.next){
        // keep fast moving
        fast = fast.next.next;
        // keep head moving
        head = head.next;
        // if fast and head end up in the same node, our linked list is in a cycle!
        if(fast === head) return true;
    }
    return false
};