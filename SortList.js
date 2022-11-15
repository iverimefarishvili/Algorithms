var sortList = function(head) {
    var list = [];
    while(head) {
        list.push(head.val);
        head = head.next;
    }
    list = list.sort((a,b) => b-a);
    
    var answerList;
 
    for(var i =0; i< list.length; i++) {
        answerList = new ListNode(list[i], answerList);
    }
    
    if(list.length == 0) {
        return new ListNode().next;
    }
    return answerList;
};