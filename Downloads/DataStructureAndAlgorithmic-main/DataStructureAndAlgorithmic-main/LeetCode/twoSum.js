//Input: nums = [2,7,11,15], target = 9
//Output: [0,1]
//x+y = target

function twoSum(nums: number[], target: number): number[] {
    
    const map = new Map();
       
    for (let i=0; i<nums.length; i++){
        const currentNum = nums[i];
        const compNum = target - currentNum; 
        if (map.has(compNum)) {
            return [i,map.get(compNum)]
        }
        map.set(currentNum, i)
    }

};