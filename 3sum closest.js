var threeSumClosest = function(nums, target) {
    let left = 0;
    let right = nums.length;
    
    let min = nums[0] + nums[1] + nums[nums.length-1];
    nums = nums.sort((a,b) => a-b);
    
    for(let i = 0; i < nums.length-2; i++) {
        left = i+1;
        right = nums.length-1;
        
        while(left < right) {
            
            let sum = nums[i] + nums[left] + nums[right];
            
            if(sum > target) {
                right--;
            } else {
                left++;
            } 
            
            Math.abs(sum- target) < Math.abs(min- target) ? min = sum : '';
        }  
    }
    return min;
};