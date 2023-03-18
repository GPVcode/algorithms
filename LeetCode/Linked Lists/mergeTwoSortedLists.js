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