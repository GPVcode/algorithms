/*
 * 
 * [Coding Exercise - From Last]
 * 
 * Given a linked list and integer n, return the element n spaces from the last node in the list. 
 * Do not call the 'size' method of the linked list
 * Assume that n will always be less than the length of the list.
 * 
 * Example:
 *    const list = new LinkedList();
 *    list.insertLast('a');
 *    list.insertLast('b');
 *    list.insertLast('c');
 *    list.insertLast('d');
 *    fromLast(list, 2).data // 'b'
 * 
 */

/*
Core Understanding:
    return the node that is n nodes away from tail
Devising a Plan:
    create fast and slow pointers
    loop fast until at nth spot
    use another loop to move fast and slow until fastis falsy
    return slow
Codiing it Out:
*/

function fromLast(list, n) {  // n = 3;
    // slow and fast pointers
    let slow = list.getFirst();
    let fast = list.getFirst(); //fast = node index 3

    let index = 0; // 3 < 3 see line 33
    while(index < n){
        fast = fast.next;
        index++;
    }
    while(fast && fast.next){ 
        fast = fast.next;
        slow = slow.next;
    }
    return slow
}


/*
Core Understanding:
    return the node that is n nodes away from tail
Devising a Plan:
    create fast and slow pointers
    loop fast until at nth spot
    use another loop to move fast and slow until fastis falsy
    return slow
Codiing it Out:
*/

function fromLast2(list, n) {  // n = 3;
    // slow and fast pointers
    let slow = list.getFirst();
    let fast = list.getFirst(); //fast = node index 3

    // guide fast using decrement
    while(0 < n){
        fast = fast.next;
        n--;
    }

    while(fast.next){ 
        fast = fast.next;
        slow = slow.next;
    }
    return slow
}
