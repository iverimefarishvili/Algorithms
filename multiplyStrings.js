var multiply = function(num1, num2) {
    if([num1, num2].includes('0')) return '0';
    
    var [len1, len2] = [num1.length, num2.length];
    
    var nums = Array(len1 + len2).fill(0);

    for (let i = len1 - 1; i >= 0; i--) {

        for (let j = len2 - 1; j >= 0; j--) {
            const p1=i+j, p2=i+j+1;
            let sum = nums[p2] + Number(num1[i]) * Number(num2[j]);
            nums[p2] = sum%10;
            nums[p1] += Math.floor(sum/10);
        }
    }
    
    return nums.join('').replace(/^0+/, '');
};