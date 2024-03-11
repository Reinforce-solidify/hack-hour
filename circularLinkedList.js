// "Given a circular linked list, implement an algorithm which returns the node at the beginning of a loop.
// Example: A -> B -> C -> D -> E -> C    (answer is C)"

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
// Create a circular linked list A -> B -> C -> D -> E -> C
let head = new ListNode('A');
head.next = new ListNode('B');
head.next.next = new ListNode('C');
head.next.next.next = new ListNode('D');
head.next.next.next.next = new ListNode('E');
head.next.next.next.next.next = head.next.next; // Create loop here

function findLoopStart(head) {
    // Add code here
}



// Test the function
let loopStartNode = findLoopStart(head);
console.log(loopStartNode ? loopStartNode.value : "No loop");
