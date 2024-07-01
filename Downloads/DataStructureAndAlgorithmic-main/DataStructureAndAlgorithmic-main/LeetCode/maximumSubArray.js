const maxSubarraySum = (nums) => {
  if (nums.length === 0) {
    return "0";
  }

  if (nums.length === 1) {
    return nums[0];
  }

  //Divide the arry into two halves
  const mid = Math.floor(nums.length / 2);
  const leftHalf = nums.slice(0, mid);
  const rightHalf = nums.slice(mid);

  console.log(leftHalf, rightHalf);

  //Recurrsively find the maximum subarray sum for the left and right halves
  const maxSumLeft = maxSubarraySum(leftHalf);
  const maxSumRight = maxSubarraySum(rightHalf);

  //Find the maximum subarray sum that crosses the midpoint
  let maxCrossingSum = 0;
  let leftSum = -Infinity;
  let rightSum = -Infinity;

  //Find the maximum sum starting from the midpoint and moving left
  for (let i = mid - 1, sum = 0; i >= 0; i--) {
    sum += nums[i];
    leftSum = Math.max(leftSum, sum);
  }

  //Find the maximum sum starting from the midpoint and moving right
  for (let i = mid, sum = 0; i < nums.length; i++) {
    sum += nums[i];
    rightSum = Math.max(rightSum, sum);
  }

  //Combine the maximum subarray sums from the left, right, and crossing subarrays
  maxCrossingSum = leftSum + rightSum;

  //Return the maximum of the three sums

  return Math.max(maxSumLeft, maxSumRight, maxCrossingSum);
};

// Example usage:
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarraySum(nums)); // Output: 6 (the subarray [4,-1,2,1] has the largest sum)
