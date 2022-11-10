function add(a, b) {
  
    let lengthA = a.length;
    let lengthB = b.length;
    
    let remain = 0;
    
    let answer = [];
    for(let i = 1; i<= Math.max(lengthA, lengthB); i++) {
      let sum = parseInt(a.charAt(lengthA - i) ? a.charAt(lengthA - i) : 0) + parseInt(b.charAt(lengthB-i) ? b.charAt(lengthB-i) : 0) + remain;
      
      answer.unshift(sum%10);
      remain = (sum - sum%10)/10;
      if(i == Math.max(lengthA, lengthB) && remain >0) answer.unshift(remain);    
    }
    return answer.join('');
}