var generateParenthesis = function(n) {
    let answerList = []

    let rec = (str, open, close) =>{
        if(open > n || close >n || close >open) return;
        if(str.length == n *2 && open ==close){
            answerList.push(str)
            return;
        }
        rec(str +'(',open+1,close)
        rec(str + ')', open, close+1)
    }

    rec('',0,0)
    return answerList;
};