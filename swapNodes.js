var swapPairs = function(head) {
    let dummy = new ListNode(0, head);
    let prev = dummy;
    let curr = head;
    
    while (curr && curr.next) {
        let next = curr.next.next;
        let second = curr.next;
        
        second.next = curr;
        curr.next = next;
        prev.next = second;
        
        prev = curr;
        curr = next;
    }
    return dummy.next;
};