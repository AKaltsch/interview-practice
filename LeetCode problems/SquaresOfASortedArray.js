
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

var sortedSquares = function(nums) {
    let left = 0
    let right = nums.length - 1;
    count = nums.length - 1
    const answer = []
    
    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            answer[count--] = nums[left]**2;
            left++;
        } else {
            answer[count--] = nums[right]**2;
            right--;
        }
    }
    return answer
};

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].