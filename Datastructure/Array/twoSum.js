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

// Optimized version using hash map - O(n) time complexity
function twoSumOptimized(arr, target) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(arr[i], i);
  }

  return [];
}

const originalArray = [2, 8, 11, 15];
const target = 9;
const twoSumAns = twoSumfn(originalArray, target);
console.log("Brute force result:", twoSumAns); // [0, 1]

const optimizedAns = twoSumOptimized(originalArray, target);
console.log("Optimized result:", optimizedAns); // [0, 1]

const testArray = [1, 2, 3, 4, 5, 5, 6];
const testTarget = 10;
console.log("Test with duplicates:", twoSumOptimized(testArray, testTarget)); // [4, 5] or [5, 4]



