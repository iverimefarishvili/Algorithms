function determineMove(arr1, arr2) {
    let count = 0;
    let checkLength = (num) => {
        let result = [];
        while(num > 0) {
            result.push(num%10);
            num = Math.floor(num/10);
        }
    }
    for(let i =0; i< arr1.length; i++) {
        l1 = checkLength(arr1[i]);
        l2 = checkLength(arr2[i]);

        for(let j=0; j< l1.length; j++ ) {
            count += l1[j] - l2[j] < 0 ? (l1[j] - l2[j])*-1 : l1[j] - l2[j];
        }
    }
    return count;
}