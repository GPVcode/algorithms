class Queue{
    constructor(){
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(data){
        this.length++;
        const node = new Node(data)
        this.length++;
        if(!this.tail){
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }

    // You're up buddy!
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

        if(this.length === 0){
            this.tail = undefined;
        }
        
        return head.value
    }

    peek(){
        return this.head?.value;
    }
}