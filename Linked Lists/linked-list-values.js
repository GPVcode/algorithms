class Node {
    constructor(val){
        this.val = val;
        this.next = null;

    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

// A -> B -> C -> D -> NULL
//log current value while until head equals null
/*
const printLinkedList = (head) => {
    let current = head;
    while(current != null){
        console.log(current.value)
        current = current.next;
    }
};
*/
//log current value until head equals null using recursion
/*
const printLinkedList = (head) => {
    if(head == null) return;
    console.log(head.val);
    printLinkedList(head.next)
}

printLinkedList(a);
*/

//Log Linked List Values
function linkedListValues(head){
    let values = [];
    let current = head;
    while( current !== null ){
        values.push(current.val);
        current = current.next;
    }
    return values;
}

//Linked List values recursively
const linkedListValues = (head) => {
    let values = [];
    fillValues(head, values);
    return values;
};

const fillValues = (head, values) => {
    if (head == null) return;
    values.push(head.val);
    fillValues(head.next, values);
};

