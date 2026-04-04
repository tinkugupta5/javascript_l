function twoSumfn(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

const originalArray = [2, 8, 11, 15];
const target = 18;
const twoSumAns = twoSumfn(originalArray, target);
console.log("Brute force result:", twoSumAns); 
