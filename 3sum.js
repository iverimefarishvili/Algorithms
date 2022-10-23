var threeSum = function(nums) {
    let answerList = [];
    let left = 0;
    let right = 1;
    
    let index = 0;
    
    
    var detectSum = function(list) {
        left = 0;
        right = list.length-1;
        while(left < right) {
            if(list[left] == list[left-1] && list[right] == list[right+1]){
                left++;
                right--;
            } else if((list[left] + list[right] + nums[index]) === 0) {
                answerList.push([nums[index],list[left],list[right]]);
                left++;
                right--;
            } else if((list[left] + list[right] + nums[index]) > 0) {
                right--;
            } else if((list[left] + list[right] + nums[index]) < 0) {
                left++;
            }
        }
        index++;
    }
    
    nums = nums.sort((a,b) => a-b);
    while(index < nums.length) {
        if(nums[index] !== nums[index -1]) {
            detectSum(nums.slice(index+1, nums.length));   
        } else {
            index++;
        }
    }
        
    return answerList;
};