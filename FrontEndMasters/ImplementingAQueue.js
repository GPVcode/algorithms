class Queue{
    constructor(){
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(data){
        const node = new Node(data)
        this.length++;
        if(!this.tail){
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }

    dequeue(){
        if(!this.head){
            return undefined;
        }
        this.length--;

        // save head and update head
        const head = this.head;
        this.head = this.head.next;
        

        // free old head by setting its next to undefined
        head.next = undefined;

        return head.value
    }

    peek(){
        return this.head?.value;
    }
}