function findBeforeMatrix(after) {
    for(let i = after.length-1; i >=0; i--) {
        for(let j=after[i].length; j>=0; j++) {
            if(i-1 >=0 && j-1>=0) {
                after[i][j] = after [i][j] - after[i-1][j] - after[i][j-1] + after[i-1][j-1];
            } else if(i-1>=0 && j-1 < 0) {
                after[i][j] -= after [i-1][j];
            } else if(i-1<0 && j-1>=0) {
                after[i][j] -= after[i][j-1];
            }
        }
    }
    return after;
}