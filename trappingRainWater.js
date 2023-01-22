var trap = function(height) {
    let leftMax = 0;
    let rightMax = 0;
    let left = 0;
    let right = height.length - 1;

    let count = 0;

    while(left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);

        if(leftMax<rightMax) {
            count+= leftMax - height[left];
            left++;
        } else {
            count+= rightMax - height[right];
            right--;
        }
    }
    return count;
};