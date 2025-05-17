
function mergedArrayandRemoveDuplicates(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const mergedArray = mergedArrayandRemoveDuplicates(array1, array2);
console.log(mergedArray);