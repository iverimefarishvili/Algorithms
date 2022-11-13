var spiralOrder = function(matrix) {
    var left = 0;
    var right = matrix[0].length-1;
    var top = 0;
    var bottom = matrix.length-1;
    
    var answerList = [];
    
    while(left <= right && top <= bottom) {
        for(let i =left; i<=right; i++) {
            answerList.push(matrix[top][i]);
        }
        top++;
        
        for(let i =top; i<=bottom; i++) {
            answerList.push(matrix[i][right]);
            
        }
        right--;
        
        if(!(left <= right && top <= bottom)) {
            break;
        }
        
        for(let i =right; i>=left; i--) {
            answerList.push(matrix[bottom][i]);
        }
        bottom--;
    
        for(let i =bottom; i>=top; i--) {
            answerList.push(matrix[i][left]);
        }
        left++;
    }
    return answerList;
};