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