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



//Merge two sorted linked lists and return it as a new sorted list. New list should be made by splicing together the nodes of the first two lists.

/*
Constraints: 
- The number of nodes in both lists is in the range [0, 50]
- -100 <= Node.val <= 100
- Both l1 and l2 are sorted in non-decresing order.
*/

/*
Edge cases: 
- 2 empty lists merged should output one empty list.
- 1 empty list and one list with one value should outpust a list of just one value.
*/

// function mergeTwoSortedListsl(l1, l2){
//     //Check is any of the list is empty
//     if(!l1){
//         return l2;
//     }
//     if(!l2){
//         return l1;
//     }
//     //determine head of new linked list. Head will be the smaller list of the two
//     let head = null;
//     //reference of head - null at this point
//     let temp = head;

//     if(l1.val < l2.val){
//         temp = head = new List
//     }
//     //Loop through each node of the list until one of the lists gets traversed completely
//     //While traversing the lists, id the smaller of the nodes of the lists and add it tot he results list.
//     //When loop is done, if there is a list with nodes remaining, we will add those remaiing nodes to the resultant list
//     if()
// }


function mergeTwoLinkedLists(l1, l2){
    const curr = new ListNode();
    const dummy  = curr;

    while(l1 && l2){
        if(l1.val < l2.val){
            curr.next = l1
            l1 = l1.next;
        }else{
            curr.next = l2
            l2 = l2.next;
        }
        curr = curr.next
    }

    if(l1){
        curr.next = l1;
    }
    if(l2){
        curr.next = l2;
    }
    return dummy.next;
}