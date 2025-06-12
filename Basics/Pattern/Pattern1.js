function reverseArray(arr) {
    let reversedfull = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedfull.push(arr[i])
    }
    return reversedfull;
}

const original = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(original);
console.log(reversedArray);

