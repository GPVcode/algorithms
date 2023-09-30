/* 
 * 
 * [21. Merge Two Sorted Lists] - https://leetcode.com/problems/merge-two-sorted-lists/
 * 
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list. 
 * 
 * Example 1:
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 * 
 * Example 2:
 * Input: list1 = [], list2 = []
 * Output: []
 * 
 * Example 3:
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 * 
 */

/*
Core Understanding:
    Create a new sorted linked list from the two given linked lists
Devising a Plan:
    compare the first node of each list. Add the node to new array. 
        Do this until one array runs out
Coding it Out:
*/
const mergeTwoLists = function(list1, list2) {      // list1 = [1,2,4] list2 = [1,3,4]
    const dummy = new ListNode();
                                                    // dummy = [0, 1, 1, 2, 3, 4, 4]
    let curr = dummy;                               // curr.next = [1, 3, 4]

    while(list1 && list2){
        if(list1.val < list2.val){
            curr.next = list1;  
            list1 = list1.next; //  list1 = [4]
        }
        else{
            curr.next = list2;   
            list2 = list2.next;  // list2 = [4]
        }
        curr = curr.next       // curr = [ 3, 4]
    }

    if(list1){
        curr.next = list1;
    }
    if(list2){
        curr.next = list2;
    }
    return dummy.next
};



/*
Core Understanding:
    merge the two already sorted list into one sorted linked list
Devising a Plan:
    create a linked list
    while list 1 and 2 are true, check to see which value is greater between list1 and list 2
        if coniditons
    don't forget to keep node moving;
    take care of list with remaining nodes after looping ends

    return dummy.next to return sorted merged linked list

Coding it Out:
*/
const mergeTwoLists2 = function(list1, list2) {   
    // create linked list
    let node = new ListNode();  // node = [0, 1, 1, 2, 3, 4, 4]  
    let dummy = node;

    while(list1 && list2){
        // check for lower value
        if(list1.val < list2.val){
            node.next = list1;
            list1 = list1.next; 
        }
        else{
            node.next = list2;
            list2 = list2.next;
        }
        //keep node moving
        node = node.next
    }

    if(list1){
        node.next = list1
    }
    if(list2){
        node.next = list2
    }
    return dummy.next;
}