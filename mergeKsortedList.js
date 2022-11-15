var mergeKLists = function(lists) {
    var answerList;
    
    var list = [];
    
    for(let i = 0; i< lists.length; i++) {
        while(lists[i]) {
            list.push(lists[i].val);
            lists[i] = lists[i].next;
        }
    }
    
    list = list.sort((a,b) => b-a);
    
    for(var i =0; i< list.length; i++) {
        answerList = new ListNode(list[i], answerList);
    }
    
    if(list.length ==0) {
        return new ListNode().next;
    }
    
    return answerList;
};