function twoSumfn(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}


const originalArray = [2,8,11,15];
const target = 9;
const twoSumAns = twoSumfn(originalArray,target)
const originalArraydata  = [1,2,3,4,5,5,6];



