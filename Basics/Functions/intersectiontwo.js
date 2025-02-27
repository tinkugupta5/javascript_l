function findIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    console.log(set1);

    const set2 = new Set(arr2);
    console.log(set2);

    return [...set1].filter(value => set2.has(value));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const result = findIntersection(array1, array2);
console.log(result); 
// Output: [4, 5]
