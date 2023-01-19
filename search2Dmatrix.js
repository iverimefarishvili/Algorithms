var searchMatrix = function(matrix, target) {
    let list = [];
    let answer = false;
    for (let i =0; i < matrix.length; i++) {
        if(matrix[i][0] == target || matrix[i][matrix[i].length-1] == target) {
            answer = true;
            break;
        }    

        if(matrix[i][0] < target && matrix[i][matrix[i].length-1] > target) {
            list = matrix[i];
            break;
        }
    }
    for (let i =0; i < list.length; i++) {
        if(list[i] == target) {
            answer = true;
            break;
        }
    }

    return answer;
};