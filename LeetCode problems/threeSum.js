var threeSum = function (nums) {
  let zero = 0;
  const answer = [];
  if (nums.length < 3) return answer;

  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    //continue will break one iteration in the loop
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      if (sum === zero) {
        answer.push([nums[i], nums[j], nums[k]]);

        while (nums[j + 1] === nums[j]) j++;
        while (nums[k - 1] === nums[k]) k--;

        j++;
        k--;
      } else if (sum > zero) {
        k--;
      } else {
        j++;
      }
    }
  }
  return answer;
};
