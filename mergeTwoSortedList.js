var mergeTwoLists = function(list1, list2) {
    var answerList = new ListNode(null, null);
    var dummy = answerList;
    while(list1&&list2) {
        if(list1.val > list2.val) {
            dummy.next = list2;
            list2 = list2.next;
        } else {
            dummy.next = list1;
            list1 = list1.next;
        }
        dummy = dummy.next;
    }
    
    list1 && (dummy.next = list1);
    list2 && (dummy.next = list2);
    
    return answerList.next;
};