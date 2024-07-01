/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      counter++;
      nums.splice(i, 1);
      console.log(nums);
      i--;
    }
  }

  for (let j = 0; j < counter; j++) {
    nums.push(0);
  }
}

//Input: nums = [0,0,1]
//Output: [0,1,0]
