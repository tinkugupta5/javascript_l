
function getArrayIntersection(arr1, arr2) {
    return arr1.filter((item) => arr2.includes(item));
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const intersection = getArrayIntersection(array1, array2);

