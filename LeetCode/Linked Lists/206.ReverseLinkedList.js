/*
 * 
 * [206. Reverse Linked List] - https://leetcode.com/problems/reverse-linked-list/
 * 
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
 * Example 1:
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 * 
 * Example 2:
 * Input: head = [1,2]
 * Output: [2,1]
 * 
 * Example 3:
 * Input: head = []
 * Output: []
 * 
 */

/*
Core Understanding:
    return the linked list reversed
Devising a Plan:
    somehow rearrange the pointers so that 5 points to 4 and so on until 1 points to null.
    set previous to null and current to head;
    loop while current is true
        set previous.next to variable next
        set previous to current.next
        set current to previous
        set next to current
    return previous
Coding it Out:
*/

const reverseList = function(head) {
    let previous = null, current = head;

    while(current){
        //temporary variable  
        let next = previous.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return prev
};



// ES6 version
const reverseList2 = function(head) {
    let first = null, second = head;

    while(second){
        [second.next, first, second] = [first, second, second.next]
    }
    return first
};


/*
// reverse a linked list

// Step 1: edge case - return null if list is null, return list if single value array

// Step 2: write up test cases
    // 1, 2, 3, 4, 5 should result in 5, 4, 3, 2, 1; middle value should remain the same

// const reversedLinkList = (head) => {
//     let prev = null;
//     let current = head;
//     while(current){
//         //perform operation
//         let next = current.next; // store reference to next variable
//         current.next = prev; // update current.next to what we need it to be
//         prev = current; // keep track of linked list we've built thus far 
//         current = next;
//     }
//     return prev;
// }

        SOME ANSWER:
    let prev = null;
    let current = head;
    while(current){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev

function reversedLinkedList(head){
    let prev = null;
    let current = head;
    
    while(current){
        const next = current.next;
        console.log("next current:", next)
        current.next = prev
        prev = current;
        current = next;
    }
    return prev
}

console.log("reverseLinkedList:", reversedLinkedList([1,2,3,4,5]))

// 1 -> 2 -> 3 -> 4 -> 5 -> null 
// null <- 1 <- 2 <- 3 <- 4 <- 5 x

*/