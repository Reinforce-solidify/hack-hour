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
const B = new ListNode('B');
head.next = B;
const C = new ListNode('C');
B.next = C;
const D = new ListNode('D');
C.next = D;
const E = new ListNode('E');
D.next = E;
E.next = C;
console.log(head);

function findLoopStart(head) {
    // Add code here
    let slow = head;
    let fast = head;

    // Find the meeting point of the slow and fast pointers
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            break;
        }
    }

    // If there's no meeting point, there's no loop
    if (!fast || !fast.next) {
        return null;
    }

    // Reset the slow pointer to the head
    slow = head;
    console.log(fast)
    // Move both pointers one step at a time until they meet again
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    // Return the node at which they meet (start of the loop)
    return slow;

}

// Test the function
let loopStartNode = findLoopStart(head);
console.log(loopStartNode ? loopStartNode.value : "No loop");
