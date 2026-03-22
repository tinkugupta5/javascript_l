function mergeSortedArrays(arr1, arr2) {
    return arr1.concat(arr2).sort((a, b) => a - b);
}

const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(array1, array2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]