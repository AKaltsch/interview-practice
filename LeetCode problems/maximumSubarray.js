// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

var maxSubArray = function(nums) {
    let max = nums[0];
    let tempSum = nums[0];
    
    if (nums.length === 1) return max
    
    for (let i = 1; i < nums.length; i++) {
        tempSum = Math.max(tempSum + nums[i], nums[i])
        max = Math.max(tempSum, max)
        console.log(tempSum)
    }
    
    return max
    
};

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6