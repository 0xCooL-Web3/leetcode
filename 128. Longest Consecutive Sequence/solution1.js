/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length==0) return 0;
    
    nums = [...new Set(nums)];
    nums.sort((a,b)=>a-b);
    let tmp = nums[0];
    let cur = 1;
    let max = 0;
    
    for(let i=0; i<nums.length-1; i++){
        if(tmp+1==nums[i+1]){
            tmp = nums[i+1];
            cur++;
        }
        else{
            if(cur>max)
                max = cur;
            cur = 1;
            tmp = nums[i+1];
        }
    }
    
    return cur>max?cur:max;
};